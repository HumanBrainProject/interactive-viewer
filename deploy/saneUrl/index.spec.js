const sinon = require('sinon')
const cookie = require('cookie')

const userStore = require('../user/store')

class StubStore {
  async set(key, val) {

  }
  async get(key) {

  }
}

class StubNotFoundError extends Error{}

const savedUserDataPayload = {
  otherData: 'not relevant data',
  savedCustomLinks: [
    '111222',
    '333444'
  ]
}

const readUserDataStub = sinon
  .stub(userStore, 'readUserData')
  .returns(Promise.resolve(savedUserDataPayload))

const saveUserDataStub = sinon
  .stub(userStore, 'saveUserData')
  .returns(Promise.resolve())

const express = require('express')
const got = require('got')
const { expect } = require('chai')

describe('> saneUrl/index.js', () => {

  let getTokenStub, app, user, server, setStub, getStub
  const payload = {
    ver: '0.0.1',
    queryString: 'test_test'
  }

  const name = `nameme`

  after(() => {

    server.close()
    setStub && setStub.restore()

    delete require.cache[require.resolve('../lruStore')]
    delete require.cache[require.resolve('./store')]
  })

  before(() => {
    getStub = sinon.stub(StubStore.prototype, 'get')
    setStub = sinon.stub(StubStore.prototype, 'set')
    require.cache[require.resolve('../lruStore')] = {
      exports: {
        redisURL: null
      }
    }

    require.cache[require.resolve('./store')] = {
      exports: {
        Store: StubStore,
        NotFoundError: StubNotFoundError
      }
    }

    app = express()

    const router = require('./index')
    app.use('', (req, res, next) => {
      req.user = user
      next()
    }, router)

    server = app.listen(50000)
  })

  after(() => {
    getTokenStub && getTokenStub.restore()
  })

  afterEach(() => {
    setStub.resetHistory()
    getStub.resetHistory()
  })

  describe('> router', () => {
    
    it('> works', async () => {
      const body = {
        ...payload
      }
      getStub.returns(Promise.resolve(JSON.stringify(body)))
      const { body: respBody } = await got(`http://localhost:50000/${name}`)

      expect(getStub.calledWith(name)).to.be.true
      expect(respBody).to.equal(JSON.stringify(body))
    })

    it('> get on expired returns 404', async () => {
      const body = {
        ...payload,
        expiry: Date.now() - 1e3 * 60
      }
      getStub.returns(Promise.resolve(JSON.stringify(body)))
        
      const { statusCode } = await got(`http://localhost:50000/${name}`, {
        throwHttpErrors: false
      })
      expect(statusCode).to.equal(404)
      expect(getStub.calledWith(name)).to.be.true
    })

    it('> get on expired with txt html header sets cookie and redirect', async () => {

      const body = {
        ...payload,
        expiry: Date.now() - 1e3 * 60
      }
      getStub.returns(Promise.resolve(JSON.stringify(body)))
        
      const { statusCode, headers } = await got(`http://localhost:50000/${name}`, {
        headers: {
          'accept': 'text/html'
        },
        followRedirect: false
      })
      expect(statusCode).to.be.greaterThan(300)
      expect(statusCode).to.be.lessThan(303)

      expect(getStub.calledWith(name)).to.be.true

      const c = cookie.parse(...headers['set-cookie'])
      expect(!!c['iav-error']).to.be.true
    })

    describe('> set', () => {

      it('> checks if the name is available', async () => {

        getStub.returns(Promise.reject(new StubNotFoundError()))

        await got(`http://localhost:50000/${name}`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
  
        const [ storedName, _ ] = setStub.args[0]
  
        expect(storedName).to.equal(name)
        expect(getStub.called).to.be.true
        expect(setStub.called).to.be.true
      })


      it('> if file exist, will return 409 conflict', async () => {

        getStub.returns(Promise.resolve('{}'))

        const { statusCode } = await got(`http://localhost:50000/${name}`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(payload),
          throwHttpErrors: false
        })
  
        expect(statusCode).to.equal(409)
        expect(getStub.called).to.be.true
        expect(setStub.called).to.be.false

      })

      it('> if other error, will return 500', async () => {
        
        getStub.returns(Promise.reject(new Error(`other errors`)))

        const { statusCode } = await got(`http://localhost:50000/${name}`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(payload),
          throwHttpErrors: false
        })
  
        expect(statusCode).to.equal(500)
        expect(getStub.called).to.be.true
        expect(setStub.called).to.be.false
      })

      describe('> set with unauthenticated user', () => {
        
        before(() => {
          getStub.returns(Promise.reject(new StubNotFoundError()))
        })
        
        it('> set with anonymous user has user undefined and expiry as defined', async () => {
  
          await got(`http://localhost:50000/${name}`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
    
          expect(setStub.called).to.be.true
          const [ _, storedContent] = setStub.args[0]
          const { userId, expiry } = JSON.parse(storedContent)
          expect(!!userId).to.be.false
          expect(!!expiry).to.be.true
    
          // there will be some discrepencies, but the server lag should not exceed 5 seconds
          expect( 1e3 * 60 * 60 * 72 - expiry + Date.now() ).to.be.lessThan(1e3 * 5)
        })  
      })
  
      describe('> set with authenticated user', () => {
        
        before(() => {
          getStub.returns(Promise.reject(new StubNotFoundError()))
        })
        
        before(() => {
          user = {
            id: 'test/1',
            name: 'hello world'
          }
        })
  
        afterEach(() => {
          readUserDataStub.resetHistory()
          saveUserDataStub.resetHistory()
        })
  
        after(() => {
          user = null
          readUserDataStub.restore()
          saveUserDataStub.restore()
        })
  
        it('> userId set, expiry unset', async () => {
  
          await got(`http://localhost:50000/${name}`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
    
          expect(setStub.called).to.be.true
          const [ _, storedContent] = setStub.args[0]
          const { userId, expiry } = JSON.parse(storedContent)
          expect(!!userId).to.be.true
          expect(!!expiry).to.be.false
    
          expect( userId ).to.equal('test/1')
        })
  
        it('> readUserDataset saveUserDataset data stubs called', async () => {
  
          await got(`http://localhost:50000/${name}`, {
            method: 'POST',
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(payload)
          })
          
          expect(readUserDataStub.called).to.be.true
          expect(readUserDataStub.calledWith(user)).to.be.true
          
          expect(saveUserDataStub.called).to.be.true
          expect(saveUserDataStub.calledWith(user, {
            ...savedUserDataPayload,
            savedCustomLinks: [
              ...savedUserDataPayload.savedCustomLinks,
              name
            ]
          })).to.be.true
        })
      })
    })
  })
})

