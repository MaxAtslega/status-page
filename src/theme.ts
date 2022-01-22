import darkScrollbar from '@mui/material/darkScrollbar'
import { PaletteMode } from '@mui/material'

// A custom theme for this app
const getDesignTokens = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ['"Quicksand"', ' sans-serif'].join(','),
    h1: {
      fontWeight: 600,
      fontSize: 35,
    },
    h2: {
      fontWeight: 500,
      fontSize: 29,
    },
    h3: {
      fontWeight: 500,
      fontSize: 24,
    },
    h4: {
      fontWeight: 500,
      fontSize: 20,
    },
    h5: {
      fontWeight: 600,
      fontSize: 16,
    },
    h6: {
      fontWeight: 600,
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
      fontFamily: ['"Roboto"', ' sans-serif'].join(','),
    },
    body2: {
      fontSize: 12,
      fontFamily: ['"Roboto"', ' sans-serif'].join(','),
    },
    overline: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: mode === 'dark' ? darkScrollbar() : null,
      },
    },
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        background: {
          default: '#fffff',
        },
        primary: {
          main: '#E5EFFF',
          dark: '#E5EFFF',
          contrastText: '#000000',
        },
        secondary: {
          main: '#367BF5',
          contrastText: '#ffffff',
        },
      } : {
        background: {
          default: '#212427',
        },
        primary: {
          main: '#323537',
          dark: '#202225',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#367BF5',
          contrastText: '#ffffff',
        },
      }),
  },
})

export default getDesignTokens
