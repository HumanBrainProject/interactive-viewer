import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { IHasId } from "src/util/interfaces";
import { TBSDetail, TBSSummary } from "./receptor/type";

export const BS_ENDPOINT = new InjectionToken<string>('BS_ENDPOINT')

export type TRegion = {
  name: string
  status?: string
  context: {
    atlas: IHasId
    template: IHasId
    parcellation: IHasId
  }
}

export const BS_DARKTHEME = new InjectionToken<Observable<boolean>>('BS_DARKTHEME')

export interface IBSSummaryResponse {
  'ReceptorDistribution': TBSSummary
}

export interface IBSDetailResponse {
  'ReceptorDistribution': TBSDetail
}
