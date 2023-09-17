import {
    StorySectionSummary,
    StorySectionTitle,
} from '@/components/story-section'
import storySectionStyles from '@/styles/StorySection.module.scss'
import styles from '@/styles/Bibliography.module.scss'
import classNames from 'classnames'
import Head from 'next/head'
import { PageLink } from '@/components/page-link'
import { ROUTES } from '@/utils/routes'

export const BibliographyMonstersAndMayhem = () => (
    <>
        <Head>
            <title>Texas Paleoindian - Monsters and Mayhem</title>
        </Head>
        <section>
            <StorySectionTitle
                title="Monsters and Mayhem"
                id="monsters-and-mayhem"
            />
            <div
                className={classNames(
                    storySectionStyles.articleWithTitle,
                    storySectionStyles.article
                )}
            >
                <StorySectionSummary summary="Bibliography" />
                <div
                    className={classNames(
                        storySectionStyles.details,
                        styles.bibliographyDetails
                    )}
                >
                    <p>
                        Dorsey, George. (1902). Wichita Tales.{' '}
                        <em>Journal of American Folklore. Vol. 14.</em>{' '}
                    </p>
                    <p>
                        Curry, Jane Louise. (2003). The Monsters and the Flood -
                        Wichita.{' '}
                        <em>
                            Hold up the Sky and other Native American Tales from
                            Texas and the Southern Plains.
                        </em>{' '}
                        Simon and Schuster Publishers.
                    </p>
                    <p>
                        Dorsey, George. (1905).{' '}
                        <em>Traditions of the Caddo.</em> Carnegie Institution
                        Press.
                    </p>
                    <p>
                        Curry, Jane Louise. (2003). Slaying the Monsters -
                        Kadohadacho.{' '}
                        <em>
                            Hold up the Sky and other Native American Tales from
                            Texas and the Southern Plains.
                        </em>{' '}
                        Simon and Schuster Publishers.
                    </p>
                    <p>
                        Kaydahzinne, Fred. (2015, July 4).{' '}
                        <em>
                            Mescalero Apache Creation featuring Rickey Medlocke
                            and Red Horse Rivera.
                        </em>{' '}
                        YouTube.{' '}
                        <a
                            href="https://www.youtube.com/watch?v=KznR8XaYjYk"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.youtube.com/watch?v=KznR8XaYjYk
                        </a>
                    </p>
                </div>
                <PageLink
                    href={ROUTES.EDUCATOR_GUIDE}
                    isForward={false}
                    className={storySectionStyles.activityLink}
                >
                    Back to Educator Guide
                </PageLink>
            </div>
        </section>
    </>
)

export default BibliographyMonstersAndMayhem
