import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo-client";
import { ToastProvider } from 'react-toast-notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ToastProvider placement='bottom-right'>
        <Component {...pageProps} />
      </ToastProvider>
    </ApolloProvider>
  )
}

export default MyApp
