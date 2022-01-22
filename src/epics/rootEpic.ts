import { combineEpics } from 'redux-observable'
import AdminEpic from '../admin/epics/admin.epic'
import AppEpic from '../status/epics/app.epic'
import UserEpic from '../user/epics/user.epic'
import LoginEpic from '../session/epics/login.epic'
import ThemeEpic from '../theme/epics/theme.epic'

export default combineEpics(AdminEpic, AppEpic, UserEpic, LoginEpic, ThemeEpic)
