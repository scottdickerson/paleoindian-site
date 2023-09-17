import styles from '@/styles/ActivityBlock.module.scss'
import classNames from 'classnames'
import { PropsWithChildren } from 'react'
export const ActivityBlock = ({
    children,
    className,
    size,
}: PropsWithChildren<{ className?: string; size?: 'sm' | 'lg' }>) => (
    <div
        className={classNames(
            styles.activityBlock,
            size === 'sm' && styles.activityBlockSmall,
            className
        )}
    >
        {children}
    </div>
)
