import Head from 'next/head'
import styles from '@/styles/EducatorGuide.module.scss'
import Link from 'next/link'
import { Footer } from '@/components/footer'

const EducatorGuide = () => {
    return (
        <>
            <Head>
                <title>Texas Paleoindian - Educator Guide</title>
            </Head>
            <div
                className={styles.contentWrapper}
            >
                <Link 
                    href="/" 
                    className={`
                        ${styles.button} 
                        ${styles.guideButton}
                    `}>
                    Download Guide
                </Link>
                <Link 
                    href="/" 
                    className={`
                        ${styles.button} 
                        ${styles.gameButton}
                    `}>
                    Download Game
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default EducatorGuide
