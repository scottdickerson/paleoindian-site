import Head from 'next/head'
import styles from '@/styles/TXDotAndTribes.module.scss'
import sectionStyles from '@/styles/StorySection.module.scss'
import groupImage from '@/data/txdot-and-tribes/Alabama Coushatta@2x.png'
import groupImageTwo from '@/data/txdot-and-tribes/Native American Nations@2x.png'
import archeologists from '@/data/txdot-and-tribes/Ancient Campsite@2x.png'
import presentation from '@/data/txdot-and-tribes/Tribal Consultation@2x.png'
import { CaptionedImage } from '@/components/captioned-image'
import { useMediaQuery } from 'react-responsive'
import { TexasAndTribesSharedTraditionsWorkbook } from '@/components/tribes-workbook'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'

const IntroSection = () => (
    <section className={sectionStyles.details}>
        <p>
            From time immemorial, the land we think of as Texas was the homeland
            of diverse groups of Native Peoples, including the ancestors of the
            many named Tribes that are still active communities today. Through
            settlement, war, and broken treaties, the land was colonized by
            Spain, then Mexico, and ultimately became the State of Texas within
            the United States of America.
        </p>
    </section>
)

const LearningAboutThePastSection = () => (
    <section className={sectionStyles.details}>
        <p>
            Today the descendants of Texas’ Native Peoples live modern lives and
            are a part of the fabric of our shared community. Tribal leaders,
            teachers, and individual people still live and pass on their unique
            cultures. This wisdom is an important way for all Texans to learn
            about the heritage of Texas’ Native Peoples.
        </p>
        <p>
            Another way we can learn about the lives of Native Peoples is
            through the science of archeology. Archeologists study objects and
            evidence left behind from earlier cultures.
        </p>
        <p>
            A lot of archeologists work in universities or at museums, but there
            are also archeologists working at the Texas Department of
            Transportation.
        </p>
    </section>
)

const TXDotsJobSection = () => (
    <section className={sectionStyles.details}>
        <p>
            The Texas Department of Transportation is an official department
            within the State of Texas. TxDOT creates roads, bridges, and other
            important transportation infrastructure. Sometimes, before
            construction, TxDOT archeologists find things made a long time ago
            by the ancestors of modern-day Tribal peoples. When that happens,
            TxDOT archeologists carefully excavate these items before any
            construction goes forward.
        </p>
        <p>
            TxDOT also consults with many named, diverse Tribes whose ancestors
            have a relationship to Texas. They work together to ensure that
            archeological sites and artifacts are studied, respected, and
            protected. This collaboration adds to our understanding of the rich
            heritage of Texas’ Native Peoples.
        </p>
    </section>
)

const WorkingTogetherSection = ({
    className,
    children,
}: PropsWithChildren<{ className?: string }>) => (
    <section className={classNames(sectionStyles.details, className)}>
        {children}
        <p>
            TxDOT and Tribal representatives work together to share what they’ve
            learned with people from all across the state. They do this through
            workshops, publications, teacher conferences, and special projects.
            This exhibit, A Time Before Texas, is one such project.
        </p>
        <p>
            A Time Before Texas explores a specific time in the past – from the
            earliest evidence of human habitation in Texas (at least 16,000
            years ago) to the end of the last Ice Age (about 10,000 years ago).
            Archeologists refer to peoples who lived during this time as
            Paleoindians.
        </p>
        <p>
            Paleoindians are the ancestors of today’s Native Peoples. This
            exhibit incorporates both archeological perspectives and traditional
            stories from Texas Tribes to explore this very early history.
        </p>
    </section>
)

const NativeAmericanNationsImage = () => (
    <CaptionedImage
        src={groupImageTwo}
        alt="Group of Native Americans alongside TxDOT employees"
        caption="TxDOT works with 25 federally recognized Native American
        nations with an interest in preserving Texas history."
        photoCredit="Courtesy of Texas Department of Transportation"
    />
)

interface ImageProps {
    className?: string
}

const ArcheologistImage = ({ className }: ImageProps) => (
    <CaptionedImage
        src={archeologists}
        alt="Archeologist brushing off an artifact at a campsite"
        className={className}
        caption="TxDOT and partner archeologists work to carefully
            document sites like this ancient campsite in Denton
            County."
        photoCredit="Courtesy of Texas Department of Transportation"
    />
)

const ConsultationImage = ({ className }: ImageProps) => (
    <CaptionedImage
        src={presentation}
        alt="Native American presenting at a TxDOT meeting"
        className={className}
        caption="The TxDOT Tribal Consultation process allows TxDOT to
            work with Tribes to identify and determine any potential
            effect the project will have on places of cultural
            significance to the Tribes, including prehistoric
            archeological sites and cemeteries."
        photoCredit="Courtesy of Texas Department of Transportation"
    />
)

const OutroSection = () => (
    <p className={sectionStyles.description}>
        We hope you enjoy learning about A Time Before Texas.
    </p>
)

const AlabamaCoushattaImage = () => (
    <CaptionedImage
        src={groupImage}
        alt="Group of Coushatta Native Americans in front of the Capitol Building"
        caption="The Alabama-Coushatta are one of the many federally
                        recognized sovereign Tribes with formal relationships
                        with the State of Texas."
        photoCredit="Courtesy: Vanesa Brashier, The Courier of Montgomery County"
    />
)

const TXDotAndTribesMobile = () => (
    <>
        <NativeAmericanNationsImage />
        <LearningAboutThePastSection />
        <ArcheologistImage />
        <TXDotsJobSection />
        <ConsultationImage />
        <WorkingTogetherSection />
        <OutroSection />
        <TexasAndTribesSharedTraditionsWorkbook />
    </>
)

const TXDotAndTribesTablet = () => (
    <>
        <div className={styles.sideBySide}>
            <LearningAboutThePastSection />
            <ConsultationImage className={styles.floatRight} />
            <TXDotsJobSection />
            <ArcheologistImage className={styles.floatRight} />
        </div>
        <ConsultationImage />
        <div>
            <WorkingTogetherSection className={styles.nonFlex}>
                <TexasAndTribesSharedTraditionsWorkbook
                    className={styles.workbookOnSide}
                />
            </WorkingTogetherSection>
        </div>
        <OutroSection />
    </>
)

const TXDotAndTribesDesktop = () => {
    return (
        <>
            <div className={styles.sideBySide}>
                <div className={styles.contentWrapper}>
                    <h1 className={sectionStyles.summary}>TxDOT & Tribes</h1>
                    <IntroSection />
                    <LearningAboutThePastSection />
                    <TXDotsJobSection />
                    <WorkingTogetherSection />
                    <OutroSection />
                </div>
                <div className={styles.contentWrapper}>
                    <AlabamaCoushattaImage />
                    <NativeAmericanNationsImage />
                    <ArcheologistImage />
                    <ConsultationImage />
                    <TexasAndTribesSharedTraditionsWorkbook />
                </div>
            </div>
        </>
    )
}

const TXDotAndTribesNonDesktop = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({
        query: '(max-width: 1024px) and (min-width: 769px)',
    })
    return (
        <div className={styles.contentWrapper}>
            <h1 className={sectionStyles.summary}>TxDOT & Tribes</h1>
            <IntroSection />
            <AlabamaCoushattaImage />
            {isMobile && <TXDotAndTribesMobile />}
            {isTablet && <TXDotAndTribesTablet />}
        </div>
    )
}

const TXDotAndTribes = () => {
    // responsive to check desktop or not
    const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' })
    return (
        <>
            <Head>
                <title>Texas Paleoindian - TxDOT and Tribes</title>
            </Head>
            {isDesktop ? (
                <TXDotAndTribesDesktop />
            ) : (
                <TXDotAndTribesNonDesktop />
            )}
        </>
    )
}

export default TXDotAndTribes
