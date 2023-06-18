import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import heroStyles from '@/styles/Hero.module.scss'
import { ResponsiveImage } from '@/components/responsive-image'
import Link from 'next/link'
import { STORY_PAGES } from '@/components/story-navigation'
import { ArrowheadScroller } from '@/components/arrowhead-scroller'
import { useRef } from 'react'

export default function Home() {
    const STORY_PAGES_URLS = Object.keys(STORY_PAGES)
    const firstLinkRef = useRef<HTMLAnchorElement>(null)
    return (
        <>
            <Head>
                <title>Texas Paleoindian</title>
            </Head>
            <section className={styles.main}>
                <div className={heroStyles.hero}>
                    <span>A Time </span>
                    <span className={heroStyles.before}>Before</span>
                    <span> Texas</span>
                </div>
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
                    <ResponsiveImage
                        fill
                        src="/videos/home/FromTheTopThumbnail.png"
                        alt="From the top"
                    ></ResponsiveImage>
                    <div className={styles.storyNavigation}>
                        <nav>
                            <ul>
                                <li>
                                    <Link
                                        ref={firstLinkRef}
                                        href={STORY_PAGES_URLS[0]}
                                    >
                                        Origin Stories
                                    </Link>
                                </li>
                                <li>
                                    <Link href={STORY_PAGES_URLS[1]}>
                                        Ice-Age Texas
                                    </Link>
                                </li>
                                <li>
                                    <Link href={STORY_PAGES_URLS[2]}>
                                        Daily Life
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
            <ArrowheadScroller scrollTarget={firstLinkRef} />
        </>
    )
}
