import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/navbar"
import Head from 'next/head'
import Back from "../components/back";

export default function App({ Component, pageProps }: AppProps) {

  return <>
      <Head>
         <script src="https://kit.fontawesome.com/6614d3f926.js" crossOrigin="anonymous"></script>
      </Head>
      <Navbar />
      <Back />
      <Component {...pageProps} />
  </> 
}
