import { StoryPage } from '@/components/story-page'
import { StorySection } from '@/components/story-section'
import styles from '@/styles/Activities.module.scss'
import { TocScrollableProps } from '@/components/toc-scrollable'
import { ROUTES } from '@/utils/routes'
import { ActivityBlock } from '@/components/activity-block'
import { ActivitiesNavigator } from '@/components/activities-navigator'
import { DownloadFiles } from '@/components/download-files'

const ACTIVITIES_WORKBOOK_SECTIONS: TocScrollableProps['storySections'] = [
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

export const ActivitiesWorkbook = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Workbooks"
            storySections={ACTIVITIES_WORKBOOK_SECTIONS}
            isHomeHeader
        >
            <StorySection
                {...ACTIVITIES_WORKBOOK_SECTIONS[0]}
                title="Hunting and Gathering"
                summary="There’s so much to explore"
                description="Use these pages for your students to take a self-guided trip through the exhibit."
                details="They will explore, collect evidence, respond, and be ready for classroom discussions about their learning."
                pacing="60 minutes (Short on time? It also can be completed in 30 minutes.)"
            />

            <StorySection
                {...ACTIVITIES_WORKBOOK_SECTIONS[1]}
                details={
                    <>
                        <ul className={styles.materials}>
                            <li>Student activity sheets</li>
                            <li>Pencil/Pen</li>
                            <li>Student device with access to exhibit</li>
                        </ul>
                        <ActivityBlock size="sm">
                            <DownloadFiles
                                files={[
                                    {
                                        title: 'Click here to download Section Worksheets',
                                        href: '/pdfs/Time Before Texas_Individual Section Worksheets.pdf',
                                    },
                                    {
                                        title: ' Click here to download Overview Worksheet',
                                        href: '/pdfs/Time Before Texas_Short-on-Time Worksheets.pdf',
                                    },
                                ]}
                            />
                        </ActivityBlock>
                    </>
                }
            />
            <StorySection
                {...ACTIVITIES_WORKBOOK_SECTIONS[2]}
                details={
                    <p>
                        Print student activity sheets for the class or assign a
                        digital PDF to students. Explore the website to
                        familiarize yourself with the content and layout.
                    </p>
                }
            />
            <StorySection
                {...ACTIVITIES_WORKBOOK_SECTIONS[3]}
                details={
                    <div className={styles.activityBlocks}>
                        <ActivityBlock>
                            <p>
                                Give students a print copy of the activity
                                sheet(s) or assign digitally. Note that the
                                digital PDF includes hyperlinks.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <p>
                                Students will be able to self-navigate across
                                the website by following the directions. The
                                activity includes questions to check-in with the
                                students about the content.
                            </p>
                        </ActivityBlock>
                    </div>
                }
            />
            <StorySection
                {...ACTIVITIES_WORKBOOK_SECTIONS[4]}
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
                        title: 'A time before texas card game',
                        href: ROUTES.ACTIVITIES_CARD_GAME,
                    },
                    {
                        title: 'Stem careers',
                        href: ROUTES.ACTIVITIES_STEM_CAREERS,
                    },
                    {
                        title: 'Jump into Archeology',
                        href: ROUTES.ACTIVITIES_CLASSROOM,
                    },
                ]}
            />
        </StoryPage>
    )
}

export default ActivitiesWorkbook
