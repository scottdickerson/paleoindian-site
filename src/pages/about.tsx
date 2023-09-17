import Head from 'next/head'
import styles from '@/styles/About.module.scss'
import sectionStyles from '@/styles/StorySection.module.scss'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { PhotoCredits } from '@/components/photo-credits'

const Heading = () => (
    <h1 className={classNames(sectionStyles.summary, styles.heading)}>
        About the Exhibit
    </h1>
)

const Description = () => (
    <p className={sectionStyles.description}>
        A Time Before Texas is sponsored by the Texas Department of
        Transportation as part of its responsibilities under the National
        Historic Preservation Act of 1966.
    </p>
)

const DetailsSection = () => (
    <div className={classNames(sectionStyles.details, styles.partners)}>
        <p>
            This exhibit would not be possible without TxDOT’s many partners,
            including:
            <ul>
                <li>AmaTerra </li>
                <li>
                    Center for Archaeological Studies, Texas State University
                </li>
                <li>Humanities Texas</li>
                <li>ICF</li>
                <li>Mescalero Apache Tribe</li>
                <li>MuseWork Exhibits</li>
                <li>Texas Science & Natural History Museum</li>
            </ul>
        </p>
    </div>
)

const CopyrightSection = () => (
    <div>
        <section className={styles.copyright}>
            <span className={styles.copyrightTitle}>Copyright & Fair Use</span>
            <p>
                This online exhibit contains, references and interprets both
                copyrighted materials and materials in the public domain. Those
                materials may include text, images, graphics, audio and video
                clips, and other content (collectively, the “Content”). In some
                cases, the copyright is owned by third parties, and this exhibit
                is utilizing the third‐party Content by express permission or
                under the fair use doctrine.
            </p>
            <p>
                The Content is made available only for your personal,
                noncommercial educational and scholarly use. You may not use the
                Content for any other purpose, or distribute or make the Content
                available to others, unless you obtain any required permission
                from the copyright holder. Some Content may be provided via
                streaming or other means that restrict copying; you may not
                circumvent those restrictions. You may not alter or remove any
                copyright or other proprietary notices included in the Content.
            </p>
        </section>
        <section className={styles.copyright}>
            <br />
            <span className={styles.copyrightTitle}>
                <em>That’s Important</em> Artifact Images:
            </span>
            <PhotoCredits
                title="Bison Bones"
                description="41VV218 Bonfire Shelter Bison Mandible/Maxilla"
                credits=" Original photography by MuseWork "
                courtesy="Courtesy of the Texas
                Archeological Research Laboratory, The University of Texas at
                Austin"
            />
            <PhotoCredits
                title=" Charred Wood"
                description="41VV455 Burned wood"
                credits="Original photography by
                MuseWork"
                courtesy="Courtesy of the Texas Archeological Research
                Laboratory, The University of Texas at Austin"
            />
            <PhotoCredits
                title="Lithic Debitage"
                description="41WM235 Wilson-Leonard Early Paleoindian
                Debitage"
                credits="Original photography by MuseWork"
                courtesy="Courtesy of the Texas
                Archeological Research Laboratory, The University of Texas at
                Austin"
            />
            <PhotoCredits
                title="Human Coprolites"
                description="Spirit Eye Cave, Presidio County, TX"
                courtesy="Courtesy
                of the Center for Big Bend Studies at Sul Ross State University"
            />
            <br />
        </section>
        <section className={styles.copyright}>
            <span className={styles.copyrightTitle}>
                <em>Written in Stone</em> Artifact Images:
            </span>
            <PhotoCredits
                title="Broken Point Base"
                description="41EP5269 Obsidian flake"
                credits="Original photography
                by MuseWork"
                courtesy="Courtesy of the Texas Archeological Research
                Laboratory, The University of Texas at Austin"
            />
            <PhotoCredits
                title="All Other Artifacts"
                credits="Original photography by MuseWork "
                courtesy="Courtesy of
                the Gault School of Archaeological Research Laboratory"
            />
        </section>
    </div>
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
            <div className={styles.contentWrapper}>
                <div
                    className={classNames(
                        styles.headingAndDescription,
                        styles.topRow
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
