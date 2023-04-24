import Head from 'next/head'
import styles from '@/styles/EducatorGuide.module.scss'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import tempPhoto from '@/data/educator-guide/temp_photo_box.png'

const EducatorGuide = () => {
    return (
        <>
            <Head>
                <title>Texas Paleoindian - Educator Guide</title>
            </Head>
            <Header />
            <div className={styles.contentWrapper}>
                    <h1 className={styles.title}>Educator Guide</h1>
                    <div className={styles.textWrapper}>
                    <p className={`${styles.text} ${styles.firstParagraph}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo.
                    </p>
                    </div>
                    <div className={styles.imageWrapper}>
                    <Image 
                        src={tempPhoto}
                        alt="temp photo"
                        className={styles.image}
                    />
                    <p className={styles.caption}>Caption goes here</p>
                    </div>
                    <p className={`${styles.text} ${styles.secondParagraph}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo integer malesuada nunc vel risus commodo. Purus ut faucibus pulvinar elementum integer enim. 
                    </p>
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
            <Footer className={styles.footer}/>
        </>
    )
}

export default EducatorGuide
