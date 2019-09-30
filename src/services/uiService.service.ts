import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { AtlasViewerAPIServices } from "src/atlasViewer/atlasViewer.apiService.service";
import { ToastHandler } from "src/util/pluginHandlerClasses/toastHandler";

@Injectable({
  providedIn: 'root'
})

export class UIService{
  constructor(
    private snackbar: MatSnackBar,
    private apiService: AtlasViewerAPIServices
  ){
    this.apiService.interactiveViewer.uiHandle.getToastHandler = () => {
      const toasthandler = new ToastHandler()
      let handle
      toasthandler.show = () => {
        handle = this.showMessage(toasthandler.message, {
          duration: toasthandler.timeout,
        })
        
      }

      toasthandler.hide = () => {
        handle && handle.dismiss()
        handle = null
      }
      
      return toasthandler
    } 
  }

  showMessage(message: string, config?: Partial<MatSnackBarConfig>){
    return this.snackbar.open(message, 'Dismiss', config)
  }
}