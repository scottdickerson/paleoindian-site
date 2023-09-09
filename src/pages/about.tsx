import Head from 'next/head'
import styles from '@/styles/EducatorGuide.module.scss'
import aboutStyles from '@/styles/About.module.scss'
import sectionStyles from '@/styles/StorySection.module.scss'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

const Heading = () => (
    <h1 className={sectionStyles.summary}>About the Exhibit</h1>
)

const Description = () => (
    <p className={sectionStyles.description}>
        A Time Before Texas is sponsored by the Texas Department of
        Transportation as part of its responsibilities under the National
        Historic Preservation Act of 1966.
    </p>
)

const DetailsSection = () => (
    <div className={classNames(sectionStyles.details, aboutStyles.partners)}>
        <p>
            This exhibit would not be possible without TxDOT’s many partners,
            including:
            <ul>
                <li>Humanities Texas</li>
                <li>Texas Science & Natural History Museum</li>
                <li> Mescalero Apache Tribe</li>
                <li>
                    Center for Archaeological Studies, Texas State University
                </li>
                <li>AmaTerra </li>
                <li>ICF</li> <li>MuseWork Exhibits</li>
            </ul>
        </p>
    </div>
)

const CopyrightSection = () => (
    <section className={aboutStyles.copyright}>
        <span className={aboutStyles.copyrightTitle}>Copyright & Fair Use</span>
        <p>
            This online exhibit contains, references and interprets both
            copyrighted materials and materials in the public domain. Those
            materials may include text, images, graphics, audio and video clips,
            and other content (collectively, the “Content”). In some cases, the
            copyright is owned by third parties, and this exhibit is utilizing
            the third‐party Content by express permission or under the fair use
            doctrine.
        </p>
        <p>
            The Content is made available only for your personal, noncommercial
            educational and scholarly use. You may not use the Content for any
            other purpose, or distribute or make the Content available to
            others, unless you obtain any required permission from the copyright
            holder. Some Content may be provided via streaming or other means
            that restrict copying; you may not circumvent those restrictions.
            You may not alter or remove any copyright or other proprietary
            notices included in the Content.
        </p>
    </section>
)

const AboutTablet = () => (
    <div className={styles.tabletWrapper}>
        <Heading />
        <Description />
        <DetailsSection />
        <CopyrightSection />
    </div>
)

const AboutDesktop = () => {
    return (
        <>
            <div className={aboutStyles.contentWrapper}>
                <div
                    className={classNames(
                        styles.headingAndDescription,
                        aboutStyles.topRow
                    )}
                >
                    <Heading />
                    <Description />
                </div>
                <DetailsSection />
                <CopyrightSection />
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
