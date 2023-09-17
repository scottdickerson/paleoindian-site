import Link from 'next/link'
import styles from '@/styles/ActivitiesNavigator.module.scss'

interface ActivitiesNavigatorProps {
    activitiesLinks: { title: string; href: string }[]
}

export const ActivitiesNavigator = ({
    activitiesLinks,
}: ActivitiesNavigatorProps) => {
    return (
        <nav className={styles.activitiesNavigator}>
            <span className={styles.seeActivities}>See other activities:</span>
            <ul className={styles.activitiesNavigatorList}>
                {activitiesLinks.map(({ href, title }) => (
                    <li className={styles.activitiesNavigatorListItem}>
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
