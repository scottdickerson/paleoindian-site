import Head from 'next/head'
import styles from '@/styles/EducatorGuide.module.scss'
import aboutStyles from '@/styles/About.module.scss'
import sectionStyles from '@/styles/StorySection.module.scss'
import classNames from 'classnames'
import Image from 'next/image'
import tempPhoto from '@/data/educator-guide/temp_photo_box.png'
import { useMediaQuery } from 'react-responsive'
import { PartnerLogos } from '@/components/partner-logos'

const Heading = () => (
    <h1 className={sectionStyles.summary}>About the Exhibit</h1>
)

const Description = () => (
    <p className={sectionStyles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Leo integer
        malesuada nunc vel risus commodo.
    </p>
)

const AboutImage = () => (
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
    </div>
)

const AboutTablet = () => (
    <div className={styles.tabletWrapper}>
        <Heading />
        <Description />
        <AboutImage />
        <DetailsSection />
        <PartnerLogos />
    </div>
)

const AboutDesktop = () => {
    return (
        <>
            <div className={styles.contentWrapper}>
                <div className={styles.headingAndDescription}>
                    <Heading />
                    <Description />
                </div>
                <AboutImage />
                <DetailsSection />
                <PartnerLogos className={aboutStyles.partnerLogo} />
            </div>
        </>
    )
}

const About = () => {
    // media query for desktop
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    })
    return (
        <>
            <Head>
                <title>Texas Paleoindian - About the Exhibit</title>
            </Head>
            {isDesktop ? <AboutDesktop /> : <AboutTablet />}
        </>
    )
}

export default About
