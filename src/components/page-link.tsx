import Link, { LinkProps } from 'next/link'
import styles from '@/styles/PageLink.module.scss'
import { HTMLAttributes, PropsWithChildren } from 'react'
import classNames from 'classnames'

export interface PageLinkProps
    extends LinkProps,
        HTMLAttributes<HTMLAnchorElement> {
    // is the link going forward or backward
    isForward: boolean
}
export const PageLink = ({
    isForward,
    children,
    className,
    ...props
}: PropsWithChildren<PageLinkProps>) => (
    <Link className={classNames(styles.pageLink, className)} {...props}>
        {!isForward ? <span className={styles.direction}>&lt;&lt;</span> : ''}
        {children}
        {isForward ? <span className={styles.direction}>&gt;&gt;</span> : ''}
    </Link>
)
