import { ReactNode, useContext, useEffect, useRef, useState } from 'react'
import styles from '../styles/StorySection.module.scss'
// import * as DOMPurify from "dompurify";
import { StoryPageContext } from './story-page'
import classNames from 'classnames'
import { useOnScreen } from '@/utils/customHooks'
import { ResponsiveImage } from './responsive-image'
import { PageLink } from './page-link'

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

export interface StorySectionProps {
    /* unique id used to link from the TOC */
    id: string
    /* all of these properties support HTML being passed within the string */
    title?: string
    summary: ReactNode
    description: ReactNode
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
    const sectionRef = useRef<HTMLElement>(null)
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
            takesUpMostOfTheViewport(sectionRef.current)
        ) {
            setHighlightedSection(id)
        }
    }, [scrollProgress, isHeadingInView, setHighlightedSection])

    return (
        <div className={classNames(styles.section, className)}>
            <h2
                id={id}
                className={classNames(styles.title, {
                    [styles.titleHidden]: !title,
                })}
                ref={headingRef}
            >
                {title ? title : ''}
            </h2>
            <div className={styles.articleRow}>
                <article
                    className={classNames(
                        image ? styles.articleRowNarrow : undefined,
                        styles.article,
                        title ? styles.articleWithTitle : undefined
                    )}
                    ref={sectionRef}
                >
                    <h3 className={classNames(styles.summary)}>{summary} </h3>
                    <div className={styles.description}>{description}</div>
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
                </article>
                {image && image}
            </div>
        </div>
    )
}
