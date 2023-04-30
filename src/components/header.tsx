import styles from '@/styles/Header.module.scss'
import Link from 'next/link'

// header with image that is clipped on aspect ratio

export const Header = () => {
    return (
        <header className={styles.header} aria-label="A time before texas">
            <Link className={styles.headerLink} href="/" />
        </header>
    )
}
