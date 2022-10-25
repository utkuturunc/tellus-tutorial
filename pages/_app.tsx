import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { TellusProvider } from '@heytellus/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TellusProvider config={{ token: "wjkurxnvgz" }}>
      <Component {...pageProps} />
    </TellusProvider>
  );
}

export default MyApp
