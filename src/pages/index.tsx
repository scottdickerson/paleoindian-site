import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";
import { StoryNavigation } from "@/components/story-navigation";

export default function Home() {
  return (
    <>
      <Head>
        <title>Texas Paleoindian</title>
        <meta
          name="description"
          content="Describes what life was like for the first people to call Texas home."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
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
      </main>
    </>
  );
}
