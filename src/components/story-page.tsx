import { PropsWithChildren, useState, createContext, useEffect } from 'react'
import styles from '../styles/StoryPage.module.scss'

interface StoryPageContextValues {
    highlightedSection: string | null
    setHighlightedSection: (sectionId: string | null) => void
}

export const StoryPageContext = createContext<StoryPageContextValues | null>(
    null
)

export const StoryPage = ({ children }: PropsWithChildren) => {
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
