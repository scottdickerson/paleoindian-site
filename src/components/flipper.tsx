import styles from '@/styles/Flipper.module.scss'

export const Flipper = () => {
    return (
        <div className={styles.flipper}>
        <div className={styles.front}>Front</div>
        <div className={styles.back}>Back</div>
        </div>
    )
}