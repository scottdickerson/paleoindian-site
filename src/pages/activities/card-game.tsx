import { StoryPage } from '@/components/story-page'
import { StorySection } from '@/components/story-section'
import styles from '@/styles/Activities.module.scss'
import { TocScrollableProps } from '@/components/toc-scrollable'
import { ROUTES } from '@/utils/routes'
import { ActivityBlock } from '@/components/activity-block'
import { ActivitiesNavigator } from '@/components/activities-navigator'
import { DownloadFiles } from '@/components/download-files'
import { PageLink } from '@/components/page-link'

const ACTIVITIES_CARD_GAME_SECTIONS: TocScrollableProps['storySections'] = [
    {
        title: 'Introduction',
        id: 'introduction',
    },
    {
        title: 'Materials',
        id: 'materials',
    },
    {
        title: 'Preparation',
        id: 'preparation',
    },
    {
        title: 'Instructions',
        id: 'instructions',
    },
    {
        title: 'TEKS',
        id: 'teks',
    },
]

export const ActivityCardGame = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Card Game"
            storySections={ACTIVITIES_CARD_GAME_SECTIONS}
        >
            <StorySection
                {...ACTIVITIES_CARD_GAME_SECTIONS[0]}
                title="A Time Before Texas card game"
                summary="Playing is learning!"
                description="Gather edible plants, hunt sneaky rabbits, and survive ambushes to earn points in this card game."
                details="Students will work together as a group to test their skills at navigating the tough ice-age landscape. "
                pacing="30 minutes"
            />

            <StorySection
                {...ACTIVITIES_CARD_GAME_SECTIONS[1]}
                details={
                    <>
                        <ul className={styles.materials}>
                            <li>Game directions</li>
                            <li>Cards</li>
                        </ul>
                        <ActivityBlock size="sm">
                            <DownloadFiles
                                files={[
                                    {
                                        title: 'Click here to download printable cards',
                                        href: '/pdfs/A Time Before Texas - Printable Cards.pdf',
                                    },
                                    {
                                        title: ' Click here to download printing instructions',
                                        href: '/pdfs/A Time Before Texas - Print Instructions.pdf',
                                    },
                                ]}
                            />
                        </ActivityBlock>
                    </>
                }
            />
            <StorySection
                {...ACTIVITIES_CARD_GAME_SECTIONS[2]}
                details={
                    <ul className={styles.materials}>
                        <li>Print cards and instructions.</li>
                        <li>
                            Read instructions and be prepared to explain the
                            game to students.
                        </li>
                    </ul>
                }
            />
            <StorySection
                {...ACTIVITIES_CARD_GAME_SECTIONS[3]}
                details={
                    <div className={styles.activityBlocks}>
                        <ActivityBlock>
                            <p>
                                Visit the{' '}
                                <PageLink href={ROUTES.ICE_AGE_TEXAS}>
                                    Ice-age Texas
                                </PageLink>{' '}
                                and{' '}
                                <PageLink href={ROUTES.DAILY_LIFE}>
                                    Daily Life
                                </PageLink>{' '}
                                sections of the website.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <p>
                                Explore the digital cards, games, artifacts, and
                                videos to learn more about the daily life of
                                Paleoindians.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <p>
                                If you are short on time, be sure to have
                                students visit three important sections in order
                                to have the background information for the game:{' '}
                                <PageLink href={ROUTES.AMAZING_ANIMALS}>
                                    Amazing Animals
                                </PageLink>
                                ,{' '}
                                <PageLink href={ROUTES.ESSENTIAL_INVENTORY}>
                                    Essential Inventory
                                </PageLink>
                                , and{' '}
                                <PageLink href={ROUTES.WHATS_FOR_DINNER}>
                                    What Was For Dinner?
                                </PageLink>
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>Play the card game.</ActivityBlock>
                    </div>
                }
            />
            <StorySection
                {...ACTIVITIES_CARD_GAME_SECTIONS[4]}
                details={
                    <div className={styles.teksSection}>
                        <p>
                            7th Grade Social Studies (1) History. The student
                            understands traditional historical points of
                            reference in Texas history. The student is expected
                            to: (A) identify the major eras in Texas history,
                            describe their defining characteristics, and explain
                            the purpose of dividing the past into eras,
                            including Natural Texas and its People.
                        </p>
                        <p>
                            7th Grade Social Studies (20) Social studies skills.
                            The student applies critical-thinking skills to
                            organize and use information acquired through
                            established research methodologies from a variety of
                            valid sources, including technology. The student is
                            expected to: (C) organize and interpret information
                            from outlines, reports, databases, and visuals,
                            including graphs, charts, timelines, and maps.
                        </p>
                        <p>
                            7th Grade Language Arts (12) Inquiry and research:
                            listening, speaking, reading, writing, and thinking
                            using multiple texts. The student engages in both
                            short-term and sustained recursive inquiry processes
                            for a variety of purposes. The student is expected
                            to: (A) generate student-selected and teacher-guided
                            questions for formal and informal inquiry; (B)
                            develop and revise a plan; (J) use an appropriate
                            mode of delivery, whether written, oral, or
                            multimodal, to present results.
                        </p>
                    </div>
                }
            />
            <ActivitiesNavigator
                activitiesLinks={[
                    {
                        title: 'Stem careers',
                        href: ROUTES.ACTIVITIES_STEM_CAREERS,
                    },
                    {
                        title: 'Jump into Archeology',
                        href: ROUTES.ACTIVITIES_CLASSROOM,
                    },
                    {
                        title: 'Hunting and gathering',
                        href: ROUTES.ACTIVITIES_WORKBOOK,
                    },
                ]}
            />
        </StoryPage>
    )
}

export default ActivityCardGame
