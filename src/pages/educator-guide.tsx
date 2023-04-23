import Head from 'next/head'
import styles from '@/styles/EducatorGuide.module.scss'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const EducatorGuide = () => {
    return (
        <>
            <Head>
                <title>Texas Paleoindian - Educator Guide</title>
            </Head>
            <Header />
            <div className={styles.contentWrapper}>
                <div className={styles.leftColumn}>
                    <h1 className={styles.title}>Educator Guide</h1>
                    <div className={styles.textWrapper}>
                    <p className={styles.firstParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo.
                    </p>
                    <p className={styles.secondParagraph}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo. Purus ut faucibus pulvinar elementum integer enim. 
                    </p>
                    </div>
                    <div className={styles.buttonWrapper}>
                    <Link 
                        href="/" 
                        className={`
                        ${styles.button} 
                        ${styles.guideButton}
                        `}
                    >
                        Download Guide
                    </Link>
                    <Link 
                        href="/" 
                        className={`
                        ${styles.button} 
                        ${styles.gameButton}
                        `}
                    >
                        Download Game
                    </Link>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.image}>Image goes here</div>
                    <p className={styles.caption}>Caption goes here</p>
                </div>
                </div>
            <Footer />
        </>
    )
}

export default EducatorGuide
