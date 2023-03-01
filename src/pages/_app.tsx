import {
    STORIES_PATH,
    StoryNavigation,
    StoryNavigationProps,
} from '@/components/story-navigation'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { encodeSansFont, rubikDirtFont } from '@/fonts'
import classNames from 'classnames'
import styles from '@/styles/StoryPage.module.scss'

const isPageAStory = (pathname: string) => {
    return pathname.includes(STORIES_PATH)
}

export default function App({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter()
    return (
        <>
            {isPageAStory(pathname) && (
                <header
                    className={classNames(
                        encodeSansFont.className,
                        rubikDirtFont.className
                    )}
                >
                    <StoryNavigation
                        selectedPage={
                            pathname as StoryNavigationProps['selectedPage']
                        }
                    />
                </header>
            )}
            <main
                className={classNames(encodeSansFont.className, {
                    [styles.storyPageContainer]: isPageAStory(pathname),
                })}
            >
                <Component {...pageProps} />
            </main>
        </>
    )
}
