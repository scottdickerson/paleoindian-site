import { PropsWithChildren } from 'react'
import styles from '@/styles/ZoomerSection.module.scss'

export const ZoomerSection = ({ children }: PropsWithChildren<{}>) => {
    return <div className={styles.zoomerSection}>{children}</div>
}
