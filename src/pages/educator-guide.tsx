import { StoryPage } from '@/components/story-page'
import { StorySection } from '@/components/story-section'
import styles from '@/styles/EducatorGuide.module.scss'
import sectionStyles from '@/styles/StorySection.module.scss'
import { TocScrollableProps } from '@/components/toc-scrollable'
import vocabExample from '@/data/educator-guide/VocabExample.png'
import tocExample from '@/data/educator-guide/ToC Example.svg'
import originStoriesImage from '@/data/educator-guide/Paleoindian.svg'
import iceTexasImage from '@/data/educator-guide/armadillo.png'
import dailyLifeImage from '@/data/educator-guide/Deer Bag.png'
import interpretImage from '@/data/educator-guide/MagnifyingGlass.svg'
import workbookImage from '@/data/educator-guide/Workbook@2x.png'
import cardsImage from '@/data/educator-guide/Cards@2x.png'
import careersImage from '@/data/educator-guide/Careers@2x.png'
import { ResponsiveImage } from '@/components/responsive-image'
import classNames from 'classnames'
import { PageLink } from '@/components/page-link'
import { ROUTES } from '@/utils/routes'

const EDUCATOR_GUIDE_SECTIONS: TocScrollableProps['storySections'] = [
    {
        title: 'Welcome!',
        id: 'dear-teachers',
    },
    {
        title: 'Jump into archeology',
        id: 'jump-into-archeology',
    },
    {
        title: 'Hunting and gathering',
        id: 'hunting-and-gathering',
    },
    {
        title: 'A time before texas card game',
        id: 'card-game',
    },
    {
        title: 'STEM careers',
        id: 'stem-careers',
    },
]

const TooltipExample = () => (
    <div className={classNames(styles.educatorGuideRow, styles.tooltipRow)}>
        <p className={styles.tooltipExampleText}>
            Be sure to encourage your students to click on important vocabulary
            throughout the site to help them understand all the new information.
        </p>
        <ResponsiveImage
            src={vocabExample}
            alt="Vocabulary with tooltip"
            containerProps={{ className: styles.tooltipExampleImage }}
        />
    </div>
)

const TOCExample = () => (
    <>
        <p className={sectionStyles.details}>
            As you explore the site with your students, you will see that it is
            organized into three main sections: Origin Stories, Ice-age Texas,
            and Daily Life.
        </p>
        <ResponsiveImage src={tocExample} alt="Table of Contents" />
    </>
)

const OriginStoriesOverview = () => (
    <div className={classNames(styles.educatorGuideRow, sectionStyles.details)}>
        <p>
            <ResponsiveImage
                src={originStoriesImage}
                alt="Paleoindian"
                containerProps={{
                    className: styles.originStoriesOverviewImage,
                }}
            />
            <PageLink
                className={styles.storyTitle}
                href={ROUTES.ORIGIN_STORIES}
            >
                Origin Stories
            </PageLink>{' '}
            considers how people arrived in Texas by exploring the sacred
            stories of Native Americans alongside the discoveries and
            interpretations of archeologists. This section includes a video
            overview of three Native American creation stories. You and your
            students can learn more about these stories{' '}
            <PageLink
                className={styles.storyTitle}
                href={ROUTES.SACRED_STORIES}
            >
                here
            </PageLink>
            .
        </p>
    </div>
)

const IceAgeTexasOverview = () => (
    <div className={classNames(styles.educatorGuideRow, sectionStyles.details)}>
        <p>
            <ResponsiveImage
                src={iceTexasImage}
                alt="Armadillo"
                containerProps={{
                    className: styles.iceAgeTexasOverviewImage,
                }}
            />
            The{' '}
            <PageLink className={styles.storyTitle} href={ROUTES.ICE_AGE_TEXAS}>
                Ice-age Texas
            </PageLink>{' '}
            section helps students understand the ways in which the “Texas”
            discovered by Paleoindians was different from the one we know today.
            Interactive maps explain changing coastlines, and fun illustrations
            present students with an opportunity to learn about the animals and
            plants that Paleoindian people relied upon.
            <br />
            <br />
            This section includes a video overview of three Native American
            stories featuring chaotic monsters and change. You and your students
            can learn more about these stories{' '}
            <PageLink
                className={styles.storyTitle}
                href={ROUTES.MONSTERS_AND_MAYHEM}
            >
                here
            </PageLink>
            .
        </p>
    </div>
)

const DailyLifeOverview = () => (
    <div className={classNames(styles.educatorGuideRow, sectionStyles.details)}>
        <p>
            <ResponsiveImage
                src={dailyLifeImage}
                alt="Bag used by paleoindians made from deer hide."
                containerProps={{
                    className: styles.dailyLifeOverviewImage,
                }}
            />
            <PageLink className={styles.storyTitle} href={ROUTES.DAILY_LIFE}>
                Daily Life
            </PageLink>{' '}
            explains what it was like to be hunter-gatherers and investigates
            the tools they used. This section highlights artifacts and
            discoveries from Texas and beyond.
        </p>
    </div>
)

const EducatorGuide = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Educator Guide"
            storySections={EDUCATOR_GUIDE_SECTIONS}
            isHeaderInline
        >
            <StorySection
                id={EDUCATOR_GUIDE_SECTIONS[0]?.id}
                className={styles.educatorGuide}
                summary="Dear Teachers,"
                description="Welcome to the Ice Age! Get ready to teach and learn all about the experiences of the people living in Texas 16,000–10,000 years ago. These people are called Paleoindians, and they are the early ancestors of Native Americans."
                details={
                    <>
                        <p>
                            The concepts and information in this exhibit were
                            primarily developed with middle school audiences in
                            mind. Of course, you can adapt any of these
                            activities for upper elementary or high school
                            students.
                        </p>
                        <p>
                            Archeologists have made a number of fascinating
                            discoveries about the way Paleoindians lived and
                            even how they arrived in what we now call Texas. For
                            almost a century, the leading archeological theory
                            held that people first traveled to North America
                            across the Bering Land Bridge. Within the last
                            decade, new evidence has caused a major shift in how
                            we understand migration to North America. Now, we
                            know that the crossings over the Bering Land Bridge
                            are just one part of a much more complicated story.
                            Many textbooks still rely on a simple explanation,
                            but archeologists have shown us that there is much
                            more to be learned.
                        </p>
                        <p>
                            This online exhibit presents cutting edge science
                            and ancient wisdom to explore what life was like for
                            the first people to call Texas home. The videos and
                            activities in this online exhibit include stories
                            and authentic artifacts from Paleoindian sites right
                            here in Texas.
                        </p>
                    </>
                }
            />
            <div className={styles.welcomeMoreInformation}>
                <TooltipExample />
                <TOCExample />
                <OriginStoriesOverview />
                <IceAgeTexasOverview />
                <DailyLifeOverview />
                <p className={sectionStyles.details}>
                    You have a number of options in terms of how you experience
                    this virtual exhibit with your students. Don’t worry! We
                    have done the work for you. We have TEKS-aligned activities
                    that will guide you and your students through this rarely
                    explored period in human history. <br />
                    <br />
                    Have a great time learning! <br />
                    <br />
                    The Time Before Texas Team
                </p>
            </div>

            <StorySection
                {...EDUCATOR_GUIDE_SECTIONS[1]}
                summary="Interpret your classroom!"
                details="Engage your students in a hands-on experience viewing artifacts through the lens of an archeologist."
                description="This activity can be a helpful launch into the online exhibit as you will be introducing key concepts and vocabulary."
                image={
                    <ResponsiveImage
                        containerProps={{ className: styles.interpretImage }}
                        src={interpretImage}
                        alt="Magnifying glass"
                    />
                }
                pacing="30 minutes"
                activityLink={ROUTES.ACTIVITIES_CLASSROOM}
            />

            <StorySection
                {...EDUCATOR_GUIDE_SECTIONS[2]}
                summary="There’s so much to explore"
                details="Use these pages for your students to take a self-guided trip through the exhibit."
                description="They will explore, collect evidence, respond, and be ready for classroom discussions about their learning."
                image={
                    <ResponsiveImage
                        containerProps={{ className: styles.workbookImage }}
                        src={workbookImage}
                        alt="Time before Texas workbook"
                    />
                }
                pacing="60 minutes (Short on time? It also can be completed in 30 minutes.)"
                activityLink="/workbook"
            />
            <StorySection
                {...EDUCATOR_GUIDE_SECTIONS[3]}
                summary="Playing is learning!"
                details="Gather edible plants, hunt sneaky rabbits, and survive ambushes to earn points in this card game."
                description="Students will work together as a group to test their skills at navigating the tough ice-age landscape. "
                image={
                    <ResponsiveImage
                        containerProps={{ className: styles.workbookImage }}
                        src={cardsImage}
                        alt="Time before Texas playing cards"
                    />
                }
                pacing="30 minutes"
                activityLink={ROUTES.ACTIVITIES_CARD_GAME}
            />
            <StorySection
                {...EDUCATOR_GUIDE_SECTIONS[4]}
                summary="Making cross-curricular connections"
                details="Students will research and explore several different STEM career areas related to archeology."
                description="Use this activity to branch out beyond archeology and get students thinking about all the possibilities ahead of them."
                image={
                    <ResponsiveImage
                        containerProps={{ className: styles.workbookImage }}
                        src={careersImage}
                        alt="List of different careers in science"
                    />
                }
                pacing="varies depending on the depth of research"
                activityLink={ROUTES.ACTIVITIES_STEM_CAREERS}
            />
        </StoryPage>
    )
}

export default EducatorGuide
