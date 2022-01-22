import { ActionType } from 'typesafe-actions'
import update from 'immutability-helper'
import { createTheme, Theme } from '@mui/material'
import { setThemeAction, THEME_SUCCESS, themeSuccessAction } from '../actions/theme.actions'
import getDesignTokens from '../../theme'

const LIGHT_MODE_STATE = createTheme(getDesignTokens('light'))
const DARK_MODE_STATE = createTheme(getDesignTokens('dark'))

const matched = window.matchMedia('(prefers-color-scheme: dark)').matches
const INITIAL_STATE = matched ? { ...DARK_MODE_STATE } : { ...LIGHT_MODE_STATE }

export default function ThemeReducer(
  state: Theme = INITIAL_STATE,
  action: ActionType<
    typeof themeSuccessAction |
    typeof setThemeAction
    >,
): Theme {
  switch (action.type) {
    case THEME_SUCCESS:
      return update(state, { $set: action.payload === 'dark' ? DARK_MODE_STATE : LIGHT_MODE_STATE })
    default:
      return state
  }
}
