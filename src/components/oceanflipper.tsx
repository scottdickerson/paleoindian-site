import styles from '@/styles/Flipper.module.scss'
import DansFlipper from './basicFlipper'

export const OceanFlipper = () => {
    return (
        <div className={styles.flipperWrapper}>
            <DansFlipper />
            <DansFlipper />
            <DansFlipper />
            <DansFlipper />
        </div>
    )
}