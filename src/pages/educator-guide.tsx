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
            <div
                className={styles.contentWrapper}
            >
                <h1 
                    className={styles.title}>Educator Guide
                </h1>
                <div className={styles.textWrapper}>
                    <p className={styles.firstParagraph}>
                        The Texas Paleoindian Project is a collaborative effort between the Texas Archeological Research Laboratory (TARL) at The University of Texas at Austin and the Texas Historical Commission (THC). The project is funded by the National Science Foundation (NSF) and the Texas Parks and Wildlife Department (TPWD). The project is a multi-year effort to document the Paleoindian archaeological record in Texas. The project is led by Dr. David Meltzer, Dr. David Anderson, and Dr. John K. Brugge.
                    </p>
                    <p className={styles.secondParagraph}>
                        The Texas Paleoindian Project is a collaborative effort between the Texas Archeological Research Laboratory (TARL) at The University of Texas at Austin and the Texas Historical Commission (THC). The project is funded by the National Science Foundation (NSF) and the Texas Parks and Wildlife Department (TPWD). The project is a multi-year effort to document the Paleoindian archaeological record in Texas. The project is led by Dr. David Meltzer, Dr. David Anderson, and Dr. John K. Brugge.
                    </p>
                </div>
                <div className={styles.imageWrapper}>
                    <div className={styles.image}>Image goes here</div>
                    <p className={styles.caption}>
                        Caption goes here
                    </p>
                </div>
                <div className={styles.buttonWrapper}>
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
            </div>
            <Footer />
        </>
    )
}

export default EducatorGuide
