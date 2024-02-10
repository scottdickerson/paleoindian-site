import flake from '@/data/educator-guide/Incised Stones/4801-6_3x.webp'
import { EmphasisBanner } from './emphasis-banner'
import { ResponsiveImage } from './responsive-image'
import styles from '@/styles/HandsOnHistory.module.scss'
import storySectionStyles from '@/styles/StorySection.module.scss'
import pageLinkStyles from '@/styles/PageLink.module.scss'

export const HandsOnHistory = () => (
    <EmphasisBanner
        className={styles.container}
        leftSide={
            <div className={styles.overview}>
                <span className={storySectionStyles.summary}>
                    Hands-On History
                </span>
                <span className={storySectionStyles.details}>
                    To supplement this virtual exhibit, Humanities Texas also
                    has a physical traveling exhibit with posters and incised
                    stone replicas for students to explore. To schedule a time
                    for the exhibit to visit your school, please contact{' '}
                    <a
                        className={pageLinkStyles.pageLink}
                        href="mailto:exhibitions@humanitiestexas.org?subject=Time%20Before%20Texas%20traveling%20exhibit"
                    >
                        exhibitions@humanitiestexas.org.
                    </a>
                </span>
            </div>
        }
        rightSide={<ResponsiveImage src={flake} alt="Stone tool" />}
    />
)
