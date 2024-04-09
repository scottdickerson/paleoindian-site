import Head from 'next/head'
import styles from '@/styles/About.module.scss'
import sectionStyles from '@/styles/StorySection.module.scss'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { PhotoCredits } from '@/components/photo-credits'
import humanitiesTexasLogo from '@/data/about/HTx_logo_color_trans_HiRes.png'
import smallHumanitiesTexasLogo from '@/data/about/HTx_logo_color_trans_small.png'
import { ResponsiveImage } from '@/components/responsive-image'

const Heading = () => (
    <h1 className={classNames(sectionStyles.summary, styles.heading)}>
        About the Exhibit
    </h1>
)

const Description = () => (
    <>
        <p className={sectionStyles.description}>
            A Time Before Texas is sponsored by the Texas Department of
            Transportation as part of its responsibilities under the National
            Historic Preservation Act of 1966.
        </p>
        <p className={sectionStyles.description}>
            TxDOT wants to acknowledge and thank{' '}
            <a
                href="https://www.humanitiestexas.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Humanities Texas
            </a>{' '}
            as a key supporting partner in this project.
        </p>
    </>
)

const DetailsSection = () => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)',
    })
    return (
        <div className={classNames(sectionStyles.details, styles.partners)}>
            <p>
                <ul>
                    <li className={styles.humanitiesTexasImage}>
                        <ResponsiveImage
                            src={
                                isDesktop
                                    ? humanitiesTexasLogo
                                    : smallHumanitiesTexasLogo
                            }
                            alt="Humanities Texas"
                        />
                    </li>
                    <em>Additional partners include:</em>
                    <li>AmaTerra Environmental, an ERG company </li>
                    <li>
                        Center for Archaeological Studies, Texas State
                        University
                    </li>
                    <li>Gault School of Archaeological Research</li>
                    <li>ICF</li>
                    <li>Mescalero Apache Tribe</li>
                    <li>MuseWork Exhibits</li>
                    <li>Texas Science & Natural History Museum</li>
                </ul>
            </p>
        </div>
    )
}

const CopyrightSection = () => (
    <div className={styles.copyrightSection}>
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
            <h4 className={styles.copyrightTitle}>Credits</h4>
            <span className={styles.copyrightSubtitle}>
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
        </section>
        <section className={styles.copyright}>
            <span className={styles.copyrightSubtitle}>
                <em>Written in Stone</em> Artifact Images:
            </span>
            <PhotoCredits
                title="Broken Projectile Point Base"
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
        <section className={styles.copyright}>
            <span className={styles.copyrightSubtitle}>
                <em>Incised Stone</em> Artifact Images:
            </span>
            <PhotoCredits
                courtesy="Courtesy of
                the Gault School of Archaeological Research Laboratory"
            />
        </section>
        <section className={styles.copyright}>
            <span className={styles.copyrightSubtitle}>
                Short-Format Videos
            </span>
            <br />
            <br />
            <em>Special Thanks To:</em>
            <br />
            Nicholas Bentley <br />
            Ashley Lemke <br /> Angus Dunn <br /> Greer Testa <br />
            @maxochitlbeading <br />
            Catherine Baty <br />
            Jacqueline Bullard <br />
            Kimberly Cushing
        </section>
    </div>
)

const ContactSection = () => (
    <div className={styles.copyrightSection}>
        <section>
            <span className={styles.copyrightTitle}>
                Questions? Contact{' '}
                <a href="emailto:Rebekah.Dobrasko@txdot.gov">
                    Rebekah.Dobrasko@txdot.gov
                </a>
            </span>
        </section>
    </div>
)

const AboutTablet = () => (
    <div className={styles.tabletWrapper}>
        <Heading />
        <Description />
        <DetailsSection />
        <ContactSection />
        <CopyrightSection />
    </div>
)

const AboutDesktop = () => {
    return (
        <>
            <div className={styles.tabletWrapper}>
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
                <ContactSection />
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
