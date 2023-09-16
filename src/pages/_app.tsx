import {
    STORIES_PATH,
    StoryNavigation,
    StoryNavigationProps,
} from '@/components/story-navigation'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import styles from '@/styles/StoryPage.module.scss'
import pageStyles from '@/styles/Page.module.scss'

import { Footer } from '@/components/footer'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Header } from '@/components/header'
import { ArrowheadContext } from '@/components/arrowhead-scroller'
import { useState } from 'react'
import {
    encodeSans,
    encodeSansBlack,
    encodeSansBold,
    encodeSansCondensed,
    encodeSansCondensedBlack,
    encodeSansCondensedBold,
    encodeSansCondensedExtrabold,
    encodeSansCondensedSemibold,
    encodeSansExtraBold,
    glassAntiqua,
    rubikDirt,
} from '@/utils/fonts'

const isPageAStory = (pathname: string) => {
    return pathname.includes(STORIES_PATH)
}

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter()
    const [isVisible, setIsVisible] = useState(true)
    return (
        <TooltipProvider delayDuration={200}>
            <style jsx global>{`
                html {
                    font-family: ${encodeSans.style.fontFamily};
                }
            `}</style>
            <ArrowheadContext.Provider value={{ isVisible, setIsVisible }}>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        minHeight: '100vh',
                        backgroundColor: '#F6F3EB',
                    }}
                    className={classNames(
                        glassAntiqua.variable,
                        rubikDirt.variable,
                        encodeSansBold.variable,
                        encodeSansExtraBold.variable,
                        encodeSansBlack.variable,
                        encodeSansCondensed.variable,
                        encodeSansCondensedSemibold.variable,
                        encodeSansCondensedBold.variable,
                        encodeSansCondensedExtrabold.variable,
                        encodeSansCondensedBlack.variable
                    )}
                >
                    {isPageAStory(pathname) ? (
                        <header>
                            <StoryNavigation
                                selectedPage={
                                    pathname as StoryNavigationProps['selectedPage']
                                }
                            />
                        </header>
                    ) : (
                        pathname !== '/' && <Header />
                    )}
                    <main
                        className={classNames(
                            { [pageStyles.pageWrapper]: pathname !== '/' },
                            {
                                [styles.storyPageContainer]:
                                    isPageAStory(pathname) ||
                                    // Educator guide looks like a story page
                                    pathname === '/educator-guide',
                            }
                        )}
                    >
                        <Component {...pageProps} />
                    </main>
                    <Footer pagePath={pathname} />
                </div>
            </ArrowheadContext.Provider>
        </TooltipProvider>
    )
}
