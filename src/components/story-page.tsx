import Head from 'next/head'
import { PropsWithChildren, useState, createContext, useEffect } from 'react'
import styles from '../styles/StoryPage.module.scss'
import { StorySection, StorySectionProps } from './story-section'
import { TocScrollable } from './toc-scrollable'

interface StoryPageContextValues {
    highlightedSection: string | null
    setHighlightedSection: (sectionId: string | null) => void
}

export const StoryPageContext = createContext<StoryPageContextValues | null>(
    null
)

const StoryPageProvider = ({ children }: PropsWithChildren) => {
    const [highlightedSection, setHighlightedSection] = useState<string | null>(
        null
    )
    useEffect(() => {
        // This useEffect seems meaningless, however it causes all of the child components to re-render which makes them have their refs set
        console.log('parent useEffect triggered')
        setHighlightedSection('')
    }, [])

    return (
        <StoryPageContext.Provider
            value={{ highlightedSection, setHighlightedSection }}
        >
            <section className={styles.storyPage}>{children}</section>
        </StoryPageContext.Provider>
    )
}

export const StoryPage = ({
    title,
    storySections = [],
}: {
    title: string
    storySections: StorySectionProps[]
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <StoryPageProvider>
                {storySections.map((section) => (
                    <StorySection key={section.id} {...section} />
                ))}
                <TocScrollable storySections={storySections}></TocScrollable>
            </StoryPageProvider>
        </>
    )
}
