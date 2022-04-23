import type { AppProps } from 'next/app'

import 'sanitize.css'
import 'sanitize.css/typography.css'

import '@/styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
