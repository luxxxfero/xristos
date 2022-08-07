import type { NextPage } from 'next'
import Head from "next/head";
import MainLayout from "../layouts/main-layout";
import HomeContent from "../components/home-content/home-content";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Благая весть - Христос.ру</title>
        <meta name="description" content="Получайте каждый день случайно выбранную весть из святого благовествования, рассуждайте над ней и исполняйте её."/>
        <meta name="google-site-verification" content="vXFJY6qa02YoVojnkMHtzPKk9zyxjZ1rV6h7jgFiULw" />
        <meta name="yandex-verification" content="85cde1de6d071cbe" />
        <meta property="og:title" content="Благая весть - Христос.ру"/>
        <meta property="og:description" content="Получайте каждый день случайно выбранную весть из святого благовествования, рассуждайте над ней и исполняйте её."/>
      </Head>
      <MainLayout title="Благая весть" desc="Получайте каждый день случайно выбранную весть из святого благовествования, рассуждайте над ней и исполняйте её.">
        <HomeContent/>
      </MainLayout>
    </>
  )
}

export default Home
