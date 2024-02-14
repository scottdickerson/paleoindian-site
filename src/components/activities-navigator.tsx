import Link from 'next/link'
import styles from '@/styles/ActivitiesNavigator.module.scss'
import { ROUTES } from '@/utils/routes'
import { useRouter } from 'next/router'

export const activitiesNavigatorLinks = [
    {
        title: 'Stem careers',
        href: ROUTES.ACTIVITIES_STEM_CAREERS,
    },
    {
        title: 'Jump into Archeology',
        href: ROUTES.ACTIVITIES_CLASSROOM,
    },
    {
        title: 'Hunting and gathering',
        href: ROUTES.ACTIVITIES_WORKBOOK,
    },
    {
        title: 'A year of survival',
        href: ROUTES.ACTIVITIES_CARD_GAME,
    },
    { title: 'Incised stones', href: ROUTES.ACTIVITIES_INCISED_STONES },
]

export const ActivitiesNavigator = () => {
    const { pathname } = useRouter()
    return (
        <nav className={styles.activitiesNavigator}>
            <span className={styles.seeActivities}>See other activities:</span>
            <ul className={styles.activitiesNavigatorList}>
                {activitiesNavigatorLinks
                    .filter(({ href }) => !pathname.includes(href))
                    .map(({ href, title }) => (
                        <li
                            className={styles.activitiesNavigatorListItem}
                            key={href}
                        >
                            <Link
                                className={styles.activitiesNavigatorLink}
                                href={href}
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
            </ul>
        </nav>
    )
}
