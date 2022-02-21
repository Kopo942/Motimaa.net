import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'

// Bootstrap css
import '../styles/bs-custom.scss';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
