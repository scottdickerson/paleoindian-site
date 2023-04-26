import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import { StoryNavigation } from '@/components/story-navigation'
import { Footer } from '@/components/footer'
import homeImage from '@/data/home/Paleoindian-Home.png'

export default function Home() {
    return (
        <>
            <Head>
                <title>Texas Paleoindian</title>
            </Head>
            <section className={styles.main}>
                <h1 className={styles.title}>A Time Before Texas</h1>
                <Image 
                        src={homeImage}
                        alt="Paleoindian Home Image"
                        className={styles.homeImage}
                    />
                <div className={styles.videoSection}>
                    <div className={styles.videoWrapper}>
                        <video controls src="videos/austin-tx.mp4"></video>
                    </div>
                    <StoryNavigation
                        isOnHomePage
                        className={styles.storyNavigation}
                    />
                </div>
                <ul>
                    <li>
                        <Link href="/txdot-and-tribes">
                            TxDOT and the Tribes
                        </Link>
                    </li>
                    <li>
                        <Link href="/educator-guide">Educator Guide</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                </ul>
            </section>
            <Footer />
        </>
    )
}
