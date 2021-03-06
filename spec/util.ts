import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor{

  intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
    const test = /\/datasets/.test(request.url)
    if (test) {

      const headers = new HttpHeaders()
      headers.set('content-type', 'application/json')

      return of(new HttpResponse({
        status: 200,
        body: [],
        headers
      }))
    } 
    return next.handle(request)
  }
}

export const JUBRAIN_COLIN_CH123_LEFT = {
  "name": "Ch 123 (Basal Forebrain) - left hemisphere",
  "rgb": [
    124,
    233,
    167
  ],
  "labelIndex": 286,
  "ngId": "jubrain colin v18 left",
  "children": [],
  "status": "publicP",
  "position": [
    -2339339,
    4405405,
    -8804805
  ]
}

export const JUBRAIN_COLIN_CH123_RIGHT = {
  "name": "Ch 123 (Basal Forebrain) - right hemisphere",
  "rgb": [
    124,
    233,
    167
  ],
  "ngId": "jubrain colin v18 right",
  "labelIndex": 286,
  "children": [],
  "status": "publicP",
  "position": [
    3240000,
    5153846,
    -8347692
  ]
}

export const COLIN = {
  "name": "MNI Colin 27",
  "fullId": "minds/core/referencespace/v1.0.0/7f39f7be-445b-47c0-9791-e971c0b6d992",
  "type": "template",
  "species": "Human",
  "useTheme": "dark",
  "ngId": "colin",
  "nehubaConfigURL": "nehubaConfig/colinNehubaConfig",
  "parcellations": [
    {
      "name": "JuBrain Cytoarchitectonic Atlas",
      "ngId": "jubrain colin v18 left",
      "auxillaryMeshIndices": [
        65535
      ],
      "hasAdditionalViewMode": [
        "connectivity"
      ],
      "originDatasets": [
        {
          "kgSchema": "minds/core/dataset/v1.0.0",
          "kgId": "4ac9f0bc-560d-47e0-8916-7b24da9bb0ce"
        }
      ],
      "properties": {
        "version": "1.0",
        "description": "This dataset contains the whole-brain parcellation of the JuBrain Cytoarchitectonic Atlas (Amunts and Zilles, 2015) in the MNI Colin 27 as well as the MNI ICBM 152 2009c nonlinear asymmetric reference space. The parcellation is derived from the individual probability maps (PMs) of the cytoarchitectonic regions released in the JuBrain Atlas, that are further combined into a Maximum Probability Map (MPM). The MPM is calculated by considering for each voxel the probability of all cytoarchitectonic areas released in the atlas, and determining the most probable assignment (Eickhoff 2005). Note that methodological improvements and integration of new brain structures may lead to small deviations in earlier released datasets.",
        "publications": [
          {
            "doi": "https://doi.org/10.1038/nrn2776",
            "citation": "Zilles K, Amunts K (2010) Centenary of Brodmann’s map – conception and fate. Nature Reviews Neuroscience 11(2): 139-145 "
          },
          {
            "doi": "https://doi.org/10.1016/j.neuroimage.2007.02.037",
            "citation": "Amunts K, Schleicher A, Zilles K (2007) Cytoarchitecture of the cerebral cortex – more than localization. Neuroimage 37: 1061-1065"
          },
          {
            "doi": "http://dx.doi.org/10.1016/B978-012693019-1/50023-X",
            "citation": "Zilles K, Schleicher A, Palomero-Gallagher N, Amunts K (2002) Quantitative analysis of cyto- and receptor architecture of the human brain. In: /Brain Mapping: The Methods/, J. C. Mazziotta and A. Toga (eds.), USA: Elsevier, 2002, p. 573-602."
          }
        ]
      },
      "regions": [
        {
          "name": "telencephalon",
          "status": null,
          "labelIndex": null,
          "synonyms": [],
          "rgb": null,
          "children": [
            {
              "name": "cerebral nuclei",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "basal forebrain",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "magnocellular group within septum",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Ch 123 (Basal Forebrain)",
                          "arealabel": "Ch-123",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/7SEP-P2V",
                          "synonyms": [],
                          "rgb": [
                            124,
                            233,
                            167
                          ],
                          "children": [
                            {
                              "name": "Ch 123 (Basal Forebrain) - left hemisphere",
                              "rgb": [
                                124,
                                233,
                                167
                              ],
                              "labelIndex": 286,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -2339339,
                                4405405,
                                -8804805
                              ]
                            },
                            {
                              "name": "Ch 123 (Basal Forebrain) - right hemisphere",
                              "rgb": [
                                124,
                                233,
                                167
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 286,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                3240000,
                                5153846,
                                -8347692
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "bb111a95-e04c-4987-8254-4af4ed8b0022"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "sublenticular part of basal forebrain",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Ch 4 (Basal Forebrain)",
                          "arealabel": "Ch-4",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/VZJ5-8WJ",
                          "synonyms": [],
                          "rgb": [
                            116,
                            243,
                            12
                          ],
                          "children": [
                            {
                              "name": "Ch 4 (Basal Forebrain) - left hemisphere",
                              "rgb": [
                                116,
                                243,
                                12
                              ],
                              "labelIndex": 264,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -16053628,
                                -454259,
                                -12470032
                              ]
                            },
                            {
                              "name": "Ch 4 (Basal Forebrain) - right hemisphere",
                              "rgb": [
                                116,
                                243,
                                12
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 264,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                17655072,
                                263768,
                                -11539130
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "a5c9d95f-8e7c-4454-91b6-a790387370fc"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "magnocellular group within horizontal limb of diagnoal band",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Ch 123 (Basal Forebrain)",
                          "arealabel": "Ch-123",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/7SEP-P2V",
                          "synonyms": [],
                          "rgb": [
                            124,
                            233,
                            167
                          ],
                          "children": [
                            {
                              "name": "Ch 123 (Basal Forebrain) - left hemisphere",
                              "rgb": [
                                124,
                                233,
                                167
                              ],
                              "labelIndex": 286,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -2339339,
                                4405405,
                                -8804805
                              ]
                            },
                            {
                              "name": "Ch 123 (Basal Forebrain) - right hemisphere",
                              "rgb": [
                                124,
                                233,
                                167
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 286,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                3240000,
                                5153846,
                                -8347692
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "bb111a95-e04c-4987-8254-4af4ed8b0022"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "amygdala",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "laterobasal group",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "LB (Amygdala)",
                          "arealabel": "LB",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/C3X0-NV3",
                          "synonyms": [],
                          "rgb": null,
                          "children": [
                            {
                              "name": "LB (Amygdala) - left hemisphere",
                              "rgb": null,
                              "labelIndex": 15,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP"
                            },
                            {
                              "name": "LB (Amygdala) - right hemisphere",
                              "rgb": null,
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 15,
                              "children": [],
                              "status": "publicP"
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "LB (Amygdala)",
                          "arealabel": "LB",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/C3X0-NV3",
                          "synonyms": [],
                          "rgb": null,
                          "children": [
                            {
                              "name": "LB (Amygdala) - left hemisphere",
                              "rgb": null,
                              "labelIndex": 11,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP"
                            },
                            {
                              "name": "LB (Amygdala) - right hemisphere",
                              "rgb": null,
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 11,
                              "children": [],
                              "status": "publicP"
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "LB (Amygdala)",
                          "arealabel": "LB",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/C3X0-NV3",
                          "synonyms": [],
                          "rgb": null,
                          "children": [
                            {
                              "name": "LB (Amygdala) - left hemisphere",
                              "rgb": null,
                              "labelIndex": 19,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP"
                            },
                            {
                              "name": "LB (Amygdala) - right hemisphere",
                              "rgb": null,
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 19,
                              "children": [],
                              "status": "publicP"
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "LB (Amygdala)",
                          "arealabel": "LB",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/C3X0-NV3",
                          "synonyms": [],
                          "rgb": null,
                          "children": [
                            {
                              "name": "LB (Amygdala) - left hemisphere",
                              "rgb": null,
                              "labelIndex": 13,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -25304803,
                                -1696429,
                                -23766626
                              ]
                            },
                            {
                              "name": "LB (Amygdala) - right hemisphere",
                              "rgb": null,
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 13,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                28015494,
                                -81343,
                                -24045836
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "superficial group",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "SF (Amygdala)",
                          "arealabel": "SF",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/WD31-SEA",
                          "synonyms": [],
                          "rgb": null,
                          "children": [
                            {
                              "name": "SF (Amygdala) - left hemisphere",
                              "rgb": null,
                              "labelIndex": 236,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -16044471,
                                530048,
                                -20831731
                              ]
                            },
                            {
                              "name": "SF (Amygdala) - right hemisphere",
                              "rgb": null,
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 236,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                19382770,
                                1539804,
                                -19413304
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "48929163-bf7b-4471-9f14-991c5225eced"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "SF (Amygdala)",
                          "arealabel": "SF",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/WD31-SEA",
                          "synonyms": [],
                          "rgb": null,
                          "children": [
                            {
                              "name": "SF (Amygdala) - left hemisphere",
                              "rgb": null,
                              "labelIndex": 17,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP"
                            },
                            {
                              "name": "SF (Amygdala) - right hemisphere",
                              "rgb": null,
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 17,
                              "children": [],
                              "status": "publicP"
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "48929163-bf7b-4471-9f14-991c5225eced"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "SF (Amygdala)",
                          "arealabel": "SF",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/WD31-SEA",
                          "synonyms": [],
                          "rgb": [
                            18,
                            168,
                            22
                          ],
                          "children": [
                            {
                              "name": "SF (Amygdala) - left hemisphere",
                              "rgb": [
                                18,
                                168,
                                22
                              ],
                              "labelIndex": 186,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP"
                            },
                            {
                              "name": "SF (Amygdala) - right hemisphere",
                              "rgb": [
                                18,
                                168,
                                22
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 186,
                              "children": [],
                              "status": "publicP"
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "48929163-bf7b-4471-9f14-991c5225eced"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "CM (Amygdala)",
                          "arealabel": "CM",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/36FR-C95",
                          "synonyms": [],
                          "rgb": [
                            102,
                            180,
                            202
                          ],
                          "children": [
                            {
                              "name": "CM (Amygdala) - left hemisphere",
                              "rgb": [
                                102,
                                180,
                                202
                              ],
                              "labelIndex": 22,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP"
                            },
                            {
                              "name": "CM (Amygdala) - right hemisphere",
                              "rgb": [
                                102,
                                180,
                                202
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 22,
                              "children": [],
                              "status": "publicP"
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "7aba8aef-6430-4fa7-ab54-8ecac558faed"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "fiber masses",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "VTM (Amygdala)",
                          "arealabel": "VTM",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/99HN-XRE",
                          "synonyms": [],
                          "rgb": [
                            89,
                            178,
                            185
                          ],
                          "children": [
                            {
                              "name": "VTM (Amygdala) - left hemisphere",
                              "rgb": [
                                89,
                                178,
                                185
                              ],
                              "labelIndex": 228,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -23377907,
                                -9837209,
                                -14848837
                              ]
                            },
                            {
                              "name": "VTM (Amygdala) - right hemisphere",
                              "rgb": [
                                89,
                                178,
                                185
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 228,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                25513514,
                                -8881081,
                                -15551351
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "a964e6e6-8014-41a2-b975-754d75cbb6f2"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "IF (Amygdala)",
                          "arealabel": "IF",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/GWPR-G6K",
                          "synonyms": [],
                          "rgb": [
                            120,
                            190,
                            129
                          ],
                          "children": [
                            {
                              "name": "IF (Amygdala) - left hemisphere",
                              "rgb": [
                                120,
                                190,
                                129
                              ],
                              "labelIndex": 237,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -27588235,
                                -1431373,
                                -17460784
                              ]
                            },
                            {
                              "name": "IF (Amygdala) - right hemisphere",
                              "rgb": [
                                120,
                                190,
                                129
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 237,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                29372549,
                                -813725,
                                -16578431
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "5a1391c8-6056-40e4-a19b-3774df42bd07"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "MF (Amygdala)",
                          "arealabel": "MF",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/9375-55V",
                          "synonyms": [],
                          "rgb": [
                            190,
                            200,
                            9
                          ],
                          "children": [
                            {
                              "name": "MF (Amygdala) - left hemisphere",
                              "rgb": [
                                190,
                                200,
                                9
                              ],
                              "labelIndex": 235,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -18714286,
                                -6523810,
                                -15428571
                              ]
                            },
                            {
                              "name": "MF (Amygdala) - right hemisphere",
                              "rgb": [
                                190,
                                200,
                                9
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 235,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                20976744,
                                -4930233,
                                -14441860
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "3741c788-9412-4b8e-9ab4-9ca2d3a715ca"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "centromedial group",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "CM (Amygdala)",
                          "arealabel": "CM",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/36FR-C95",
                          "synonyms": [],
                          "rgb": [
                            89,
                            4,
                            190
                          ],
                          "children": [
                            {
                              "name": "CM (Amygdala) - left hemisphere",
                              "rgb": [
                                89,
                                4,
                                190
                              ],
                              "labelIndex": 16,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP"
                            },
                            {
                              "name": "CM (Amygdala) - right hemisphere",
                              "rgb": [
                                89,
                                4,
                                190
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 16,
                              "children": [],
                              "status": "publicP"
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "7aba8aef-6430-4fa7-ab54-8ecac558faed"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "CM (Amygdala)",
                          "arealabel": "CM",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/36FR-C95",
                          "synonyms": [],
                          "rgb": [
                            9,
                            120,
                            220
                          ],
                          "children": [
                            {
                              "name": "CM (Amygdala) - left hemisphere",
                              "rgb": [
                                9,
                                120,
                                220
                              ],
                              "labelIndex": 21,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -21108108,
                                -3376448,
                                -13214286
                              ]
                            },
                            {
                              "name": "CM (Amygdala) - right hemisphere",
                              "rgb": [
                                9,
                                120,
                                220
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 21,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                23157767,
                                -2679612,
                                -12555825
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "7aba8aef-6430-4fa7-ab54-8ecac558faed"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "name": "cerebral cortex",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "parietal lobe",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "superior parietal lobule",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 5L (SPL)",
                          "arealabel": "Area-5L",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/C1FQ-2F",
                          "synonyms": [],
                          "rgb": [
                            184,
                            185,
                            58
                          ],
                          "children": [
                            {
                              "name": "Area 5L (SPL) - left hemisphere",
                              "rgb": [
                                184,
                                185,
                                58
                              ],
                              "labelIndex": 130,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -18807832,
                                -47524930,
                                66950353
                              ]
                            },
                            {
                              "name": "Area 5L (SPL) - right hemisphere",
                              "rgb": [
                                184,
                                185,
                                58
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 130,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                12970516,
                                -51174624,
                                70371695
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "64555f7f-1b33-4ffe-9853-be41e7a21096"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 7M (SPL)",
                          "arealabel": "Area-7M",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/F25F-EKW",
                          "synonyms": [],
                          "rgb": [
                            205,
                            61,
                            236
                          ],
                          "children": [
                            {
                              "name": "Area 7M (SPL) - left hemisphere",
                              "rgb": [
                                205,
                                61,
                                236
                              ],
                              "labelIndex": 135,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -777896,
                                -78103082,
                                35256111
                              ]
                            },
                            {
                              "name": "Area 7M (SPL) - right hemisphere",
                              "rgb": [
                                205,
                                61,
                                236
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 135,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                4281250,
                                -75882812,
                                38312500
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "0aacea5c-bc9e-483f-8376-25f176ada158"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 7PC (SPL)",
                          "arealabel": "Area-7PC",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/Z45N-1T",
                          "synonyms": [],
                          "rgb": [
                            252,
                            89,
                            28
                          ],
                          "children": [
                            {
                              "name": "Area 7PC (SPL) - left hemisphere",
                              "rgb": [
                                252,
                                89,
                                28
                              ],
                              "labelIndex": 132,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -32056266,
                                -48916454,
                                60868713
                              ]
                            },
                            {
                              "name": "Area 7PC (SPL) - right hemisphere",
                              "rgb": [
                                252,
                                89,
                                28
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 132,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                30055171,
                                -49079568,
                                61493485
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "763140d3-7ba0-4f28-b0ac-c6cbda2d14e1"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 5M (SPL)",
                          "arealabel": "Area-5M",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/Y12F-YMU",
                          "synonyms": [],
                          "rgb": [
                            225,
                            245,
                            76
                          ],
                          "children": [
                            {
                              "name": "Area 5M (SPL) - left hemisphere",
                              "rgb": [
                                225,
                                245,
                                76
                              ],
                              "labelIndex": 131,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -7527881,
                                -41962560,
                                59221721
                              ]
                            },
                            {
                              "name": "Area 5M (SPL) - right hemisphere",
                              "rgb": [
                                225,
                                245,
                                76
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 131,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                4642562,
                                -44304959,
                                60273140
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "abe105cf-2c29-46af-af75-6b46fdb75137"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 7P (SPL)",
                          "arealabel": "Area-7P",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/C3HS-8R7",
                          "synonyms": [],
                          "rgb": [
                            52,
                            20,
                            106
                          ],
                          "children": [
                            {
                              "name": "Area 7P (SPL) - left hemisphere",
                              "rgb": [
                                52,
                                20,
                                106
                              ],
                              "labelIndex": 208,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -7679310,
                                -76043295,
                                52631801
                              ]
                            },
                            {
                              "name": "Area 7P (SPL) - right hemisphere",
                              "rgb": [
                                52,
                                20,
                                106
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 208,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                14232037,
                                -74892094,
                                56304919
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "af9c4f39-63a4-409f-b306-e5965d639f37"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 5Ci (SPL)",
                          "arealabel": "Area-5Ci",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/SQVP-GK1",
                          "synonyms": [],
                          "rgb": [
                            79,
                            242,
                            146
                          ],
                          "children": [
                            {
                              "name": "Area 5Ci (SPL) - left hemisphere",
                              "rgb": [
                                79,
                                242,
                                146
                              ],
                              "labelIndex": 136,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -14033790,
                                -35828311,
                                43857534
                              ]
                            },
                            {
                              "name": "Area 5Ci (SPL) - right hemisphere",
                              "rgb": [
                                79,
                                242,
                                146
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 136,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                10563961,
                                -36194957,
                                46892989
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "07d08f74-af3d-4cbe-bc3c-f32b7f5c989f"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 7A (SPL)",
                          "arealabel": "Area-7A",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/7HX2-AJH",
                          "synonyms": [],
                          "rgb": [
                            38,
                            204,
                            19
                          ],
                          "children": [
                            {
                              "name": "Area 7A (SPL) - left hemisphere",
                              "rgb": [
                                38,
                                204,
                                19
                              ],
                              "labelIndex": 134,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -20856230,
                                -62269710,
                                61643512
                              ]
                            },
                            {
                              "name": "Area 7A (SPL) - right hemisphere",
                              "rgb": [
                                38,
                                204,
                                19
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 134,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                20910951,
                                -62880523,
                                62944473
                              ]
                            }
                          ],
                          "relatedAreas": [
                            {
                              "name": "Area 7A",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "811f4adb-4a7c-45c1-8034-4afa9edf586a"
                                }
                              }
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "e26e999f-77ad-4934-9569-8290ed05ebda"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "parietal operculum",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area OP3 (POperc)",
                          "arealabel": "Area-OP3",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/1Z8F-PX4",
                          "synonyms": [],
                          "rgb": [
                            58,
                            122,
                            80
                          ],
                          "children": [
                            {
                              "name": "Area OP3 (POperc) - left hemisphere",
                              "rgb": [
                                58,
                                122,
                                80
                              ],
                              "labelIndex": 75,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -40814044,
                                -13737321,
                                17669701
                              ]
                            },
                            {
                              "name": "Area OP3 (POperc) - right hemisphere",
                              "rgb": [
                                58,
                                122,
                                80
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 75,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                41195980,
                                -11633166,
                                18002513
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "f6f10b01-6c10-42cf-8129-f5aaf307a36b"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area OP4 (POperc)",
                          "arealabel": "Area-OP4",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/BVT0-H3U",
                          "synonyms": [],
                          "rgb": [
                            89,
                            80,
                            132
                          ],
                          "children": [
                            {
                              "name": "Area OP4 (POperc) - left hemisphere",
                              "rgb": [
                                89,
                                80,
                                132
                              ],
                              "labelIndex": 72,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -60514139,
                                -10849614,
                                15368038
                              ]
                            },
                            {
                              "name": "Area OP4 (POperc) - right hemisphere",
                              "rgb": [
                                89,
                                80,
                                132
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 72,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                63398148,
                                -9211111,
                                12780864
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b1e7f0d2-6d37-4047-9c2e-a08c3f1e2a16"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area OP2 (POperc)",
                          "arealabel": "Area-OP2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/5KBV-36J",
                          "synonyms": [],
                          "rgb": [
                            36,
                            47,
                            221
                          ],
                          "children": [
                            {
                              "name": "Area OP2 (POperc) - left hemisphere",
                              "rgb": [
                                36,
                                47,
                                221
                              ],
                              "labelIndex": 74,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -36355372,
                                -23452479,
                                18938017
                              ]
                            },
                            {
                              "name": "Area OP2 (POperc) - right hemisphere",
                              "rgb": [
                                36,
                                47,
                                221
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 74,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                35629457,
                                -21159690,
                                18021705
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "ab26cefd-f7d6-4442-8020-a6e418e673ff"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area OP1 (POperc)",
                          "arealabel": "Area-OP1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/SH37-979",
                          "synonyms": [],
                          "rgb": [
                            250,
                            182,
                            34
                          ],
                          "children": [
                            {
                              "name": "Area OP1 (POperc) - left hemisphere",
                              "rgb": [
                                250,
                                182,
                                34
                              ],
                              "labelIndex": 73,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -51566527,
                                -22523828,
                                17190240
                              ]
                            },
                            {
                              "name": "Area OP1 (POperc) - right hemisphere",
                              "rgb": [
                                250,
                                182,
                                34
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 73,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                52888430,
                                -20697107,
                                17000826
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "402ec28d-0809-4226-91a4-900d9303291b"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "postcentral gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 3b (PostCG)",
                          "arealabel": "Area-3b",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/2JK3-QXR",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area 3b",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "74304fe9-452e-4ca3-97a3-8cf3459bb1a0"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            239,
                            246,
                            155
                          ],
                          "children": [
                            {
                              "name": "Area 3b (PostCG) - left hemisphere",
                              "rgb": [
                                239,
                                246,
                                155
                              ],
                              "labelIndex": 127,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -44439219,
                                -21735041,
                                46012387
                              ]
                            },
                            {
                              "name": "Area 3b (PostCG) - right hemisphere",
                              "rgb": [
                                239,
                                246,
                                155
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 127,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                38765839,
                                -25096118,
                                48227174
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b84f67bb-5d9f-4daf-a8d6-15f63f901bd4"
                            }
                          }
                        },
                        {
                          "name": "Area 1 (PostCG)",
                          "arealabel": "Area-1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/THB5-B64",
                          "synonyms": [],
                          "rgb": [
                            232,
                            185,
                            250
                          ],
                          "children": [
                            {
                              "name": "Area 1 (PostCG) - left hemisphere",
                              "rgb": [
                                232,
                                185,
                                250
                              ],
                              "labelIndex": 125,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -47104485,
                                -28297920,
                                57798046
                              ]
                            },
                            {
                              "name": "Area 1 (PostCG) - right hemisphere",
                              "rgb": [
                                232,
                                185,
                                250
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 125,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                48452543,
                                -27132790,
                                56150187
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "c9753e82-80ca-4074-a704-9dd2c4c0d58b"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 2 (PostCS)",
                          "arealabel": "Area-2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/QA8F-DD2",
                          "synonyms": [],
                          "rgb": [
                            23,
                            13,
                            35
                          ],
                          "children": [
                            {
                              "name": "Area 2 (PostCS) - left hemisphere",
                              "rgb": [
                                23,
                                13,
                                35
                              ],
                              "labelIndex": 252,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -42268059,
                                -32424512,
                                51210202
                              ]
                            },
                            {
                              "name": "Area 2 (PostCS) - right hemisphere",
                              "rgb": [
                                23,
                                13,
                                35
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 252,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                38223619,
                                -34651627,
                                52535010
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "f9147ae9-5cf0-41b2-89a3-e6e6df07bef1"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 3a (PostCG)",
                          "arealabel": "Area-3a",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/C5QQ-EFB",
                          "synonyms": [],
                          "rgb": [
                            187,
                            133,
                            50
                          ],
                          "children": [
                            {
                              "name": "Area 3a (PostCG) - left hemisphere",
                              "rgb": [
                                187,
                                133,
                                50
                              ],
                              "labelIndex": 126,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -31927553,
                                -25650901,
                                44513889
                              ]
                            },
                            {
                              "name": "Area 3a (PostCG) - right hemisphere",
                              "rgb": [
                                187,
                                133,
                                50
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 126,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                38813714,
                                -19184000,
                                36284571
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "2657ecc1-da69-4a37-9b37-66ae95f9623c"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "inferior parietal lobule",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area PF (IPL)",
                          "arealabel": "Area-PF",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/F1TJ-54W",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area PF",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "f4e177a6-1b2c-48d5-a62c-91949ba636e4"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            226,
                            211,
                            61
                          ],
                          "children": [
                            {
                              "name": "Area PF (IPL) - left hemisphere",
                              "rgb": [
                                226,
                                211,
                                61
                              ],
                              "labelIndex": 206,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -59814938,
                                -37432365,
                                36569295
                              ]
                            },
                            {
                              "name": "Area PF (IPL) - right hemisphere",
                              "rgb": [
                                226,
                                211,
                                61
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 206,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                64016699,
                                -33052700,
                                30153112
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "18e5e1b0-6c25-4f55-a967-0834d2bd3ee4"
                            }
                          }
                        },
                        {
                          "name": "Area PFcm (IPL)",
                          "arealabel": "Area-PFcm",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/8DP8-8HE",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area PFcm",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "f07d441f-452f-471b-ac7c-0d3c2ae16fb2"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            98,
                            128,
                            120
                          ],
                          "children": [
                            {
                              "name": "Area PFcm (IPL) - left hemisphere",
                              "rgb": [
                                98,
                                128,
                                120
                              ],
                              "labelIndex": 113,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -51751410,
                                -36954069,
                                22546334
                              ]
                            },
                            {
                              "name": "Area PFcm (IPL) - right hemisphere",
                              "rgb": [
                                98,
                                128,
                                120
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 113,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                53524370,
                                -31637287,
                                23177904
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "10502c3a-f20e-44fa-b985-786d6888d4bb"
                            }
                          }
                        },
                        {
                          "name": "Area PGa (IPL)",
                          "arealabel": "Area-PGa",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/V5HY-XTS",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area PGa",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "d5b168a3-a92e-4ab3-8b4d-61e58e5b7a1c"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            42,
                            236,
                            131
                          ],
                          "children": [
                            {
                              "name": "Area PGa (IPL) - left hemisphere",
                              "rgb": [
                                42,
                                236,
                                131
                              ],
                              "labelIndex": 110,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -48873487,
                                -60780569,
                                37191889
                              ]
                            },
                            {
                              "name": "Area PGa (IPL) - right hemisphere",
                              "rgb": [
                                42,
                                236,
                                131
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 110,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                55283797,
                                -55333653,
                                30316395
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "d7f6c5be-93c6-4a16-8939-4420329d4147"
                            }
                          }
                        },
                        {
                          "name": "Area PFt (IPL)",
                          "arealabel": "Area-PFt",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/JGM9-ZET",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area PFt",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "9ff7fcc4-a88b-4bf8-be07-1386a3760a96"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            120,
                            135,
                            232
                          ],
                          "children": [
                            {
                              "name": "Area PFt (IPL) - left hemisphere",
                              "rgb": [
                                120,
                                135,
                                232
                              ],
                              "labelIndex": 109,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -55015237,
                                -27583919,
                                38095874
                              ]
                            },
                            {
                              "name": "Area PFt (IPL) - right hemisphere",
                              "rgb": [
                                120,
                                135,
                                232
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 109,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                54808632,
                                -24626296,
                                37973570
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "847cef50-7340-470d-8580-327b4ce9db19"
                            }
                          }
                        },
                        {
                          "name": "Area PFm (IPL)",
                          "arealabel": "Area-PFm",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/TB94-HRK",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area PFm",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "3455ada4-48c3-4748-ae38-2fe3f376f0fc"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            53,
                            76,
                            145
                          ],
                          "children": [
                            {
                              "name": "Area PFm (IPL) - left hemisphere",
                              "rgb": [
                                53,
                                76,
                                145
                              ],
                              "labelIndex": 112,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -54527689,
                                -52389045,
                                38877207
                              ]
                            },
                            {
                              "name": "Area PFm (IPL) - right hemisphere",
                              "rgb": [
                                53,
                                76,
                                145
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 112,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                56990022,
                                -45541717,
                                38606571
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "411edde9-685f-464b-970c-a929f9a4067c"
                            }
                          }
                        },
                        {
                          "name": "Area PGp (IPL)",
                          "arealabel": "Area-PGp",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/FPFJ-ZCD",
                          "synonyms": [],
                          "rgb": [
                            92,
                            116,
                            83
                          ],
                          "children": [
                            {
                              "name": "Area PGp (IPL) - left hemisphere",
                              "rgb": [
                                92,
                                116,
                                83
                              ],
                              "labelIndex": 108,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -44673441,
                                -73269937,
                                29840224
                              ]
                            },
                            {
                              "name": "Area PGp (IPL) - right hemisphere",
                              "rgb": [
                                92,
                                116,
                                83
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 108,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                47749459,
                                -70528695,
                                30721440
                              ]
                            }
                          ],
                          "relatedAreas": [
                            {
                              "name": "Area PGp",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "1b00a0e4-9493-43ff-bfbd-b02119064813"
                                }
                              }
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b3ef6947-76c9-4935-bbc6-8b2329c0967b"
                            }
                          }
                        },
                        {
                          "name": "Area PFop (IPL)",
                          "arealabel": "Area-PFop",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/M2PM-92Q",
                          "synonyms": [],
                          "rgb": [
                            146,
                            153,
                            177
                          ],
                          "children": [
                            {
                              "name": "Area PFop (IPL) - left hemisphere",
                              "rgb": [
                                146,
                                153,
                                177
                              ],
                              "labelIndex": 111,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -60026462,
                                -24694986,
                                24259053
                              ]
                            },
                            {
                              "name": "Area PFop (IPL) - right hemisphere",
                              "rgb": [
                                146,
                                153,
                                177
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 111,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                58286575,
                                -20617534,
                                24917260
                              ]
                            }
                          ],
                          "relatedAreas": [
                            {
                              "name": "Area PFop",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "b4397c40-82e1-4d62-b97a-44e8d04b428b"
                                }
                              }
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "e8262e56-88fe-4006-b078-def4d78416b8"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "parieto-occipital sulcus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area hPO1 (POS)",
                          "arealabel": "Area-hPO1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/W50A-FAP",
                          "synonyms": [],
                          "rgb": [
                            153,
                            232,
                            235
                          ],
                          "children": [
                            {
                              "name": "Area hPO1 (POS) - left hemisphere",
                              "rgb": [
                                153,
                                232,
                                235
                              ],
                              "labelIndex": 297,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -15069260,
                                -80661951,
                                37074565
                              ]
                            },
                            {
                              "name": "Area hPO1 (POS) - right hemisphere",
                              "rgb": [
                                153,
                                232,
                                235
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 297,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                21853147,
                                -80927739,
                                37048660
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "a78998c2-99d4-4738-bbda-82a317f713f1"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "intraparietal sulcus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area hIP1 (IPS)",
                          "arealabel": "Area-hIP1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/92FE-7S6",
                          "synonyms": [],
                          "rgb": [
                            66,
                            149,
                            82
                          ],
                          "children": [
                            {
                              "name": "Area hIP1 (IPS) - left hemisphere",
                              "rgb": [
                                66,
                                149,
                                82
                              ],
                              "labelIndex": 128,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -36841999,
                                -49449871,
                                40584028
                              ]
                            },
                            {
                              "name": "Area hIP1 (IPS) - right hemisphere",
                              "rgb": [
                                66,
                                149,
                                82
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 128,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                40629988,
                                -48019372,
                                39158853
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "7722c71f-fe84-4deb-8f6b-98e2aecf2e31"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hIP7 (IPS)",
                          "arealabel": "Area-hIP7",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/WRCY-8Z1",
                          "synonyms": [],
                          "rgb": [
                            71,
                            196,
                            218
                          ],
                          "children": [
                            {
                              "name": "Area hIP7 (IPS) - left hemisphere",
                              "rgb": [
                                71,
                                196,
                                218
                              ],
                              "labelIndex": 296,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -22044741,
                                -79989011,
                                29353218
                              ]
                            },
                            {
                              "name": "Area hIP7 (IPS) - right hemisphere",
                              "rgb": [
                                71,
                                196,
                                218
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 296,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                29041586,
                                -79117828,
                                27046207
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "9c6c3c96-8129-4e0e-aa22-a0fb435aab45"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hIP3 (IPS)",
                          "arealabel": "Area-hIP3",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/P8X0-V1G",
                          "synonyms": [],
                          "rgb": [
                            113,
                            172,
                            229
                          ],
                          "children": [
                            {
                              "name": "Area hIP3 (IPS) - left hemisphere",
                              "rgb": [
                                113,
                                172,
                                229
                              ],
                              "labelIndex": 133,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -30430769,
                                -55031164,
                                46842209
                              ]
                            },
                            {
                              "name": "Area hIP3 (IPS) - right hemisphere",
                              "rgb": [
                                113,
                                172,
                                229
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 133,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                33538679,
                                -49884591,
                                50461950
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "700ac6db-870d-44f1-8786-0c01207f992b"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hIP2 (IPS)",
                          "arealabel": "Area-hIP2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/EJTM-NDY",
                          "synonyms": [],
                          "rgb": [
                            127,
                            245,
                            203
                          ],
                          "children": [
                            {
                              "name": "Area hIP2 (IPS) - left hemisphere",
                              "rgb": [
                                127,
                                245,
                                203
                              ],
                              "labelIndex": 129,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -46531100,
                                -41482722,
                                43278044
                              ]
                            },
                            {
                              "name": "Area hIP2 (IPS) - right hemisphere",
                              "rgb": [
                                127,
                                245,
                                203
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 129,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                44605145,
                                -39958613,
                                45130872
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "4490ef3e-ce60-4453-9e9f-85388d0603cb"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hIP4 (IPS)",
                          "arealabel": "Area-hIP4",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/TSEN-QSY",
                          "synonyms": [],
                          "rgb": [
                            254,
                            52,
                            184
                          ],
                          "children": [
                            {
                              "name": "Area hIP4 (IPS) - left hemisphere",
                              "rgb": [
                                254,
                                52,
                                184
                              ],
                              "labelIndex": 294,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -29349066,
                                -79948651,
                                25849585
                              ]
                            },
                            {
                              "name": "Area hIP4 (IPS) - right hemisphere",
                              "rgb": [
                                254,
                                52,
                                184
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 294,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                37324927,
                                -76495150,
                                22338021
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "5875bfe2-99ca-4e50-bce2-61c201c3dd54"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hIP5 (IPS)",
                          "arealabel": "Area-hIP5",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/RNSM-Y4Y",
                          "synonyms": [],
                          "rgb": [
                            217,
                            87,
                            210
                          ],
                          "children": [
                            {
                              "name": "Area hIP5 (IPS) - left hemisphere",
                              "rgb": [
                                217,
                                87,
                                210
                              ],
                              "labelIndex": 295,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -28321120,
                                -73162807,
                                36664362
                              ]
                            },
                            {
                              "name": "Area hIP5 (IPS) - right hemisphere",
                              "rgb": [
                                217,
                                87,
                                210
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 295,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                34614713,
                                -68930590,
                                33299252
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "f9717dec-0310-4078-a4ae-294170b4fb37"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hIP6 (IPS)",
                          "arealabel": "Area-hIP6",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/AFQR-50Q",
                          "synonyms": [],
                          "rgb": [
                            237,
                            233,
                            37
                          ],
                          "children": [
                            {
                              "name": "Area hIP6 (IPS) - left hemisphere",
                              "rgb": [
                                237,
                                233,
                                37
                              ],
                              "labelIndex": 292,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -31988131,
                                -66522626,
                                46155045
                              ]
                            },
                            {
                              "name": "Area hIP6 (IPS) - right hemisphere",
                              "rgb": [
                                237,
                                233,
                                37
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 292,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                37069307,
                                -63723479,
                                45628006
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b9975f8e-f484-4e82-883a-5fd765855ae0"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hIP8 (IPS)",
                          "arealabel": "Area-hIP8",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/YYT8-FT8",
                          "synonyms": [],
                          "rgb": [
                            223,
                            109,
                            3
                          ],
                          "children": [
                            {
                              "name": "Area hIP8 (IPS) - left hemisphere",
                              "rgb": [
                                223,
                                109,
                                3
                              ],
                              "labelIndex": 293,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -18133307,
                                -72231198,
                                43245125
                              ]
                            },
                            {
                              "name": "Area hIP8 (IPS) - right hemisphere",
                              "rgb": [
                                223,
                                109,
                                3
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 293,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                26220986,
                                -71480127,
                                41680048
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "a2c1acc7-7fdc-4fbd-90ee-729eda7fdff3"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "occiptal lobe",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "dorsal occipital cortex",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area hOc6 (POS)",
                          "arealabel": "Area-hOc6",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/4101-1ZG",
                          "synonyms": [],
                          "rgb": [
                            239,
                            66,
                            26
                          ],
                          "children": [
                            {
                              "name": "Area hOc6 (POS) - left hemisphere",
                              "rgb": [
                                239,
                                66,
                                26
                              ],
                              "labelIndex": 291,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -15925775,
                                -70685971,
                                16518760
                              ]
                            },
                            {
                              "name": "Area hOc6 (POS) - right hemisphere",
                              "rgb": [
                                239,
                                66,
                                26
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 291,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                17750454,
                                -67625227,
                                17755898
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "d72e0210-a910-4b15-bcaf-80c3433cd3e0"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hOc4d (Cuneus)",
                          "arealabel": "Area-hOc4d",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/VSK5-DET",
                          "synonyms": [],
                          "rgb": [
                            109,
                            218,
                            10
                          ],
                          "children": [
                            {
                              "name": "Area hOc4d (Cuneus) - left hemisphere",
                              "rgb": [
                                109,
                                218,
                                10
                              ],
                              "labelIndex": 119,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -17209585,
                                -87846006,
                                25522684
                              ]
                            },
                            {
                              "name": "Area hOc4d (Cuneus) - right hemisphere",
                              "rgb": [
                                109,
                                218,
                                10
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 119,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                20232373,
                                -87193644,
                                27253227
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "8120426c-f65b-4426-8a58-3060e2334921"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hOc3d (Cuneus)",
                          "arealabel": "Area-hOc3d",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/F9X3-JVJ",
                          "synonyms": [],
                          "rgb": [
                            105,
                            191,
                            48
                          ],
                          "children": [
                            {
                              "name": "Area hOc3d (Cuneus) - left hemisphere",
                              "rgb": [
                                105,
                                191,
                                48
                              ],
                              "labelIndex": 120,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -12816505,
                                -91289984,
                                21840872
                              ]
                            },
                            {
                              "name": "Area hOc3d (Cuneus) - right hemisphere",
                              "rgb": [
                                105,
                                191,
                                48
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 120,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                16129503,
                                -88897084,
                                23080617
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "d7ec4342-ae58-41e3-a68c-28e90a719d41"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "ventral occipital cortex",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area hOc3v (LingG)",
                          "arealabel": "Area-hOc3v",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/E5E8-1VV",
                          "synonyms": [],
                          "rgb": [
                            83,
                            179,
                            155
                          ],
                          "children": [
                            {
                              "name": "Area hOc3v (LingG) - left hemisphere",
                              "rgb": [
                                83,
                                179,
                                155
                              ],
                              "labelIndex": 10,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -18685863,
                                -85629087,
                                -10106719
                              ]
                            },
                            {
                              "name": "Area hOc3v (LingG) - right hemisphere",
                              "rgb": [
                                83,
                                179,
                                155
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 10,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                24296060,
                                -81686611,
                                -10031193
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "0d6392fd-b905-4bc3-bac9-fc44d8990a30"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hOc4v (LingG)",
                          "arealabel": "Area-hOc4v",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/AASR-M8P",
                          "synonyms": [],
                          "rgb": [
                            222,
                            77,
                            155
                          ],
                          "children": [
                            {
                              "name": "Area hOc4v (LingG) - left hemisphere",
                              "rgb": [
                                222,
                                77,
                                155
                              ],
                              "labelIndex": 9,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -26315808,
                                -78419533,
                                -12497238
                              ]
                            },
                            {
                              "name": "Area hOc4v (LingG) - right hemisphere",
                              "rgb": [
                                222,
                                77,
                                155
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 9,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                32665897,
                                -76519832,
                                -12453305
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "27d91cbb-5611-4d38-bd17-c0f1ac22b4cc"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "occipital cortex",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area hOc2 (V2, 18)",
                          "arealabel": "Area-hOc2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/QG9C-THD",
                          "synonyms": [],
                          "rgb": [
                            84,
                            110,
                            22
                          ],
                          "children": [
                            {
                              "name": "Area hOc2 (V2, 18) - left hemisphere",
                              "rgb": [
                                84,
                                110,
                                22
                              ],
                              "labelIndex": 7,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -10521334,
                                -88185706,
                                4055081
                              ]
                            },
                            {
                              "name": "Area hOc2 (V2, 18) - right hemisphere",
                              "rgb": [
                                84,
                                110,
                                22
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 7,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                15409559,
                                -86163484,
                                2905309
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "04674a3c-bb3a-495e-a466-206355e630bd"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hOc1 (V1, 17, CalcS)",
                          "arealabel": "Area-hOc1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/MXJ6-6DH",
                          "synonyms": [],
                          "rgb": [
                            190,
                            132,
                            147
                          ],
                          "children": [
                            {
                              "name": "Area hOc1 (V1, 17, CalcS) - left hemisphere",
                              "rgb": [
                                190,
                                132,
                                147
                              ],
                              "labelIndex": 8,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -8533787,
                                -84646549,
                                1855106
                              ]
                            },
                            {
                              "name": "Area hOc1 (V1, 17, CalcS) - right hemisphere",
                              "rgb": [
                                190,
                                132,
                                147
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 8,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                14654595,
                                -81416396,
                                1637838
                              ]
                            }
                          ],
                          "relatedAreas": [
                            {
                              "name": "Area hOc1",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "b851eb9d-9502-45e9-8dd8-2861f0e6da3f"
                                }
                              }
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "5151ab8f-d8cb-4e67-a449-afe2a41fb007"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "lateral occipital cortex",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area hOc4lp (LOC)",
                          "arealabel": "Area-hOc4lp",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/4B87-Q8X",
                          "synonyms": [],
                          "rgb": [
                            96,
                            113,
                            253
                          ],
                          "children": [
                            {
                              "name": "Area hOc4lp (LOC) - left hemisphere",
                              "rgb": [
                                96,
                                113,
                                253
                              ],
                              "labelIndex": 117,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -34066943,
                                -88725728,
                                6360721
                              ]
                            },
                            {
                              "name": "Area hOc4lp (LOC) - right hemisphere",
                              "rgb": [
                                96,
                                113,
                                253
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 117,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                38538256,
                                -86375516,
                                4086228
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "9006ee6a-6dc1-4604-9f20-7e08b42d574d"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hOc5 (LOC)",
                          "arealabel": "Area-hOc5",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/2WSH-MCT",
                          "synonyms": [],
                          "rgb": [
                            255,
                            0,
                            0
                          ],
                          "children": [
                            {
                              "name": "Area hOc5 (LOC) - left hemisphere",
                              "rgb": [
                                255,
                                0,
                                0
                              ],
                              "labelIndex": 6,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -42484324,
                                -71486486,
                                1795676
                              ]
                            },
                            {
                              "name": "Area hOc5 (LOC) - right hemisphere",
                              "rgb": [
                                255,
                                0,
                                0
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 6,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                48090700,
                                -66172216,
                                3121699
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b40afb5a-e6a1-47b6-8a3e-1f8a20fbf99a"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area hOc4la (LOC)",
                          "arealabel": "Area-hOc4la",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/Z9JX-WKB",
                          "synonyms": [],
                          "rgb": [
                            233,
                            168,
                            189
                          ],
                          "children": [
                            {
                              "name": "Area hOc4la (LOC) - left hemisphere",
                              "rgb": [
                                233,
                                168,
                                189
                              ],
                              "labelIndex": 118,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -46291484,
                                -76947955,
                                -372761
                              ]
                            },
                            {
                              "name": "Area hOc4la (LOC) - right hemisphere",
                              "rgb": [
                                233,
                                168,
                                189
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 118,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                48566255,
                                -73862041,
                                -779202
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "94365b82-6204-4937-8b86-fe0433287938"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "frontal lobe",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "inferior frontal gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 44 (IFG)",
                          "arealabel": "Area-44",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/F9P8-ZVW",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area 44v",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "7e5e7aa8-28b8-445b-8980-2a6f3fa645b3"
                                }
                              }
                            },
                            {
                              "name": "Area 44d",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "8aeae833-81c8-4e27-a8d6-deee339d6052"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            54,
                            74,
                            75
                          ],
                          "children": [
                            {
                              "name": "Area 44 (IFG) - left hemisphere",
                              "rgb": [
                                54,
                                74,
                                75
                              ],
                              "labelIndex": 2,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -54242820,
                                11425127,
                                18292735
                              ]
                            },
                            {
                              "name": "Area 44 (IFG) - right hemisphere",
                              "rgb": [
                                54,
                                74,
                                75
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 2,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                56359074,
                                11741030,
                                13444358
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "8a6be82c-5947-4fff-8348-cf9bf73e4f40"
                            }
                          }
                        },
                        {
                          "name": "Area 45 (IFG)",
                          "arealabel": "Area-45",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/MR1V-BJ3",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area 45",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "131e6de8-b073-4f01-8f60-1bdb5a6c9a9a"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            167,
                            103,
                            146
                          ],
                          "children": [
                            {
                              "name": "Area 45 (IFG) - left hemisphere",
                              "rgb": [
                                167,
                                103,
                                146
                              ],
                              "labelIndex": 1,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -54903012,
                                26558233,
                                15528514
                              ]
                            },
                            {
                              "name": "Area 45 (IFG) - right hemisphere",
                              "rgb": [
                                167,
                                103,
                                146
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 1,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                55787613,
                                26216770,
                                12102941
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "cb32e688-43f0-4ae3-9554-085973137663"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "dorsal precentral gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 6d2 (PreCG)",
                          "arealabel": "Area-6d2",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/KXHS-N90",
                          "synonyms": [],
                          "rgb": [
                            170,
                            151,
                            180
                          ],
                          "children": [
                            {
                              "name": "Area 6d2 (PreCG) - left hemisphere",
                              "rgb": [
                                170,
                                151,
                                180
                              ],
                              "labelIndex": 288,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -15757793,
                                2030353,
                                68024610
                              ]
                            },
                            {
                              "name": "Area 6d2 (PreCG) - right hemisphere",
                              "rgb": [
                                170,
                                151,
                                180
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 288,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                14562976,
                                2312675,
                                68442439
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "963c5281-67df-4d41-9b91-60b31cf150c0"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 6d1 (PreCG)",
                          "arealabel": "Area-6d1",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/4WSQ-8FM",
                          "synonyms": [],
                          "rgb": [
                            45,
                            33,
                            27
                          ],
                          "children": [
                            {
                              "name": "Area 6d1 (PreCG) - left hemisphere",
                              "rgb": [
                                45,
                                33,
                                27
                              ],
                              "labelIndex": 287,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -20332759,
                                -14746524,
                                68590141
                              ]
                            },
                            {
                              "name": "Area 6d1 (PreCG) - right hemisphere",
                              "rgb": [
                                45,
                                33,
                                27
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 287,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                20258981,
                                -16559656,
                                68870890
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "a802f3dc-b7e5-48b7-9845-832a6e6f9b1c"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "posterior medial superior frontal gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 6ma (preSMA, mesial SFG)",
                          "arealabel": "Area-6ma",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/WVNR-SPT",
                          "synonyms": [],
                          "rgb": [
                            204,
                            108,
                            222
                          ],
                          "children": [
                            {
                              "name": "Area 6ma (preSMA, mesial SFG) - left hemisphere",
                              "rgb": [
                                204,
                                108,
                                222
                              ],
                              "labelIndex": 299,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -4083913,
                                4296092,
                                58555023
                              ]
                            },
                            {
                              "name": "Area 6ma (preSMA, mesial SFG) - right hemisphere",
                              "rgb": [
                                204,
                                108,
                                222
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 299,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                5230140,
                                4042128,
                                58355079
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "07b4c6a1-8a24-4f88-8f73-b2ea06e1c2f3"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "superior frontal sulcus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 6d3 (SFS)",
                          "arealabel": "Area-6d3",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/NVJ5-JJ",
                          "synonyms": [],
                          "rgb": [
                            55,
                            239,
                            21
                          ],
                          "children": [
                            {
                              "name": "Area 6d3 (SFS) - left hemisphere",
                              "rgb": [
                                55,
                                239,
                                21
                              ],
                              "labelIndex": 289,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -23315931,
                                4317151,
                                51434008
                              ]
                            },
                            {
                              "name": "Area 6d3 (SFS) - right hemisphere",
                              "rgb": [
                                55,
                                239,
                                21
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 289,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                25173639,
                                1578188,
                                53334281
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "266c1ada-1840-462f-8223-7ff2df457552"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "frontal pole",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area Fp1 (FPole)",
                          "arealabel": "Area-Fp1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/PTKW-R7W",
                          "synonyms": [],
                          "rgb": [
                            226,
                            14,
                            200
                          ],
                          "children": [
                            {
                              "name": "Area Fp1 (FPole) - left hemisphere",
                              "rgb": [
                                226,
                                14,
                                200
                              ],
                              "labelIndex": 212,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -16331031,
                                64168302,
                                549101
                              ]
                            },
                            {
                              "name": "Area Fp1 (FPole) - right hemisphere",
                              "rgb": [
                                226,
                                14,
                                200
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 212,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                18482225,
                                63988011,
                                -317043
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "10dc5343-941b-4e3e-80ed-df031c33bbc6"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Fp2 (FPole)",
                          "arealabel": "Area-Fp2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/GZW1-7R3",
                          "synonyms": [],
                          "rgb": [
                            239,
                            137,
                            211
                          ],
                          "children": [
                            {
                              "name": "Area Fp2 (FPole) - left hemisphere",
                              "rgb": [
                                239,
                                137,
                                211
                              ],
                              "labelIndex": 211,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -3739067,
                                59074587,
                                -1181973
                              ]
                            },
                            {
                              "name": "Area Fp2 (FPole) - right hemisphere",
                              "rgb": [
                                239,
                                137,
                                211
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 211,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                6093420,
                                59611191,
                                -509606
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "3bf7bde1-cc06-4657-b296-380275f9d4b8"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "precentral gyrus ",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 4p (PreCG)",
                          "arealabel": "Area-4p",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/5HSF-81J",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area 4p",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "861ab96a-c4b5-4ba6-bd40-1e80d4680f89"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            116,
                            92,
                            124
                          ],
                          "children": [
                            {
                              "name": "Area 4p (PreCG) - left hemisphere",
                              "rgb": [
                                116,
                                92,
                                124
                              ],
                              "labelIndex": 123,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -36140917,
                                -22750424,
                                49282965
                              ]
                            },
                            {
                              "name": "Area 4p (PreCG) - right hemisphere",
                              "rgb": [
                                116,
                                92,
                                124
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 123,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                37510795,
                                -21359659,
                                46456250
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "82e6e826-a439-41db-84ff-4674ca3d643a"
                            }
                          }
                        },
                        {
                          "name": "Area 4a (PreCG)",
                          "arealabel": "Area-4a",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/PVPP-P3Q",
                          "synonyms": [],
                          "rgb": [
                            118,
                            239,
                            183
                          ],
                          "children": [
                            {
                              "name": "Area 4a (PreCG) - left hemisphere",
                              "rgb": [
                                118,
                                239,
                                183
                              ],
                              "labelIndex": 124,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -17367391,
                                -28669064,
                                67404682
                              ]
                            },
                            {
                              "name": "Area 4a (PreCG) - right hemisphere",
                              "rgb": [
                                118,
                                239,
                                183
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 124,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                9609157,
                                -31334779,
                                68068112
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "175848ff-4c55-47e3-a0ae-f905a14e03cd"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "mesial precentral gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area 6mp (SMA, mesial SFG)",
                          "arealabel": "Area-6mp",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/2E1T-47F",
                          "synonyms": [],
                          "rgb": [
                            75,
                            95,
                            87
                          ],
                          "children": [
                            {
                              "name": "Area 6mp (SMA, mesial SFG) - left hemisphere",
                              "rgb": [
                                75,
                                95,
                                87
                              ],
                              "labelIndex": 298,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -4094374,
                                -14286751,
                                59329220
                              ]
                            },
                            {
                              "name": "Area 6mp (SMA, mesial SFG) - right hemisphere",
                              "rgb": [
                                75,
                                95,
                                87
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 298,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                4949202,
                                -13788668,
                                57534028
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "def99e8e-ce8f-4a62-bd5d-739948c4b010"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "medial orbitofrontal cortex",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area Fo1 (OFC)",
                          "arealabel": "Area-Fo1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/H2N2-6J2",
                          "synonyms": [],
                          "rgb": [
                            7,
                            255,
                            179
                          ],
                          "children": [
                            {
                              "name": "Area Fo1 (OFC) - left hemisphere",
                              "rgb": [
                                7,
                                255,
                                179
                              ],
                              "labelIndex": 3,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -7962771,
                                41364968,
                                -22537687
                              ]
                            },
                            {
                              "name": "Area Fo1 (OFC) - right hemisphere",
                              "rgb": [
                                7,
                                255,
                                179
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 3,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                9705948,
                                40760961,
                                -22481988
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "3864cb8c-f277-4de6-9f8d-c76d71d7e9a9"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Fo3 (OFC)",
                          "arealabel": "Area-Fo3",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/E1YQ-65U",
                          "synonyms": [],
                          "rgb": [
                            182,
                            189,
                            250
                          ],
                          "children": [
                            {
                              "name": "Area Fo3 (OFC) - left hemisphere",
                              "rgb": [
                                182,
                                189,
                                250
                              ],
                              "labelIndex": 5,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -21866985,
                                33732378,
                                -19882472
                              ]
                            },
                            {
                              "name": "Area Fo3 (OFC) - right hemisphere",
                              "rgb": [
                                182,
                                189,
                                250
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 5,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                22929678,
                                33527877,
                                -20231493
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "741f6a9e-cfd7-4173-ac7d-ee616c29555e"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Fo2 (OFC)",
                          "arealabel": "Area-Fo2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/3JB9-2V2",
                          "synonyms": [],
                          "rgb": [
                            0,
                            255,
                            0
                          ],
                          "children": [
                            {
                              "name": "Area Fo2 (OFC) - left hemisphere",
                              "rgb": [
                                0,
                                255,
                                0
                              ],
                              "labelIndex": 4,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -8588272,
                                22532156,
                                -20474464
                              ]
                            },
                            {
                              "name": "Area Fo2 (OFC) - right hemisphere",
                              "rgb": [
                                0,
                                255,
                                0
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 4,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                9164379,
                                21928964,
                                -20593342
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "30a04d2b-58e1-43d7-8b8f-1f0b598382d0"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "frontal operculum ",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area OP8 (Frontal Operculum)",
                          "arealabel": "Area-OP8",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/NGF8-TA4",
                          "synonyms": [],
                          "rgb": [
                            29,
                            76,
                            168
                          ],
                          "children": [
                            {
                              "name": "Area OP8 (Frontal Operculum) - left hemisphere",
                              "rgb": [
                                29,
                                76,
                                168
                              ],
                              "labelIndex": 273,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -41777921,
                                17183344,
                                7912847
                              ]
                            },
                            {
                              "name": "Area OP8 (Frontal Operculum) - right hemisphere",
                              "rgb": [
                                29,
                                76,
                                168
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 273,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                42725111,
                                16774146,
                                7832095
                              ]
                            }
                          ]
                        },
                        {
                          "name": "Area OP9 (Frontal Operculum)",
                          "arealabel": "Area-OP9",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/3A30-5E4",
                          "synonyms": [],
                          "rgb": [
                            175,
                            123,
                            34
                          ],
                          "children": [
                            {
                              "name": "Area OP9 (Frontal Operculum) - left hemisphere",
                              "rgb": [
                                175,
                                123,
                                34
                              ],
                              "labelIndex": 274,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -45090542,
                                25998787,
                                5597413
                              ]
                            },
                            {
                              "name": "Area OP9 (Frontal Operculum) - right hemisphere",
                              "rgb": [
                                175,
                                123,
                                34
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 274,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                44374928,
                                26272467,
                                2966228
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "name": "lateral orbitofrontal cortex",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area Fo5 (OFC)",
                          "arealabel": "Area-Fo5",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/HJMY-ZZP",
                          "synonyms": [],
                          "rgb": [
                            219,
                            11,
                            91
                          ],
                          "children": [
                            {
                              "name": "Area Fo5 (OFC) - left hemisphere",
                              "rgb": [
                                219,
                                11,
                                91
                              ],
                              "labelIndex": 325,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -38055351,
                                56315867,
                                -8720295
                              ]
                            },
                            {
                              "name": "Area Fo5 (OFC) - right hemisphere",
                              "rgb": [
                                219,
                                11,
                                91
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 325,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                40545983,
                                54504228,
                                -4983615
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "3fd2e113-ec08-407b-bc88-172c9285694a"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Fo4 (OFC)",
                          "arealabel": "Area-Fo4",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/29G0-66F",
                          "synonyms": [],
                          "rgb": [
                            163,
                            204,
                            53
                          ],
                          "children": [
                            {
                              "name": "Area Fo4 (OFC) - left hemisphere",
                              "rgb": [
                                163,
                                204,
                                53
                              ],
                              "labelIndex": 324,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -27573653,
                                52998204,
                                -14510778
                              ]
                            },
                            {
                              "name": "Area Fo4 (OFC) - right hemisphere",
                              "rgb": [
                                163,
                                204,
                                53
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 324,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                33636124,
                                52034755,
                                -15509742
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "2cdee956-207a-4d4d-b051-bef80045210b"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Fo6 (OFC)",
                          "arealabel": "Area-Fo6",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/34Q4-H62",
                          "synonyms": [],
                          "rgb": [
                            199,
                            156,
                            187
                          ],
                          "children": [
                            {
                              "name": "Area Fo6 (OFC) - left hemisphere",
                              "rgb": [
                                199,
                                156,
                                187
                              ],
                              "labelIndex": 326,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -44272971,
                                42876258,
                                -12938967
                              ]
                            },
                            {
                              "name": "Area Fo6 (OFC) - right hemisphere",
                              "rgb": [
                                199,
                                156,
                                187
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 326,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                48891176,
                                40513824,
                                -12457353
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "330ae178-557c-4bd0-a932-f138c0a05345"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Fo7 (OFC)",
                          "arealabel": "Area-Fo7",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/3WEV-561",
                          "synonyms": [],
                          "rgb": [
                            64,
                            211,
                            186
                          ],
                          "children": [
                            {
                              "name": "Area Fo7 (OFC) - left hemisphere",
                              "rgb": [
                                64,
                                211,
                                186
                              ],
                              "labelIndex": 327,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -36046240,
                                37308943,
                                -11666667
                              ]
                            },
                            {
                              "name": "Area Fo7 (OFC) - right hemisphere",
                              "rgb": [
                                64,
                                211,
                                186
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 327,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                37850755,
                                37700302,
                                -13777644
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "1b882148-fcdd-4dbe-b33d-659957840e9e"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "insula",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "granular insula",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area Ig1 (Insula)",
                          "arealabel": "Area-Ig1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/EKV9-29D",
                          "synonyms": [],
                          "rgb": [
                            18,
                            111,
                            40
                          ],
                          "children": [
                            {
                              "name": "Area Ig1 (Insula) - left hemisphere",
                              "rgb": [
                                18,
                                111,
                                40
                              ],
                              "labelIndex": 115,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -33211215,
                                -24171963,
                                9923364
                              ]
                            },
                            {
                              "name": "Area Ig1 (Insula) - right hemisphere",
                              "rgb": [
                                18,
                                111,
                                40
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 115,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                33707983,
                                -23338235,
                                9071429
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "46cf08af-8086-4e8a-9e9f-182ca583bdf0"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Ig3 (Insula)",
                          "arealabel": "Area-Ig3",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "",
                          "synonyms": [],
                          "rgb": [
                            105,
                            253,
                            197
                          ],
                          "children": [
                            {
                              "name": "Area Ig3 (Insula) - left hemisphere",
                              "rgb": [
                                105,
                                253,
                                197
                              ],
                              "labelIndex": 336,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -37956284,
                                -14423497,
                                13513661
                              ]
                            },
                            {
                              "name": "Area Ig3 (Insula) - right hemisphere",
                              "rgb": [
                                105,
                                253,
                                197
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 336,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                38219144,
                                -13750630,
                                13916877
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "10dba769-4f6c-40f9-8ffd-e0cce71c5adb"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Ig2 (Insula)",
                          "arealabel": "Area-Ig2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/662G-E0W",
                          "synonyms": [],
                          "rgb": [
                            105,
                            61,
                            82
                          ],
                          "children": [
                            {
                              "name": "Area Ig2 (Insula) - left hemisphere",
                              "rgb": [
                                105,
                                61,
                                82
                              ],
                              "labelIndex": 114,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -37117338,
                                -17859895,
                                5094571
                              ]
                            },
                            {
                              "name": "Area Ig2 (Insula) - right hemisphere",
                              "rgb": [
                                105,
                                61,
                                82
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 114,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                37843632,
                                -16445145,
                                5703657
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "49092952-1eef-4b89-b8bf-1bf1f25f149a"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "agranular insula",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area Ia (Insula)",
                          "arealabel": "Area-Ia",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/WW8G-T2G",
                          "synonyms": [],
                          "rgb": [
                            71,
                            217,
                            62
                          ],
                          "children": [
                            {
                              "name": "Area Ia (Insula) - left hemisphere",
                              "rgb": [
                                71,
                                217,
                                62
                              ],
                              "labelIndex": 339,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -41612827,
                                -1876485,
                                -7019002
                              ]
                            },
                            {
                              "name": "Area Ia (Insula) - right hemisphere",
                              "rgb": [
                                71,
                                217,
                                62
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 339,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                43525000,
                                36538,
                                -7609615
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "110d0d7b-cb88-48ea-9caf-863f548dbe38"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "dys-/agranular insula",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area Id7 (Insula)",
                          "arealabel": "Area-Id7",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/88QG-JMS",
                          "synonyms": [],
                          "rgb": [
                            101,
                            202,
                            38
                          ],
                          "children": [
                            {
                              "name": "Area Id7 (Insula) - left hemisphere",
                              "rgb": [
                                101,
                                202,
                                38
                              ],
                              "labelIndex": 159,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -30926962,
                                23741297,
                                4787031
                              ]
                            },
                            {
                              "name": "Area Id7 (Insula) - right hemisphere",
                              "rgb": [
                                101,
                                202,
                                38
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 159,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                35034429,
                                24873239,
                                2446009
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "3d5729f5-55c6-412a-8fc1-41a95c71b13a"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "dysgranular insula",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area Id2 (Insula)",
                          "arealabel": "Area-Id2",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "",
                          "synonyms": [],
                          "rgb": [
                            225,
                            126,
                            73
                          ],
                          "children": [
                            {
                              "name": "Area Id2 (Insula) - left hemisphere",
                              "rgb": [
                                225,
                                126,
                                73
                              ],
                              "labelIndex": 56,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -41933981,
                                -11436893,
                                4091262
                              ]
                            },
                            {
                              "name": "Area Id2 (Insula) - right hemisphere",
                              "rgb": [
                                225,
                                126,
                                73
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 56,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                44043478,
                                -10289855,
                                3759834
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "cf9dea67-649d-4034-ae57-ec389f339277"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Id1 (Insula)",
                          "arealabel": "Area-Id1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/F37H-8WB",
                          "synonyms": [],
                          "rgb": [
                            141,
                            112,
                            216
                          ],
                          "children": [
                            {
                              "name": "Area Id1 (Insula) - left hemisphere",
                              "rgb": [
                                141,
                                112,
                                216
                              ],
                              "labelIndex": 116,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -40090747,
                                -18279359,
                                -4567616
                              ]
                            },
                            {
                              "name": "Area Id1 (Insula) - right hemisphere",
                              "rgb": [
                                141,
                                112,
                                216
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 116,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                40527825,
                                -17443508,
                                -4688027
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "c22055c1-514f-4096-906b-abf57286053b"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Id3 (Insula)",
                          "arealabel": "Area-Id3",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "",
                          "synonyms": [],
                          "rgb": [
                            32,
                            32,
                            58
                          ],
                          "children": [
                            {
                              "name": "Area Id3 (Insula) - left hemisphere",
                              "rgb": [
                                32,
                                32,
                                58
                              ],
                              "labelIndex": 57,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -40414195,
                                -7819915,
                                -8263771
                              ]
                            },
                            {
                              "name": "Area Id3 (Insula) - right hemisphere",
                              "rgb": [
                                32,
                                32,
                                58
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 57,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                41459316,
                                -6224335,
                                -9042586
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "3dcfcfc2-035c-4785-a820-a671f2104ac3"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Id5 (Insula)",
                          "arealabel": "Area-Id5",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/5CK1-B1G",
                          "synonyms": [],
                          "rgb": [
                            112,
                            6,
                            50
                          ],
                          "children": [
                            {
                              "name": "Area Id5 (Insula) - left hemisphere",
                              "rgb": [
                                112,
                                6,
                                50
                              ],
                              "labelIndex": 338,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -40174302,
                                -3354190,
                                741899
                              ]
                            },
                            {
                              "name": "Area Id5 (Insula) - right hemisphere",
                              "rgb": [
                                112,
                                6,
                                50
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 338,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                41094953,
                                -2659538,
                                607357
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "e03cd3c6-d0be-481c-b906-9b39c1d0b641"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Id6 (Insula)",
                          "arealabel": "Area-Id6",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/54HZ-KFQ",
                          "synonyms": [],
                          "rgb": [
                            138,
                            127,
                            119
                          ],
                          "children": [
                            {
                              "name": "Area Id6 (Insula) - left hemisphere",
                              "rgb": [
                                138,
                                127,
                                119
                              ],
                              "labelIndex": 340,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -36392282,
                                9843698,
                                3385341
                              ]
                            },
                            {
                              "name": "Area Id6 (Insula) - right hemisphere",
                              "rgb": [
                                138,
                                127,
                                119
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 340,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                37750946,
                                10762642,
                                3041624
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "31bbe92d-e5e8-4cf4-be5d-e6b12c71a107"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area Id4 (Insula)",
                          "arealabel": "Area-Id4",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/K63G-89H",
                          "synonyms": [],
                          "rgb": [
                            38,
                            174,
                            113
                          ],
                          "children": [
                            {
                              "name": "Area Id4 (Insula) - left hemisphere",
                              "rgb": [
                                38,
                                174,
                                113
                              ],
                              "labelIndex": 337,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -37055965,
                                -3505155,
                                11422680
                              ]
                            },
                            {
                              "name": "Area Id4 (Insula) - right hemisphere",
                              "rgb": [
                                38,
                                174,
                                113
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 337,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                37461444,
                                -3746634,
                                10858017
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "f480ed72-5ca5-4d1f-8905-cbe9bedcfaee"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "temporal lobe",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "superior temporal sulcus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area STS2 (STS)",
                          "arealabel": "Area-STS2",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/KHY9-J3Y",
                          "synonyms": [],
                          "rgb": [
                            62,
                            117,
                            123
                          ],
                          "children": [
                            {
                              "name": "Area STS2 (STS) - left hemisphere",
                              "rgb": [
                                62,
                                117,
                                123
                              ],
                              "labelIndex": 272,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -56352486,
                                -8557380,
                                -14844672
                              ]
                            },
                            {
                              "name": "Area STS2 (STS) - right hemisphere",
                              "rgb": [
                                62,
                                117,
                                123
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 272,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                56942990,
                                -8020716,
                                -16067930
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "278fc30f-2e24-4046-856b-95dfaf561635"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area STS1 (STS)",
                          "arealabel": "Area-STS1",
                          "status": "publicDOI",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/F6DF-H8P",
                          "synonyms": [],
                          "rgb": [
                            205,
                            228,
                            4
                          ],
                          "children": [
                            {
                              "name": "Area STS1 (STS) - left hemisphere",
                              "rgb": [
                                205,
                                228,
                                4
                              ],
                              "labelIndex": 271,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                -54514755,
                                -16753913,
                                -5260713
                              ]
                            },
                            {
                              "name": "Area STS1 (STS) - right hemisphere",
                              "rgb": [
                                205,
                                228,
                                4
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 271,
                              "children": [],
                              "status": "publicDOI",
                              "position": [
                                54536567,
                                -17992636,
                                -5712544
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "68784b66-ff15-4b09-b28a-a2146c0f8907"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "superior temporal gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area TE 3 (STG)",
                          "arealabel": "Area-TE-3",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/BN5J-JT8",
                          "synonyms": [],
                          "rgb": [
                            159,
                            104,
                            108
                          ],
                          "children": [
                            {
                              "name": "Area TE 3 (STG) - left hemisphere",
                              "rgb": [
                                159,
                                104,
                                108
                              ],
                              "labelIndex": 31,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -64398501,
                                -12497885,
                                1316801
                              ]
                            },
                            {
                              "name": "Area TE 3 (STG) - right hemisphere",
                              "rgb": [
                                159,
                                104,
                                108
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 31,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                65811519,
                                -9018989,
                                -1027621
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "7e1a3291-efdc-4ca6-a3d0-6c496c34639f"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "Heschl's gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area TE 1.2 (HESCHL)",
                          "arealabel": "Area-TE-1.2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/R382-617",
                          "synonyms": [],
                          "rgb": [
                            202,
                            251,
                            192
                          ],
                          "children": [
                            {
                              "name": "Area TE 1.2 (HESCHL) - left hemisphere",
                              "rgb": [
                                202,
                                251,
                                192
                              ],
                              "labelIndex": 30,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -50810427,
                                -6551343,
                                1635071
                              ]
                            },
                            {
                              "name": "Area TE 1.2 (HESCHL) - right hemisphere",
                              "rgb": [
                                202,
                                251,
                                192
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 30,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                55870330,
                                -2672527,
                                52747
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "677cd48c-70fa-4bbd-9f0a-ffdc7744bc0f"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area TE 1.1 (HESCHL)",
                          "arealabel": "Area-TE-1.1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/4HA3-BBE",
                          "synonyms": [],
                          "rgb": [
                            8,
                            113,
                            68
                          ],
                          "children": [
                            {
                              "name": "Area TE 1.1 (HESCHL) - left hemisphere",
                              "rgb": [
                                8,
                                113,
                                68
                              ],
                              "labelIndex": 33,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -38219760,
                                -27125577,
                                10774700
                              ]
                            },
                            {
                              "name": "Area TE 1.1 (HESCHL) - right hemisphere",
                              "rgb": [
                                8,
                                113,
                                68
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 33,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                40719340,
                                -24106132,
                                10308962
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "e2969911-77eb-4b21-af70-216cab5285b1"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area TE 1.0 (HESCHL)",
                          "arealabel": "Area-TE-1.0",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/MV3G-RET",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area Te1",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "f424643e-9baf-4c50-9417-db1ac33dcd3e"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            252,
                            84,
                            222
                          ],
                          "children": [
                            {
                              "name": "Area TE 1.0 (HESCHL) - left hemisphere",
                              "rgb": [
                                252,
                                84,
                                222
                              ],
                              "labelIndex": 27,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -46560150,
                                -17508772,
                                7622807
                              ]
                            },
                            {
                              "name": "Area TE 1.0 (HESCHL) - right hemisphere",
                              "rgb": [
                                252,
                                84,
                                222
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 27,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                50392116,
                                -12932573,
                                5942946
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "13e21153-2ba8-4212-b172-8894f1012225"
                            }
                          }
                        }
                      ]
                    },
                    {
                      "name": "fusiform gyrus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area FG2 (FusG)",
                          "arealabel": "Area-FG2",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/F2JH-KVV",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area FG2",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "8f436328-4251-4706-ae38-767e1ab21c6f"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            67,
                            94,
                            149
                          ],
                          "children": [
                            {
                              "name": "Area FG2 (FusG) - left hemisphere",
                              "rgb": [
                                67,
                                94,
                                149
                              ],
                              "labelIndex": 106,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -43549584,
                                -65531770,
                                -16708135
                              ]
                            },
                            {
                              "name": "Area FG2 (FusG) - right hemisphere",
                              "rgb": [
                                67,
                                94,
                                149
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 106,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                44839825,
                                -63606518,
                                -17316773
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "6e7a0441-4baa-4355-921b-50d23d07d50f"
                            }
                          }
                        },
                        {
                          "name": "Area FG3 (FusG)",
                          "arealabel": "Area-FG3",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/Z0F6-0SY",
                          "synonyms": [],
                          "rgb": [
                            120,
                            147,
                            37
                          ],
                          "children": [
                            {
                              "name": "Area FG3 (FusG) - left hemisphere",
                              "rgb": [
                                120,
                                147,
                                37
                              ],
                              "labelIndex": 239,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -29844935,
                                -45368421,
                                -14184493
                              ]
                            },
                            {
                              "name": "Area FG3 (FusG) - right hemisphere",
                              "rgb": [
                                120,
                                147,
                                37
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 239,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                31148061,
                                -44485336,
                                -15533822
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "023f8ef7-c266-4c45-8bf2-4a17dc52985b"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area FG1 (FusG)",
                          "arealabel": "Area-FG1",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/5ZVQ-R8R",
                          "synonyms": [],
                          "rgb": [
                            131,
                            183,
                            58
                          ],
                          "children": [
                            {
                              "name": "Area FG1 (FusG) - left hemisphere",
                              "rgb": [
                                131,
                                183,
                                58
                              ],
                              "labelIndex": 107,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -29006116,
                                -66264526,
                                -12290010
                              ]
                            },
                            {
                              "name": "Area FG1 (FusG) - right hemisphere",
                              "rgb": [
                                131,
                                183,
                                58
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 107,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                32840456,
                                -64340456,
                                -12612536
                              ]
                            }
                          ],
                          "relatedAreas": [
                            {
                              "name": "Area FG1",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "6318e160-4ad2-4eec-8a2e-2df6fe07d8f4"
                                }
                              }
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "39fb34a8-fd6d-4fba-898c-2f6167e40459"
                            }
                          }
                        },
                        {
                          "name": "Area FG4 (FusG)",
                          "arealabel": "Area-FG4",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/13RG-FYV",
                          "synonyms": [],
                          "relatedAreas": [
                            {
                              "name": "Area FG2",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "8f436328-4251-4706-ae38-767e1ab21c6f"
                                }
                              }
                            }
                          ],
                          "rgb": [
                            170,
                            220,
                            175
                          ],
                          "children": [
                            {
                              "name": "Area FG4 (FusG) - left hemisphere",
                              "rgb": [
                                170,
                                220,
                                175
                              ],
                              "labelIndex": 238,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -43204016,
                                -44325167,
                                -20016734
                              ]
                            },
                            {
                              "name": "Area FG4 (FusG) - right hemisphere",
                              "rgb": [
                                170,
                                220,
                                175
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 238,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                43609694,
                                -43478025,
                                -22392295
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "fa602743-5f6e-49d1-9734-29dffaa95ff5"
                            }
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "limbic lobe",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "cingulate gyrus, frontal part",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Area p24c (pACC)",
                          "arealabel": "Area-p24c",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/QA7B-JM9",
                          "synonyms": [],
                          "rgb": [
                            241,
                            164,
                            195
                          ],
                          "children": [
                            {
                              "name": "Area p24c (pACC) - left hemisphere",
                              "rgb": [
                                241,
                                164,
                                195
                              ],
                              "labelIndex": 232,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -8144989,
                                41168443,
                                14314854
                              ]
                            },
                            {
                              "name": "Area p24c (pACC) - right hemisphere",
                              "rgb": [
                                241,
                                164,
                                195
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 232,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                9856593,
                                40780558,
                                12002406
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "e6507a3d-f2f8-4c17-84ff-0e7297e836a0"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 25 (sACC)",
                          "arealabel": "Area-25",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/51AM-WN4",
                          "synonyms": [],
                          "rgb": [
                            170,
                            68,
                            220
                          ],
                          "children": [
                            {
                              "name": "Area 25 (sACC) - left hemisphere",
                              "rgb": [
                                170,
                                68,
                                220
                              ],
                              "labelIndex": 184,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -3522692,
                                13560250,
                                -11860720
                              ]
                            },
                            {
                              "name": "Area 25 (sACC) - right hemisphere",
                              "rgb": [
                                170,
                                68,
                                220
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 184,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                4564663,
                                12954463,
                                -12174863
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "9010ef76-accd-4308-9951-f37b6a10f42b"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area p24ab (pACC)",
                          "arealabel": "Area-p24ab",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/DHXC-2KN",
                          "synonyms": [],
                          "rgb": [
                            153,
                            195,
                            229
                          ],
                          "children": [
                            {
                              "name": "Area p24ab (pACC) - left hemisphere",
                              "rgb": [
                                153,
                                195,
                                229
                              ],
                              "labelIndex": 231,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -2244059,
                                38783168,
                                6389109
                              ]
                            },
                            {
                              "name": "Area p24ab (pACC) - right hemisphere",
                              "rgb": [
                                153,
                                195,
                                229
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 231,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                3429274,
                                38385609,
                                7809963
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "5dbb1035-487c-4f43-b551-ccadcf058340"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area s32 (sACC)",
                          "arealabel": "Area-s32",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/XTRR-172",
                          "synonyms": [],
                          "rgb": [
                            193,
                            94,
                            250
                          ],
                          "children": [
                            {
                              "name": "Area s32 (sACC) - left hemisphere",
                              "rgb": [
                                193,
                                94,
                                250
                              ],
                              "labelIndex": 46,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -6738110,
                                35256183,
                                -11765377
                              ]
                            },
                            {
                              "name": "Area s32 (sACC) - right hemisphere",
                              "rgb": [
                                193,
                                94,
                                250
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 46,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                4307795,
                                34460360,
                                -12141905
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "61b44255-ae3a-4a23-b1bc-7d303a48dbd3"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area 33 (ACC)",
                          "arealabel": "Area-33",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/X9QP-C6F",
                          "synonyms": [],
                          "rgb": [
                            51,
                            57,
                            245
                          ],
                          "children": [
                            {
                              "name": "Area 33 (ACC) - left hemisphere",
                              "rgb": [
                                51,
                                57,
                                245
                              ],
                              "labelIndex": 39,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -4861218,
                                14163048,
                                15911877
                              ]
                            },
                            {
                              "name": "Area 33 (ACC) - right hemisphere",
                              "rgb": [
                                51,
                                57,
                                245
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 39,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                5087045,
                                15562321,
                                16125051
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b83a3330-b80e-42a0-b8d2-82f38784aa1d"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area p32 (pACC)",
                          "arealabel": "Area-p32",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/3JX0-7E5",
                          "synonyms": [],
                          "rgb": [
                            87,
                            135,
                            14
                          ],
                          "children": [
                            {
                              "name": "Area p32 (pACC) - left hemisphere",
                              "rgb": [
                                87,
                                135,
                                14
                              ],
                              "labelIndex": 47,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -6122937,
                                49256108,
                                11929896
                              ]
                            },
                            {
                              "name": "Area p32 (pACC) - right hemisphere",
                              "rgb": [
                                87,
                                135,
                                14
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 47,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                7759613,
                                48520792,
                                12436058
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b09aaa77-f41b-4008-b8b9-f984b0417cf3"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Area s24 (sACC)",
                          "arealabel": "Area-s24",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/HXWM-NRX",
                          "synonyms": [],
                          "rgb": [
                            133,
                            34,
                            201
                          ],
                          "children": [
                            {
                              "name": "Area s24 (sACC) - left hemisphere",
                              "rgb": [
                                133,
                                34,
                                201
                              ],
                              "labelIndex": 183,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -3247887,
                                24596479,
                                -9615493
                              ]
                            },
                            {
                              "name": "Area s24 (sACC) - right hemisphere",
                              "rgb": [
                                133,
                                34,
                                201
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 183,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                3259899,
                                23813535,
                                -9257019
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "d4ea6cc5-1e1d-4212-966f-81fed01eb648"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "hippocampal formation",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "HATA (Hippocampus)",
                          "arealabel": "HATA",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/M1XP-VSQ",
                          "synonyms": [],
                          "rgb": [
                            137,
                            12,
                            73
                          ],
                          "children": [
                            {
                              "name": "HATA (Hippocampus) - left hemisphere",
                              "rgb": [
                                137,
                                12,
                                73
                              ],
                              "labelIndex": 68,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -13947917,
                                -9576389,
                                -18975694
                              ]
                            },
                            {
                              "name": "HATA (Hippocampus) - right hemisphere",
                              "rgb": [
                                137,
                                12,
                                73
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 68,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                15080586,
                                -8358974,
                                -17871795
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "9ec4a423-70fa-43cd-90b3-fbc26a3cbc6c"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Entorhinal Cortex",
                          "arealabel": "Entorhinal-Cortex",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/KNXY-B1Z",
                          "synonyms": [],
                          "rgb": [
                            35,
                            159,
                            214
                          ],
                          "children": [
                            {
                              "name": "Entorhinal Cortex - left hemisphere",
                              "rgb": [
                                35,
                                159,
                                214
                              ],
                              "labelIndex": 60,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -20926052,
                                -6082765,
                                -33357509
                              ]
                            },
                            {
                              "name": "Entorhinal Cortex - right hemisphere",
                              "rgb": [
                                35,
                                159,
                                214
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 60,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                22877203,
                                -3501469,
                                -32577556
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "030827d4-e0d1-4406-b71f-3f58dc2f9cca"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "CA (Hippocampus)",
                          "arealabel": "CA",
                          "status": "publicP",
                          "labelIndex": null,
                          "relatedAreas": [
                            {
                              "name": "CA1 (Hippocampus)",
                              "fullId": {
                                "kg": {
                                  "kgSchema": "minds/core/parcellationregion/v1.0.0",
                                  "kgId": "bfc0beb7-310c-4c57-b810-2adc464bd02c"
                                }
                              }
                            }
                          ],
                          "doi": "https://doi.org/10.25493/B85T-D88",
                          "synonyms": [],
                          "rgb": [
                            250,
                            191,
                            217
                          ],
                          "children": [
                            {
                              "name": "CA (Hippocampus) - left hemisphere",
                              "rgb": [
                                250,
                                191,
                                217
                              ],
                              "labelIndex": 191,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -27476326,
                                -26068931,
                                -11082817
                              ]
                            },
                            {
                              "name": "CA (Hippocampus) - right hemisphere",
                              "rgb": [
                                250,
                                191,
                                217
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 191,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                29426785,
                                -24801145,
                                -11142814
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "a0d14d3e-bc30-41cf-8b28-540067897f80"
                            }
                          }
                        },
                        {
                          "name": "DG (Hippocampus)",
                          "arealabel": "DG",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/M8JP-XQT",
                          "synonyms": [],
                          "rgb": [
                            149,
                            55,
                            120
                          ],
                          "children": [
                            {
                              "name": "DG (Hippocampus) - left hemisphere",
                              "rgb": [
                                149,
                                55,
                                120
                              ],
                              "labelIndex": 61,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -26946498,
                                -26708171,
                                -9589494
                              ]
                            },
                            {
                              "name": "DG (Hippocampus) - right hemisphere",
                              "rgb": [
                                149,
                                55,
                                120
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 61,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                28316456,
                                -24674684,
                                -10596203
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "0bea7e03-bfb2-4907-9d45-db9071ce627d"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Subiculum (Hippocampus)",
                          "arealabel": "Subiculum",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/QKJH-F45",
                          "synonyms": [],
                          "rgb": [
                            111,
                            125,
                            219
                          ],
                          "children": [
                            {
                              "name": "Subiculum (Hippocampus) - left hemisphere",
                              "rgb": [
                                111,
                                125,
                                219
                              ],
                              "labelIndex": 192,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -20352171,
                                -24057796,
                                -16326997
                              ]
                            },
                            {
                              "name": "Subiculum (Hippocampus) - right hemisphere",
                              "rgb": [
                                111,
                                125,
                                219
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 192,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                22543982,
                                -23195614,
                                -15923499
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "7e2dab4c-a140-440d-a322-c1679adef2d4"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "metencephalon",
          "status": null,
          "labelIndex": null,
          "synonyms": [],
          "rgb": null,
          "children": [
            {
              "name": "cerebellum",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "cerebellar nuclei",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "globose nucleus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Interposed Nucleus (Cerebellum)",
                          "arealabel": "Interposed-Nucleus",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/8PTB-JDH",
                          "synonyms": [],
                          "rgb": [
                            170,
                            29,
                            10
                          ],
                          "children": [
                            {
                              "name": "Interposed Nucleus (Cerebellum) - left hemisphere",
                              "rgb": [
                                170,
                                29,
                                10
                              ],
                              "labelIndex": 251,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -8457921,
                                -55262376,
                                -30235149
                              ]
                            },
                            {
                              "name": "Interposed Nucleus (Cerebellum) - right hemisphere",
                              "rgb": [
                                170,
                                29,
                                10
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 251,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                7917989,
                                -54201058,
                                -31489418
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "85e7bb13-4b73-4f6f-8222-3adb7b800788"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "dentate nucleus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Dorsal Dentate Nucleus (Cerebellum)",
                          "arealabel": "Dorsal-Dentate-Nucleus",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/M5QG-SHH",
                          "synonyms": [],
                          "rgb": [
                            89,
                            201,
                            99
                          ],
                          "children": [
                            {
                              "name": "Dorsal Dentate Nucleus (Cerebellum) - left hemisphere",
                              "rgb": [
                                89,
                                201,
                                99
                              ],
                              "labelIndex": 240,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -16612782,
                                -56036341,
                                -36064536
                              ]
                            },
                            {
                              "name": "Dorsal Dentate Nucleus (Cerebellum) - right hemisphere",
                              "rgb": [
                                89,
                                201,
                                99
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 240,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                15388967,
                                -58303395,
                                -36586280
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "58095aef-da69-43d4-887c-009c095cecce"
                            }
                          },
                          "relatedAreas": []
                        },
                        {
                          "name": "Ventral Dentate Nucleus (Cerebellum)",
                          "arealabel": "Ventral-Dentate-Nucleus",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/FQE5-5QR",
                          "synonyms": [],
                          "rgb": [
                            39,
                            129,
                            9
                          ],
                          "children": [
                            {
                              "name": "Ventral Dentate Nucleus (Cerebellum) - left hemisphere",
                              "rgb": [
                                39,
                                129,
                                9
                              ],
                              "labelIndex": 241,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -13112867,
                                -56176072,
                                -29957111
                              ]
                            },
                            {
                              "name": "Ventral Dentate Nucleus (Cerebellum) - right hemisphere",
                              "rgb": [
                                39,
                                129,
                                9
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 241,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                12107011,
                                -55974170,
                                -31385609
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "57282342-5a75-4e07-bcdc-2d368c517b71"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "fastigial nucleus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Fastigial Nucleus (Cerebellum)",
                          "arealabel": "Fastigial-Nucleus",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/3YJ9-S6G",
                          "synonyms": [],
                          "rgb": [
                            200,
                            100,
                            10
                          ],
                          "children": [
                            {
                              "name": "Fastigial Nucleus (Cerebellum) - left hemisphere",
                              "rgb": [
                                200,
                                100,
                                10
                              ],
                              "labelIndex": 219,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -3828877,
                                -53149733,
                                -29013369
                              ]
                            },
                            {
                              "name": "Fastigial Nucleus (Cerebellum) - right hemisphere",
                              "rgb": [
                                200,
                                100,
                                10
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 219,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                3011287,
                                -53069977,
                                -29040632
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "e8abfe3d-8b64-45c2-8853-314d82873273"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    },
                    {
                      "name": "emboliform nucleus",
                      "status": null,
                      "labelIndex": null,
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "Interposed Nucleus (Cerebellum)",
                          "arealabel": "Interposed-Nucleus",
                          "status": "publicP",
                          "labelIndex": null,
                          "doi": "https://doi.org/10.25493/8PTB-JDH",
                          "synonyms": [],
                          "rgb": [
                            170,
                            29,
                            10
                          ],
                          "children": [
                            {
                              "name": "Interposed Nucleus (Cerebellum) - left hemisphere",
                              "rgb": [
                                170,
                                29,
                                10
                              ],
                              "labelIndex": 251,
                              "ngId": "jubrain colin v18 left",
                              "children": [],
                              "status": "publicP",
                              "position": [
                                -8457921,
                                -55262376,
                                -30235149
                              ]
                            },
                            {
                              "name": "Interposed Nucleus (Cerebellum) - right hemisphere",
                              "rgb": [
                                170,
                                29,
                                10
                              ],
                              "ngId": "jubrain colin v18 right",
                              "labelIndex": 251,
                              "children": [],
                              "status": "publicP",
                              "position": [
                                7917989,
                                -54201058,
                                -31489418
                              ]
                            }
                          ],
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "85e7bb13-4b73-4f6f-8222-3adb7b800788"
                            }
                          },
                          "relatedAreas": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "properties": {
    "name": "MNI Colin 27",
    "description": "A stereotaxic average of 27 T1-weighted MRI scans of the same individual. (Holmes et al., 1998), mapped to fit the MNI305 space.  Although not capturing brain variability, it is well established in neuroscience due to its high definition. HBP provides the JuBrain probabilistic cytoarchitectonic atlas (Amunts et al.) in this space."
  }
}

export const JUBRAIN_COLIN = {
  "name": "JuBrain Cytoarchitectonic Atlas",
  "ngId": "jubrain colin v18 left",
  "auxillaryMeshIndices": [
    65535
  ],
  "hasAdditionalViewMode": [
    "connectivity"
  ],
  "originDatasets": [
    {
      "kgSchema": "minds/core/dataset/v1.0.0",
      "kgId": "4ac9f0bc-560d-47e0-8916-7b24da9bb0ce"
    }
  ],
  "properties": {
    "version": "1.0",
    "description": "This dataset contains the whole-brain parcellation of the JuBrain Cytoarchitectonic Atlas (Amunts and Zilles, 2015) in the MNI Colin 27 as well as the MNI ICBM 152 2009c nonlinear asymmetric reference space. The parcellation is derived from the individual probability maps (PMs) of the cytoarchitectonic regions released in the JuBrain Atlas, that are further combined into a Maximum Probability Map (MPM). The MPM is calculated by considering for each voxel the probability of all cytoarchitectonic areas released in the atlas, and determining the most probable assignment (Eickhoff 2005). Note that methodological improvements and integration of new brain structures may lead to small deviations in earlier released datasets.",
    "publications": [
      {
        "doi": "https://doi.org/10.1038/nrn2776",
        "citation": "Zilles K, Amunts K (2010) Centenary of Brodmann’s map – conception and fate. Nature Reviews Neuroscience 11(2): 139-145 "
      },
      {
        "doi": "https://doi.org/10.1016/j.neuroimage.2007.02.037",
        "citation": "Amunts K, Schleicher A, Zilles K (2007) Cytoarchitecture of the cerebral cortex – more than localization. Neuroimage 37: 1061-1065"
      },
      {
        "doi": "http://dx.doi.org/10.1016/B978-012693019-1/50023-X",
        "citation": "Zilles K, Schleicher A, Palomero-Gallagher N, Amunts K (2002) Quantitative analysis of cyto- and receptor architecture of the human brain. In: /Brain Mapping: The Methods/, J. C. Mazziotta and A. Toga (eds.), USA: Elsevier, 2002, p. 573-602."
      }
    ]
  },
  "regions": [
    {
      "name": "telencephalon",
      "status": null,
      "labelIndex": null,
      "synonyms": [],
      "rgb": null,
      "children": [
        {
          "name": "cerebral nuclei",
          "status": null,
          "labelIndex": null,
          "synonyms": [],
          "rgb": null,
          "children": [
            {
              "name": "basal forebrain",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "magnocellular group within septum",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Ch 123 (Basal Forebrain)",
                      "arealabel": "Ch-123",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/7SEP-P2V",
                      "synonyms": [],
                      "rgb": [
                        124,
                        233,
                        167
                      ],
                      "children": [
                        {
                          "name": "Ch 123 (Basal Forebrain) - left hemisphere",
                          "rgb": [
                            124,
                            233,
                            167
                          ],
                          "labelIndex": 286,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -2339339,
                            4405405,
                            -8804805
                          ]
                        },
                        {
                          "name": "Ch 123 (Basal Forebrain) - right hemisphere",
                          "rgb": [
                            124,
                            233,
                            167
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 286,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            3240000,
                            5153846,
                            -8347692
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "bb111a95-e04c-4987-8254-4af4ed8b0022"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "sublenticular part of basal forebrain",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Ch 4 (Basal Forebrain)",
                      "arealabel": "Ch-4",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/VZJ5-8WJ",
                      "synonyms": [],
                      "rgb": [
                        116,
                        243,
                        12
                      ],
                      "children": [
                        {
                          "name": "Ch 4 (Basal Forebrain) - left hemisphere",
                          "rgb": [
                            116,
                            243,
                            12
                          ],
                          "labelIndex": 264,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -16053628,
                            -454259,
                            -12470032
                          ]
                        },
                        {
                          "name": "Ch 4 (Basal Forebrain) - right hemisphere",
                          "rgb": [
                            116,
                            243,
                            12
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 264,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            17655072,
                            263768,
                            -11539130
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "a5c9d95f-8e7c-4454-91b6-a790387370fc"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "magnocellular group within horizontal limb of diagnoal band",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Ch 123 (Basal Forebrain)",
                      "arealabel": "Ch-123",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/7SEP-P2V",
                      "synonyms": [],
                      "rgb": [
                        124,
                        233,
                        167
                      ],
                      "children": [
                        {
                          "name": "Ch 123 (Basal Forebrain) - left hemisphere",
                          "rgb": [
                            124,
                            233,
                            167
                          ],
                          "labelIndex": 286,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -2339339,
                            4405405,
                            -8804805
                          ]
                        },
                        {
                          "name": "Ch 123 (Basal Forebrain) - right hemisphere",
                          "rgb": [
                            124,
                            233,
                            167
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 286,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            3240000,
                            5153846,
                            -8347692
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "bb111a95-e04c-4987-8254-4af4ed8b0022"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "amygdala",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "laterobasal group",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "LB (Amygdala)",
                      "arealabel": "LB",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/C3X0-NV3",
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "LB (Amygdala) - left hemisphere",
                          "rgb": null,
                          "labelIndex": 15,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP"
                        },
                        {
                          "name": "LB (Amygdala) - right hemisphere",
                          "rgb": null,
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 15,
                          "children": [],
                          "status": "publicP"
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "LB (Amygdala)",
                      "arealabel": "LB",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/C3X0-NV3",
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "LB (Amygdala) - left hemisphere",
                          "rgb": null,
                          "labelIndex": 11,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP"
                        },
                        {
                          "name": "LB (Amygdala) - right hemisphere",
                          "rgb": null,
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 11,
                          "children": [],
                          "status": "publicP"
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "LB (Amygdala)",
                      "arealabel": "LB",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/C3X0-NV3",
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "LB (Amygdala) - left hemisphere",
                          "rgb": null,
                          "labelIndex": 19,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP"
                        },
                        {
                          "name": "LB (Amygdala) - right hemisphere",
                          "rgb": null,
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 19,
                          "children": [],
                          "status": "publicP"
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "LB (Amygdala)",
                      "arealabel": "LB",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/C3X0-NV3",
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "LB (Amygdala) - left hemisphere",
                          "rgb": null,
                          "labelIndex": 13,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -25304803,
                            -1696429,
                            -23766626
                          ]
                        },
                        {
                          "name": "LB (Amygdala) - right hemisphere",
                          "rgb": null,
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 13,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            28015494,
                            -81343,
                            -24045836
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "708df0fa-e9a4-4c23-bd85-8957f6d30faf"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "superficial group",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "SF (Amygdala)",
                      "arealabel": "SF",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/WD31-SEA",
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "SF (Amygdala) - left hemisphere",
                          "rgb": null,
                          "labelIndex": 236,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -16044471,
                            530048,
                            -20831731
                          ]
                        },
                        {
                          "name": "SF (Amygdala) - right hemisphere",
                          "rgb": null,
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 236,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            19382770,
                            1539804,
                            -19413304
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "48929163-bf7b-4471-9f14-991c5225eced"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "SF (Amygdala)",
                      "arealabel": "SF",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/WD31-SEA",
                      "synonyms": [],
                      "rgb": null,
                      "children": [
                        {
                          "name": "SF (Amygdala) - left hemisphere",
                          "rgb": null,
                          "labelIndex": 17,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP"
                        },
                        {
                          "name": "SF (Amygdala) - right hemisphere",
                          "rgb": null,
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 17,
                          "children": [],
                          "status": "publicP"
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "48929163-bf7b-4471-9f14-991c5225eced"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "SF (Amygdala)",
                      "arealabel": "SF",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/WD31-SEA",
                      "synonyms": [],
                      "rgb": [
                        18,
                        168,
                        22
                      ],
                      "children": [
                        {
                          "name": "SF (Amygdala) - left hemisphere",
                          "rgb": [
                            18,
                            168,
                            22
                          ],
                          "labelIndex": 186,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP"
                        },
                        {
                          "name": "SF (Amygdala) - right hemisphere",
                          "rgb": [
                            18,
                            168,
                            22
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 186,
                          "children": [],
                          "status": "publicP"
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "48929163-bf7b-4471-9f14-991c5225eced"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "CM (Amygdala)",
                      "arealabel": "CM",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/36FR-C95",
                      "synonyms": [],
                      "rgb": [
                        102,
                        180,
                        202
                      ],
                      "children": [
                        {
                          "name": "CM (Amygdala) - left hemisphere",
                          "rgb": [
                            102,
                            180,
                            202
                          ],
                          "labelIndex": 22,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP"
                        },
                        {
                          "name": "CM (Amygdala) - right hemisphere",
                          "rgb": [
                            102,
                            180,
                            202
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 22,
                          "children": [],
                          "status": "publicP"
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "7aba8aef-6430-4fa7-ab54-8ecac558faed"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "fiber masses",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "VTM (Amygdala)",
                      "arealabel": "VTM",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/99HN-XRE",
                      "synonyms": [],
                      "rgb": [
                        89,
                        178,
                        185
                      ],
                      "children": [
                        {
                          "name": "VTM (Amygdala) - left hemisphere",
                          "rgb": [
                            89,
                            178,
                            185
                          ],
                          "labelIndex": 228,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -23377907,
                            -9837209,
                            -14848837
                          ]
                        },
                        {
                          "name": "VTM (Amygdala) - right hemisphere",
                          "rgb": [
                            89,
                            178,
                            185
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 228,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            25513514,
                            -8881081,
                            -15551351
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "a964e6e6-8014-41a2-b975-754d75cbb6f2"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "IF (Amygdala)",
                      "arealabel": "IF",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/GWPR-G6K",
                      "synonyms": [],
                      "rgb": [
                        120,
                        190,
                        129
                      ],
                      "children": [
                        {
                          "name": "IF (Amygdala) - left hemisphere",
                          "rgb": [
                            120,
                            190,
                            129
                          ],
                          "labelIndex": 237,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -27588235,
                            -1431373,
                            -17460784
                          ]
                        },
                        {
                          "name": "IF (Amygdala) - right hemisphere",
                          "rgb": [
                            120,
                            190,
                            129
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 237,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            29372549,
                            -813725,
                            -16578431
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "5a1391c8-6056-40e4-a19b-3774df42bd07"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "MF (Amygdala)",
                      "arealabel": "MF",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/9375-55V",
                      "synonyms": [],
                      "rgb": [
                        190,
                        200,
                        9
                      ],
                      "children": [
                        {
                          "name": "MF (Amygdala) - left hemisphere",
                          "rgb": [
                            190,
                            200,
                            9
                          ],
                          "labelIndex": 235,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -18714286,
                            -6523810,
                            -15428571
                          ]
                        },
                        {
                          "name": "MF (Amygdala) - right hemisphere",
                          "rgb": [
                            190,
                            200,
                            9
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 235,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            20976744,
                            -4930233,
                            -14441860
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "3741c788-9412-4b8e-9ab4-9ca2d3a715ca"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "centromedial group",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "CM (Amygdala)",
                      "arealabel": "CM",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/36FR-C95",
                      "synonyms": [],
                      "rgb": [
                        89,
                        4,
                        190
                      ],
                      "children": [
                        {
                          "name": "CM (Amygdala) - left hemisphere",
                          "rgb": [
                            89,
                            4,
                            190
                          ],
                          "labelIndex": 16,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP"
                        },
                        {
                          "name": "CM (Amygdala) - right hemisphere",
                          "rgb": [
                            89,
                            4,
                            190
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 16,
                          "children": [],
                          "status": "publicP"
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "7aba8aef-6430-4fa7-ab54-8ecac558faed"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "CM (Amygdala)",
                      "arealabel": "CM",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/36FR-C95",
                      "synonyms": [],
                      "rgb": [
                        9,
                        120,
                        220
                      ],
                      "children": [
                        {
                          "name": "CM (Amygdala) - left hemisphere",
                          "rgb": [
                            9,
                            120,
                            220
                          ],
                          "labelIndex": 21,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -21108108,
                            -3376448,
                            -13214286
                          ]
                        },
                        {
                          "name": "CM (Amygdala) - right hemisphere",
                          "rgb": [
                            9,
                            120,
                            220
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 21,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            23157767,
                            -2679612,
                            -12555825
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "7aba8aef-6430-4fa7-ab54-8ecac558faed"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "cerebral cortex",
          "status": null,
          "labelIndex": null,
          "synonyms": [],
          "rgb": null,
          "children": [
            {
              "name": "parietal lobe",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "superior parietal lobule",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 5L (SPL)",
                      "arealabel": "Area-5L",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/C1FQ-2F",
                      "synonyms": [],
                      "rgb": [
                        184,
                        185,
                        58
                      ],
                      "children": [
                        {
                          "name": "Area 5L (SPL) - left hemisphere",
                          "rgb": [
                            184,
                            185,
                            58
                          ],
                          "labelIndex": 130,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -18807832,
                            -47524930,
                            66950353
                          ]
                        },
                        {
                          "name": "Area 5L (SPL) - right hemisphere",
                          "rgb": [
                            184,
                            185,
                            58
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 130,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            12970516,
                            -51174624,
                            70371695
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "64555f7f-1b33-4ffe-9853-be41e7a21096"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 7M (SPL)",
                      "arealabel": "Area-7M",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/F25F-EKW",
                      "synonyms": [],
                      "rgb": [
                        205,
                        61,
                        236
                      ],
                      "children": [
                        {
                          "name": "Area 7M (SPL) - left hemisphere",
                          "rgb": [
                            205,
                            61,
                            236
                          ],
                          "labelIndex": 135,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -777896,
                            -78103082,
                            35256111
                          ]
                        },
                        {
                          "name": "Area 7M (SPL) - right hemisphere",
                          "rgb": [
                            205,
                            61,
                            236
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 135,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            4281250,
                            -75882812,
                            38312500
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "0aacea5c-bc9e-483f-8376-25f176ada158"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 7PC (SPL)",
                      "arealabel": "Area-7PC",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/Z45N-1T",
                      "synonyms": [],
                      "rgb": [
                        252,
                        89,
                        28
                      ],
                      "children": [
                        {
                          "name": "Area 7PC (SPL) - left hemisphere",
                          "rgb": [
                            252,
                            89,
                            28
                          ],
                          "labelIndex": 132,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -32056266,
                            -48916454,
                            60868713
                          ]
                        },
                        {
                          "name": "Area 7PC (SPL) - right hemisphere",
                          "rgb": [
                            252,
                            89,
                            28
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 132,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            30055171,
                            -49079568,
                            61493485
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "763140d3-7ba0-4f28-b0ac-c6cbda2d14e1"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 5M (SPL)",
                      "arealabel": "Area-5M",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/Y12F-YMU",
                      "synonyms": [],
                      "rgb": [
                        225,
                        245,
                        76
                      ],
                      "children": [
                        {
                          "name": "Area 5M (SPL) - left hemisphere",
                          "rgb": [
                            225,
                            245,
                            76
                          ],
                          "labelIndex": 131,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -7527881,
                            -41962560,
                            59221721
                          ]
                        },
                        {
                          "name": "Area 5M (SPL) - right hemisphere",
                          "rgb": [
                            225,
                            245,
                            76
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 131,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            4642562,
                            -44304959,
                            60273140
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "abe105cf-2c29-46af-af75-6b46fdb75137"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 7P (SPL)",
                      "arealabel": "Area-7P",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/C3HS-8R7",
                      "synonyms": [],
                      "rgb": [
                        52,
                        20,
                        106
                      ],
                      "children": [
                        {
                          "name": "Area 7P (SPL) - left hemisphere",
                          "rgb": [
                            52,
                            20,
                            106
                          ],
                          "labelIndex": 208,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -7679310,
                            -76043295,
                            52631801
                          ]
                        },
                        {
                          "name": "Area 7P (SPL) - right hemisphere",
                          "rgb": [
                            52,
                            20,
                            106
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 208,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            14232037,
                            -74892094,
                            56304919
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "af9c4f39-63a4-409f-b306-e5965d639f37"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 5Ci (SPL)",
                      "arealabel": "Area-5Ci",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/SQVP-GK1",
                      "synonyms": [],
                      "rgb": [
                        79,
                        242,
                        146
                      ],
                      "children": [
                        {
                          "name": "Area 5Ci (SPL) - left hemisphere",
                          "rgb": [
                            79,
                            242,
                            146
                          ],
                          "labelIndex": 136,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -14033790,
                            -35828311,
                            43857534
                          ]
                        },
                        {
                          "name": "Area 5Ci (SPL) - right hemisphere",
                          "rgb": [
                            79,
                            242,
                            146
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 136,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            10563961,
                            -36194957,
                            46892989
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "07d08f74-af3d-4cbe-bc3c-f32b7f5c989f"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 7A (SPL)",
                      "arealabel": "Area-7A",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/7HX2-AJH",
                      "synonyms": [],
                      "rgb": [
                        38,
                        204,
                        19
                      ],
                      "children": [
                        {
                          "name": "Area 7A (SPL) - left hemisphere",
                          "rgb": [
                            38,
                            204,
                            19
                          ],
                          "labelIndex": 134,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -20856230,
                            -62269710,
                            61643512
                          ]
                        },
                        {
                          "name": "Area 7A (SPL) - right hemisphere",
                          "rgb": [
                            38,
                            204,
                            19
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 134,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            20910951,
                            -62880523,
                            62944473
                          ]
                        }
                      ],
                      "relatedAreas": [
                        {
                          "name": "Area 7A",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "811f4adb-4a7c-45c1-8034-4afa9edf586a"
                            }
                          }
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "e26e999f-77ad-4934-9569-8290ed05ebda"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "parietal operculum",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area OP3 (POperc)",
                      "arealabel": "Area-OP3",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/1Z8F-PX4",
                      "synonyms": [],
                      "rgb": [
                        58,
                        122,
                        80
                      ],
                      "children": [
                        {
                          "name": "Area OP3 (POperc) - left hemisphere",
                          "rgb": [
                            58,
                            122,
                            80
                          ],
                          "labelIndex": 75,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -40814044,
                            -13737321,
                            17669701
                          ]
                        },
                        {
                          "name": "Area OP3 (POperc) - right hemisphere",
                          "rgb": [
                            58,
                            122,
                            80
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 75,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            41195980,
                            -11633166,
                            18002513
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "f6f10b01-6c10-42cf-8129-f5aaf307a36b"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area OP4 (POperc)",
                      "arealabel": "Area-OP4",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/BVT0-H3U",
                      "synonyms": [],
                      "rgb": [
                        89,
                        80,
                        132
                      ],
                      "children": [
                        {
                          "name": "Area OP4 (POperc) - left hemisphere",
                          "rgb": [
                            89,
                            80,
                            132
                          ],
                          "labelIndex": 72,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -60514139,
                            -10849614,
                            15368038
                          ]
                        },
                        {
                          "name": "Area OP4 (POperc) - right hemisphere",
                          "rgb": [
                            89,
                            80,
                            132
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 72,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            63398148,
                            -9211111,
                            12780864
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "b1e7f0d2-6d37-4047-9c2e-a08c3f1e2a16"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area OP2 (POperc)",
                      "arealabel": "Area-OP2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/5KBV-36J",
                      "synonyms": [],
                      "rgb": [
                        36,
                        47,
                        221
                      ],
                      "children": [
                        {
                          "name": "Area OP2 (POperc) - left hemisphere",
                          "rgb": [
                            36,
                            47,
                            221
                          ],
                          "labelIndex": 74,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -36355372,
                            -23452479,
                            18938017
                          ]
                        },
                        {
                          "name": "Area OP2 (POperc) - right hemisphere",
                          "rgb": [
                            36,
                            47,
                            221
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 74,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            35629457,
                            -21159690,
                            18021705
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "ab26cefd-f7d6-4442-8020-a6e418e673ff"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area OP1 (POperc)",
                      "arealabel": "Area-OP1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/SH37-979",
                      "synonyms": [],
                      "rgb": [
                        250,
                        182,
                        34
                      ],
                      "children": [
                        {
                          "name": "Area OP1 (POperc) - left hemisphere",
                          "rgb": [
                            250,
                            182,
                            34
                          ],
                          "labelIndex": 73,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -51566527,
                            -22523828,
                            17190240
                          ]
                        },
                        {
                          "name": "Area OP1 (POperc) - right hemisphere",
                          "rgb": [
                            250,
                            182,
                            34
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 73,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            52888430,
                            -20697107,
                            17000826
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "402ec28d-0809-4226-91a4-900d9303291b"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "postcentral gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 3b (PostCG)",
                      "arealabel": "Area-3b",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/2JK3-QXR",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area 3b",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "74304fe9-452e-4ca3-97a3-8cf3459bb1a0"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        239,
                        246,
                        155
                      ],
                      "children": [
                        {
                          "name": "Area 3b (PostCG) - left hemisphere",
                          "rgb": [
                            239,
                            246,
                            155
                          ],
                          "labelIndex": 127,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -44439219,
                            -21735041,
                            46012387
                          ]
                        },
                        {
                          "name": "Area 3b (PostCG) - right hemisphere",
                          "rgb": [
                            239,
                            246,
                            155
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 127,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            38765839,
                            -25096118,
                            48227174
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "b84f67bb-5d9f-4daf-a8d6-15f63f901bd4"
                        }
                      }
                    },
                    {
                      "name": "Area 1 (PostCG)",
                      "arealabel": "Area-1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/THB5-B64",
                      "synonyms": [],
                      "rgb": [
                        232,
                        185,
                        250
                      ],
                      "children": [
                        {
                          "name": "Area 1 (PostCG) - left hemisphere",
                          "rgb": [
                            232,
                            185,
                            250
                          ],
                          "labelIndex": 125,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -47104485,
                            -28297920,
                            57798046
                          ]
                        },
                        {
                          "name": "Area 1 (PostCG) - right hemisphere",
                          "rgb": [
                            232,
                            185,
                            250
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 125,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            48452543,
                            -27132790,
                            56150187
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "c9753e82-80ca-4074-a704-9dd2c4c0d58b"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 2 (PostCS)",
                      "arealabel": "Area-2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/QA8F-DD2",
                      "synonyms": [],
                      "rgb": [
                        23,
                        13,
                        35
                      ],
                      "children": [
                        {
                          "name": "Area 2 (PostCS) - left hemisphere",
                          "rgb": [
                            23,
                            13,
                            35
                          ],
                          "labelIndex": 252,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -42268059,
                            -32424512,
                            51210202
                          ]
                        },
                        {
                          "name": "Area 2 (PostCS) - right hemisphere",
                          "rgb": [
                            23,
                            13,
                            35
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 252,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            38223619,
                            -34651627,
                            52535010
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "f9147ae9-5cf0-41b2-89a3-e6e6df07bef1"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 3a (PostCG)",
                      "arealabel": "Area-3a",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/C5QQ-EFB",
                      "synonyms": [],
                      "rgb": [
                        187,
                        133,
                        50
                      ],
                      "children": [
                        {
                          "name": "Area 3a (PostCG) - left hemisphere",
                          "rgb": [
                            187,
                            133,
                            50
                          ],
                          "labelIndex": 126,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -31927553,
                            -25650901,
                            44513889
                          ]
                        },
                        {
                          "name": "Area 3a (PostCG) - right hemisphere",
                          "rgb": [
                            187,
                            133,
                            50
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 126,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            38813714,
                            -19184000,
                            36284571
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "2657ecc1-da69-4a37-9b37-66ae95f9623c"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "inferior parietal lobule",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area PF (IPL)",
                      "arealabel": "Area-PF",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/F1TJ-54W",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area PF",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "f4e177a6-1b2c-48d5-a62c-91949ba636e4"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        226,
                        211,
                        61
                      ],
                      "children": [
                        {
                          "name": "Area PF (IPL) - left hemisphere",
                          "rgb": [
                            226,
                            211,
                            61
                          ],
                          "labelIndex": 206,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -59814938,
                            -37432365,
                            36569295
                          ]
                        },
                        {
                          "name": "Area PF (IPL) - right hemisphere",
                          "rgb": [
                            226,
                            211,
                            61
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 206,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            64016699,
                            -33052700,
                            30153112
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "18e5e1b0-6c25-4f55-a967-0834d2bd3ee4"
                        }
                      }
                    },
                    {
                      "name": "Area PFcm (IPL)",
                      "arealabel": "Area-PFcm",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/8DP8-8HE",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area PFcm",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "f07d441f-452f-471b-ac7c-0d3c2ae16fb2"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        98,
                        128,
                        120
                      ],
                      "children": [
                        {
                          "name": "Area PFcm (IPL) - left hemisphere",
                          "rgb": [
                            98,
                            128,
                            120
                          ],
                          "labelIndex": 113,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -51751410,
                            -36954069,
                            22546334
                          ]
                        },
                        {
                          "name": "Area PFcm (IPL) - right hemisphere",
                          "rgb": [
                            98,
                            128,
                            120
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 113,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            53524370,
                            -31637287,
                            23177904
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "10502c3a-f20e-44fa-b985-786d6888d4bb"
                        }
                      }
                    },
                    {
                      "name": "Area PGa (IPL)",
                      "arealabel": "Area-PGa",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/V5HY-XTS",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area PGa",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "d5b168a3-a92e-4ab3-8b4d-61e58e5b7a1c"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        42,
                        236,
                        131
                      ],
                      "children": [
                        {
                          "name": "Area PGa (IPL) - left hemisphere",
                          "rgb": [
                            42,
                            236,
                            131
                          ],
                          "labelIndex": 110,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -48873487,
                            -60780569,
                            37191889
                          ]
                        },
                        {
                          "name": "Area PGa (IPL) - right hemisphere",
                          "rgb": [
                            42,
                            236,
                            131
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 110,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            55283797,
                            -55333653,
                            30316395
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "d7f6c5be-93c6-4a16-8939-4420329d4147"
                        }
                      }
                    },
                    {
                      "name": "Area PFt (IPL)",
                      "arealabel": "Area-PFt",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/JGM9-ZET",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area PFt",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "9ff7fcc4-a88b-4bf8-be07-1386a3760a96"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        120,
                        135,
                        232
                      ],
                      "children": [
                        {
                          "name": "Area PFt (IPL) - left hemisphere",
                          "rgb": [
                            120,
                            135,
                            232
                          ],
                          "labelIndex": 109,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -55015237,
                            -27583919,
                            38095874
                          ]
                        },
                        {
                          "name": "Area PFt (IPL) - right hemisphere",
                          "rgb": [
                            120,
                            135,
                            232
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 109,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            54808632,
                            -24626296,
                            37973570
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "847cef50-7340-470d-8580-327b4ce9db19"
                        }
                      }
                    },
                    {
                      "name": "Area PFm (IPL)",
                      "arealabel": "Area-PFm",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/TB94-HRK",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area PFm",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "3455ada4-48c3-4748-ae38-2fe3f376f0fc"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        53,
                        76,
                        145
                      ],
                      "children": [
                        {
                          "name": "Area PFm (IPL) - left hemisphere",
                          "rgb": [
                            53,
                            76,
                            145
                          ],
                          "labelIndex": 112,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -54527689,
                            -52389045,
                            38877207
                          ]
                        },
                        {
                          "name": "Area PFm (IPL) - right hemisphere",
                          "rgb": [
                            53,
                            76,
                            145
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 112,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            56990022,
                            -45541717,
                            38606571
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "411edde9-685f-464b-970c-a929f9a4067c"
                        }
                      }
                    },
                    {
                      "name": "Area PGp (IPL)",
                      "arealabel": "Area-PGp",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/FPFJ-ZCD",
                      "synonyms": [],
                      "rgb": [
                        92,
                        116,
                        83
                      ],
                      "children": [
                        {
                          "name": "Area PGp (IPL) - left hemisphere",
                          "rgb": [
                            92,
                            116,
                            83
                          ],
                          "labelIndex": 108,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -44673441,
                            -73269937,
                            29840224
                          ]
                        },
                        {
                          "name": "Area PGp (IPL) - right hemisphere",
                          "rgb": [
                            92,
                            116,
                            83
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 108,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            47749459,
                            -70528695,
                            30721440
                          ]
                        }
                      ],
                      "relatedAreas": [
                        {
                          "name": "Area PGp",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "1b00a0e4-9493-43ff-bfbd-b02119064813"
                            }
                          }
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "b3ef6947-76c9-4935-bbc6-8b2329c0967b"
                        }
                      }
                    },
                    {
                      "name": "Area PFop (IPL)",
                      "arealabel": "Area-PFop",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/M2PM-92Q",
                      "synonyms": [],
                      "rgb": [
                        146,
                        153,
                        177
                      ],
                      "children": [
                        {
                          "name": "Area PFop (IPL) - left hemisphere",
                          "rgb": [
                            146,
                            153,
                            177
                          ],
                          "labelIndex": 111,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -60026462,
                            -24694986,
                            24259053
                          ]
                        },
                        {
                          "name": "Area PFop (IPL) - right hemisphere",
                          "rgb": [
                            146,
                            153,
                            177
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 111,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            58286575,
                            -20617534,
                            24917260
                          ]
                        }
                      ],
                      "relatedAreas": [
                        {
                          "name": "Area PFop",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b4397c40-82e1-4d62-b97a-44e8d04b428b"
                            }
                          }
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "e8262e56-88fe-4006-b078-def4d78416b8"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "parieto-occipital sulcus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area hPO1 (POS)",
                      "arealabel": "Area-hPO1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/W50A-FAP",
                      "synonyms": [],
                      "rgb": [
                        153,
                        232,
                        235
                      ],
                      "children": [
                        {
                          "name": "Area hPO1 (POS) - left hemisphere",
                          "rgb": [
                            153,
                            232,
                            235
                          ],
                          "labelIndex": 297,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -15069260,
                            -80661951,
                            37074565
                          ]
                        },
                        {
                          "name": "Area hPO1 (POS) - right hemisphere",
                          "rgb": [
                            153,
                            232,
                            235
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 297,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            21853147,
                            -80927739,
                            37048660
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "a78998c2-99d4-4738-bbda-82a317f713f1"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "intraparietal sulcus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area hIP1 (IPS)",
                      "arealabel": "Area-hIP1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/92FE-7S6",
                      "synonyms": [],
                      "rgb": [
                        66,
                        149,
                        82
                      ],
                      "children": [
                        {
                          "name": "Area hIP1 (IPS) - left hemisphere",
                          "rgb": [
                            66,
                            149,
                            82
                          ],
                          "labelIndex": 128,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -36841999,
                            -49449871,
                            40584028
                          ]
                        },
                        {
                          "name": "Area hIP1 (IPS) - right hemisphere",
                          "rgb": [
                            66,
                            149,
                            82
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 128,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            40629988,
                            -48019372,
                            39158853
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "7722c71f-fe84-4deb-8f6b-98e2aecf2e31"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hIP7 (IPS)",
                      "arealabel": "Area-hIP7",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/WRCY-8Z1",
                      "synonyms": [],
                      "rgb": [
                        71,
                        196,
                        218
                      ],
                      "children": [
                        {
                          "name": "Area hIP7 (IPS) - left hemisphere",
                          "rgb": [
                            71,
                            196,
                            218
                          ],
                          "labelIndex": 296,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -22044741,
                            -79989011,
                            29353218
                          ]
                        },
                        {
                          "name": "Area hIP7 (IPS) - right hemisphere",
                          "rgb": [
                            71,
                            196,
                            218
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 296,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            29041586,
                            -79117828,
                            27046207
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "9c6c3c96-8129-4e0e-aa22-a0fb435aab45"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hIP3 (IPS)",
                      "arealabel": "Area-hIP3",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/P8X0-V1G",
                      "synonyms": [],
                      "rgb": [
                        113,
                        172,
                        229
                      ],
                      "children": [
                        {
                          "name": "Area hIP3 (IPS) - left hemisphere",
                          "rgb": [
                            113,
                            172,
                            229
                          ],
                          "labelIndex": 133,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -30430769,
                            -55031164,
                            46842209
                          ]
                        },
                        {
                          "name": "Area hIP3 (IPS) - right hemisphere",
                          "rgb": [
                            113,
                            172,
                            229
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 133,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            33538679,
                            -49884591,
                            50461950
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "700ac6db-870d-44f1-8786-0c01207f992b"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hIP2 (IPS)",
                      "arealabel": "Area-hIP2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/EJTM-NDY",
                      "synonyms": [],
                      "rgb": [
                        127,
                        245,
                        203
                      ],
                      "children": [
                        {
                          "name": "Area hIP2 (IPS) - left hemisphere",
                          "rgb": [
                            127,
                            245,
                            203
                          ],
                          "labelIndex": 129,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -46531100,
                            -41482722,
                            43278044
                          ]
                        },
                        {
                          "name": "Area hIP2 (IPS) - right hemisphere",
                          "rgb": [
                            127,
                            245,
                            203
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 129,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            44605145,
                            -39958613,
                            45130872
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "4490ef3e-ce60-4453-9e9f-85388d0603cb"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hIP4 (IPS)",
                      "arealabel": "Area-hIP4",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/TSEN-QSY",
                      "synonyms": [],
                      "rgb": [
                        254,
                        52,
                        184
                      ],
                      "children": [
                        {
                          "name": "Area hIP4 (IPS) - left hemisphere",
                          "rgb": [
                            254,
                            52,
                            184
                          ],
                          "labelIndex": 294,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -29349066,
                            -79948651,
                            25849585
                          ]
                        },
                        {
                          "name": "Area hIP4 (IPS) - right hemisphere",
                          "rgb": [
                            254,
                            52,
                            184
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 294,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            37324927,
                            -76495150,
                            22338021
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "5875bfe2-99ca-4e50-bce2-61c201c3dd54"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hIP5 (IPS)",
                      "arealabel": "Area-hIP5",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/RNSM-Y4Y",
                      "synonyms": [],
                      "rgb": [
                        217,
                        87,
                        210
                      ],
                      "children": [
                        {
                          "name": "Area hIP5 (IPS) - left hemisphere",
                          "rgb": [
                            217,
                            87,
                            210
                          ],
                          "labelIndex": 295,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -28321120,
                            -73162807,
                            36664362
                          ]
                        },
                        {
                          "name": "Area hIP5 (IPS) - right hemisphere",
                          "rgb": [
                            217,
                            87,
                            210
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 295,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            34614713,
                            -68930590,
                            33299252
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "f9717dec-0310-4078-a4ae-294170b4fb37"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hIP6 (IPS)",
                      "arealabel": "Area-hIP6",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/AFQR-50Q",
                      "synonyms": [],
                      "rgb": [
                        237,
                        233,
                        37
                      ],
                      "children": [
                        {
                          "name": "Area hIP6 (IPS) - left hemisphere",
                          "rgb": [
                            237,
                            233,
                            37
                          ],
                          "labelIndex": 292,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -31988131,
                            -66522626,
                            46155045
                          ]
                        },
                        {
                          "name": "Area hIP6 (IPS) - right hemisphere",
                          "rgb": [
                            237,
                            233,
                            37
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 292,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            37069307,
                            -63723479,
                            45628006
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "b9975f8e-f484-4e82-883a-5fd765855ae0"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hIP8 (IPS)",
                      "arealabel": "Area-hIP8",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/YYT8-FT8",
                      "synonyms": [],
                      "rgb": [
                        223,
                        109,
                        3
                      ],
                      "children": [
                        {
                          "name": "Area hIP8 (IPS) - left hemisphere",
                          "rgb": [
                            223,
                            109,
                            3
                          ],
                          "labelIndex": 293,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -18133307,
                            -72231198,
                            43245125
                          ]
                        },
                        {
                          "name": "Area hIP8 (IPS) - right hemisphere",
                          "rgb": [
                            223,
                            109,
                            3
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 293,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            26220986,
                            -71480127,
                            41680048
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "a2c1acc7-7fdc-4fbd-90ee-729eda7fdff3"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "occiptal lobe",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "dorsal occipital cortex",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area hOc6 (POS)",
                      "arealabel": "Area-hOc6",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/4101-1ZG",
                      "synonyms": [],
                      "rgb": [
                        239,
                        66,
                        26
                      ],
                      "children": [
                        {
                          "name": "Area hOc6 (POS) - left hemisphere",
                          "rgb": [
                            239,
                            66,
                            26
                          ],
                          "labelIndex": 291,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -15925775,
                            -70685971,
                            16518760
                          ]
                        },
                        {
                          "name": "Area hOc6 (POS) - right hemisphere",
                          "rgb": [
                            239,
                            66,
                            26
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 291,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            17750454,
                            -67625227,
                            17755898
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "d72e0210-a910-4b15-bcaf-80c3433cd3e0"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hOc4d (Cuneus)",
                      "arealabel": "Area-hOc4d",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/VSK5-DET",
                      "synonyms": [],
                      "rgb": [
                        109,
                        218,
                        10
                      ],
                      "children": [
                        {
                          "name": "Area hOc4d (Cuneus) - left hemisphere",
                          "rgb": [
                            109,
                            218,
                            10
                          ],
                          "labelIndex": 119,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -17209585,
                            -87846006,
                            25522684
                          ]
                        },
                        {
                          "name": "Area hOc4d (Cuneus) - right hemisphere",
                          "rgb": [
                            109,
                            218,
                            10
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 119,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            20232373,
                            -87193644,
                            27253227
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "8120426c-f65b-4426-8a58-3060e2334921"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hOc3d (Cuneus)",
                      "arealabel": "Area-hOc3d",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/F9X3-JVJ",
                      "synonyms": [],
                      "rgb": [
                        105,
                        191,
                        48
                      ],
                      "children": [
                        {
                          "name": "Area hOc3d (Cuneus) - left hemisphere",
                          "rgb": [
                            105,
                            191,
                            48
                          ],
                          "labelIndex": 120,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -12816505,
                            -91289984,
                            21840872
                          ]
                        },
                        {
                          "name": "Area hOc3d (Cuneus) - right hemisphere",
                          "rgb": [
                            105,
                            191,
                            48
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 120,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            16129503,
                            -88897084,
                            23080617
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "d7ec4342-ae58-41e3-a68c-28e90a719d41"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "ventral occipital cortex",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area hOc3v (LingG)",
                      "arealabel": "Area-hOc3v",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/E5E8-1VV",
                      "synonyms": [],
                      "rgb": [
                        83,
                        179,
                        155
                      ],
                      "children": [
                        {
                          "name": "Area hOc3v (LingG) - left hemisphere",
                          "rgb": [
                            83,
                            179,
                            155
                          ],
                          "labelIndex": 10,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -18685863,
                            -85629087,
                            -10106719
                          ]
                        },
                        {
                          "name": "Area hOc3v (LingG) - right hemisphere",
                          "rgb": [
                            83,
                            179,
                            155
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 10,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            24296060,
                            -81686611,
                            -10031193
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "0d6392fd-b905-4bc3-bac9-fc44d8990a30"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hOc4v (LingG)",
                      "arealabel": "Area-hOc4v",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/AASR-M8P",
                      "synonyms": [],
                      "rgb": [
                        222,
                        77,
                        155
                      ],
                      "children": [
                        {
                          "name": "Area hOc4v (LingG) - left hemisphere",
                          "rgb": [
                            222,
                            77,
                            155
                          ],
                          "labelIndex": 9,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -26315808,
                            -78419533,
                            -12497238
                          ]
                        },
                        {
                          "name": "Area hOc4v (LingG) - right hemisphere",
                          "rgb": [
                            222,
                            77,
                            155
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 9,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            32665897,
                            -76519832,
                            -12453305
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "27d91cbb-5611-4d38-bd17-c0f1ac22b4cc"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "occipital cortex",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area hOc2 (V2, 18)",
                      "arealabel": "Area-hOc2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/QG9C-THD",
                      "synonyms": [],
                      "rgb": [
                        84,
                        110,
                        22
                      ],
                      "children": [
                        {
                          "name": "Area hOc2 (V2, 18) - left hemisphere",
                          "rgb": [
                            84,
                            110,
                            22
                          ],
                          "labelIndex": 7,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -10521334,
                            -88185706,
                            4055081
                          ]
                        },
                        {
                          "name": "Area hOc2 (V2, 18) - right hemisphere",
                          "rgb": [
                            84,
                            110,
                            22
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 7,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            15409559,
                            -86163484,
                            2905309
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "04674a3c-bb3a-495e-a466-206355e630bd"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hOc1 (V1, 17, CalcS)",
                      "arealabel": "Area-hOc1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/MXJ6-6DH",
                      "synonyms": [],
                      "rgb": [
                        190,
                        132,
                        147
                      ],
                      "children": [
                        {
                          "name": "Area hOc1 (V1, 17, CalcS) - left hemisphere",
                          "rgb": [
                            190,
                            132,
                            147
                          ],
                          "labelIndex": 8,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -8533787,
                            -84646549,
                            1855106
                          ]
                        },
                        {
                          "name": "Area hOc1 (V1, 17, CalcS) - right hemisphere",
                          "rgb": [
                            190,
                            132,
                            147
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 8,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            14654595,
                            -81416396,
                            1637838
                          ]
                        }
                      ],
                      "relatedAreas": [
                        {
                          "name": "Area hOc1",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "b851eb9d-9502-45e9-8dd8-2861f0e6da3f"
                            }
                          }
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "5151ab8f-d8cb-4e67-a449-afe2a41fb007"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "lateral occipital cortex",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area hOc4lp (LOC)",
                      "arealabel": "Area-hOc4lp",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/4B87-Q8X",
                      "synonyms": [],
                      "rgb": [
                        96,
                        113,
                        253
                      ],
                      "children": [
                        {
                          "name": "Area hOc4lp (LOC) - left hemisphere",
                          "rgb": [
                            96,
                            113,
                            253
                          ],
                          "labelIndex": 117,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -34066943,
                            -88725728,
                            6360721
                          ]
                        },
                        {
                          "name": "Area hOc4lp (LOC) - right hemisphere",
                          "rgb": [
                            96,
                            113,
                            253
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 117,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            38538256,
                            -86375516,
                            4086228
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "9006ee6a-6dc1-4604-9f20-7e08b42d574d"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hOc5 (LOC)",
                      "arealabel": "Area-hOc5",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/2WSH-MCT",
                      "synonyms": [],
                      "rgb": [
                        255,
                        0,
                        0
                      ],
                      "children": [
                        {
                          "name": "Area hOc5 (LOC) - left hemisphere",
                          "rgb": [
                            255,
                            0,
                            0
                          ],
                          "labelIndex": 6,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -42484324,
                            -71486486,
                            1795676
                          ]
                        },
                        {
                          "name": "Area hOc5 (LOC) - right hemisphere",
                          "rgb": [
                            255,
                            0,
                            0
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 6,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            48090700,
                            -66172216,
                            3121699
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "b40afb5a-e6a1-47b6-8a3e-1f8a20fbf99a"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area hOc4la (LOC)",
                      "arealabel": "Area-hOc4la",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/Z9JX-WKB",
                      "synonyms": [],
                      "rgb": [
                        233,
                        168,
                        189
                      ],
                      "children": [
                        {
                          "name": "Area hOc4la (LOC) - left hemisphere",
                          "rgb": [
                            233,
                            168,
                            189
                          ],
                          "labelIndex": 118,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -46291484,
                            -76947955,
                            -372761
                          ]
                        },
                        {
                          "name": "Area hOc4la (LOC) - right hemisphere",
                          "rgb": [
                            233,
                            168,
                            189
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 118,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            48566255,
                            -73862041,
                            -779202
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "94365b82-6204-4937-8b86-fe0433287938"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "frontal lobe",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "inferior frontal gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 44 (IFG)",
                      "arealabel": "Area-44",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/F9P8-ZVW",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area 44v",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "7e5e7aa8-28b8-445b-8980-2a6f3fa645b3"
                            }
                          }
                        },
                        {
                          "name": "Area 44d",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "8aeae833-81c8-4e27-a8d6-deee339d6052"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        54,
                        74,
                        75
                      ],
                      "children": [
                        {
                          "name": "Area 44 (IFG) - left hemisphere",
                          "rgb": [
                            54,
                            74,
                            75
                          ],
                          "labelIndex": 2,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -54242820,
                            11425127,
                            18292735
                          ]
                        },
                        {
                          "name": "Area 44 (IFG) - right hemisphere",
                          "rgb": [
                            54,
                            74,
                            75
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 2,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            56359074,
                            11741030,
                            13444358
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "8a6be82c-5947-4fff-8348-cf9bf73e4f40"
                        }
                      }
                    },
                    {
                      "name": "Area 45 (IFG)",
                      "arealabel": "Area-45",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/MR1V-BJ3",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area 45",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "131e6de8-b073-4f01-8f60-1bdb5a6c9a9a"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        167,
                        103,
                        146
                      ],
                      "children": [
                        {
                          "name": "Area 45 (IFG) - left hemisphere",
                          "rgb": [
                            167,
                            103,
                            146
                          ],
                          "labelIndex": 1,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -54903012,
                            26558233,
                            15528514
                          ]
                        },
                        {
                          "name": "Area 45 (IFG) - right hemisphere",
                          "rgb": [
                            167,
                            103,
                            146
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 1,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            55787613,
                            26216770,
                            12102941
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "cb32e688-43f0-4ae3-9554-085973137663"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "dorsal precentral gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 6d2 (PreCG)",
                      "arealabel": "Area-6d2",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/KXHS-N90",
                      "synonyms": [],
                      "rgb": [
                        170,
                        151,
                        180
                      ],
                      "children": [
                        {
                          "name": "Area 6d2 (PreCG) - left hemisphere",
                          "rgb": [
                            170,
                            151,
                            180
                          ],
                          "labelIndex": 288,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -15757793,
                            2030353,
                            68024610
                          ]
                        },
                        {
                          "name": "Area 6d2 (PreCG) - right hemisphere",
                          "rgb": [
                            170,
                            151,
                            180
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 288,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            14562976,
                            2312675,
                            68442439
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "963c5281-67df-4d41-9b91-60b31cf150c0"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 6d1 (PreCG)",
                      "arealabel": "Area-6d1",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/4WSQ-8FM",
                      "synonyms": [],
                      "rgb": [
                        45,
                        33,
                        27
                      ],
                      "children": [
                        {
                          "name": "Area 6d1 (PreCG) - left hemisphere",
                          "rgb": [
                            45,
                            33,
                            27
                          ],
                          "labelIndex": 287,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -20332759,
                            -14746524,
                            68590141
                          ]
                        },
                        {
                          "name": "Area 6d1 (PreCG) - right hemisphere",
                          "rgb": [
                            45,
                            33,
                            27
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 287,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            20258981,
                            -16559656,
                            68870890
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "a802f3dc-b7e5-48b7-9845-832a6e6f9b1c"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "posterior medial superior frontal gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 6ma (preSMA, mesial SFG)",
                      "arealabel": "Area-6ma",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/WVNR-SPT",
                      "synonyms": [],
                      "rgb": [
                        204,
                        108,
                        222
                      ],
                      "children": [
                        {
                          "name": "Area 6ma (preSMA, mesial SFG) - left hemisphere",
                          "rgb": [
                            204,
                            108,
                            222
                          ],
                          "labelIndex": 299,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -4083913,
                            4296092,
                            58555023
                          ]
                        },
                        {
                          "name": "Area 6ma (preSMA, mesial SFG) - right hemisphere",
                          "rgb": [
                            204,
                            108,
                            222
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 299,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            5230140,
                            4042128,
                            58355079
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "07b4c6a1-8a24-4f88-8f73-b2ea06e1c2f3"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "superior frontal sulcus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 6d3 (SFS)",
                      "arealabel": "Area-6d3",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/NVJ5-JJ",
                      "synonyms": [],
                      "rgb": [
                        55,
                        239,
                        21
                      ],
                      "children": [
                        {
                          "name": "Area 6d3 (SFS) - left hemisphere",
                          "rgb": [
                            55,
                            239,
                            21
                          ],
                          "labelIndex": 289,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -23315931,
                            4317151,
                            51434008
                          ]
                        },
                        {
                          "name": "Area 6d3 (SFS) - right hemisphere",
                          "rgb": [
                            55,
                            239,
                            21
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 289,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            25173639,
                            1578188,
                            53334281
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "266c1ada-1840-462f-8223-7ff2df457552"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "frontal pole",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area Fp1 (FPole)",
                      "arealabel": "Area-Fp1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/PTKW-R7W",
                      "synonyms": [],
                      "rgb": [
                        226,
                        14,
                        200
                      ],
                      "children": [
                        {
                          "name": "Area Fp1 (FPole) - left hemisphere",
                          "rgb": [
                            226,
                            14,
                            200
                          ],
                          "labelIndex": 212,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -16331031,
                            64168302,
                            549101
                          ]
                        },
                        {
                          "name": "Area Fp1 (FPole) - right hemisphere",
                          "rgb": [
                            226,
                            14,
                            200
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 212,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            18482225,
                            63988011,
                            -317043
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "10dc5343-941b-4e3e-80ed-df031c33bbc6"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Fp2 (FPole)",
                      "arealabel": "Area-Fp2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/GZW1-7R3",
                      "synonyms": [],
                      "rgb": [
                        239,
                        137,
                        211
                      ],
                      "children": [
                        {
                          "name": "Area Fp2 (FPole) - left hemisphere",
                          "rgb": [
                            239,
                            137,
                            211
                          ],
                          "labelIndex": 211,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -3739067,
                            59074587,
                            -1181973
                          ]
                        },
                        {
                          "name": "Area Fp2 (FPole) - right hemisphere",
                          "rgb": [
                            239,
                            137,
                            211
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 211,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            6093420,
                            59611191,
                            -509606
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "3bf7bde1-cc06-4657-b296-380275f9d4b8"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "precentral gyrus ",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 4p (PreCG)",
                      "arealabel": "Area-4p",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/5HSF-81J",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area 4p",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "861ab96a-c4b5-4ba6-bd40-1e80d4680f89"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        116,
                        92,
                        124
                      ],
                      "children": [
                        {
                          "name": "Area 4p (PreCG) - left hemisphere",
                          "rgb": [
                            116,
                            92,
                            124
                          ],
                          "labelIndex": 123,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -36140917,
                            -22750424,
                            49282965
                          ]
                        },
                        {
                          "name": "Area 4p (PreCG) - right hemisphere",
                          "rgb": [
                            116,
                            92,
                            124
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 123,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            37510795,
                            -21359659,
                            46456250
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "82e6e826-a439-41db-84ff-4674ca3d643a"
                        }
                      }
                    },
                    {
                      "name": "Area 4a (PreCG)",
                      "arealabel": "Area-4a",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/PVPP-P3Q",
                      "synonyms": [],
                      "rgb": [
                        118,
                        239,
                        183
                      ],
                      "children": [
                        {
                          "name": "Area 4a (PreCG) - left hemisphere",
                          "rgb": [
                            118,
                            239,
                            183
                          ],
                          "labelIndex": 124,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -17367391,
                            -28669064,
                            67404682
                          ]
                        },
                        {
                          "name": "Area 4a (PreCG) - right hemisphere",
                          "rgb": [
                            118,
                            239,
                            183
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 124,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            9609157,
                            -31334779,
                            68068112
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "175848ff-4c55-47e3-a0ae-f905a14e03cd"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "mesial precentral gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area 6mp (SMA, mesial SFG)",
                      "arealabel": "Area-6mp",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/2E1T-47F",
                      "synonyms": [],
                      "rgb": [
                        75,
                        95,
                        87
                      ],
                      "children": [
                        {
                          "name": "Area 6mp (SMA, mesial SFG) - left hemisphere",
                          "rgb": [
                            75,
                            95,
                            87
                          ],
                          "labelIndex": 298,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -4094374,
                            -14286751,
                            59329220
                          ]
                        },
                        {
                          "name": "Area 6mp (SMA, mesial SFG) - right hemisphere",
                          "rgb": [
                            75,
                            95,
                            87
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 298,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            4949202,
                            -13788668,
                            57534028
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "def99e8e-ce8f-4a62-bd5d-739948c4b010"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "medial orbitofrontal cortex",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area Fo1 (OFC)",
                      "arealabel": "Area-Fo1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/H2N2-6J2",
                      "synonyms": [],
                      "rgb": [
                        7,
                        255,
                        179
                      ],
                      "children": [
                        {
                          "name": "Area Fo1 (OFC) - left hemisphere",
                          "rgb": [
                            7,
                            255,
                            179
                          ],
                          "labelIndex": 3,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -7962771,
                            41364968,
                            -22537687
                          ]
                        },
                        {
                          "name": "Area Fo1 (OFC) - right hemisphere",
                          "rgb": [
                            7,
                            255,
                            179
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 3,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            9705948,
                            40760961,
                            -22481988
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "3864cb8c-f277-4de6-9f8d-c76d71d7e9a9"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Fo3 (OFC)",
                      "arealabel": "Area-Fo3",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/E1YQ-65U",
                      "synonyms": [],
                      "rgb": [
                        182,
                        189,
                        250
                      ],
                      "children": [
                        {
                          "name": "Area Fo3 (OFC) - left hemisphere",
                          "rgb": [
                            182,
                            189,
                            250
                          ],
                          "labelIndex": 5,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -21866985,
                            33732378,
                            -19882472
                          ]
                        },
                        {
                          "name": "Area Fo3 (OFC) - right hemisphere",
                          "rgb": [
                            182,
                            189,
                            250
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 5,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            22929678,
                            33527877,
                            -20231493
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "741f6a9e-cfd7-4173-ac7d-ee616c29555e"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Fo2 (OFC)",
                      "arealabel": "Area-Fo2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/3JB9-2V2",
                      "synonyms": [],
                      "rgb": [
                        0,
                        255,
                        0
                      ],
                      "children": [
                        {
                          "name": "Area Fo2 (OFC) - left hemisphere",
                          "rgb": [
                            0,
                            255,
                            0
                          ],
                          "labelIndex": 4,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -8588272,
                            22532156,
                            -20474464
                          ]
                        },
                        {
                          "name": "Area Fo2 (OFC) - right hemisphere",
                          "rgb": [
                            0,
                            255,
                            0
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 4,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            9164379,
                            21928964,
                            -20593342
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "30a04d2b-58e1-43d7-8b8f-1f0b598382d0"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "frontal operculum ",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area OP8 (Frontal Operculum)",
                      "arealabel": "Area-OP8",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/NGF8-TA4",
                      "synonyms": [],
                      "rgb": [
                        29,
                        76,
                        168
                      ],
                      "children": [
                        {
                          "name": "Area OP8 (Frontal Operculum) - left hemisphere",
                          "rgb": [
                            29,
                            76,
                            168
                          ],
                          "labelIndex": 273,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -41777921,
                            17183344,
                            7912847
                          ]
                        },
                        {
                          "name": "Area OP8 (Frontal Operculum) - right hemisphere",
                          "rgb": [
                            29,
                            76,
                            168
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 273,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            42725111,
                            16774146,
                            7832095
                          ]
                        }
                      ]
                    },
                    {
                      "name": "Area OP9 (Frontal Operculum)",
                      "arealabel": "Area-OP9",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/3A30-5E4",
                      "synonyms": [],
                      "rgb": [
                        175,
                        123,
                        34
                      ],
                      "children": [
                        {
                          "name": "Area OP9 (Frontal Operculum) - left hemisphere",
                          "rgb": [
                            175,
                            123,
                            34
                          ],
                          "labelIndex": 274,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -45090542,
                            25998787,
                            5597413
                          ]
                        },
                        {
                          "name": "Area OP9 (Frontal Operculum) - right hemisphere",
                          "rgb": [
                            175,
                            123,
                            34
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 274,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            44374928,
                            26272467,
                            2966228
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "name": "lateral orbitofrontal cortex",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area Fo5 (OFC)",
                      "arealabel": "Area-Fo5",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/HJMY-ZZP",
                      "synonyms": [],
                      "rgb": [
                        219,
                        11,
                        91
                      ],
                      "children": [
                        {
                          "name": "Area Fo5 (OFC) - left hemisphere",
                          "rgb": [
                            219,
                            11,
                            91
                          ],
                          "labelIndex": 325,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -38055351,
                            56315867,
                            -8720295
                          ]
                        },
                        {
                          "name": "Area Fo5 (OFC) - right hemisphere",
                          "rgb": [
                            219,
                            11,
                            91
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 325,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            40545983,
                            54504228,
                            -4983615
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "3fd2e113-ec08-407b-bc88-172c9285694a"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Fo4 (OFC)",
                      "arealabel": "Area-Fo4",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/29G0-66F",
                      "synonyms": [],
                      "rgb": [
                        163,
                        204,
                        53
                      ],
                      "children": [
                        {
                          "name": "Area Fo4 (OFC) - left hemisphere",
                          "rgb": [
                            163,
                            204,
                            53
                          ],
                          "labelIndex": 324,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -27573653,
                            52998204,
                            -14510778
                          ]
                        },
                        {
                          "name": "Area Fo4 (OFC) - right hemisphere",
                          "rgb": [
                            163,
                            204,
                            53
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 324,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            33636124,
                            52034755,
                            -15509742
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "2cdee956-207a-4d4d-b051-bef80045210b"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Fo6 (OFC)",
                      "arealabel": "Area-Fo6",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/34Q4-H62",
                      "synonyms": [],
                      "rgb": [
                        199,
                        156,
                        187
                      ],
                      "children": [
                        {
                          "name": "Area Fo6 (OFC) - left hemisphere",
                          "rgb": [
                            199,
                            156,
                            187
                          ],
                          "labelIndex": 326,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -44272971,
                            42876258,
                            -12938967
                          ]
                        },
                        {
                          "name": "Area Fo6 (OFC) - right hemisphere",
                          "rgb": [
                            199,
                            156,
                            187
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 326,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            48891176,
                            40513824,
                            -12457353
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "330ae178-557c-4bd0-a932-f138c0a05345"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Fo7 (OFC)",
                      "arealabel": "Area-Fo7",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/3WEV-561",
                      "synonyms": [],
                      "rgb": [
                        64,
                        211,
                        186
                      ],
                      "children": [
                        {
                          "name": "Area Fo7 (OFC) - left hemisphere",
                          "rgb": [
                            64,
                            211,
                            186
                          ],
                          "labelIndex": 327,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -36046240,
                            37308943,
                            -11666667
                          ]
                        },
                        {
                          "name": "Area Fo7 (OFC) - right hemisphere",
                          "rgb": [
                            64,
                            211,
                            186
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 327,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            37850755,
                            37700302,
                            -13777644
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "1b882148-fcdd-4dbe-b33d-659957840e9e"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "insula",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "granular insula",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area Ig1 (Insula)",
                      "arealabel": "Area-Ig1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/EKV9-29D",
                      "synonyms": [],
                      "rgb": [
                        18,
                        111,
                        40
                      ],
                      "children": [
                        {
                          "name": "Area Ig1 (Insula) - left hemisphere",
                          "rgb": [
                            18,
                            111,
                            40
                          ],
                          "labelIndex": 115,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -33211215,
                            -24171963,
                            9923364
                          ]
                        },
                        {
                          "name": "Area Ig1 (Insula) - right hemisphere",
                          "rgb": [
                            18,
                            111,
                            40
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 115,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            33707983,
                            -23338235,
                            9071429
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "46cf08af-8086-4e8a-9e9f-182ca583bdf0"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Ig3 (Insula)",
                      "arealabel": "Area-Ig3",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "",
                      "synonyms": [],
                      "rgb": [
                        105,
                        253,
                        197
                      ],
                      "children": [
                        {
                          "name": "Area Ig3 (Insula) - left hemisphere",
                          "rgb": [
                            105,
                            253,
                            197
                          ],
                          "labelIndex": 336,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -37956284,
                            -14423497,
                            13513661
                          ]
                        },
                        {
                          "name": "Area Ig3 (Insula) - right hemisphere",
                          "rgb": [
                            105,
                            253,
                            197
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 336,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            38219144,
                            -13750630,
                            13916877
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "10dba769-4f6c-40f9-8ffd-e0cce71c5adb"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Ig2 (Insula)",
                      "arealabel": "Area-Ig2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/662G-E0W",
                      "synonyms": [],
                      "rgb": [
                        105,
                        61,
                        82
                      ],
                      "children": [
                        {
                          "name": "Area Ig2 (Insula) - left hemisphere",
                          "rgb": [
                            105,
                            61,
                            82
                          ],
                          "labelIndex": 114,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -37117338,
                            -17859895,
                            5094571
                          ]
                        },
                        {
                          "name": "Area Ig2 (Insula) - right hemisphere",
                          "rgb": [
                            105,
                            61,
                            82
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 114,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            37843632,
                            -16445145,
                            5703657
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "49092952-1eef-4b89-b8bf-1bf1f25f149a"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "agranular insula",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area Ia (Insula)",
                      "arealabel": "Area-Ia",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/WW8G-T2G",
                      "synonyms": [],
                      "rgb": [
                        71,
                        217,
                        62
                      ],
                      "children": [
                        {
                          "name": "Area Ia (Insula) - left hemisphere",
                          "rgb": [
                            71,
                            217,
                            62
                          ],
                          "labelIndex": 339,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -41612827,
                            -1876485,
                            -7019002
                          ]
                        },
                        {
                          "name": "Area Ia (Insula) - right hemisphere",
                          "rgb": [
                            71,
                            217,
                            62
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 339,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            43525000,
                            36538,
                            -7609615
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "110d0d7b-cb88-48ea-9caf-863f548dbe38"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "dys-/agranular insula",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area Id7 (Insula)",
                      "arealabel": "Area-Id7",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/88QG-JMS",
                      "synonyms": [],
                      "rgb": [
                        101,
                        202,
                        38
                      ],
                      "children": [
                        {
                          "name": "Area Id7 (Insula) - left hemisphere",
                          "rgb": [
                            101,
                            202,
                            38
                          ],
                          "labelIndex": 159,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -30926962,
                            23741297,
                            4787031
                          ]
                        },
                        {
                          "name": "Area Id7 (Insula) - right hemisphere",
                          "rgb": [
                            101,
                            202,
                            38
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 159,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            35034429,
                            24873239,
                            2446009
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "3d5729f5-55c6-412a-8fc1-41a95c71b13a"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "dysgranular insula",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area Id2 (Insula)",
                      "arealabel": "Area-Id2",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "",
                      "synonyms": [],
                      "rgb": [
                        225,
                        126,
                        73
                      ],
                      "children": [
                        {
                          "name": "Area Id2 (Insula) - left hemisphere",
                          "rgb": [
                            225,
                            126,
                            73
                          ],
                          "labelIndex": 56,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -41933981,
                            -11436893,
                            4091262
                          ]
                        },
                        {
                          "name": "Area Id2 (Insula) - right hemisphere",
                          "rgb": [
                            225,
                            126,
                            73
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 56,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            44043478,
                            -10289855,
                            3759834
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "cf9dea67-649d-4034-ae57-ec389f339277"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Id1 (Insula)",
                      "arealabel": "Area-Id1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/F37H-8WB",
                      "synonyms": [],
                      "rgb": [
                        141,
                        112,
                        216
                      ],
                      "children": [
                        {
                          "name": "Area Id1 (Insula) - left hemisphere",
                          "rgb": [
                            141,
                            112,
                            216
                          ],
                          "labelIndex": 116,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -40090747,
                            -18279359,
                            -4567616
                          ]
                        },
                        {
                          "name": "Area Id1 (Insula) - right hemisphere",
                          "rgb": [
                            141,
                            112,
                            216
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 116,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            40527825,
                            -17443508,
                            -4688027
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "c22055c1-514f-4096-906b-abf57286053b"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Id3 (Insula)",
                      "arealabel": "Area-Id3",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "",
                      "synonyms": [],
                      "rgb": [
                        32,
                        32,
                        58
                      ],
                      "children": [
                        {
                          "name": "Area Id3 (Insula) - left hemisphere",
                          "rgb": [
                            32,
                            32,
                            58
                          ],
                          "labelIndex": 57,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -40414195,
                            -7819915,
                            -8263771
                          ]
                        },
                        {
                          "name": "Area Id3 (Insula) - right hemisphere",
                          "rgb": [
                            32,
                            32,
                            58
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 57,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            41459316,
                            -6224335,
                            -9042586
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "3dcfcfc2-035c-4785-a820-a671f2104ac3"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Id5 (Insula)",
                      "arealabel": "Area-Id5",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/5CK1-B1G",
                      "synonyms": [],
                      "rgb": [
                        112,
                        6,
                        50
                      ],
                      "children": [
                        {
                          "name": "Area Id5 (Insula) - left hemisphere",
                          "rgb": [
                            112,
                            6,
                            50
                          ],
                          "labelIndex": 338,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -40174302,
                            -3354190,
                            741899
                          ]
                        },
                        {
                          "name": "Area Id5 (Insula) - right hemisphere",
                          "rgb": [
                            112,
                            6,
                            50
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 338,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            41094953,
                            -2659538,
                            607357
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "e03cd3c6-d0be-481c-b906-9b39c1d0b641"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Id6 (Insula)",
                      "arealabel": "Area-Id6",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/54HZ-KFQ",
                      "synonyms": [],
                      "rgb": [
                        138,
                        127,
                        119
                      ],
                      "children": [
                        {
                          "name": "Area Id6 (Insula) - left hemisphere",
                          "rgb": [
                            138,
                            127,
                            119
                          ],
                          "labelIndex": 340,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -36392282,
                            9843698,
                            3385341
                          ]
                        },
                        {
                          "name": "Area Id6 (Insula) - right hemisphere",
                          "rgb": [
                            138,
                            127,
                            119
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 340,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            37750946,
                            10762642,
                            3041624
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "31bbe92d-e5e8-4cf4-be5d-e6b12c71a107"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area Id4 (Insula)",
                      "arealabel": "Area-Id4",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/K63G-89H",
                      "synonyms": [],
                      "rgb": [
                        38,
                        174,
                        113
                      ],
                      "children": [
                        {
                          "name": "Area Id4 (Insula) - left hemisphere",
                          "rgb": [
                            38,
                            174,
                            113
                          ],
                          "labelIndex": 337,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -37055965,
                            -3505155,
                            11422680
                          ]
                        },
                        {
                          "name": "Area Id4 (Insula) - right hemisphere",
                          "rgb": [
                            38,
                            174,
                            113
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 337,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            37461444,
                            -3746634,
                            10858017
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "f480ed72-5ca5-4d1f-8905-cbe9bedcfaee"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            },
            {
              "name": "temporal lobe",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "superior temporal sulcus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area STS2 (STS)",
                      "arealabel": "Area-STS2",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/KHY9-J3Y",
                      "synonyms": [],
                      "rgb": [
                        62,
                        117,
                        123
                      ],
                      "children": [
                        {
                          "name": "Area STS2 (STS) - left hemisphere",
                          "rgb": [
                            62,
                            117,
                            123
                          ],
                          "labelIndex": 272,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -56352486,
                            -8557380,
                            -14844672
                          ]
                        },
                        {
                          "name": "Area STS2 (STS) - right hemisphere",
                          "rgb": [
                            62,
                            117,
                            123
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 272,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            56942990,
                            -8020716,
                            -16067930
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "278fc30f-2e24-4046-856b-95dfaf561635"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area STS1 (STS)",
                      "arealabel": "Area-STS1",
                      "status": "publicDOI",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/F6DF-H8P",
                      "synonyms": [],
                      "rgb": [
                        205,
                        228,
                        4
                      ],
                      "children": [
                        {
                          "name": "Area STS1 (STS) - left hemisphere",
                          "rgb": [
                            205,
                            228,
                            4
                          ],
                          "labelIndex": 271,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            -54514755,
                            -16753913,
                            -5260713
                          ]
                        },
                        {
                          "name": "Area STS1 (STS) - right hemisphere",
                          "rgb": [
                            205,
                            228,
                            4
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 271,
                          "children": [],
                          "status": "publicDOI",
                          "position": [
                            54536567,
                            -17992636,
                            -5712544
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "68784b66-ff15-4b09-b28a-a2146c0f8907"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "superior temporal gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area TE 3 (STG)",
                      "arealabel": "Area-TE-3",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/BN5J-JT8",
                      "synonyms": [],
                      "rgb": [
                        159,
                        104,
                        108
                      ],
                      "children": [
                        {
                          "name": "Area TE 3 (STG) - left hemisphere",
                          "rgb": [
                            159,
                            104,
                            108
                          ],
                          "labelIndex": 31,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -64398501,
                            -12497885,
                            1316801
                          ]
                        },
                        {
                          "name": "Area TE 3 (STG) - right hemisphere",
                          "rgb": [
                            159,
                            104,
                            108
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 31,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            65811519,
                            -9018989,
                            -1027621
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "7e1a3291-efdc-4ca6-a3d0-6c496c34639f"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "Heschl's gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area TE 1.2 (HESCHL)",
                      "arealabel": "Area-TE-1.2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/R382-617",
                      "synonyms": [],
                      "rgb": [
                        202,
                        251,
                        192
                      ],
                      "children": [
                        {
                          "name": "Area TE 1.2 (HESCHL) - left hemisphere",
                          "rgb": [
                            202,
                            251,
                            192
                          ],
                          "labelIndex": 30,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -50810427,
                            -6551343,
                            1635071
                          ]
                        },
                        {
                          "name": "Area TE 1.2 (HESCHL) - right hemisphere",
                          "rgb": [
                            202,
                            251,
                            192
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 30,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            55870330,
                            -2672527,
                            52747
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "677cd48c-70fa-4bbd-9f0a-ffdc7744bc0f"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area TE 1.1 (HESCHL)",
                      "arealabel": "Area-TE-1.1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/4HA3-BBE",
                      "synonyms": [],
                      "rgb": [
                        8,
                        113,
                        68
                      ],
                      "children": [
                        {
                          "name": "Area TE 1.1 (HESCHL) - left hemisphere",
                          "rgb": [
                            8,
                            113,
                            68
                          ],
                          "labelIndex": 33,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -38219760,
                            -27125577,
                            10774700
                          ]
                        },
                        {
                          "name": "Area TE 1.1 (HESCHL) - right hemisphere",
                          "rgb": [
                            8,
                            113,
                            68
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 33,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            40719340,
                            -24106132,
                            10308962
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "e2969911-77eb-4b21-af70-216cab5285b1"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area TE 1.0 (HESCHL)",
                      "arealabel": "Area-TE-1.0",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/MV3G-RET",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area Te1",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "f424643e-9baf-4c50-9417-db1ac33dcd3e"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        252,
                        84,
                        222
                      ],
                      "children": [
                        {
                          "name": "Area TE 1.0 (HESCHL) - left hemisphere",
                          "rgb": [
                            252,
                            84,
                            222
                          ],
                          "labelIndex": 27,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -46560150,
                            -17508772,
                            7622807
                          ]
                        },
                        {
                          "name": "Area TE 1.0 (HESCHL) - right hemisphere",
                          "rgb": [
                            252,
                            84,
                            222
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 27,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            50392116,
                            -12932573,
                            5942946
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "13e21153-2ba8-4212-b172-8894f1012225"
                        }
                      }
                    }
                  ]
                },
                {
                  "name": "fusiform gyrus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area FG2 (FusG)",
                      "arealabel": "Area-FG2",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/F2JH-KVV",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area FG2",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "8f436328-4251-4706-ae38-767e1ab21c6f"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        67,
                        94,
                        149
                      ],
                      "children": [
                        {
                          "name": "Area FG2 (FusG) - left hemisphere",
                          "rgb": [
                            67,
                            94,
                            149
                          ],
                          "labelIndex": 106,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -43549584,
                            -65531770,
                            -16708135
                          ]
                        },
                        {
                          "name": "Area FG2 (FusG) - right hemisphere",
                          "rgb": [
                            67,
                            94,
                            149
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 106,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            44839825,
                            -63606518,
                            -17316773
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "6e7a0441-4baa-4355-921b-50d23d07d50f"
                        }
                      }
                    },
                    {
                      "name": "Area FG3 (FusG)",
                      "arealabel": "Area-FG3",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/Z0F6-0SY",
                      "synonyms": [],
                      "rgb": [
                        120,
                        147,
                        37
                      ],
                      "children": [
                        {
                          "name": "Area FG3 (FusG) - left hemisphere",
                          "rgb": [
                            120,
                            147,
                            37
                          ],
                          "labelIndex": 239,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -29844935,
                            -45368421,
                            -14184493
                          ]
                        },
                        {
                          "name": "Area FG3 (FusG) - right hemisphere",
                          "rgb": [
                            120,
                            147,
                            37
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 239,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            31148061,
                            -44485336,
                            -15533822
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "023f8ef7-c266-4c45-8bf2-4a17dc52985b"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area FG1 (FusG)",
                      "arealabel": "Area-FG1",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/5ZVQ-R8R",
                      "synonyms": [],
                      "rgb": [
                        131,
                        183,
                        58
                      ],
                      "children": [
                        {
                          "name": "Area FG1 (FusG) - left hemisphere",
                          "rgb": [
                            131,
                            183,
                            58
                          ],
                          "labelIndex": 107,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -29006116,
                            -66264526,
                            -12290010
                          ]
                        },
                        {
                          "name": "Area FG1 (FusG) - right hemisphere",
                          "rgb": [
                            131,
                            183,
                            58
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 107,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            32840456,
                            -64340456,
                            -12612536
                          ]
                        }
                      ],
                      "relatedAreas": [
                        {
                          "name": "Area FG1",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "6318e160-4ad2-4eec-8a2e-2df6fe07d8f4"
                            }
                          }
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "39fb34a8-fd6d-4fba-898c-2f6167e40459"
                        }
                      }
                    },
                    {
                      "name": "Area FG4 (FusG)",
                      "arealabel": "Area-FG4",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/13RG-FYV",
                      "synonyms": [],
                      "relatedAreas": [
                        {
                          "name": "Area FG2",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "8f436328-4251-4706-ae38-767e1ab21c6f"
                            }
                          }
                        }
                      ],
                      "rgb": [
                        170,
                        220,
                        175
                      ],
                      "children": [
                        {
                          "name": "Area FG4 (FusG) - left hemisphere",
                          "rgb": [
                            170,
                            220,
                            175
                          ],
                          "labelIndex": 238,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -43204016,
                            -44325167,
                            -20016734
                          ]
                        },
                        {
                          "name": "Area FG4 (FusG) - right hemisphere",
                          "rgb": [
                            170,
                            220,
                            175
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 238,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            43609694,
                            -43478025,
                            -22392295
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "fa602743-5f6e-49d1-9734-29dffaa95ff5"
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              "name": "limbic lobe",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "cingulate gyrus, frontal part",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Area p24c (pACC)",
                      "arealabel": "Area-p24c",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/QA7B-JM9",
                      "synonyms": [],
                      "rgb": [
                        241,
                        164,
                        195
                      ],
                      "children": [
                        {
                          "name": "Area p24c (pACC) - left hemisphere",
                          "rgb": [
                            241,
                            164,
                            195
                          ],
                          "labelIndex": 232,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -8144989,
                            41168443,
                            14314854
                          ]
                        },
                        {
                          "name": "Area p24c (pACC) - right hemisphere",
                          "rgb": [
                            241,
                            164,
                            195
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 232,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            9856593,
                            40780558,
                            12002406
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "e6507a3d-f2f8-4c17-84ff-0e7297e836a0"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 25 (sACC)",
                      "arealabel": "Area-25",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/51AM-WN4",
                      "synonyms": [],
                      "rgb": [
                        170,
                        68,
                        220
                      ],
                      "children": [
                        {
                          "name": "Area 25 (sACC) - left hemisphere",
                          "rgb": [
                            170,
                            68,
                            220
                          ],
                          "labelIndex": 184,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -3522692,
                            13560250,
                            -11860720
                          ]
                        },
                        {
                          "name": "Area 25 (sACC) - right hemisphere",
                          "rgb": [
                            170,
                            68,
                            220
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 184,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            4564663,
                            12954463,
                            -12174863
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "9010ef76-accd-4308-9951-f37b6a10f42b"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area p24ab (pACC)",
                      "arealabel": "Area-p24ab",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/DHXC-2KN",
                      "synonyms": [],
                      "rgb": [
                        153,
                        195,
                        229
                      ],
                      "children": [
                        {
                          "name": "Area p24ab (pACC) - left hemisphere",
                          "rgb": [
                            153,
                            195,
                            229
                          ],
                          "labelIndex": 231,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -2244059,
                            38783168,
                            6389109
                          ]
                        },
                        {
                          "name": "Area p24ab (pACC) - right hemisphere",
                          "rgb": [
                            153,
                            195,
                            229
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 231,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            3429274,
                            38385609,
                            7809963
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "5dbb1035-487c-4f43-b551-ccadcf058340"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area s32 (sACC)",
                      "arealabel": "Area-s32",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/XTRR-172",
                      "synonyms": [],
                      "rgb": [
                        193,
                        94,
                        250
                      ],
                      "children": [
                        {
                          "name": "Area s32 (sACC) - left hemisphere",
                          "rgb": [
                            193,
                            94,
                            250
                          ],
                          "labelIndex": 46,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -6738110,
                            35256183,
                            -11765377
                          ]
                        },
                        {
                          "name": "Area s32 (sACC) - right hemisphere",
                          "rgb": [
                            193,
                            94,
                            250
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 46,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            4307795,
                            34460360,
                            -12141905
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "61b44255-ae3a-4a23-b1bc-7d303a48dbd3"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area 33 (ACC)",
                      "arealabel": "Area-33",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/X9QP-C6F",
                      "synonyms": [],
                      "rgb": [
                        51,
                        57,
                        245
                      ],
                      "children": [
                        {
                          "name": "Area 33 (ACC) - left hemisphere",
                          "rgb": [
                            51,
                            57,
                            245
                          ],
                          "labelIndex": 39,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -4861218,
                            14163048,
                            15911877
                          ]
                        },
                        {
                          "name": "Area 33 (ACC) - right hemisphere",
                          "rgb": [
                            51,
                            57,
                            245
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 39,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            5087045,
                            15562321,
                            16125051
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "b83a3330-b80e-42a0-b8d2-82f38784aa1d"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area p32 (pACC)",
                      "arealabel": "Area-p32",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/3JX0-7E5",
                      "synonyms": [],
                      "rgb": [
                        87,
                        135,
                        14
                      ],
                      "children": [
                        {
                          "name": "Area p32 (pACC) - left hemisphere",
                          "rgb": [
                            87,
                            135,
                            14
                          ],
                          "labelIndex": 47,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -6122937,
                            49256108,
                            11929896
                          ]
                        },
                        {
                          "name": "Area p32 (pACC) - right hemisphere",
                          "rgb": [
                            87,
                            135,
                            14
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 47,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            7759613,
                            48520792,
                            12436058
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "b09aaa77-f41b-4008-b8b9-f984b0417cf3"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Area s24 (sACC)",
                      "arealabel": "Area-s24",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/HXWM-NRX",
                      "synonyms": [],
                      "rgb": [
                        133,
                        34,
                        201
                      ],
                      "children": [
                        {
                          "name": "Area s24 (sACC) - left hemisphere",
                          "rgb": [
                            133,
                            34,
                            201
                          ],
                          "labelIndex": 183,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -3247887,
                            24596479,
                            -9615493
                          ]
                        },
                        {
                          "name": "Area s24 (sACC) - right hemisphere",
                          "rgb": [
                            133,
                            34,
                            201
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 183,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            3259899,
                            23813535,
                            -9257019
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "d4ea6cc5-1e1d-4212-966f-81fed01eb648"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "hippocampal formation",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "HATA (Hippocampus)",
                      "arealabel": "HATA",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/M1XP-VSQ",
                      "synonyms": [],
                      "rgb": [
                        137,
                        12,
                        73
                      ],
                      "children": [
                        {
                          "name": "HATA (Hippocampus) - left hemisphere",
                          "rgb": [
                            137,
                            12,
                            73
                          ],
                          "labelIndex": 68,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -13947917,
                            -9576389,
                            -18975694
                          ]
                        },
                        {
                          "name": "HATA (Hippocampus) - right hemisphere",
                          "rgb": [
                            137,
                            12,
                            73
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 68,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            15080586,
                            -8358974,
                            -17871795
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "9ec4a423-70fa-43cd-90b3-fbc26a3cbc6c"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Entorhinal Cortex",
                      "arealabel": "Entorhinal-Cortex",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/KNXY-B1Z",
                      "synonyms": [],
                      "rgb": [
                        35,
                        159,
                        214
                      ],
                      "children": [
                        {
                          "name": "Entorhinal Cortex - left hemisphere",
                          "rgb": [
                            35,
                            159,
                            214
                          ],
                          "labelIndex": 60,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -20926052,
                            -6082765,
                            -33357509
                          ]
                        },
                        {
                          "name": "Entorhinal Cortex - right hemisphere",
                          "rgb": [
                            35,
                            159,
                            214
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 60,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            22877203,
                            -3501469,
                            -32577556
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "030827d4-e0d1-4406-b71f-3f58dc2f9cca"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "CA (Hippocampus)",
                      "arealabel": "CA",
                      "status": "publicP",
                      "labelIndex": null,
                      "relatedAreas": [
                        {
                          "name": "CA1 (Hippocampus)",
                          "fullId": {
                            "kg": {
                              "kgSchema": "minds/core/parcellationregion/v1.0.0",
                              "kgId": "bfc0beb7-310c-4c57-b810-2adc464bd02c"
                            }
                          }
                        }
                      ],
                      "doi": "https://doi.org/10.25493/B85T-D88",
                      "synonyms": [],
                      "rgb": [
                        250,
                        191,
                        217
                      ],
                      "children": [
                        {
                          "name": "CA (Hippocampus) - left hemisphere",
                          "rgb": [
                            250,
                            191,
                            217
                          ],
                          "labelIndex": 191,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -27476326,
                            -26068931,
                            -11082817
                          ]
                        },
                        {
                          "name": "CA (Hippocampus) - right hemisphere",
                          "rgb": [
                            250,
                            191,
                            217
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 191,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            29426785,
                            -24801145,
                            -11142814
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "a0d14d3e-bc30-41cf-8b28-540067897f80"
                        }
                      }
                    },
                    {
                      "name": "DG (Hippocampus)",
                      "arealabel": "DG",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/M8JP-XQT",
                      "synonyms": [],
                      "rgb": [
                        149,
                        55,
                        120
                      ],
                      "children": [
                        {
                          "name": "DG (Hippocampus) - left hemisphere",
                          "rgb": [
                            149,
                            55,
                            120
                          ],
                          "labelIndex": 61,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -26946498,
                            -26708171,
                            -9589494
                          ]
                        },
                        {
                          "name": "DG (Hippocampus) - right hemisphere",
                          "rgb": [
                            149,
                            55,
                            120
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 61,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            28316456,
                            -24674684,
                            -10596203
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "0bea7e03-bfb2-4907-9d45-db9071ce627d"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Subiculum (Hippocampus)",
                      "arealabel": "Subiculum",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/QKJH-F45",
                      "synonyms": [],
                      "rgb": [
                        111,
                        125,
                        219
                      ],
                      "children": [
                        {
                          "name": "Subiculum (Hippocampus) - left hemisphere",
                          "rgb": [
                            111,
                            125,
                            219
                          ],
                          "labelIndex": 192,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -20352171,
                            -24057796,
                            -16326997
                          ]
                        },
                        {
                          "name": "Subiculum (Hippocampus) - right hemisphere",
                          "rgb": [
                            111,
                            125,
                            219
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 192,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            22543982,
                            -23195614,
                            -15923499
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "7e2dab4c-a140-440d-a322-c1679adef2d4"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "metencephalon",
      "status": null,
      "labelIndex": null,
      "synonyms": [],
      "rgb": null,
      "children": [
        {
          "name": "cerebellum",
          "status": null,
          "labelIndex": null,
          "synonyms": [],
          "rgb": null,
          "children": [
            {
              "name": "cerebellar nuclei",
              "status": null,
              "labelIndex": null,
              "synonyms": [],
              "rgb": null,
              "children": [
                {
                  "name": "globose nucleus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Interposed Nucleus (Cerebellum)",
                      "arealabel": "Interposed-Nucleus",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/8PTB-JDH",
                      "synonyms": [],
                      "rgb": [
                        170,
                        29,
                        10
                      ],
                      "children": [
                        {
                          "name": "Interposed Nucleus (Cerebellum) - left hemisphere",
                          "rgb": [
                            170,
                            29,
                            10
                          ],
                          "labelIndex": 251,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -8457921,
                            -55262376,
                            -30235149
                          ]
                        },
                        {
                          "name": "Interposed Nucleus (Cerebellum) - right hemisphere",
                          "rgb": [
                            170,
                            29,
                            10
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 251,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            7917989,
                            -54201058,
                            -31489418
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "85e7bb13-4b73-4f6f-8222-3adb7b800788"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "dentate nucleus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Dorsal Dentate Nucleus (Cerebellum)",
                      "arealabel": "Dorsal-Dentate-Nucleus",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/M5QG-SHH",
                      "synonyms": [],
                      "rgb": [
                        89,
                        201,
                        99
                      ],
                      "children": [
                        {
                          "name": "Dorsal Dentate Nucleus (Cerebellum) - left hemisphere",
                          "rgb": [
                            89,
                            201,
                            99
                          ],
                          "labelIndex": 240,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -16612782,
                            -56036341,
                            -36064536
                          ]
                        },
                        {
                          "name": "Dorsal Dentate Nucleus (Cerebellum) - right hemisphere",
                          "rgb": [
                            89,
                            201,
                            99
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 240,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            15388967,
                            -58303395,
                            -36586280
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "58095aef-da69-43d4-887c-009c095cecce"
                        }
                      },
                      "relatedAreas": []
                    },
                    {
                      "name": "Ventral Dentate Nucleus (Cerebellum)",
                      "arealabel": "Ventral-Dentate-Nucleus",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/FQE5-5QR",
                      "synonyms": [],
                      "rgb": [
                        39,
                        129,
                        9
                      ],
                      "children": [
                        {
                          "name": "Ventral Dentate Nucleus (Cerebellum) - left hemisphere",
                          "rgb": [
                            39,
                            129,
                            9
                          ],
                          "labelIndex": 241,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -13112867,
                            -56176072,
                            -29957111
                          ]
                        },
                        {
                          "name": "Ventral Dentate Nucleus (Cerebellum) - right hemisphere",
                          "rgb": [
                            39,
                            129,
                            9
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 241,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            12107011,
                            -55974170,
                            -31385609
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "57282342-5a75-4e07-bcdc-2d368c517b71"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "fastigial nucleus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Fastigial Nucleus (Cerebellum)",
                      "arealabel": "Fastigial-Nucleus",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/3YJ9-S6G",
                      "synonyms": [],
                      "rgb": [
                        200,
                        100,
                        10
                      ],
                      "children": [
                        {
                          "name": "Fastigial Nucleus (Cerebellum) - left hemisphere",
                          "rgb": [
                            200,
                            100,
                            10
                          ],
                          "labelIndex": 219,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -3828877,
                            -53149733,
                            -29013369
                          ]
                        },
                        {
                          "name": "Fastigial Nucleus (Cerebellum) - right hemisphere",
                          "rgb": [
                            200,
                            100,
                            10
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 219,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            3011287,
                            -53069977,
                            -29040632
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "e8abfe3d-8b64-45c2-8853-314d82873273"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                },
                {
                  "name": "emboliform nucleus",
                  "status": null,
                  "labelIndex": null,
                  "synonyms": [],
                  "rgb": null,
                  "children": [
                    {
                      "name": "Interposed Nucleus (Cerebellum)",
                      "arealabel": "Interposed-Nucleus",
                      "status": "publicP",
                      "labelIndex": null,
                      "doi": "https://doi.org/10.25493/8PTB-JDH",
                      "synonyms": [],
                      "rgb": [
                        170,
                        29,
                        10
                      ],
                      "children": [
                        {
                          "name": "Interposed Nucleus (Cerebellum) - left hemisphere",
                          "rgb": [
                            170,
                            29,
                            10
                          ],
                          "labelIndex": 251,
                          "ngId": "jubrain colin v18 left",
                          "children": [],
                          "status": "publicP",
                          "position": [
                            -8457921,
                            -55262376,
                            -30235149
                          ]
                        },
                        {
                          "name": "Interposed Nucleus (Cerebellum) - right hemisphere",
                          "rgb": [
                            170,
                            29,
                            10
                          ],
                          "ngId": "jubrain colin v18 right",
                          "labelIndex": 251,
                          "children": [],
                          "status": "publicP",
                          "position": [
                            7917989,
                            -54201058,
                            -31489418
                          ]
                        }
                      ],
                      "fullId": {
                        "kg": {
                          "kgSchema": "minds/core/parcellationregion/v1.0.0",
                          "kgId": "85e7bb13-4b73-4f6f-8222-3adb7b800788"
                        }
                      },
                      "relatedAreas": []
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
