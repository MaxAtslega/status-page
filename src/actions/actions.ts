import { IncidentActions } from '../incident/actions/incident.actions'
import { StatusActions } from '../status/actions/status.actions'

import { ThemeActions } from '../theme/actions/theme.actions'

export type AllActions =
  | StatusActions
  | IncidentActions
  | ThemeActions
