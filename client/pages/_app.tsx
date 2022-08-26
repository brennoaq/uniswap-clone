import '../styles/globals.css'
import { TransactionProvider } from '../context/TransactionContext'
import type { AppProps } from 'next/app'
import { MetaMaskInpageProvider } from '@metamask/providers'

declare global {
  interface Window{
    ethereum: MetaMaskInpageProvider
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  )
}

export default MyApp
