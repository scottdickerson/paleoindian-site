import Head from 'next/head'
import { PropsWithChildren, useState, createContext, useEffect } from 'react'
import styles from '../styles/StoryPage.module.scss'
import { TocScrollable, TocScrollableProps } from './toc-scrollable'
import classNames from 'classnames'

interface StoryPageContextValues {
    highlightedSection: string | null
    setHighlightedSection: (sectionId: string | null) => void
}

export const StoryPageContext = createContext<StoryPageContextValues | null>(
    null
)

const StoryPageProvider = ({
    children,
    className,
    firstSectionId,
}: PropsWithChildren<{ className?: string; firstSectionId: string }>) => {
    const [highlightedSection, setHighlightedSection] = useState<string | null>(
        null
    )
    useEffect(() => {
        // This useEffect seems meaningless, however it causes all of the child components to re-render which makes them have their refs set
        console.log('parent useEffect triggered')
        setHighlightedSection(
            window.location.hash.replace('#', '') || firstSectionId
        )
    }, [])

    return (
        <StoryPageContext.Provider
            value={{ highlightedSection, setHighlightedSection }}
        >
            <section className={classNames(styles.storyPage, className)}>
                {children}
            </section>
        </StoryPageContext.Provider>
    )
}

export const StoryPage = ({
    title,
    children,
    className,
    isHomeHeader,
    storySections = [],
}: PropsWithChildren<{
    title: string
    storySections: TocScrollableProps['storySections']
    isHomeHeader?: boolean
    className?: string
}>) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <StoryPageProvider
                className={classNames(
                    className,
                    isHomeHeader && styles.storyPageWithHomeHeader
                )}
                firstSectionId={storySections[0].id}
            >
                {children}
                <TocScrollable storySections={storySections}></TocScrollable>
            </StoryPageProvider>
        </>
    )
}
