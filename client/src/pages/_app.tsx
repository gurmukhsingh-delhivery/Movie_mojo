import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/navbar"
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {

  return <>
      <Head>
         <script src="https://kit.fontawesome.com/6614d3f926.js" crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
      <Component {...pageProps} />
  </> 
}
