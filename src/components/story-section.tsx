import {
    PropsWithChildren,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react'
import styles from '../styles/StorySection.module.scss'
// import * as DOMPurify from "dompurify";
import { StoryPageContext } from './story-page'
import classNames from 'classnames'
import { useOnScreen } from '@/utils/customHooks'

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
    title: string
    summary: string
    description: string
    details: string
}

export const StorySection = ({
    id,
    title,
    summary,
    description,
    children,
    details,
}: PropsWithChildren<StorySectionProps>) => {
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
        <article className={styles.section} id={id} ref={sectionRef}>
            <h2
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
                ref={headingRef}
            />
            <h3
                className={classNames(styles.summary)}
                dangerouslySetInnerHTML={{ __html: summary }}
            />
            <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className={styles.interactive}>{children}</div>
            <div
                className={styles.details}
                dangerouslySetInnerHTML={{ __html: details }}
            />
        </article>
    )
}
