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

export const BibliographySacredStories = () => (
    <>
        <Head>
            <title>Texas Paleoindian - Sacred Stories</title>
        </Head>
        <section>
            <StorySectionTitle title="Sacred Stories" id="sacred-stories" />
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
                        Texas Historical Commission. (2021, June 14).{' '}
                        <em>
                            Caddo Creation Story with Kricket Rhoads Connywerdy.
                        </em>{' '}
                        YouTube.{' '}
                        <a
                            href="https://www.youtube.com/watch?v=Mja8wEIn8vw"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.youtube.com/watch?v=Mja8wEIn8vw
                        </a>
                    </p>
                    <p>
                        Meredith, Howard L., and Newkumet, Vynola Beaver.
                        (2009). Hasinai:{' '}
                        <em>A Traditional History of the Caddo Confederacy.</em>{' '}
                        Texas A&M University Press.
                    </p>
                    <p>
                        Mescalero Apache Tribe. (n.d.) <em>Tribal History.</em>{' '}
                        Retrieved December 22, 2022 from{' '}
                        <a
                            href="https://mescaleroapachetribe.com/our-culture/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://mescaleroapachetribe.com/our-culture/
                        </a>
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
                    <p>
                        The Meadow Center for Water and the Environment. (2021,
                        November 30).{' '}
                        <em>Coahuiltecan Creation Story| Napakō.</em> YouTube.{' '}
                        <a
                            href="https://www.youtube.com/watch?v=_eqhmQNjvQA"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.youtube.com/watch?v=_eqhmQNjvQA
                        </a>
                    </p>
                    <p>
                        Studio A Texas State University. (2019, December 11).{' '}
                        <em>Coahuiltecan.</em> YouTube.{' '}
                        <a
                            href="https://www.youtube.com/watch?v=RBNZYKU3QyY"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://www.youtube.com/watch?v=RBNZYKU3QyY
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

export default BibliographySacredStories
