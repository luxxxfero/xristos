import type {GetStaticPaths, GetStaticProps, NextPage} from 'next'
import Head from "next/head";
import MainLayout from "../layouts/main-layout";
import {data} from "../constants";
import VerseContent from "../components/verse-content/verse-content";

type VersePageProps = {
  verse: {id: number, desc: string}
}

const Verse: NextPage<VersePageProps> = ({verse}) => {

  const title = "Благая весть №" + verse.id;
  const desc = verse.desc;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc}/>
      </Head>
      <MainLayout title="Благая весть" desc="Получайте каждый день случайно выбранную весть из святого благовествования, рассуждайте над ней и исполняйте её.">
        <VerseContent verse={verse}/>
      </MainLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [...data.map(it => {
      return {
        params: {id: `${it.id}`}
      }
    })],
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {

  const params = context.params;

  const id = params?.id as string || "1";

  const verse = data.filter(it => it.id === +id);

  return {
    props: {
      verse: verse[0],
    },
  }
}

export default Verse;