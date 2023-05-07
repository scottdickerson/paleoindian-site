import Head from 'next/head'
import styles from '@/styles/EducatorGuide.module.scss'
import sectionStyles from '@/styles/StorySection.module.scss'
import Link from 'next/link'
import classNames from 'classnames'
import Image from 'next/image'
import tempPhoto from '@/data/educator-guide/temp_photo_box.png'
import { useMediaQuery } from 'react-responsive'

const Heading = () => <h1 className={sectionStyles.summary}>Educator Guide</h1>

const Description = () => (
    <p className={sectionStyles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo integer
        malesuada nunc vel risus commodo.
    </p>
)

const EducatorImage = () => (
    <div className={styles.imageWrapper}>
        <Image src={tempPhoto} alt="temp photo" className={styles.image} />
        <p className={styles.caption}>
            Caption level content will describe the photo in this space.
        </p>
    </div>
)

const DetailsSection = () => (
    <div className={classNames(sectionStyles.details)}>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
            integer malesuada nunc vel risus commodo. Purus ut faucibus pulvinar
            elementum integer enim.
        </p>
        <div className={styles.buttonWrapper}>
            <Link
                href="/pdfs/Ice Age Texas Cards.pdf"
                download
                className={sectionStyles.title}
            >
                Download Guide
            </Link>
            <Link
                href="/pdfs/Ice Age Texas Cards.pdf"
                download
                className={sectionStyles.title}
            >
                Download Game
            </Link>
        </div>
    </div>
)

const EducatorGuideTablet = () => (
    <div className={styles.tabletWrapper}>
        <Heading />
        <Description />
        <EducatorImage />
        <DetailsSection />
    </div>
)

const EducatorGuideDesktop = () => {
    return (
        <>
            <div className={styles.contentWrapper}>
                <div className={styles.headingAndDescription}>
                    <Heading />
                    <Description />
                </div>
                <EducatorImage />
                <DetailsSection />
            </div>
        </>
    )
}

const EducatorGuide = () => {
    // media query for desktop
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    })
    return (
        <>
            <Head>
                <title>Texas Paleoindian - Educator Guide</title>
            </Head>
            {isDesktop ? <EducatorGuideDesktop /> : <EducatorGuideTablet />}
        </>
    )
}

export default EducatorGuide
