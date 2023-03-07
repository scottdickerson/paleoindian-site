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
import { Encode_Sans, Rubik_Dirt } from '@next/font/google'
import { Footer } from '@/components/footer'

const encodeSans = Encode_Sans({ subsets: ['latin'] })
export const rubikDirt = Rubik_Dirt({
    subsets: ['latin'],
    weight: '400',
})

const isPageAStory = (pathname: string) => {
    return pathname.includes(STORIES_PATH)
}

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter()
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${encodeSans.style.fontFamily};
                }
            `}</style>
            {isPageAStory(pathname) && (
                <header>
                    <StoryNavigation
                        selectedPage={
                            pathname as StoryNavigationProps['selectedPage']
                        }
                    />
                </header>
            )}
            <main
                className={classNames({
                    [styles.storyPageContainer]: isPageAStory(pathname),
                })}
            >
                <Component {...pageProps} />
            </main>
            {isPageAStory(pathname) && <Footer></Footer>}
        </>
    )
}
