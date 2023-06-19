import Link from 'next/link'
import { STORY_PAGES } from '@/components/story-navigation'
import styles from '@/styles/NavigationButtons.module.scss'
import { RefObject } from 'react'

const STORY_PAGES_URLS = Object.keys(STORY_PAGES)

export const NavigationButtons = ({
    firstLinkRef,
}: {
    firstLinkRef: RefObject<HTMLAnchorElement>
}) => (
    <div className={styles.storyNavigation}>
        <nav>
            <ul>
                <li>
                    <Link ref={firstLinkRef} href={STORY_PAGES_URLS[0]}>
                        Origin Stories
                    </Link>
                </li>
                <li>
                    <Link href={STORY_PAGES_URLS[1]}>Ice-Age Texas</Link>
                </li>
                <li>
                    <Link href={STORY_PAGES_URLS[2]}>Daily Life</Link>
                </li>
            </ul>
        </nav>
    </div>
)
