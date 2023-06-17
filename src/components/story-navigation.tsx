import Link from 'next/link'
import styles from '../styles/StoryNavigation.module.scss'
import classNames from 'classnames'
import { rubikDirt } from '@/pages/_app'

export const STORIES_PATH = '/stories'

// navigation header react component
// constant for each page
export const STORY_PAGES = {
    ['/stories/origin-stories']: {
        title: 'Origin Stories',
        className: styles.originstories,
    },
    ['/stories/ice-age-texas']: {
        title: 'Ice-Age Texas',
        className: styles.iceagetexas,
    },
    ['/stories/daily-life']: {
        title: 'Daily Life',
        className: styles.dailylife,
    },
} as const

export interface StoryNavigationProps {
    selectedPage?: keyof typeof STORY_PAGES
    className?: string
}

export const StoryNavigation = ({
    selectedPage,
    className,
}: StoryNavigationProps) => {
    return (
        <nav
            aria-label="Primary Navigation"
            className={classNames(
                rubikDirt.className,
                styles.navbar,
                className
            )}
        >
            <Link href="/" className={classNames(styles.navitem, styles.home)}>
                Home
            </Link>
            <ul>
                {Object.entries(STORY_PAGES).map(([key, value]) => {
                    const isSelected = selectedPage === key
                    return (
                        <li
                            key={key}
                            className={classNames(
                                value.className,
                                styles.navitem,
                                {
                                    [styles.selected]: isSelected,
                                }
                            )}
                        >
                            <Link href={`${key}`}>{value.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
