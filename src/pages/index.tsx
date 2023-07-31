import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import { ArrowheadScroller } from '@/components/arrowhead-scroller'
import { useRef } from 'react'
import { YouTubeVideo } from '@/components/youtube-video'
import fromTheTopThumbnail from '@/data/home/images/00_TitleCard@2x.webp'
import { Hero } from '@/components/hero'
import { NavigationButtons } from '@/components/navigation-buttons'

export default function Home() {
    const firstLinkRef = useRef<HTMLAnchorElement>(null)
    return (
        <>
            <Head>
                <title>Texas Paleoindian</title>
                <link
                    rel="preload"
                    href="/images/hero/hero@2x.webp"
                    as="image"
                />
                <link rel="preload" href="/images/hero/hero.webp" as="image" />
                <link
                    rel="preload"
                    href="/images/hero/hero@4x.webp"
                    as="image"
                />
            </Head>
            <section className={styles.main}>
                <Hero />
                <section className={styles.intro}>
                    <p className={styles.description}>
                        When mammoths, saber-toothed cats, and giant sloths
                        roamed Texas, people were there too.
                    </p>
                    <p className={styles.details}>
                        This online exhibit presents cutting edge science and
                        ancient wisdom to explore what life was like for the
                        first people to call Texas home.
                    </p>
                </section>
                <div className={styles.videoSection}>
                    <YouTubeVideo
                        src="https://youtu.be/UlrrNFO4jCs"
                        thumbnail={{
                            src: fromTheTopThumbnail,
                            alt: 'Stone Letters that spell From the Top',
                        }}
                        className={styles.video}
                    />
                    <NavigationButtons firstLinkRef={firstLinkRef} />
                </div>
            </section>
            <ArrowheadScroller scrollTarget={firstLinkRef} />
        </>
    )
}
