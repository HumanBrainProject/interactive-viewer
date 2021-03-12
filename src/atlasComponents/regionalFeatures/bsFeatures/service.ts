import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { shareReplay } from "rxjs/operators";
import { BS_ENDPOINT, TFeature, TRegion } from "./constants";

@Injectable()
export class BsFeatureService{

  public getAllFeatures$ = this.http.get(`${this.bsEndpoint}/features`).pipe(
    shareReplay(1)
  )

  private processRegion(region: TRegion) {
    return `${region.name} ${region.status ? region.status : '' }`
  }

  public getFeature<T>(featureName: TFeature, region: TRegion) {
    const { context } = region
    const { atlas, parcellation } = context
    return this.http.get<T>(
      `${this.bsEndpoint}/atlases/${encodeURIComponent(atlas["@id"])}/parcellations/${encodeURIComponent(parcellation['@id'])}/regions/${encodeURIComponent(this.processRegion(region))}/features/${encodeURIComponent(featureName)}`
    )
  }
  
  constructor(
    private http: HttpClient,
    @Inject(BS_ENDPOINT) private bsEndpoint: string,
  ){

  }
}