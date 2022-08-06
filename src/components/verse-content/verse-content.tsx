import styles from "./verse-content.module.css";
import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import {useRouter} from "next/router";

interface VerseContent extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  verse: {id: number, desc: string}
}

const VerseContent: React.FC<VerseContent> = ({verse}) => {
  const router = useRouter();

  const onGetVerseButtonClick = () => {
    router.push(`/${Math.floor(1 + Math.random() * (81 + 1 - 1))}`)
  }
  return (
    <>
      <p className={styles.desc}>
        <strong>
          {verse.desc}
      </strong></p>
      <button onClick={onGetVerseButtonClick} className={styles.button}>Получить весть</button>
    </>
  )
}

export default VerseContent;