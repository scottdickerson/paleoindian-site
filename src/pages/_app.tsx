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
import { Encode_Sans, Rubik_Dirt } from '@next/font/google'
import { Footer } from '@/components/footer'
import { TooltipProvider } from '@radix-ui/react-tooltip'
import { Header } from '@/components/header'

const encodeSans = Encode_Sans({ subsets: ['latin'], display: 'swap' })
export const rubikDirt = Rubik_Dirt({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
})

const isPageAStory = (pathname: string) => {
    return pathname.includes(STORIES_PATH)
}

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter()
    return (
        <TooltipProvider delayDuration={200}>
            <style jsx global>{`
                html {
                    font-family: ${encodeSans.style.fontFamily};
                }
            `}</style>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
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
                    className={classNames(pageStyles.pageWrapper, {
                        [styles.storyPageContainer]: isPageAStory(pathname),
                    })}
                >
                    <Component {...pageProps} />
                </main>
                <Footer />
            </div>
        </TooltipProvider>
    )
}
