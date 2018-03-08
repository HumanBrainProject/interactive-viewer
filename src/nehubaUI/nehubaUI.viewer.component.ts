import { Input,AfterViewInit, HostListener,OnDestroy,ComponentRef,Directive,Type,OnInit,Component,ComponentFactoryResolver,ViewChild,ViewContainerRef, ElementRef,TemplateRef }from '@angular/core'
import { Observable } from 'rxjs/Rx'

import { Config as NehubaViewerConfig,NehubaViewer,createNehubaViewer,vec3, sliceRenderEventType, SliceRenderEventDetail, perspectiveRenderEventType } from 'nehuba/exports'

import { Animation,EXTERNAL_CONTROL as gExternalControl, MainController, TEMP_RECEPTORDATA_BASE_URL, SpatialSearch, LandmarkServices } from './nehubaUI.services'
import { RegionDescriptor, ParcellationDescriptor, TemplateDescriptor, Landmark } from './nehuba.model'
import { FloatingPopOver } from 'nehubaUI/nehubaUI.floatingPopover.component';
import { UI_CONTROL,VIEWER_CONTROL } from './nehubaUI.services'
import { SegmentationUserLayer } from 'neuroglancer/segmentation_user_layer';
import { WidgetComponent } from 'nehubaUI/nehubaUI.widgets.component';
import { ManagedUserLayer } from 'neuroglancer/layer';

declare var window:{
  [key:string] : any
  prototype : Window;
  new() : Window;
}

@Directive({
  selector : '[nehuba-viewer-host]'
})

export class NehubaViewerDirective{
  constructor(public viewContainerRef:ViewContainerRef){}
}

@Component({
  selector : 'NehubaViewer',
  template:`
    <ng-template nehuba-viewer-host>
    </ng-template>
  `,
  styles : [
    `
    `
  ]
})

export class NehubaViewerInnerContainer implements OnInit,AfterViewInit{

  @ViewChild(NehubaViewerDirective) host : NehubaViewerDirective
  nehubaViewerComponent : NehubaViewerComponent
  componentRef : ComponentRef<any>
  viewContainerRef : ViewContainerRef
  private templateLoaded : boolean = false
  darktheme : boolean = false

  colorMap : Map<number,{}>

  private onViewerInitHook : (()=>void)[] = []
  private afterviewerInitHook : (()=>void)[] = []

  private onParcellationSelectionHook : (()=>void)[] = []
  private afterParcellationSelectionHook : (()=>void)[] = []

  constructor(public mainController:MainController, private componentFactoryResolver: ComponentFactoryResolver ){
    
    /* TODO reduce complexity, as to not having multiple VIEW_CONTROL objects floating around */
    VIEWER_CONTROL.loadTemplate = (templateDescriptor:TemplateDescriptor) => {
      /* TODO implement a check that each el in the hooks are still defined and are fn's */
      this.onViewerInitHook.forEach(fn=>fn())
      this.loadTemplate(templateDescriptor.nehubaConfig)
      this.afterviewerInitHook.forEach(fn=>fn())
    }
    VIEWER_CONTROL.onViewerInit = (cb:()=>void) => this.onViewerInit(cb)
    VIEWER_CONTROL.afterViewerInit = (cb:()=>void) => this.afterViewerInit(cb)
    UI_CONTROL.onParcellationSelection = (cb:()=>void) => this.onParcellationSelection(cb)
    UI_CONTROL.afterParcellationSelection = (cb:()=>void) => this.afterParcellationSelection(cb)
    VIEWER_CONTROL.showSegment = (seg) => this.showSegment(seg)
    VIEWER_CONTROL.hideSegment = (seg) => this.hideSegment(seg)
    VIEWER_CONTROL.hideAllSegments = () => this.hideAllSegments()
    VIEWER_CONTROL.showAllSegments = () => this.showAllSegments()
    VIEWER_CONTROL.moveToNavigationLoc = (loc:number[],realSpace?:boolean) => this.moveToNavigationLoc(loc,realSpace)
    VIEWER_CONTROL.loadLayer = (layerObj:Object) => this.loadLayer(layerObj)

    this.mainController.viewerControl.hideAllSegments = () => this.hideAllSegments()
    this.mainController.viewerControl.showSegment = (segId) => this.showSegment(segId)
    this.mainController.viewerControl.showAllSegments = () => this.showAllSegments()
    this.mainController.viewerControl.loadLayer = (layerObj) => this.loadLayer(layerObj)
    this.mainController.viewerControl.removeLayer = (layerObj) => this.removeLayer(layerObj)
    this.mainController.viewerControl.setLayerVisibility = (layerObj,visible) => this.setLayerVisibility(layerObj,visible)
  }

  /**
   * attaches an onViewerInit callback.
   */
  public onViewerInit = (cb:()=>void) => this.onViewerInitHook.push(cb)

  /**
   * attaches an afterViewerInit callback
   */
  public afterViewerInit = (cb:()=>void)=> this.afterviewerInitHook.push(cb)

  /**
   * attaches an on parcellation selection callback
   */
  public onParcellationSelection = (cb:()=>void)=> this.onParcellationSelectionHook.push(cb)

  /**
   * attaches an after parcellation selection callback
   */
  public afterParcellationSelection = (cb:()=>void)=> this.afterParcellationSelectionHook.push(cb)

  /**
   * attaches an onViewerDestory callback. 
   * If no viewer is initiated, callback will be fired immediately.
   * NB onViewerInit callback will be called before onViewerDestory callback
   */
  public onViewerDestroy = (cb:()=>void)=>{
    if(!this.templateLoaded){
      cb()
    }else{
      this.componentRef.onDestroy(()=>{
        cb()
      })
    }
  }

  /**
   * Teleport to new location
   */
  public setNavigationLoc = (loc:number[],realSpace?:boolean)=>{
    this.nehubaViewerComponent.nehubaViewer.setPosition(vec3.fromValues(loc[0],loc[1],loc[2]),realSpace)
  }

  /**
   * teleport to a new orientation
   */
  public setNavigationOrientation = (_ori:number[])=>{
    /* waiting for proper api */
  }

  /**
   * Animation moving to new location
   */
  public moveToNavigationLoc = (loc:number[],realSpace?:boolean)=>{
    if(this.templateLoaded){
      this.nehubaViewerComponent.navigate(loc,300,realSpace?realSpace:false)
    }
  }

  ngOnInit(){
    this.viewContainerRef = this.host.viewContainerRef
  }

  ngAfterViewInit(){
    UI_CONTROL.afterTemplateSelection(()=>{
      this.darktheme = gExternalControl.metadata.selectedTemplate ? gExternalControl.metadata.selectedTemplate.useTheme == 'dark' : false;
      (<NehubaViewerComponent>this.componentRef.instance).darktheme = this.darktheme
    })
  }

  private loadTemplate(nehubaViewerConfig:NehubaViewerConfig){

    if ( this.templateLoaded ){
      /* I'm not too sure what does the dispose method do (?) */
      /* TODO: use something other than a flag? */
      (<NehubaViewerComponent>this.componentRef.instance).nehubaViewer.dispose()
      this.componentRef.destroy()
    }

    let newNehubaViewerUnit = new NehubaViewerUnit(NehubaViewerComponent,nehubaViewerConfig)
    let nehubaViewerFactory = this.componentFactoryResolver.resolveComponentFactory( newNehubaViewerUnit.component )
    this.componentRef = this.viewContainerRef.createComponent( nehubaViewerFactory );
    
    this.nehubaViewerComponent = <NehubaViewerComponent>this.componentRef.instance
    this.nehubaViewerComponent.createNewNehubaViewerWithConfig(nehubaViewerConfig)
    this.nehubaViewerComponent.darktheme = this.darktheme

    this.templateLoaded = true
  }

  public showSegment(segID:any){
    this.nehubaViewerComponent.showSeg(segID)
  }

  public hideSegment(segID:any){
    this.nehubaViewerComponent.hideSeg(segID)
  }

  public showAllSegments(){
    this.nehubaViewerComponent.allSeg(true)
  }

  public hideAllSegments(){
    this.nehubaViewerComponent.allSeg(false)
  }

  public setLayerVisibility(layerObj:any,visible:boolean){
    return this.nehubaViewerComponent.setLayerVisibility(layerObj,visible)
  }

  public loadLayer(layerObj:any){
    return this.nehubaViewerComponent.loadLayer(layerObj)
  }

  public removeLayer(layerObj:any){
    return this.nehubaViewerComponent.removeLayer(layerObj)
  }
}

@Component({
  template : `
    <div 
      (contextmenu)="showFloatingPopover($event)"
      id = "neuroglancer-container" 
      [ngClass]="{darktheme : darktheme}"
      #container>
    </div>
    
    <div id = "nehubaui-overlay" #nehubaUiOverlay>
      <nehubaui-overlay 
        [nanometersToOffsetPixelsFn] = "nanometersToOffsetPixelsFn[0]"
        class = "nehubaui-overlay-c" 
        id = "nehubaui-overlay-c1">
      </nehubaui-overlay>
      <nehubaui-overlay 
        [nanometersToOffsetPixelsFn] = "nanometersToOffsetPixelsFn[1]"
        class = "nehubaui-overlay-c" 
        id = "nehubaui-overlay-c2">
      </nehubaui-overlay>
      <nehubaui-overlay 
        [nanometersToOffsetPixelsFn] = "nanometersToOffsetPixelsFn[2]"
        class = "nehubaui-overlay-c" 
        id = "nehubaui-overlay-c3">
      </nehubaui-overlay>
      <nehubaui-overlay 
        [rotate3D] = "rotate3D"
        class = "nehubaui-overlay-c" 
        id = "nehubaui-overlay-c4">
      </nehubaui-overlay>
    </div>
    
    <nehubaui-landmark-list *ngIf = "mainController.viewingMode == 'Querying Landmarks'">
    </nehubaui-landmark-list>

    <nehubaui-searchresult-region-list 
      [title] = "'Receptor Data Browser'"
      [regions] = " Array.from( mainController.regionsLabelIndexMap.values() ).filter(filterForReceptorData) "
      *ngIf = "mainController.viewingMode == 'Receptor Data'">
    </nehubaui-searchresult-region-list>

    <div [ngClass] = "{darktheme : darktheme}" id = "viewerStatus">
      
      <div *ngIf="false">
        <span nametagSelectedRegions>
          Selected Regions : 
        </span>
        <div class = "row" *ngIf="mainController.selectedRegions.length == 0">
          <i class = "col-sm-12 col-md-12 col-lg-12 text-muted" >No Region Selected </i>
        </div>
        <div
          class = "row"
          *ngFor = "let selectedRegion of mainController.selectedRegions">
          
          <div class = "col-sm-12 col-md-12 col-lg-12">
            {{selectedRegion.name}} 
          </div>
          <div class = "col-md-12 col-sm-12 col-lg-12" [innerHTML]="dynamicData(selectedRegion)">
            dynamic content here
          </div>
        </div>

        <br *ngIf="mainController.viewingMode == 'Receptor Data'" />
        <div class = "row" *ngIf="mainController.viewingMode == 'Receptor Data'" >
          <receptorDataDriver (receptorString)="setReceptorString($event)">
          </receptorDataDriver>
        </div>

        <br />
        <span>
          Hovering : {{!viewerSegment ? '' : viewerSegment.constructor.name == 'Number' ? '' : viewerSegment.name   }}
        </span>
        <br /><br />
        <span *ngIf="false">
          Mode : {{ mainController.viewingMode }}
        </span>
        <br />

      </div>

      <span 
        class = "btn btn-link"
        (click)="statusPanelRealSpace = !statusPanelRealSpace">
        {{statusPanelRealSpace ? 'RealSpace' : 'VoxelSpace'}}
      </span>

      <br />
      Navigation: <small>(
        {{
          statusPanelRealSpace ? 
            (viewerPosReal[0] | nmToMm | number) + 'mm': 
            viewerPosVoxel[0]
        }},
        {{
          statusPanelRealSpace ? 
            (viewerPosReal[1] | nmToMm | number) + 'mm' : 
            viewerPosVoxel[1]
        }},
        {{
          statusPanelRealSpace ? 
            (viewerPosReal[2] | nmToMm | number) + 'mm' : 
            viewerPosVoxel[2]
        }}
      )</small> 

      <br />
      Mouse: <small>(
        {{
          statusPanelRealSpace ? 
            (mousePosReal[0] | nmToMm | number) + 'mm' : 
            mousePosVoxel[0]
        }},
        {{
          statusPanelRealSpace ? 
            (mousePosReal[1] | nmToMm | number) + 'mm' : 
            mousePosVoxel[1]
        }},
        {{
          statusPanelRealSpace ? 
            (mousePosReal[2] | nmToMm | number) + 'mm' : 
            mousePosVoxel[2]
        }}
      )</small> 
      <br />
      <small>
        &nbsp;&nbsp;{{!viewerSegment ? ' ' : viewerSegment.constructor.name == 'Number' ? ' ' : viewerSegment.name   }}
      </small>
    </div>
    <floatingPopover>
    </floatingPopover>
  `,
  styles : [
    `
    nehubaui-landmark-list
    {
      display:none;
    }
    div#neuroglancer-container
    {
      width:100%;
      height:100%;
      position:absolute;
      top:0px;
      left:0px;
      z-index:1;
    }
    div#nehubaui-overlay
    {
      width:100%;
      height:100%;
      position:absolute;
      top:0px;
      left:0px;
      z-index:2;
      display:grid;
      grid-template-columns : 50% 50%;
      grid-template-rows : 50% 50%;
      pointer-events:none;
    }

    .nehubaui-overlay-c
    {
      grid-column-end : span 1;
      grid-row-end : span 1;

      overflow:hidden;
      position:relative;
    }

    #nehubaui-overlay-c1
    {
      grid-column-start : 1;
      grid-row-start : 1;
    }
    #nehubaui-overlay-c2
    {
      grid-column-start : 2;
      grid-row-start : 1;
    }
    #nehubaui-overlay-c3
    {
      grid-column-start : 1;
      grid-row-start : 2;
    }
    #nehubaui-overlay-c4
    {
      grid-column-start : 2;
      grid-row-start : 2;
    }

    span[nametagSelectedRegions]
    {
      margin-bottom:0.5em;
    }
    div#viewerStatus
    {
      position:absolute;
      left:1em;
      bottom:1em;
      z-index:9;
      overflow:hidden;
      box-sizing: border-box;
      padding:0.5em;
      white-space: nowrap;
    }

      div#viewerStatus .btn-link
      {
        padding: 0px;
      }

    `
  ],
  providers : [ SpatialSearch ]
})
export class NehubaViewerComponent implements OnDestroy,AfterViewInit{
  public nehubaViewer : NehubaViewer
  viewerConfig : NehubaViewerConfig
  darktheme : boolean
  sliceViewZoom : number
  viewerPosReal : number[] = [0,0,0]
  viewerPosVoxel : number[] = [0,0,0]
  viewerOri : number[] = [0,0,1,0]
  viewerSegment : RegionDescriptor | number | null
  mousePosReal :  number[] = [0,0,0]
  mousePosVoxel :  number[] = [0,0,0]

  statusPanelRealSpace : boolean = true

  segmentListener : any = {}

  spatialSearchWidth : number
  nanometersToOffsetPixelsFn : Function[] | null[] = [null,null,null]
  rotate3D : number[] | null = null

  @HostListener('document:mousedown',['$event'])
  clearContextmenu(_ev:any){
    if(this.floatingPopover.contextmenuEvent)this.floatingPopover.contextmenuEvent=null
  }

  @ViewChild(FloatingPopOver) floatingPopover : FloatingPopOver
  @ViewChild('container',{read:ElementRef}) viewerContainer : ElementRef

  onDestroyUnsubscribe : any[] = []
  heartbeatObserver : any

  /* Variables needed for listify receptor browser */
  Array = Array
  filterForReceptorData = (region:RegionDescriptor) => region.moreInfo.some(info=>info.name=='Receptor Data')

  constructor(private mainController:MainController,public spatialSearch:SpatialSearch,public landmarkServices:LandmarkServices){

    // const metadata = gExternalControl.metadata

    // UI_CONTROL.afterParcellationSelection(()=>{
    //   /**
    //    * applying default colour map.
    //    */
    //   this.nehubaViewer.batchAddAndUpdateSegmentColors(metadata.selectedParcellation!.colorMap)
        
    //   /**
    //    * patching surface parcellation and whole mesh vs single mesh
    //   */
    //   const colorMap = (<ParcellationDescriptor>metadata.selectedParcellation).colorMap
    //   /* TODO patching in surface parcellation */
    //   try{
    //     if( this.viewerConfig.layout!.useNehubaPerspective!.mesh!.surfaceParcellation ){
    //       colorMap.set(65535,{red:255,green:255,blue:255})
    //       this.nehubaViewer.batchAddAndUpdateSegmentColors(colorMap)
    //       this.nehubaViewer.setMeshesToLoad([65535,...Array.from(colorMap.keys())])
    //     }else{
    //       this.nehubaViewer.setMeshesToLoad(Array.from(colorMap.keys()))
    //     }
    //   }catch(e){
    //     console.log('loading surface parcellation error ',e)
    //   }

    //   // const parcellationName = _evPk.body.parcellation.ngId
    //   const shownSegmentObs = this.nehubaViewer.getShownSegmentsObservable()
    //   const shownSegmentObsSubscription = shownSegmentObs.subscribe((ev:number[])=>{
    //     /**
    //      * attach regionSelection listener and update surface parcellation patch
    //      */
    //     try{
    //       const newColorMap = new Map<number,{red:number,green:number,blue:number}>()
    //       const selectedParcellation = <ParcellationDescriptor>metadata.selectedParcellation
    //       if( this.viewerConfig.layout!.useNehubaPerspective!.mesh!.surfaceParcellation ){

    //         selectedParcellation.colorMap.forEach((activeColor,key)=>{
    //           newColorMap.set(key,ev.find(segId=>segId==key)?activeColor:{red:255,green:255,blue:255})
    //         })
    //         this.nehubaViewer.clearCustomSegmentColors()
    //         this.nehubaViewer.batchAddAndUpdateSegmentColors(ev.length == 0 ? selectedParcellation.colorMap : newColorMap)
    //       }else{
    //         // this.nehubaViewer.setMeshesToLoad( ev.length == 0 ? Array.from(selectedParcellation.colorMap.keys()) : ev )
    //         // this.nehubaViewer.setMeshesToLoad(ev)
    //       }
    //     }catch(e){
    //       console.log('toggling regions error surface parcellation ')
    //       throw e
    //     }

    //     gExternalControl.viewControl.next(new EventPacket('selectRegions','',102,{source:'viewer',regions:ev.map((id:any)=>({labelIndex:id}))}))
    //   })
    //   this.onDestroyUnsubscribe.push(shownSegmentObsSubscription)
    // })

    this.mainController.viewingModeBSubject
      .subscribe(()=>{
        this.spatialSearch.querySpatialData(this.viewerPosReal.map(num=>num/1000000) as [number,number,number],this.spatialSearchWidth,`Colin 27`)
      })
  }

  public ngOnDestroy(){
    this.onDestroyUnsubscribe.forEach((subscription:any)=>subscription.unsubscribe())
    this.nehubaViewer.dispose()
    window['nehubaViewer'] = null
  }

  public ngAfterViewInit(){
  }

  public setReceptorString(ev:string|null){
    this.mainController.receptorString = ev
  }

  public createNewNehubaViewerWithConfig(config:NehubaViewerConfig){

    this.viewerConfig = config

    /* TODO potentially setting metadata before it was defined (?) */
    const metadata = gExternalControl.metadata
    this.nehubaViewer = createNehubaViewer(config,(err)=>{
      /* TODO: error handling?*/
      console.log('createnehubaviewer error handler',err)
    })

    this.mainController.nehubaViewer = this.nehubaViewer

    this.nehubaViewer.applyInitialNgState()

    /**
     * preventing errors such as visibleLayer of null/undefined
     */
    setTimeout(()=>{

      this.nehubaViewer.redraw()
      this.nehubaViewer.relayout()
      
      /* redraw/relayout is async */
      setTimeout(()=>{

        /* listens to custom events from neuroglancer-panel
          whenever it fires, updates the position of existing landmarks
        */
        (<HTMLElement>this.viewerContainer.nativeElement).querySelectorAll('.neuroglancer-panel').forEach(panel=>{
          
          Observable.fromEvent(panel,sliceRenderEventType).map(it=>it as CustomEvent)
            .subscribe(ev=>{

              const el = ev.target as HTMLElement
              const detail = ev.detail as SliceRenderEventDetail
              /* TODO this is a terrible way of identifying panels */
              el.offsetLeft < 5 ? 
                el.offsetTop < 5 ?
                  this.nanometersToOffsetPixelsFn[0] = detail.nanometersToOffsetPixels :
                  this.nanometersToOffsetPixelsFn[2] = detail.nanometersToOffsetPixels :
                el.offsetTop < 5 ?
                  this.nanometersToOffsetPixelsFn[1] = detail.nanometersToOffsetPixels :
                  (console.log('observable fired from perspective panel'))

            })
          
        })

        Observable.fromEvent(this.viewerContainer.nativeElement,perspectiveRenderEventType)
          .subscribe(()=>{
            /* attach pointer to 3d viewer here */
            
          })
      })
    })

    /**
     * attaching the mouse/navigation real/voxel listeners
     */
    const mouseRealSubscription = this.nehubaViewer.mousePosition.inRealSpace.subscribe((pos:any)=>this.mousePosReal = pos ? pos : this.mousePosReal)
    this.onDestroyUnsubscribe.push(mouseRealSubscription)
    const mouseVoxelSubscription = this.nehubaViewer.mousePosition.inVoxels.subscribe((pos:any)=>this.mousePosVoxel = pos ? pos :this.mousePosVoxel)
    this.onDestroyUnsubscribe.push(mouseVoxelSubscription)
    
    const navigationSubscription = this.nehubaViewer.navigationState.position.inRealSpace.subscribe((pos:any)=>{
      this.viewerPosReal = pos

      /* spatial query */
      const container = (<HTMLElement>this.viewerContainer.nativeElement)
      this.spatialSearchWidth = Math.max(container.clientHeight/4,container.clientWidth/4) * this.sliceViewZoom / 1000000
      /* width in mm */
      this.spatialSearch.querySpatialData(this.viewerPosReal.map(num=>num/1000000) as [number,number,number],this.spatialSearchWidth,`Colin 27`)
    })
    this.onDestroyUnsubscribe.push( navigationSubscription )
    const navigationSubscriptionVoxel = this.nehubaViewer.navigationState.position.inVoxels.subscribe((pos:any)=>this.viewerPosVoxel=pos)
    this.onDestroyUnsubscribe.push( navigationSubscriptionVoxel )
    
    const zoomSub = this.nehubaViewer.navigationState.sliceZoom.subscribe((zoom:any)=>{
      this.sliceViewZoom = zoom
    
      /* spatial query */
      const container = (<HTMLElement>this.viewerContainer.nativeElement)
      this.spatialSearchWidth = Math.max(container.clientHeight/4,container.clientWidth/4) * this.sliceViewZoom / 1000000
      /* width in mm */
      this.spatialSearch.querySpatialData(this.viewerPosReal.map(num=>num/1000000) as [number,number,number],this.spatialSearchWidth,`Colin 27`)
    })
    this.onDestroyUnsubscribe.push( zoomSub )

    const segmentListener = this.nehubaViewer.mouseOver.image
      .subscribe(ev=>{
        this.segmentListener[ev.layer.name] = ev.value
      })
    this.onDestroyUnsubscribe.push(segmentListener)
    /**
     * attaches viewerSegmentHover listener
     */
    const iterativeSearch = (regions:RegionDescriptor[],labelIndex:number):Promise<RegionDescriptor> => new Promise((resolve)=>{
      const find = regions.find(region=>region.labelIndex==labelIndex)
      if(find)resolve(find)
      Promise.race(regions.map(region=>iterativeSearch(region.children,labelIndex)))
        .then(region=>resolve(region))
    })
    const regionObserverSubscription = this.nehubaViewer.mouseOver.segment.subscribe((seg:any)=>{
      /* seg.segment = number | 0 | null seg.layer */

      /* TODO potentially generating some unresolvable promises here */
      if(seg.segment&&seg.segment!=0){
        this.viewerSegment=seg.segment
        iterativeSearch(metadata.selectedParcellation!.regions,seg.segment)
          .then(region=>this.viewerSegment=region)
          .catch(e=>console.log(e))
      }else{
        this.viewerSegment=null
      }
    })
    this.onDestroyUnsubscribe.push(regionObserverSubscription)

    window['nehubaViewer'] = this.nehubaViewer

    this.heartbeatObserver = 
      this.nehubaViewer.mouseOver.segment
        .merge(this.nehubaViewer.navigationState.sliceZoom)
        .merge(this.nehubaViewer.navigationState.perspectiveZoom)
        .subscribe((_ev:any)=>{
          //console.log('debug heartbeat',ev)
        })
    this.onDestroyUnsubscribe.push(this.heartbeatObserver)
  }

  public dynamicData(selectedData:RegionDescriptor):string{
    switch(this.mainController.viewingMode){
      case 'navigation (default mode)':
        return ``
      case 'Probability Map':{
        const value = this.segmentListener[this.mainController.selectedParcellation!.ngId + selectedData.name]
        return `&nbsp;&nbsp;Encoded value: ${ value ? Math.round(value * 1000)/1000 : ''}`
      }
      case 'Receptor Data' : 
        return this.mainController.nehubaViewer.getShownSegmentsNow().length == 0 ? `` : this.checkIdxForReceptorData(selectedData)
      default :
        return ``
    }
  }

  private checkIdxForReceptorData(m:RegionDescriptor):string{
    if(m.moreInfo.findIndex(info=>info.name=='Receptor Data')>= 0){
      if(this.mainController.receptorString){
        const imgSrc = TEMP_RECEPTORDATA_BASE_URL + m.moreInfo.find(i=>i.name=='Receptor Data')!.source + this.mainController.receptorString
        return `<img src = "${imgSrc}" style = "width:100%" />`
      }else{
        return `&nbsp;&nbsp;receptor data found ...`
      }
    }else{
      return `&nbsp;&nbsp;<i class = "text-muted">receptor data found</i>`
    }
  }

  public loadParcellation(_parcellation:ParcellationDescriptor){

  }

  public navigate(pos:number[],duration:number,realSpace:boolean){
    /* TODO: waiting on nehubaViewer api to implement rotation */
    
    if( duration>0 ){
      /* slice is required to make clones of the values */
      /* or else the values (startPos/deltaPos) will change mid-animation */
      let deltaPos = ([
        pos[0]-this.viewerPosReal[0],
        pos[1]-this.viewerPosReal[1],
        pos[2]-this.viewerPosReal[2]
      ]).slice()
      let startPos = (this.viewerPosReal).slice()
  
      let iterator = (new Animation(duration,'linear')).generate()
      let newAnimationFrame = () =>{
        let iteratedValue = iterator.next()
        this.nehubaViewer.setPosition(vec3.fromValues(
          startPos[0]+deltaPos[0]*iteratedValue.value,
          startPos[1]+deltaPos[1]*iteratedValue.value,
          startPos[2]+deltaPos[2]*iteratedValue.value
        ),realSpace)
        if(!iteratedValue.done){
          requestAnimationFrame(newAnimationFrame)
        }
      }
      requestAnimationFrame(newAnimationFrame)
    }else{
      this.nehubaViewer.setPosition(vec3.fromValues(pos[0],pos[1],pos[2]),realSpace)
    }
  }

  public showSeg(id:number){
    this.nehubaViewer.showSegment(id)
  }

  public hideSeg(id:number){
    this.nehubaViewer.hideSegment(id)
  }

  public allSeg(show:boolean){
    this.nehubaViewer.getShownSegmentsNow().forEach(segID => {
      this.nehubaViewer.hideSegment(segID)
    })
    if( !show ) {
      this.nehubaViewer.showSegment(0)
    }
  }

  /* filter function
  tests array l for all conditions in layerObj. for eg
  const array = [
    {
      name : 'apples'
    },
    {
      name : 'oranges'
    }
  ]
  const test1 = {
    name : /^app/
  }

  filterLayers(array,test1) 
  returns [{
    {
      name : 'apples'
    }
  }]
  */
  private filterLayers(l:any,layerObj:any):boolean{
    return Object.keys(layerObj).length == 0 && layerObj.constructor == Object ?
      true :
      Object.keys(layerObj).every(key=>
        !(<Object>l).hasOwnProperty(key) ? 
          false :
          layerObj[key] instanceof RegExp ?
            layerObj[key].test(l[key]) :
            layerObj[key] == l[key])
  }

  public removeLayer(layerObj:any){

    const viewer = this.nehubaViewer.ngviewer
    const removeLayer = (i:ManagedUserLayer) => (viewer.layerManager.removeManagedLayer(i),i.name)

    return viewer.layerManager.managedLayers
      .filter(l=>this.filterLayers(l,layerObj))
      .map(removeLayer)
  }

  public setLayerVisibility(layerObj:any,visible:boolean){

    const viewer = this.nehubaViewer.ngviewer
    const setVisibility = (i:ManagedUserLayer) => (i.setVisible(visible),i.name)

    return viewer.layerManager.managedLayers
      .filter(l=>this.filterLayers(l,layerObj))
      .map(setVisibility)
  }

  //TODO: do this properly with proper api's
  public loadLayer(layerObj:any){
    const viewer = this.nehubaViewer.ngviewer
    return Object.keys(layerObj)
      .filter(key=>
        /* if the layer exists, it will not be loaded */
        !viewer.layerManager.getLayerByName(key))
      .map(key=>{

        viewer.layerManager.addManagedLayer(
          viewer.layerSpecification.getLayer(key,layerObj[key]))

        return layerObj[key]
      })
    // const state = (<NehubaViewer>window['nehubaViewer']).ngviewer.state.toJSON()
    // Object.keys(layerObj).forEach(key=>state.layers[key]=(<any>layerObj)[key])
    // this.nehubaViewer.ngviewer.state.restoreState(state)
  }

  public showFloatingPopover = (ev:any)=> {
    this.floatingPopover.cursorSegment = this.viewerSegment
    this.floatingPopover.cursorLocReal = this.mousePosReal
    this.floatingPopover.cursorLocVoxel = this.mousePosVoxel
    this.floatingPopover.contextmenuEvent = ev
  }
}

export class NehubaViewerUnit{
  viewerConfig : NehubaViewerConfig
  darktheme : boolean

  constructor(public component:Type<any>,viewerConfig:NehubaViewerConfig){  
    this.viewerConfig = viewerConfig
  }
}

@Component({
  selector : `nehubaui-overlay`,
  template : 
  `
  <nehuba-viewer-2d-landmark-unit
    [ngStyle]="pos(landmark)"
    *ngFor="let landmark of landmarkServices.landmarks"
    [tooltip] =" landmark.properties | jsonStringifyPipe"
    container = "body"
    containerClass = "landmarkTooltip"
    
    [height] = "zOffset"
    [landmark]="landmark"
    (mouseenter)="landmark.hover = true"
    (mouseleave)="landmark.hover = false"
    class = "glyphicon-container">

  </nehuba-viewer-2d-landmark-unit>
  <div [ngStyle] = "{'transform':'rotate3D(' + rotate3D.join(',') + 'rad)' }" *ngIf="rotate3D" perspectiveAd>
    Perspective Overlay
  </div>
  `
})

export class NehubaViewerOverlayUnit {
  @Input() nanometersToOffsetPixelsFn : Function 
  @Input() rotate3D : number[] | undefined

  zOffset : number

  constructor(public mainController:MainController,public spatialSearch:SpatialSearch,public landmarkServices:LandmarkServices){

  }

  pos(landmark:Landmark){
    if(this.nanometersToOffsetPixelsFn){
      const vec = this.nanometersToOffsetPixelsFn(landmark.pos.map((pt:number)=>pt*1000000) as any)
      this.zOffset = vec[2]
      
      return vec[2] >= 0 ? 
      ({
        'z-index':`${Math.round(vec[1]*10)}`,
        'top' : `${vec[1]-vec[2]}px`,
        'left' : `${vec[0]}px`,
        'height': `${vec[2]}px`,
        'text-shadow' : `
          -1px 0 rgba(0,0,0,1.0),
          0 1px rgba(0,0,0,1.0),
          1px 0 rgba(0,0,0,1.0),
          0 -1px rgba(0,0,0,1.0)`
      }) : ({
        'z-index':`${Math.round(vec[2])}`,
        'top' : `${vec[1]}px`,
        'left' : `${vec[0]}px`,
        'height': `${-1*vec[2]}px`,
        'opacity' : '0.5',
        'text-shadow' : `
          -1px 0 rgba(0,0,0,1.0),
          0 1px rgba(0,0,0,1.0),
          1px 0 rgba(0,0,0,1.0),
          0 -1px rgba(0,0,0,1.0)`
      })
    }else{
      return({
        display:`none`
      })
    }
  }

  stylePerspectiveAd(){
    return({
      'transform':`rotate3d(${this.rotate3D![1]},${this.rotate3D![2]},${this.rotate3D![3]},${this.rotate3D![0]}rad)`
    })
  }


}


/* migrate to a separate file, probably related to landmarks */
@Component({
  selector : `nehuba-viewer-2d-landmark-unit`,
  template : 
  `
  <div 
    [ngStyle] = "styleLandmark()"
    landmarkContainer>
    
    <div nodeView #nodeView>
      <span 
        class="glyphicon glyphicon-map-marker">
      </span>
    </div>

    <div class = "pos-beam">
      <div 
        [ngStyle] = "styleBeam(false)" 
        class = "pos-beam-outer">
      </div>
      <div 
        [ngStyle] = "styleBeam(true)"
        class = "pos-beam-inner">
      </div>
    </div>
    <div class = "pos-shadow">
      <div
        [ngStyle]="styleShadow()">
      </div>
    </div>
  </div>
  `,
  styles :[
    `
    div[landmarkContainer]
    {
      height:100%;
      width: 0px;
      display:flex;
      pointer-events:auto;
      flex-wrap:nowrap;
    }
    .pos-shadow
    {
      flex: 0 0 0px;
    }
    .pos-beam
    {
      box-sizing:border-box;
      background-color:black;
      flex: 1 1 0px;
      position:relative;
    }
    .pos-beam > .pos-beam-outer
    {
      position:absolute;
      top:-1px;
      left:-3px;
    }
    .pos-beam > .pos-beam-inner
    {
      position : absolute;
      top:0px;
    }
    [nodeView]
    {
      margin-top:-1em;
      margin-bottom:1em;
      width:0px;
      height:0px;
      margin-left:-0.02px;
      flex: 0 0 0px;
    }

    [nodeView] > *
    {
    }

    [nodeView] > .glyphicon
    {
      margin-top:-1em;
      margin-bottom:1em;
      margin-left:-0.55em;
    }
    `
  ]
})

export class NehubaViewer2DLandmarkUnit implements AfterViewInit{
  @Input() height : number
  @Input() scale : number = 50
  @Input() landmark:Landmark
  @ViewChild('nodeView',{read:ViewContainerRef}) nodeView : ViewContainerRef

  constructor(private landmarkServices:LandmarkServices){

  }

  ngAfterViewInit(){
    this.landmarkServices.onChangeLandmarkNodeView((landmark,view)=>{
      if(landmark.id == this.landmark.id){
        this.nodeView.createEmbeddedView(view)
      }
    })
  }

  styleLandmark(){
    if(this.height){
      
      return this.height >= 0 ? 
        ({
          'flex-direction':`column`,
          'font-size':`${this.scale * 3.0}%`,
          'color' : `rgba(${this.landmark.hover ? HOVER_COLOR :NORMAL_COLOR},${this.scale/100+0.25})`,
          'background-color' : `rgba(${this.landmark.hover ?  HOVER_COLOR : NORMAL_COLOR},${this.scale/100+0.25})`,

        }) : ({
          'flex-direction':`column-reverse`,
          'font-size':`${this.scale * 3.0}%`,
          'color' : `rgba(${this.landmark.hover ? HOVER_COLOR : NORMAL_COLOR},${this.scale/100+0.25})`,
          'background-color' : `rgba(${this.landmark.hover ? HOVER_COLOR : NORMAL_COLOR},${this.scale/100+0.25})`,
        })

    } else {
      return({
        display:'none'
      })
    }
  }

  styleShadow(){
    if(this.height){
      
      const size = 0.4/(0.4*Math.pow(this.height/30,2) + 1) + 0.1
      const returnStyle = {
        display : 'block',
        background:'radial-gradient(rgba(120,60,30,0.8), rgba(120,60,30,0.3))',
      }
      return this.height >= 0 ?
        Object.assign({},returnStyle,{
          'width' : `${size}em`,
          'height' : `${size}em`,
          'border-radius' : `${size/2}em`,
          'margin-top' : `${-1*size/2}em`,
          'margin-left' : `${-1*size/2}em`,
          'border': `1px solid rgba(0,0,0,1.0)`,
          'background':`radial-gradient(rgba(${this.landmark.hover ? HOVER_COLOR + ',0.8' : NORMAL_COLOR + ',0.8'}), rgba(${this.landmark.hover ? HOVER_COLOR + ',0.3' : NORMAL_COLOR + ',0.3'}))`,
        }) : 
        Object.assign({},returnStyle,{
          'width' : `${size}em`,
          'height' : `${size}em`,
          'border-radius' : `${size/2}em`,
          'margin-top' : `${-1*size/2}em`,
          'margin-left' : `${-1*size/2}em`,
          'border': `1px solid rgba(0,0,0,1.0)`,
          'background':`radial-gradient(rgba(${this.landmark.hover ? HOVER_COLOR + ',0.4' : NORMAL_COLOR + ',0.4'}), rgba(${this.landmark.hover ? HOVER_COLOR + ',0.15' : NORMAL_COLOR + ',0.15'}))`,
        })
    }else{
      return({
        display:'none'
      })
    }
  }

  styleBeam(inner:boolean){
    
    if(this.height){
      
      const borderWidth = 1
      return this.height >= 0 ? 
        ({
          'border-top' : `${this.height+(inner?0:2)}px solid rgba(${inner ? this.landmark.hover ? HOVER_COLOR :NORMAL_COLOR : '0,0,0'},0.75)`,
          'border-left' : `${borderWidth+(inner?0:1)}px solid transparent`,
          'border-right' : `${borderWidth+(inner?0:1)}px solid transparent`,
          'width' : `0px`,
          'left':`${-1*(borderWidth+(inner?0:1))}px`
        }) : 
        inner ? 
          ({
            'height':`${-1*this.height}px`,
            'border-left' : `1px dashed rgba(${this.landmark.hover ? HOVER_COLOR :NORMAL_COLOR},1.0)`,
            'border-right' : `1px solid transparent`,
            'width' : `0px`,
          }) : 
          ({

          })
    }else{
      return({
        display:'none'
      })
    }
  }
}

const NORMAL_COLOR : string = '201,54,38'
const HOVER_COLOR : string = '250,150,80'

@Component({
  selector : 'nehubaui-landmark-list',
  template : 
  `
  <ng-template #landmarkList>
    <div class = "panel-body">
      <ul class = "list-group" id = "landmarkList">
        <li
          (mouseenter)="landmark.hover = true"
          (mouseleave)="landmark.hover = false"
          class = "list-group-item"
          *ngFor="let landmark of landmarkServices.landmarks">

          <small>
            <span class = "text-muted">OID :</span> {{ landmark.properties['OID']  }}<br />
            <span class = "text-muted">coordinates :</span> [{{ landmark.properties['geometry.coordinates'] }}]
          </small>
        </li>
      </ul>
      
      <div *ngIf="landmarkServices.landmarks.length>0" class = "btn-group">

        <div class = "default-control btn btn-default btn-sm" (click)="spatialSearch.goTo(0)">
          <i class = "glyphicon glyphicon-fast-backward"></i>
        </div>
        <div class = "btn btn-default btn-sm" (click)="spatialSearch.goTo(spatialSearch.pagination-1)">
          <i class = "glyphicon glyphicon-step-backward"></i>
        </div>

        <div 
          (click)="spatialSearch.goTo(pageNum)"
          [ngClass]="{'btn-primary':spatialSearch.pagination == pageNum}"
          *ngFor = "let pageNum of Array.from(Array(Math.ceil(spatialSearch.numHits / spatialSearch.RESULTS_PER_PAGE)).keys()).filter(hidePagination)"
          class = "pagination-control btn btn-default btn-sm">
          {{ pageNum + 1 }}
        </div>

        <div class = "btn btn-default btn-sm" (click)="spatialSearch.goTo(spatialSearch.pagination+1)">
          <i class = "glyphicon glyphicon-step-forward"></i>
        </div>
        <div class = "btn btn-default btn-sm" (click)="spatialSearch.goTo( spatialSearch.numHits / spatialSearch.RESULTS_PER_PAGE + 1 )">
          <i class = "glyphicon glyphicon-fast-forward"></i>
        </div>

      </div>
      
      <div style="text-align:center; margin-top:10px;">
        {{ spatialSearch.numHits ? spatialSearch.numHits : 0 }} landmarks found.
      </div>

    </div>
  </ng-template>
  `,
  styles : [
    `
    .btn-group
    {
      display:flex
    }

    .btn-group > .default-control
    {
      flex : 0 0 auto;
    }

    .btn-group > .pagination-control
    {
      flex : 1 1 auto;
    }
    ul.list-group#landmarkList > li.list-group-item:hover
    {
      cursor:default;
      background-color:rgba(128,128,128,0.2);
    }
    `
  ]
})

export class NehubaLandmarkList implements AfterViewInit,OnDestroy{
  @ViewChild('landmarkList',{read:TemplateRef}) landmarkList : TemplateRef<any>

  constructor(public mainController:MainController,public spatialSearch:SpatialSearch,public landmarkServices:LandmarkServices){

  }

  Array = Array
  Math = Math

  hidePagination = (idx:number) => {
    const correctedPagination = this.spatialSearch.pagination < 2 ?
      2 :
      this.spatialSearch.pagination > (Math.ceil(this.spatialSearch.numHits / this.spatialSearch.RESULTS_PER_PAGE) - 3) ?
        Math.ceil(this.spatialSearch.numHits / this.spatialSearch.RESULTS_PER_PAGE) - 3 :
        this.spatialSearch.pagination
    return (Math.abs(idx-correctedPagination) < 3)
  }

  widgetComponent : WidgetComponent

  ngAfterViewInit(){
    this.widgetComponent = this.mainController.widgitiseTemplateRef(this.landmarkList,{name:'Query Landmarks'})

    const segmentationUserLayer = this.mainController.nehubaViewer.ngviewer.layerManager.managedLayers[1].layer! as SegmentationUserLayer
    segmentationUserLayer.displayState.selectedAlpha.restoreState(0.2)
  }

  ngOnDestroy(){
    this.widgetComponent.parentViewRef.destroy()
  }
}

