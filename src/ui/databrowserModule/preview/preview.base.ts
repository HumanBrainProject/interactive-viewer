import { Input, OnChanges } from "@angular/core";
import { ViewerPreviewFile } from "src/services/state/dataStore.store";
import { Observable } from "rxjs";
import { EnumPreviewFileTypes, determinePreviewFileType } from '../pure'

export class PreviewBase implements OnChanges{

  FILETYPES = EnumPreviewFileTypes

  @Input()
  file: ViewerPreviewFile

  @Input()
  filename: string

  @Input()
  datasetId: string

  @Input()
  datasetSchema: string = 'minds/core/dataset/v1.0.0'

  previewtype: EnumPreviewFileTypes

  fetchingFlag: boolean = false

  ngOnChanges(){
    if (!this.getDatasetPreviewFromId) return
    /**
     * TODO
     * determine if the file is already complete. 
     * if already complete, do not attempt to fetch
     */

    const { datasetId, filename, datasetSchema } = this
    if (!filename || !datasetId) return
    this.fetchingFlag = true
    this.getDatasetPreviewFromId({ datasetSchema, datasetId, filename })
      .subscribe(
        file => {
          if (!file) return
          this.fetchingFlag = false
          this.file = file
          this.previewtype = determinePreviewFileType(file)
        }
      )
  }

  constructor(
    private getDatasetPreviewFromId: ({ datasetSchema, datasetId, filename }) => Observable<any>
  ){
    
  }
}