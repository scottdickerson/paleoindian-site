import Link, { LinkProps } from 'next/link'
import styles from '@/styles/PageLink.module.scss'
import { HTMLAttributes, PropsWithChildren } from 'react'
import classNames from 'classnames'

export interface PageLinkProps
    extends LinkProps,
        HTMLAttributes<HTMLAnchorElement> {
    // is the link going forward or backward, leave undefined for no arrow
    isForward?: boolean
}
export const PageLink = ({
    isForward,
    children,
    className,
    ...props
}: PropsWithChildren<PageLinkProps>) => (
    <Link className={classNames(styles.pageLink, className)} {...props}>
        {isForward === false ? (
            <span className={styles.direction}>&lt;&lt;&nbsp;</span>
        ) : (
            ''
        )}
        {children}
        {isForward === true ? (
            <span className={styles.direction}>&nbsp;&gt;&gt;</span>
        ) : (
            ''
        )}
    </Link>
)
