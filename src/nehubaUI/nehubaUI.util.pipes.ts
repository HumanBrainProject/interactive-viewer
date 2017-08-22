import { Pipe,PipeTransform } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'
import { SecurityContext } from '@angular/core'
import { Multilevel } from './nehuba.model'

/* pipes in object, pipes out stringified json  */

@Pipe({
    name:'jsonStringifyPipe'
})

export class JsonStringifyPipe implements PipeTransform{
    public transform(json:any){
        return JSON.stringify(json)
    }
}

/* pipes in string, pipes out json objects */

@Pipe({
    name:'jsonParsePipe'
})

export class JsonParsePipe implements PipeTransform{
    public transform(string:string){
        let json
        try{
            json = JSON.parse(string)
            return json
        } catch (e){
            return {}
        }
    }
}

/* pipes in array and search term, pipes out search term that matches the array */
/* deprecated by searchTreePipe */
@Pipe({
    name:'searchPipe'
})

export class SearchPipe implements PipeTransform{
    public transform(array:any[],searchTerm:string){
        return array.filter( (item) => {
            if(searchTerm === ''){
                return true
            }else{
                let regExp = new RegExp('\\b'+searchTerm,'gi')
                return regExp.test(item.name)
            }
        })
    }
}

/* pipes in object and pipes out list of keys */
@Pipe({
    name:'keyPipe'
})

export class KeyPipe implements PipeTransform{
    public transform(obj:any):string[]{
        let returnKey = []
        for (let key in obj){
            returnKey.push(key)
        }
        return returnKey
    }
}

/* searches tree array object (assuming children nodes are nested under children property) */
/* ignores blank spaces */
/* supercedes searchPipe */

@Pipe({
    name:'searchTreePipe'
})

export class SearchTreePipe implements PipeTransform{

    searchTerm : string

    public transform(array:Multilevel[],searchTerm:string):Multilevel[]{
        this.searchTerm = searchTerm
        this.iteratingArray( array )
        return array
    }

    private iteratingArray(array:Multilevel[]){
        let sanitaized = this.searchTerm.replace(/[^\w\s]/gi, '')
        array.forEach( item => {
            /* if regexp is not here, it gives funny results */
            let regExp = new RegExp(sanitaized,'gi')
            item.isVisible = regExp.test( item.name )
            this.iteratingArray( item.children )
        })
    }
}

/* search high lighting */

@Pipe({
    name:'searchHighlight'
})

export class SearchHighlight implements PipeTransform{
    
    regExp : RegExp

    constructor(private sanitizer:DomSanitizer){}

    public transform(string : string,searchTerm:string,singleData:any){
        if( searchTerm == '' ){
            return string
        }else{
            let sanitaized = searchTerm.replace(/[^\w\s]/gi, '')
            this.regExp = new RegExp(sanitaized,'gi')
            singleData
            return this.sanitizer.bypassSecurityTrustHtml( string.replace(this.regExp,match=>`<span class = "highlight">${this.sanitizer.sanitize(SecurityContext.HTML,match)}</span>`) )
        }
    }
}

/* searches for tree selected status (selected/unselected/partially selected) */

@Pipe({
    name:'selectTreePipe',
    pure : false
})

export class SelectTreePipe implements PipeTransform{

    returnArray:any[]

    public transform(array:any[]):any[]{
        
        this.returnArray = []
        this.iterate(array)

        return this.returnArray
    }

    private iterate(array:any[]){
        array.forEach(item=>{
            if(item.children.length>0){
                this.iterate(item.children)
            }else{
                item.enabled ? this.returnArray.push( item ) : {}
            }
        })
    }
}

/* round float to 3 dp */
/* originally used for navigation panel */

@Pipe({
    name:'numberfilteringPipe'
})

export class NumberFilteringPipe implements PipeTransform{
    public transform(number:number){
        return Math.round( number * 1000 ) / 1000
    }
}

/* if a field is undefined/null, set it to n/a instead */
@Pipe({
    name:'filterUncertainObject'
})

export class FilterUncertainObject implements PipeTransform{
    public transform(obj:any|any[]){
        if(!obj){
            return 'n/a'
        }else{
            return obj
        }
    }
}

@Pipe({
    name:'htmlElementAssemblerPipe'
})

export class HTMLElementAssemblerPipe implements PipeTransform{
    public transform(data:any){
        let element : HTMLElement
        if ( data._elementTagName ){
            switch( data._elementTagName ){
                case 'span':{
                    element = document.createElement('span')
                }break; 
                case 'div':
                default :{
                    element = document.createElement('div')
                }break;
            }
            if( data._class ){
                element.className = data._class
            }
            if ( data._id ){
                element.id = data._id
            }
            element.innerHTML = 'hello world'
            return element.outerHTML
        }else{
            return ''
        }
    }
}