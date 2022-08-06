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
      </Head>
      <MainLayout title="Благая весть" desc="Получайте каждый день случайно выбранную весть из святого благовествования, рассуждайте над ней и исполняйте её.">
        <HomeContent/>
      </MainLayout>
    </>
  )
}

export default Home
