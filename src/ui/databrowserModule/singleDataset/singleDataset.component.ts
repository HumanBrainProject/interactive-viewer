import { Component, Input, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { KgSingleDatasetService } from "../kgSingleDatasetService.service";
import { Publication, File } from 'src/services/state/dataStore.store'

@Component({
  selector: 'single-dataset-view',
  templateUrl: './singleDataset.template.html',
  styleUrls: [
    `./singleDataset.style.css`
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleDatasetView implements OnInit {

  /**
   * the name/desc/publications are placeholder/fallback entries
   * while the actual data is being loaded from KG with kgSchema and kgId
   */
  @Input() name?: string
  @Input() description?: string
  @Input() publications?: Publication[]

  @Input() kgSchema?: string
  @Input() kgId?: string

  /**
   * sic!
   */
  private kgReference: string[] = []
  private files: File[] = []
  private methods: string[] = []
  /**
   * sic!
   */
  private parcellationRegion: { name: string }[]

  private error: string = null

  public fetchingSingleInfoInProgress = false
  public downloadInProgress = false

  constructor(
    private singleDatasetService: KgSingleDatasetService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit() {
    const { kgId, kgSchema } = this

    if (!kgSchema || !kgId) return
    this.fetchingSingleInfoInProgress = true
    this.singleDatasetService.getInfoFromKg({
      kgId,
      kgSchema
    })
      .then(({ files, publications, name, description, kgReference}) => {
        /**
         * TODO dataset specific
         */
        this.name = name
        this.description = description
        this.kgReference = kgReference
        this.publications = publications
        this.files = files

        this.cdr.markForCheck()
      })
      .catch(e => {
        this.error = e
      })
      .finally(() => {
        this.fetchingSingleInfoInProgress = false
      })
  }

  get downloadEnabled() {
    return this.kgSchema && this.kgId
  }

  get appendedKgReferences() {
    return this.kgReference.map(v => `https://doi.org/${v}`)
  }

  get numOfFiles(){
    return this.files
      ? this.files.length
      : null
  }

  get totalFileByteSize(){
    return this.files
      ? this.files.reduce((acc, curr) => acc + curr.byteSize, 0)
      : null
  }

  downloadZipFromKg() {
    this.downloadInProgress = true
    const { kgId, kgSchema }  = this
    this.singleDatasetService.downloadZipFromKg({
      kgId,
      kgSchema
    })
      .catch(console.error)
      .finally(() => this.downloadInProgress = false)
  }
}