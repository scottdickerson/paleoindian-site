import { StoryPage } from '@/components/story-page'
import { StorySection } from '@/components/story-section'
import styles from '@/styles/Activities.module.scss'
import { TocScrollableProps } from '@/components/toc-scrollable'
import { PageLink } from '@/components/page-link'
import { ROUTES } from '@/utils/routes'
import { ActivityBlock } from '@/components/activity-block'
import { ActivitiesNavigator } from '@/components/activities-navigator'

const ACTIVITIES_CLASSROOM_SECTIONS: TocScrollableProps['storySections'] = [
    {
        title: 'Introduction',
        id: 'introduction',
    },
    {
        title: 'Key vocabulary',
        id: 'vocabulary',
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

export const ActivityClassroom = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Classroom Activities"
            storySections={ACTIVITIES_CLASSROOM_SECTIONS}
            isHomeHeader
        >
            <StorySection
                {...ACTIVITIES_CLASSROOM_SECTIONS[0]}
                title="Jump into archeology"
                summary="Interpret your classroom!"
                description="Engage your students in a hands-on experience viewing artifacts through the lens of an archeologist."
                details="This activity can be a helpful launch into the online exhibit as you will be introducing key concepts and vocabulary."
                pacing="30 minutes"
            />
            <StorySection
                {...ACTIVITIES_CLASSROOM_SECTIONS[1]}
                details={
                    <dl className={styles.dictionaryList}>
                        <div>
                            <dt>Archeologist</dt>
                            <dd>
                                A researcher who learns about past peoples by
                                recovering and studying objects and other
                                evidence that they left behind.
                            </dd>
                        </div>
                        <div>
                            <dt>Artifact</dt>
                            <dd>An object made by past people.</dd>
                        </div>
                        <div>
                            <dt>Perishable</dt>
                            <dd>
                                Objects which are likely to deteriorate over
                                time.
                            </dd>
                        </div>
                        <div>
                            <dt>Non-Perishable</dt>
                            <dd>
                                Objects which are not likely to deteriorate over
                                time.
                            </dd>
                        </div>
                    </dl>
                }
            />
            <StorySection
                {...ACTIVITIES_CLASSROOM_SECTIONS[2]}
                details={
                    <>
                        <p>
                            No special materials are needed. Students will use
                            items from around the classroom during the activity.
                        </p>
                        <p>
                            Optional: Paper or journals to record observations
                            and conclusions
                        </p>
                    </>
                }
            />
            <StorySection
                {...ACTIVITIES_CLASSROOM_SECTIONS[3]}
                details={
                    <>
                        <p>
                            Watch the{' '}
                            <PageLink href={ROUTES.FROM_THE_TOP_VIDEO}>
                                “From the Top”
                            </PageLink>{' '}
                            and{' '}
                            <PageLink href={ROUTES.MORE_THAN_STONE_VIDEO}>
                                “More Than Stone”
                            </PageLink>{' '}
                            videos so you are familiar with the content and can
                            lead the discussions with students.
                        </p>
                        <p>
                            Optional: Pull a few items from the classroom for
                            the explanation of the activity (perishable and
                            non-perishable).
                        </p>
                    </>
                }
            />
            <StorySection
                {...ACTIVITIES_CLASSROOM_SECTIONS[4]}
                details={
                    <div className={styles.activityBlocks}>
                        <ActivityBlock>
                            <h4>Introduction:</h4>
                            <p>
                                Play the{' '}
                                <PageLink href={ROUTES.FROM_THE_TOP_VIDEO}>
                                    “From the Top”
                                </PageLink>{' '}
                                video for students. At the 2-minute mark,
                                students are introduced to the role of
                                archeologists in helping us understand about
                                Paleoindians in Texas.
                            </p>
                            <p>
                                Pause or replay when it says “…some
                                archeologists have found some pretty interesting
                                things that really changed what we know – or
                                what we think we know – about Paleoindians …”
                            </p>
                            <p>
                                Introduce the activity. “Today we are going to
                                be archeologists. Let’s imagine that it is
                                18,000 years from now, and archeologists are
                                excavating our classroom. What is left behind?”
                                This is when you will need to explain perishable
                                and non-perishable artifacts for the students.
                                The future archeologists will only have the
                                non-perishable items to discover and interpret.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <h4>
                                Activity: Interpreting the classroom based on
                                the non-perishable items.
                            </h4>
                            <p>
                                Divide students in groups. Each group will
                                collect 5-10 non-perishable items from the room
                                and determine what they think an archeologist
                                would be able to determine based on those items.
                                This can be a quick discussion or, optionally,
                                have students write a paragraph or even create a
                                poster or some other simple presentation to
                                share with the class.
                            </p>
                            <p>
                                Have each group share their items and what they
                                determined based on what was left behind. Once
                                all students have shared, challenge students to
                                revise their ideas based on the artifacts and
                                findings of other groups. (For example, if one
                                group determined that we used scissors to cut
                                food but another group had a stapler that they
                                determined was used to bind paper together,
                                could those two groups come to the conclusion
                                that maybe the scissors and stapler were both
                                used on paper?)
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <h4>Wrap Up: </h4>
                            <p>
                                Discuss assumptions that can come from what is
                                left behind. Did any of the groups come up with
                                wildly improbable ideas? How important is it to
                                look at all of the artifacts and information
                                together? What happens when a new discovery is
                                made? Students might even appreciate thinking
                                about archeology as something like criminal
                                forensics - taking all of the clues and putting
                                them together to come up with the solution.
                                Sometimes archeologists even partner with
                                forensic scientists! See the{' '}
                                <PageLink href={ROUTES.ACTIVITIES_STEM_CAREERS}>
                                    STEM careers
                                </PageLink>{' '}
                                activity for more information and an extension
                                opportunity.
                            </p>
                            <p>
                                Watch the{' '}
                                <PageLink href={ROUTES.MORE_THAN_STONE_VIDEO}>
                                    “More Than Stone”
                                </PageLink>{' '}
                                video with the class. Explain to students that
                                they have just completed a cultural
                                interpretation of the classroom based on the
                                non-perishable items. How is this limiting? How
                                did they consider the non-perishable items and
                                also take into account the perishable items that
                                would not be available to the archeologists?
                                What are some interpretations that could happen
                                if you don’t consider the perishable items?
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <h4> Short on Time?</h4>
                            <p>
                                Instead of having students work in collaborative
                                groups, complete the activity as a whole group.
                                Pull a collection of non-perishable classroom
                                items to investigate altogether. Add an extra
                                item after you have made some interpretations,
                                and ask the students to revise their
                                conclusions. Utilize the Wrap-Up for a classroom
                                discussion.
                            </p>
                        </ActivityBlock>
                    </div>
                }
            />
            <StorySection
                {...ACTIVITIES_CLASSROOM_SECTIONS[5]}
                details={
                    <div className={styles.teksSection}>
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
            <ActivitiesNavigator />
        </StoryPage>
    )
}

export default ActivityClassroom
