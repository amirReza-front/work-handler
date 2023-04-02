import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../../node_modules/bootstrap/dist/css/bootstrap.rtl.css'
import { Provider } from 'react-redux'
import {store} from '../components/redux/store'
import React from 'react'
 function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )

}
export default React.memo(App)
;