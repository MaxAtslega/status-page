import { combineEpics } from 'redux-observable'
import IncidentEpic from '../incident/epics/incident.epic'
import StatusEpic from '../status/epics/status.epic'
import ThemeEpic from '../theme/epics/theme.epic'

export default combineEpics(IncidentEpic, StatusEpic, ThemeEpic)
