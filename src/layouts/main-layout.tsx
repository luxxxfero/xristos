import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import styles from "./main-layout.module.css";
import Link from "next/link";

interface MainLayout extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  title: string,
  desc: string
}

const MainLayout: React.FC<MainLayout> = ({children, title, desc}) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <h1 className={styles.mainTitle}>Христос.ру</h1>
          </a>
        </Link>
      </header>
      <main className={styles.main}>
        <section className={styles.content}>
          <h2 className={styles.contentTitle}>{title}</h2>
          <p className={styles.contentDesc}>{desc}</p>
          <div className={styles.contentWrap}>
            {children}
          </div>
        </section>
      </main>
    </div>
  )
}

export default MainLayout;