import styles from '@/styles/Hero.module.scss'
import { HTMLAttributes } from 'react'

export const Hero = (props: HTMLAttributes<HTMLDivElement>) => (
    <div {...props} className={styles.hero}>
        <span>A Time </span>
        <span className={styles.before}>Before</span>
        <span> Texas</span>
    </div>
)
