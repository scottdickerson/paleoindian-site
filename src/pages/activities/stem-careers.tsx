import { StoryPage } from '@/components/story-page'
import { StorySection } from '@/components/story-section'
import styles from '@/styles/Activities.module.scss'
import { TocScrollableProps } from '@/components/toc-scrollable'
import { ROUTES } from '@/utils/routes'
import { ActivityBlock } from '@/components/activity-block'
import { ActivitiesNavigator } from '@/components/activities-navigator'
import { DownloadFiles } from '@/components/download-files'
import { PageLink } from '@/components/page-link'

const ACTIVITIES_STEM_CAREERS_SECTIONS: TocScrollableProps['storySections'] = [
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

export const ActivityStemCareers = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Stem Careers"
            storySections={ACTIVITIES_STEM_CAREERS_SECTIONS}
            isHeaderInline
        >
            <StorySection
                {...ACTIVITIES_STEM_CAREERS_SECTIONS[0]}
                title="STEM Careers"
                summary="Extension activity and cross-curricular connection"
                description="Students will research and explore several different STEM career areas related to archeology."
                details="Use this activity to branch out beyond archeology and get students thinking about all the possibilities ahead of them. "
                pacing="varies depending on the depth of the research"
            />

            <StorySection
                {...ACTIVITIES_STEM_CAREERS_SECTIONS[1]}
                details={
                    <>
                        <ul className={styles.materials}>
                            <li>
                                Student device with access to the exhibit
                                website and other websites for research
                            </li>
                            <li>
                                Journal or digital recording tools (Google Docs,
                                etc.) for collecting research
                            </li>
                            <li>
                                Print and digital materials to share research
                                (Powerpoint/Google Slides, poster board, video
                                recording applications, etc.)
                            </li>
                        </ul>
                    </>
                }
            />
            <StorySection
                {...ACTIVITIES_STEM_CAREERS_SECTIONS[2]}
                details={
                    <p>
                        Decide how you want students to share their research,
                        and then prepare the necessary supplies or digital
                        resources.
                    </p>
                }
            />
            <StorySection
                {...ACTIVITIES_STEM_CAREERS_SECTIONS[3]}
                details={
                    <div className={styles.activityBlocks}>
                        <ActivityBlock>
                            Watch (or re-watch) the video{' '}
                            <PageLink href={ROUTES.TEXAS_SIZED_DISCOVERY}>
                                “A Texas Sized Discovery”
                            </PageLink>{' '}
                            with the class.
                        </ActivityBlock>
                        <ActivityBlock>
                            <p>
                                Explain to students that even though this is
                                history, archeology is actually a STEM career.
                                Archeologists also collaborate with a variety of
                                other experts in STEM to help them with their
                                work.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <p>
                                Have students visit (or re-visit) the following
                                sections of the website to learn more about the
                                science and STEM careers involved with
                                archeology:{' '}
                                <PageLink href={ROUTES.LEARNING_MORE}>
                                    Learning More
                                </PageLink>
                                ,{' '}
                                <PageLink href={ROUTES.MORE_OFFSHORE}>
                                    More Offshore
                                </PageLink>
                                ,{' '}
                                <PageLink href={ROUTES.THATS_IMPORTANT}>
                                    That’s Important,
                                </PageLink>{' '}
                                and{' '}
                                <PageLink href={ROUTES.WRITTEN_IN_STONE}>
                                    Written in Stone.
                                </PageLink>{' '}
                                This can be completed independently or as a
                                group.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <p>
                                Share a list of STEM careers connected to
                                archeology. You can download a list of examples
                                below, but this is not an exhaustive list. Feel
                                free to add more and allow your students to make
                                suggestions. This activity can also grow beyond
                                archeology and be about all kinds of STEM
                                careers (as called for in the TEKS).
                            </p>
                            <DownloadFiles
                                files={[
                                    {
                                        title: 'Click here to download Printable PDF',
                                        href: '/pdfs/Time Before Texas_STEM Careers List.pdf',
                                    },
                                ]}
                            />
                        </ActivityBlock>
                        <ActivityBlock>
                            <p>
                                Have students choose a STEM career to research
                                and share with the class. The research can be as
                                simple or complex as you choose. You might have
                                students share just a few sentences about the
                                career. What do they do? How are they applying
                                science in the real world? Or you can have them
                                go into greater depth by creating and sharing a
                                print or digital product all about that career
                                (a Powerpoint presentation, poster, digital
                                infographic, etc.). Consider options to share
                                like a bulletin board, gallery walk, or possibly
                                a digital space like a discussion board or
                                website.
                            </p>
                        </ActivityBlock>
                    </div>
                }
            />
            <StorySection
                {...ACTIVITIES_STEM_CAREERS_SECTIONS[4]}
                details={
                    <div className={styles.teksSection}>
                        <p>
                            7th Grade Science (4) The student knows the
                            contributions of scientists and recognizes the
                            importance of scientific research and innovation on
                            society. The student is expected to: (C) research
                            and explore resources such as museums, libraries,
                            professional organizations, private companies,
                            online platforms, and mentors employed in a science,
                            technology, engineering, and mathematics (STEM)
                            field to investigate STEM careers.
                        </p>
                    </div>
                }
            />
            <ActivitiesNavigator
                activitiesLinks={[
                    {
                        title: 'Jump into Archeology',
                        href: ROUTES.ACTIVITIES_CLASSROOM,
                    },
                    {
                        title: 'Hunting and gathering',
                        href: ROUTES.ACTIVITIES_WORKBOOK,
                    },
                    {
                        title: 'A time before texas card game',
                        href: ROUTES.ACTIVITIES_CARD_GAME,
                    },
                ]}
            />
        </StoryPage>
    )
}

export default ActivityStemCareers
