const { AtlasPage } = require('../util')
const { URLSearchParams } = require('url')
const { ARIA_LABELS } = require('../../../common/constants')
describe('> non-atlas images', () => {
  let iavPage

  beforeAll(async () => {
    iavPage = new AtlasPage()
    await iavPage.init()
  })
  describe('> standalone volumes', () => {

    // TODO investigates why it occassionally fails
    it('> loads standalone volumes when set (fails sometimes. Just rerun if it does.)', async () => {
      const searchParam = new URLSearchParams()
      searchParam.set('standaloneVolumes', '["precomputed://https://object.cscs.ch/v1/AUTH_08c08f9f119744cbbf77e216988da3eb/imgsvc-46d9d64f-bdac-418e-a41b-b7f805068c64"]')
      await iavPage.goto(`/?${searchParam.toString()}`, { interceptHttp: true, doNotAutomate: true })
      await iavPage.wait(10000)
      const interceptedCalls = await iavPage.getInterceptedHttpCalls()
      expect(
        interceptedCalls
      ).toContain(
        jasmine.objectContaining(
          {
            method: 'GET',
            url: 'https://object.cscs.ch/v1/AUTH_08c08f9f119744cbbf77e216988da3eb/imgsvc-46d9d64f-bdac-418e-a41b-b7f805068c64/info'
          }
        )
      )
    })

    it('> if there exist both standalone volumes & xyz template selected, template selected is ignored', async () => {
      const searchParam = new URLSearchParams()
      searchParam.set('templateSelected', 'Big Brain (Histology)')
      searchParam.set('parcellationSelected', 'Cytoarchitectonic Maps')
      searchParam.set('standaloneVolumes', '["precomputed://https://object.cscs.ch/v1/AUTH_08c08f9f119744cbbf77e216988da3eb/imgsvc-46d9d64f-bdac-418e-a41b-b7f805068c64"]')

      await iavPage.goto(`/?${searchParam.toString()}`, { interceptHttp: true, doNotAutomate: true })
      await iavPage.wait(30000)
      const interceptedCalls = await iavPage.getInterceptedHttpCalls()

      expect(
        interceptedCalls
      ).toContain(
        jasmine.objectContaining(
          {
            method: 'GET',
            url: 'https://object.cscs.ch/v1/AUTH_08c08f9f119744cbbf77e216988da3eb/imgsvc-46d9d64f-bdac-418e-a41b-b7f805068c64/info'
          }
        )
      )

      expect(
        interceptedCalls
      ).not.toContain(
        jasmine.objectContaining(
          {
            method: 'GET',
            url: 'https://neuroglancer.humanbrainproject.org/precomputed/BigBrainRelease.2015/8bit/info'
          }
        )
      )
    })
  })

  describe('> registered volumes', () => {
    it('> if ref tmpl is right, should load both tmpl and volume', async () => {

      const searchParam = new URLSearchParams()
      searchParam.set('templateSelected', 'Big Brain (Histology)')
      searchParam.set('parcellationSelected', 'Grey/White matter')
  
      const previewingDatasetFiles = [
        {
          "datasetId":"minds/core/dataset/v1.0.0/b08a7dbc-7c75-4ce7-905b-690b2b1e8957",
          "filename":"Overlay of data modalities"
        }
      ]
      searchParam.set('previewingDatasetFiles', JSON.stringify(previewingDatasetFiles))
      
      await iavPage.goto(`/?${searchParam.toString()}`, { interceptHttp: true, doNotAutomate: true })
      await iavPage.wait(30000)
      const interceptedCalls = await iavPage.getInterceptedHttpCalls()

      const array = [
        "PLI Fiber Orientation Red Channel",
        "PLI Fiber Orientation Green Channel",
        "PLI Fiber Orientation Blue Channel",
        "Blockface Image",
        "PLI Transmittance",
        "T2w MRI",
        "MRI Labels"
      ]

      expect(
        interceptedCalls
      ).toContain(
        jasmine.objectContaining(
          {
            method: 'GET',
            url: 'https://neuroglancer.humanbrainproject.org/precomputed/BigBrainRelease.2015/8bit/info'
          }
        )
      )

      const arrPli = [
        "https://neuroglancer.humanbrainproject.eu/precomputed/PLI_FOM/BI-FOM-HSV_R",
        "https://neuroglancer.humanbrainproject.eu/precomputed/PLI_FOM/BI-FOM-HSV_G",
        "https://neuroglancer.humanbrainproject.eu/precomputed/PLI_FOM/BI-FOM-HSV_B",
        "https://neuroglancer.humanbrainproject.eu/precomputed/PLI_FOM/BI",
        "https://neuroglancer.humanbrainproject.eu/precomputed/PLI_FOM/BI-TIM",
        "https://neuroglancer.humanbrainproject.eu/precomputed/PLI_FOM/BI-MRI",
        "https://neuroglancer.humanbrainproject.eu/precomputed/PLI_FOM/BI-MRS",
      ]

      expect(
        interceptedCalls
      ).toContain(
        jasmine.objectContaining(
          {
            method: 'GET',
            url: 'https://neuroglancer.humanbrainproject.org/precomputed/BigBrainRelease.2015/8bit/info'
          }
        )
      )

      for (const url of arrPli) {
        expect(
          interceptedCalls
        ).toContain(
          jasmine.objectContaining(
            {
              method: 'GET',
              url: `${url}/info`
            }
          )
        )
      }
    })

    it('> if ref tmpl is not right, only tmpl is loaded', async () => {
      const searchParam = new URLSearchParams()
      searchParam.set('templateSelected', 'MNI Colin 27')
      searchParam.set('parcellationSelected', 'JuBrain Cytoarchitectonic Atlas')
  
      const previewingDatasetFiles = [
        {
          "datasetId":"minds/core/dataset/v1.0.0/b08a7dbc-7c75-4ce7-905b-690b2b1e8957",
          "filename":"Overlay of data modalities"
        }
      ]
      searchParam.set('previewingDatasetFiles', JSON.stringify(previewingDatasetFiles))
      
      await iavPage.goto(`/?${searchParam.toString()}`, { interceptHttp: true, doNotAutomate: true })
      await iavPage.wait(10000)
      const interceptedCalls = await iavPage.getInterceptedHttpCalls()

      expect(
        interceptedCalls
      ).not.toContain(
        jasmine.objectContaining(
          {
            method: 'GET',
            url: 'https://zam10143.zam.kfa-juelich.de/chumni/nifti/5c38faad1b0deab8d1674248b0107cd3637faa46a88e7a039c511163/BI-TIM/info'
          }
        )
      )

      expect(
        interceptedCalls
      ).toContain(
        jasmine.objectContaining(
          {
            method: 'GET',
            url: 'https://neuroglancer.humanbrainproject.org/precomputed/JuBrain/v2.2c/colin27_seg/info'
          }
        )
      )
    })
  
  })

  describe('> controls for non atlas volumes', () => {
    it('if no additional volume is being shown, additional volume control is not visible', async () => {
      const searchParam = new URLSearchParams()
      searchParam.set('templateSelected', 'MNI Colin 27')
      searchParam.set('parcellationSelected', 'JuBrain Cytoarchitectonic Atlas')
  
      const previewingDatasetFiles = [
        {
          "datasetId":"minds/core/dataset/v1.0.0/b08a7dbc-7c75-4ce7-905b-690b2b1e8957",
          "filename":"Overlay of data modalities"
        }
      ]
      searchParam.set('previewingDatasetFiles', JSON.stringify(previewingDatasetFiles))
      
      await iavPage.goto(`/?${searchParam.toString()}`)
      await iavPage.wait(2000)

      try {
        const additionalLayerControlIsShown = await iavPage.isVisible(`[aria-label="${ARIA_LABELS.ADDITIONAL_VOLUME_CONTROL}"]`)
        expect(additionalLayerControlIsShown).toEqual(false)
      } catch (e) {
        /**
         * error when css querying additional volume control
         * expected behaviour, when it is not visible
         */
      }
      
    })

    it('if additonal volumes are being shown, additional volume control is visible', async () => {
      
      const searchParam = new URLSearchParams()
      searchParam.set('templateSelected', 'Big Brain (Histology)')
      searchParam.set('parcellationSelected', 'Grey/White matter')
  
      const previewingDatasetFiles = [
        {
          "datasetId":"minds/core/dataset/v1.0.0/b08a7dbc-7c75-4ce7-905b-690b2b1e8957",
          "filename":"Overlay of data modalities"
        }
      ]
      searchParam.set('previewingDatasetFiles', JSON.stringify(previewingDatasetFiles))
      
      await iavPage.goto(`/?${searchParam.toString()}`, { forceTimeout: 20000 })
      await iavPage.wait(2000)
      
      const additionalLayerCtrlIsExpanded2 = await iavPage.isVisible(`[aria-label="${ARIA_LABELS.ADDITIONAL_VOLUME_CONTROL}"]`)
      expect(additionalLayerCtrlIsExpanded2).toEqual(true)

    })

  })

})
