import { StoryPage } from '@/components/story-page'
import { StorySection } from '@/components/story-section'
import styles from '@/styles/IncisedStones.module.scss'
import activityStyles from '@/styles/Activities.module.scss'
import { TocScrollableProps } from '@/components/toc-scrollable'
import { ActivityBlock } from '@/components/activity-block'
import { ActivitiesNavigator } from '@/components/activities-navigator'
import { DownloadFiles } from '@/components/download-files'
import pageLinkStyles from '@/styles/PageLink.module.scss'
import { PageLink } from '@/components/page-link'
import { ImageModal, ImageSelector } from '@/components/image-modal'
import { useState } from 'react'
import { ImageDetailsProps } from '@/components/image-modal'
import deerStone from '@/data/educator-guide/Incised Stones/1994 Deer Stone_3x.webp'
import stone42391 from '@/data/educator-guide/Incised Stones/4239-1_3x.webp'
import stone48015 from '@/data/educator-guide/Incised Stones/4801-5_3x.webp'
import stone48016 from '@/data/educator-guide/Incised Stones/4801-6_3x.webp'

const ACTIVITIES_SECTIONS: TocScrollableProps['storySections'] = [
    {
        title: 'Introduction',
        id: 'introduction',
    },
    {
        title: 'Key Vocabulary',
        id: 'vocabulary',
    },
    {
        title: 'Materials',
        id: 'materials',
    },
    {
        title: 'Background',
        id: 'background',
    },
    {
        title: 'Instructions',
        id: 'instructions',
    },
]

export const stoneImages: ImageDetailsProps[] = [
    {
        src: deerStone,
        title: 'Deer Stone',
        photoCredit:
            'Courtesy of the Gault School of Archaeological Research Laboratory',
    },
    {
        src: stone42391,
        title: 'Deer Stone2',
        photoCredit:
            'Courtesy of the Gault School of Archaeological Research Laboratory',
    },
    {
        src: stone48015,
        title: 'Deer Stone3',
        photoCredit:
            'Courtesy of the Gault School of Archaeological Research Laboratory',
    },
    {
        src: stone48016,
        title: 'Deer Stone4',
        photoCredit:
            'Courtesy of the Gault School of Archaeological Research Laboratory',
    },
]

export const ActivitiesWorkbook = () => {
    const [selectedImage, setSelectedImage] = useState<string>()

    return (
        <StoryPage
            title="Texas Paleoindian - Creating Incised Stones"
            storySections={ACTIVITIES_SECTIONS}
            isHomeHeader
        >
            <ImageModal
                isOpen={!!selectedImage}
                onClose={() => setSelectedImage(undefined)}
                selectedImage={selectedImage}
                onSelectImage={setSelectedImage}
            />
            <StorySection
                {...ACTIVITIES_SECTIONS[0]}
                title="Creating Incised Stones"
                summary="More than just tools"
                description="Students will learn about the incised stone artifacts and then participate in an interpretation discussion."
                details="Students will create their own versions of incised stones using river rocks and sharpies (or alternatively paper and pencil)."
                pacing="60 minutes (Short on time? It also can be completed in 30 minutes.)"
            />

            <StorySection
                {...ACTIVITIES_SECTIONS[1]}
                details={
                    <dl className={activityStyles.dictionaryList}>
                        <div>
                            <dt>Incised Stones</dt>
                            <dd>
                                Archeological artifacts adorned with carvings,
                                designs, or symbols.
                            </dd>
                        </div>
                        <div>
                            <dt>Interpret</dt>
                            <dd>Decide and explain what something means.</dd>
                        </div>
                        <div>
                            <dt>Archeologist</dt>
                            <dd>
                                A researcher who learns about past peoples by
                                recovering and studying objects and other
                                evidence that they left behind.
                            </dd>
                        </div>
                    </dl>
                }
            />
            <StorySection
                {...ACTIVITIES_SECTIONS[2]}
                details={
                    <>
                        <ul className={activityStyles.materials}>
                            <li>
                                River rocks (smooth and flat surfaces
                                recommended)
                            </li>
                            <li>
                                Sharpies or permanent markers in various colors
                            </li>
                            <li>Sketch paper</li>
                            <li>Pencils and erasers</li>
                            <li>Optional: magnifying glasses</li>
                        </ul>
                    </>
                }
            />
            <StorySection
                {...ACTIVITIES_SECTIONS[3]}
                details={
                    <>
                        <p>
                            The discovery of incised (engraved) stones at the
                            <a
                                href="https://www.gaultschool.org/"
                                className={pageLinkStyles.pageLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {' '}
                                Gault site
                            </a>{' '}
                            in Central Texas simultaneously shed light on new
                            aspects of Paleoindian life while also raising more
                            questions. Incised stones are archeological
                            artifacts adorned with carvings, designs, or
                            symbols. These stones provide valuable insights into
                            the artistic, communicative, and cultural practices
                            of ancient societies. At this time, we do not
                            definitively know what the designs on these stones
                            mean, but the general consensus among archeologists
                            is that the markings on incised stones served as a
                            form of expression, storytelling, or spiritual
                            communication within prehistoric communities.
                        </p>
                        <p>
                            When introducing the concept of incised stones to
                            students, you can easily make the subject relatable
                            and engaging. Imagine these stones as ancient
                            canvases, each etching telling a unique story about
                            the people who once called Texas home. These
                            markings aren't just random, they serve as a form of
                            artistic expression, much like the stories and art
                            students create today.
                        </p>
                        <p>
                            By exploring the patterns and symbols on these
                            stones, students can engage in interpreting the
                            narratives of ancient cultures by imagining what
                            people may have been thinking about when they made
                            these artifacts. The study of incised stones becomes
                            an exciting adventure, allowing students to connect
                            with the past and sparking their curiosity about the
                            diverse ways in which people have expressed
                            themselves throughout history and during the{' '}
                            <PageLink href="/">"Time Before Texas."</PageLink>
                        </p>
                    </>
                }
            />
            <StorySection
                {...ACTIVITIES_SECTIONS[4]}
                details={
                    <div className={activityStyles.activityBlocks}>
                        <ActivityBlock>
                            <h4>Introduction:</h4>
                            <p>
                                Begin by introducing the concept of incised
                                stones, explaining that many ancient
                                civilizations created intricate designs on
                                stones as a form of communication, storytelling,
                                or artistic expression.
                            </p>
                            <p>
                                Click the images below to enlarge, and share the
                                examples of incised stones at the Gault site
                                with students. Explain that archeologists
                                interpret artifacts in an effort to help them
                                better understand their meaning in the daily
                                life and culture of ancient people.
                            </p>
                            <ImageSelector
                                className={styles.imageSelector}
                                images={stoneImages}
                                onSelectImage={setSelectedImage}
                            />
                            <p>
                                Facilitate students as they interpret the
                                designs on the incised stones. Pay close
                                attention to the shapes, details, and patterns.
                                Discuss the significance of these artifacts in
                                understanding the history and creativity of
                                Paleoindians. Encourage students to share a
                                rationale for their interpretations (i.e. why
                                would those symbols or patterns be
                                significant?).
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <h4>
                                Activity: Students will create their own incised
                                stones
                            </h4>
                            <p>
                                Distribute river rocks to each student, ensuring
                                they have a smooth and flat surface for easy
                                drawing. Encourage students to research
                                different symbols, patterns, or cultural designs
                                used in ancient civilizations. Have them sketch
                                their ideas on paper before transferring them
                                onto the rocks. Instruct students to carefully
                                create their incised designs on the river rocks.
                                Remind them that this activity allows for
                                individual creativity, and they can draw symbols
                                or patterns that resonate with them.
                            </p>
                            <p>
                                Once students have finished creating their
                                stones, it’s time to be an archeologist! Have
                                students switch stones with a partner. Each
                                student will interpret the designs on their
                                partner’s stone. For added detail, students can
                                use magnifying glasses to closely examine the
                                designs. After a few minutes of examination,
                                students explain what they interpreted on their
                                partner’s stone. Once they have shared, partners
                                switch their stones back and the creators share
                                their original designs and explain the meaning
                                or inspiration.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <h4>Wrap Up:</h4>
                            <p>
                                Have students reflect on their designs and the
                                choices they made. Discuss the significance of
                                personal symbols and patterns in the context of
                                their creations. Allow students to share their
                                incised stones with the class, explaining the
                                inspiration behind their designs.
                            </p>
                            <p>
                                Alternatively, students may write about their
                                incised stones and chosen designs. Be sure that
                                students share the reasoning behind their
                                designs. Consider creating a class display or
                                arranging the stones in a designated area to
                                showcase the collective creativity of the
                                students.
                            </p>
                        </ActivityBlock>
                        <ActivityBlock>
                            <h4>Short on Time or Materials? </h4>
                            <p>
                                Instead of having students create their incised
                                designs on river rocks, student can use this
                                worksheet to create their designs and write
                                about their symbols, patterns, and designs. If
                                you are short on time, this activity can be
                                modified to a class discussion by giving the
                                students background (in the introduction) and
                                participating in an interpretation and
                                discussion of the incised stone images or 3-D
                                replicas.
                            </p>
                            <DownloadFiles
                                files={[
                                    {
                                        title: 'Click here to download activity sheet',
                                        href: '/pdfs/Time Before Texas_Incised Stone.pdf',
                                    },
                                ]}
                            />
                        </ActivityBlock>
                    </div>
                }
            />
            <ActivitiesNavigator />
        </StoryPage>
    )
}

export default ActivitiesWorkbook
