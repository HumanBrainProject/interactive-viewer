import { InjectionToken } from "@angular/core";
import { LOCAL_STORAGE_CONST } from "src/util/constants";
import { Observable } from "rxjs";
import { IHasId } from "src/util/interfaces";

export const UNDER_REVIEW = {
  ['@id']: "https://nexus.humanbrainproject.org/v0/data/minds/core/embargostatus/v1.0.0/1d726b76-b176-47ed-96f0-b4f2e17d5f19"
}

export const OVERRIDE_IAV_DATASET_PREVIEW_DATASET_FN = new InjectionToken<(file: any, dataset: any) => void>('OVERRIDE_IAV_DATASET_PREVIEW_DATASET_FN')
export const DATASTORE_DEFAULT_STATE = {
  fetchedDataEntries: [],
  favDataEntries: (() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CONST.FAV_DATASET)
      const arr = JSON.parse(saved) as any[]
      return arr.every(item => item && !!item.fullId)
        ? arr
        : []
    } catch (e) {
      // TODO propagate error
      return []
    }
  })(),
  fetchedSpatialData: [],
}

export enum EnumPreviewFileTypes{
  NIFTI,
  IMAGE,
  CHART,
  OTHER,
  VOLUMES,
}

export function determinePreviewFileType(previewFile: any): EnumPreviewFileTypes {
  if (!previewFile) throw new Error(`previewFile is required to determine the file type`)
  const { mimetype, data } = previewFile
  const chartType = data && data['chart.js'] && data['chart.js'].type
  const registerdVolumes = data && data['iav-registered-volumes']
  if ( mimetype === 'application/nifti' ) { return EnumPreviewFileTypes.NIFTI }
  if ( /^image/.test(mimetype)) { return EnumPreviewFileTypes.IMAGE }
  if ( /application\/json/.test(mimetype) && (chartType === 'line' || chartType === 'radar')) { return EnumPreviewFileTypes.CHART }
  if ( /application\/json/.test(mimetype) && !!registerdVolumes) { return EnumPreviewFileTypes.VOLUMES }
  return EnumPreviewFileTypes.OTHER
}

export interface IKgReferenceSpace {
  name: string
}

export interface IKgPublication {
  name: string
  doi: string
  cite: string
}

export interface IKgParcellationRegion {
  id?: string
  name: string
}

export interface IKgActivity {
  methods: string[]
  preparation: string[]
  protocols: string[]
}

export interface IKgDataEntry {
  activity: IKgActivity[]
  name: string
  description: string
  license: string[]
  licenseInfo: string[]
  parcellationRegion: IKgParcellationRegion[]
  formats: string[]
  custodians: string[]
  contributors: string[]
  referenceSpaces: IKgReferenceSpace[]
  files: File[]
  publications: IKgPublication[]
  embargoStatus: IHasId[]

  methods: string[]
  protocols: string[]

  preview?: boolean

  /**
   * TODO typo, should be kgReferences
   */
  kgReference: string[]

  id: string
  fullId: string
}

export interface DatasetPreview {
  datasetId: string
  filename: string
}

export const GET_KGDS_PREVIEW_INFO_FROM_ID_FILENAME = new InjectionToken<({ datasetSchema, datasetId, filename }) => Observable<any|null>>('GET_KGDS_PREVIEW_INFO_FROM_ID_FILENAME')
