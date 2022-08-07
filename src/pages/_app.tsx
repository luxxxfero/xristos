import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Router, useRouter} from "next/router";
import ym, {YMInitializer} from "react-yandex-metrika";
import Head from "next/head";

Router.events.on("routeChangeComplete", (url: string) => {
  if(typeof window !== "undefined") {
    ym("hit", url)
  }
})

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta property="og:url" content={`https://www.xristos.ru${router.asPath}`}/>
      </Head>
      <YMInitializer accounts={[89869532]} options={{webvisor: false, defer: true}}/>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
