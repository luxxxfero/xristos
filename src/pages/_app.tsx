import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {Router} from "next/router";
import ym, {YMInitializer} from "react-yandex-metrika";

Router.events.on("routeChangeComplete", (url: string) => {
  if(typeof window !== "undefined") {
    ym("hit", url)
  }
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <YMInitializer accounts={[89869532]} options={{webvisor: false, defer: true}}/>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
