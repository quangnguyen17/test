import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { ErrorBoundary } from './ErrorBoundary'

const theme = {
  colors: {
    primary: '#3f51b5'
  }
}

ReactDOM.render(
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ErrorBoundary>,
  document.getElementById('root')
)
