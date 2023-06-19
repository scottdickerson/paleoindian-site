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
import {
    Encode_Sans,
    Rubik_Dirt,
    Encode_Sans_Condensed,
    Glass_Antiqua,
} from '@next/font/google'
import { Footer } from '@/components/footer'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Header } from '@/components/header'
import { ArrowheadContext } from '@/components/arrowhead-scroller'
import { useState } from 'react'

const encodeSans = Encode_Sans({ subsets: ['latin'], display: 'swap' })
const glassAntiqua = Glass_Antiqua({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
    variable: '--glass-antiqua',
})
export const rubikDirt = Rubik_Dirt({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--rubik-dirt',
})

export const encodeSansBold = Encode_Sans({
    subsets: ['latin'],
    weight: '600',
    display: 'swap',
    variable: '--encode-sans-bold',
})

export const encodeSansExtraBold = Encode_Sans({
    subsets: ['latin'],
    weight: '700',
    display: 'swap',
    variable: '--encode-sans-extra-bold',
})

export const encodeSansCondensedBold = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '600',
    display: 'swap',
    variable: '--encode-sans-condensed-bold',
})

export const encodeSansCondensedSemibold = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '500',
    display: 'swap',
    variable: '--encode-sans-condensed-semi-bold',
})

export const encodeSansCondensedExtrabold = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '700',
    display: 'swap',
    variable: '--encode-sans-condensed-extra-bold',
})

export const encodeSansCondensedBlack = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '900',
    display: 'swap',
    variable: '--encode-sans-condensed-black',
})

export const encodeSansCondensed = Encode_Sans_Condensed({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--encode-sans-condensed',
})

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
                    style={{ display: 'flex', flexDirection: 'column' }}
                    className={classNames(
                        encodeSansCondensed.variable,
                        glassAntiqua.variable,
                        rubikDirt.variable,
                        encodeSansCondensedBold.variable,
                        encodeSansBold.variable,
                        encodeSansExtraBold.variable,
                        encodeSansCondensedSemibold.variable,
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
                                    isPageAStory(pathname),
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
