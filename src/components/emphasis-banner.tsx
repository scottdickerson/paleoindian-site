import { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import classNames from 'classnames'
import styles from '@/styles/EmphasisBanner.module.scss'

interface EmphasisBannerProps extends HTMLAttributes<HTMLDivElement> {
    className?: string
    leftSide: ReactNode
    rightSide: ReactNode
}

export const EmphasisBanner = ({
    className,
    leftSide,
    rightSide,
    ...rest
}: PropsWithChildren<EmphasisBannerProps>) => (
    <div {...rest} className={classNames(styles.container, className)}>
        <div className={styles.leftSide}>{leftSide}</div>
        <div className={styles.rightSide}>{rightSide}</div>
    </div>
)
