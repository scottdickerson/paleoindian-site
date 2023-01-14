import Head from "next/head";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const inter = Inter({ subsets: ["latin"] });

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
        <h1 className={styles.title}>Texas Paleoindian</h1>
        <ul>
          <li>
            <Link href="/origin-stories">Origin Stories</Link>
          </li>
          <li>
            <Link href="/daily-life">Daily Life</Link>
          </li>
          <li>
            <Link href="/ice-age-texas">Ice Age Texas</Link>
          </li>
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
