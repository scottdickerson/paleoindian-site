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

const encodeSans = Encode_Sans({ subsets: ['latin'] })
const rubikDirt = Rubik_Dirt({ subsets: ['latin'], weight: '400' })

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
                        encodeSans.className,
                        rubikDirt.className
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
                className={classNames(encodeSans.className, {
                    [styles.storyPageContainer]: isPageAStory(pathname),
                })}
            >
                <Component {...pageProps} />
            </main>
        </>
    )
}
