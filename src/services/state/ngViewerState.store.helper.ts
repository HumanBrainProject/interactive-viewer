// TODO to be merged with ng viewer state after refactor
import { INgLayerInterface, PANELS } from './ngViewerState/constants'

export { INgLayerInterface, PANELS }

import {
  ngViewerActionAddNgLayer,
  ngViewerActionRemoveNgLayer,
  ngViewerActionSetPerspOctantRemoval,
  ngViewerActionToggleMax,
  ngViewerActionClearView,
  ngViewerActionSetPanelOrder,
  ngViewerActionForceShowSegment,
} from './ngViewerState/actions'

export {
  ngViewerActionAddNgLayer,
  ngViewerActionRemoveNgLayer,
  ngViewerActionSetPerspOctantRemoval,
  ngViewerActionToggleMax,
  ngViewerActionClearView,
  ngViewerActionSetPanelOrder,
  ngViewerActionForceShowSegment,
}

import {
  ngViewerSelectorClearView,
  ngViewerSelectorClearViewEntries,
  ngViewerSelectorNehubaReady,
  ngViewerSelectorOctantRemoval,
  ngViewerSelectorPanelMode,
  ngViewerSelectorPanelOrder,
} from './ngViewerState/selectors'

export {
  ngViewerSelectorClearView,
  ngViewerSelectorClearViewEntries,
  ngViewerSelectorNehubaReady,
  ngViewerSelectorOctantRemoval,
  ngViewerSelectorPanelMode,
  ngViewerSelectorPanelOrder,
}