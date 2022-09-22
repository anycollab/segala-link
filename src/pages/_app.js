import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Segala Link</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
      
      <Script id="jsflowbite" strategy="beforeInteractive" src="/public/plugins/flowbite/dist/flowbite.js" />
    </>
  )
}

export default MyApp
