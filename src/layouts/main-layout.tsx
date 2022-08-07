import React, {DetailedHTMLProps, HTMLAttributes} from "react";
import styles from "./main-layout.module.css";
import Link from "next/link";
import OKIcon from "../components/icons/ok";
import WhatsappIcon from "../components/icons/whatsapp";
import VKIcon from "../components/icons/vk";
import TelegramIcon from "../components/icons/telegram";
import cn from "classnames";

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
          <div className={styles.mainFooter}>
            <div className={styles.share}>
              <h4 className={styles.shareTitle}>
                Поделиться
              </h4>
              <a target="_blank" rel="noreferrer" href="https://connect.ok.ru/offer?url=https://xristos.ru/&title=Благая весть - Христос.ру&utm_source=share2" className={cn(styles.shareLink)}>
                <OKIcon className={cn(styles.shareIcon)}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?text=Благая весть - Христос.ру https://xristos.ru/&utm_source=share2" className={cn(styles.shareLink)}>
                <WhatsappIcon className={cn(styles.shareIcon)}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://vk.com/share.php?url=https://xristos.ru/&title=Благая весть - Христос.ру&utm_source=share2" className={cn(styles.shareLink)}>
                <VKIcon className={cn(styles.shareIcon)}/>
              </a>
              <a target="_blank" rel="noreferrer" href="https://t.me/share/url?url=https://xristos.ru/&text=Благая весть - Христос.ру&utm_source=share2" className={cn(styles.shareLink)}>
                <TelegramIcon className={cn(styles.shareIcon)}/>
              </a>
            </div>
            <div>
              <h4 className={styles.shareTitle}>
                <Link href="/thanks">
                  <a>Поблагодарить</a>
                </Link>
              </h4>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default MainLayout;