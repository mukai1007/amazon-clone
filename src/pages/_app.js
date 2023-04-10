import { SessionProvider } from "next-auth/react"
import { Provider } from "react-redux"
import { store } from '../app/store'
import '@/src/styles/globals.css'

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}