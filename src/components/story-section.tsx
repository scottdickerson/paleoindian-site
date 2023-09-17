import {
    ReactNode,
    forwardRef,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import styles from '../styles/StorySection.module.scss'
import { StoryPageContext } from './story-page'
import classNames from 'classnames'
import { useOnScreen } from '@/utils/customHooks'
import { ResponsiveImage } from './responsive-image'
import { PageLink } from './page-link'

/**
 * Utility function helps determine when to switch the highlighted section in the TOC
 **/

export const takesUpMostOfTheViewport = (element: HTMLElement | null) => {
    if (element) {
        const { top, bottom } = element.getBoundingClientRect()
        const { innerHeight } = window

        console.log(
            'takesUpMostOfTheViewport',
            element.id,
            (bottom > innerHeight ? innerHeight - top : bottom) >
                innerHeight * 0.5
        )

        return (
            (bottom > innerHeight ? innerHeight - top : bottom) >
            innerHeight * 0.5
        )
    }
    return false
}

interface StorySectionTitleProps {
    id: string
    title?: string
}

export const StorySectionTitle = forwardRef<
    HTMLHeadingElement,
    StorySectionTitleProps
>(({ id, title }, ref) => (
    // even if no title is passed, we must render the h2 so that the id is set for ToC and anchor links
    <h2
        id={id}
        className={classNames(styles.title, {
            [styles.titleHidden]: !title,
        })}
        ref={ref}
    >
        {title ? title : ''}
    </h2>
))

export const StorySectionSummary = ({ summary }: { summary: ReactNode }) => (
    <h3 className={classNames(styles.summary)}>{summary} </h3>
)

export interface StorySectionProps {
    /* unique id used to link from the TOC */
    id: string
    /* all of these properties support HTML being passed within the string */
    title?: string
    summary?: ReactNode
    description?: ReactNode
    details: ReactNode
    interactive?: ReactNode
    className?: string
    image?: ReturnType<typeof ResponsiveImage>
    /** amount of time required */
    pacing?: string
    /** link to more details */
    activityLink?: string
}

export const StorySection = ({
    id,
    title,
    summary,
    description,
    details,
    interactive,
    className,
    image,
    pacing,
    activityLink,
}: StorySectionProps) => {
    const { setHighlightedSection } = useContext(StoryPageContext) || {}
    const sectionRef = useRef<HTMLDivElement>(null)
    const headingRef = useRef<HTMLHeadingElement>(null)
    const [scrollProgress, setScrollProgress] = useState(0)

    const isHeadingInView = useOnScreen(headingRef)
    useEffect(() => {
        const scrollHandler = () => {
            setScrollProgress(window.scrollY)
        }
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [])

    useEffect(() => {
        if (
            setHighlightedSection &&
            isHeadingInView &&
            takesUpMostOfTheViewport(sectionRef.current) &&
            // only scroll ToC when we haven't directly clicked
            !window.location.hash &&
            scrollProgress > 0
        ) {
            setHighlightedSection(id)
        }
    }, [scrollProgress, isHeadingInView, setHighlightedSection])

    return (
        <article className={classNames(styles.section, className)}>
            <StorySectionTitle ref={headingRef} title={title} id={id} />
            <div className={styles.articleRow}>
                <div
                    className={classNames(
                        image ? styles.divRowNarrow : undefined,
                        styles.article,
                        title ? styles.articleWithTitle : undefined
                    )}
                    id={`section-${id}`}
                    ref={sectionRef}
                >
                    {summary && <StorySectionSummary summary={summary} />}
                    {description && (
                        <div className={styles.description}>{description}</div>
                    )}
                    {interactive && (
                        <div className={styles.interactive}>{interactive}</div>
                    )}
                    <div className={styles.details}>{details}</div>
                    {pacing && (
                        <div className={styles.pacing}>Pacing: {pacing}</div>
                    )}
                    {activityLink && (
                        <PageLink
                            isForward
                            href={activityLink}
                            className={styles.activityLink}
                        >
                            Activity Information
                        </PageLink>
                    )}
                </div>
                {image && image}
            </div>
        </article>
    )
}
