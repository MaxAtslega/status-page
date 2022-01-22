import { AdminActions } from '../admin/actions/admin.actions'
import { AppActions } from '../status/actions/app.actions'
import { UserActions } from '../user/actions/user.actions'
import { LoginActions } from '../session/actions/login.actions'
import { RegisterActions } from '../session/actions/register.actions'
import { ThemeActions } from '../theme/actions/theme.actions'

export type AllActions = AdminActions
  | AppActions
  | LoginActions
  | RegisterActions
  | UserActions
  | ThemeActions
