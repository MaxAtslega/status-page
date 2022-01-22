import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { CssBaseline } from '@mui/material'
import de from './i18n/messages/DE-de.json'
import en from './i18n/messages/EN-us.json'
import { store, history } from './store/configureStore'
import { AllPages } from './routes/routes'
import ThemeProvider from './providers/ThemeProvider'

const localeMap = {
  de: 'DE-de',
  'de-de': 'DE-de',
  en: 'EN-us',
  'en-us': 'EN-us',
}
let browserLang = navigator.language.toLowerCase() as keyof typeof localeMap
browserLang = Object.keys(localeMap).includes(browserLang)
  ? browserLang
  : 'de-de'

const messages = { 'DE-de': de, 'EN-us': en }

const App = function App() {
  const [locale] = useState<keyof typeof messages>(localeMap[
    browserLang
  ] as keyof typeof messages)

  return (
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale="EN-en"
      >
        <ThemeProvider>
          <CssBaseline />
          <Router history={history}>
            <AllPages />
          </Router>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  )
}

export default App
