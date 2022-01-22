import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider as MuiThemeProvider } from 'styled-components'
import { AppState } from '../reducers/rootReducer'

const ThemeProvider = function ThemeProvider({ children }: {children: any}) {
  const theme = useSelector((state: AppState) => state.theme)
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
