import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ToastProvider placement='bottom-right'>
      <Component {...pageProps} />
    </ToastProvider>
  )
}

export default MyApp
