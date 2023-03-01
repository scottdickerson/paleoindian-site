import { PropsWithChildren, useContext, useEffect, useRef } from 'react'
import styles from '../styles/StorySection.module.scss'
// import * as DOMPurify from "dompurify";
import { StoryPageContext } from './story-page'
import { useInView } from 'framer-motion'
import classNames from 'classnames'

// nextjs section html component
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
    const sectionRef = useRef<HTMLHeadingElement>(null)

    const isInView = useInView(sectionRef, {
        amount: 'all',
        margin: '0px 0px -300px 0px',
    })

    useEffect(() => {
        console.log('section intersecting', id, isInView)
        if (isInView && setHighlightedSection) {
            setHighlightedSection(id)
        }
    }, [id, isInView, setHighlightedSection])

    return (
        <section className={styles.section} id={id}>
            <h2
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: title }}
                ref={sectionRef}
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
        </section>
    )
}
