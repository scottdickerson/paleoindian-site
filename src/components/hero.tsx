import styles from '@/styles/Hero.module.scss'
import { useIsDesktop } from '@/utils/customHooks'
import { HTMLAttributes } from 'react'

export const Hero = (props: HTMLAttributes<HTMLDivElement>) => {
    const isDesktop = useIsDesktop()

    return (
        <div {...props} className={styles.hero}>
            {isDesktop && (
                <video
                    className={styles.video}
                    src="/images/hero/hero.webm"
                    autoPlay
                    muted
                    playsInline
                    loop
                ></video>
            )}
            <span>A Time </span>
            <span className={styles.before}>Before</span>
            <span> Texas</span>
        </div>
    )
}
