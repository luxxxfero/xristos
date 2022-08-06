import styles from "./home-content.module.css";
import {useRouter} from "next/router";

const HomeContent = () => {

  const router = useRouter();

  const onGetVerseButtonClick = () => {
    router.push(`/${Math.floor(1 + Math.random() * (81 + 1 - 1))}`)
  }

  return (
    <>
      <p className={styles.desc}>
        <strong>
          «Итак всякого, кто слушает слова Мои сии и исполняет их, уподоблю мужу благоразумному, который построил дом свой на камне; и пошел дождь, и разлились реки, и подули ветры, и устремились на дом тот, и он не упал, потому что основан был на камне. А всякий, кто слушает сии слова Мои и не исполняет их, уподобится человеку безрассудному, который построил дом свой на песке; и пошел дождь, и разлились реки, и подули ветры, и налегли на дом тот; и он упал, и было падение его великое» (Матф.7:24–27)
      </strong></p>
      <button onClick={onGetVerseButtonClick} className={styles.button}>Получить весть</button>
    </>
  )
}

export default HomeContent;