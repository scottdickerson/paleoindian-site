import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import { StoryNavigation } from "@/components/story-navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Texas Paleoindian</title>
      </Head>
      <section className={styles.main}>
        <h1 className={styles.title}>Time Before Texas</h1>
        <div className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <video controls src="videos/austin-tx.mp4"></video>
          </div>
          <StoryNavigation isOnHomePage className={styles.storyNavigation} />
        </div>
        <ul>
          <li>
            <Link href="/txdot-and-tribes">TxDOT and the Tribes</Link>
          </li>
          <li>
            <Link href="/educator-guide">Educator Guide</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </section>
    </>
  );
}
