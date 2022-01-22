import { ActionType, createAction } from 'typesafe-actions'

export const SET_THEME = 'SET_THEME'
export type SET_THEME = typeof SET_THEME;

export const THEME_SUCCESS = 'THEME_SUCCESS'
export type THEME_SUCCESS = typeof THEME_SUCCESS;

export const setThemeAction = createAction(SET_THEME)<string>()
export const themeSuccessAction = createAction(THEME_SUCCESS)<string>()

export type ThemeActions = ActionType<
  | typeof setThemeAction
  | typeof themeSuccessAction
  >;
