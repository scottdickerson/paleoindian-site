/**nextjs fixed footer  with svg background */
import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import footerBackground from './images/footer/footerBackground.svg'
import Link from 'next/link'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

interface FooterProps {
    className?: string
    pagePath: string
}

export const Footer = ({ className, pagePath }: FooterProps) => {
    const isFixed =
        useMediaQuery({
            query: '(min-height: 800px)',
        }) && pagePath !== '/'

    return (
        <footer
            className={classNames(
                styles.footer,
                { [styles.fixedFooter]: isFixed },
                className
            )}
        >
            <nav className={styles.footerNav}>
                <ul className={styles.footerLinks}>
                    <li>
                        <Link href="/educator-guide">Educator Guide</Link>
                    </li>
                    <li>
                        <Link href="/txdot-and-tribes">TxDOT and Tribes</Link>
                    </li>
                    <li>
                        <Link href="/about">About the exhibit</Link>
                    </li>
                </ul>
            </nav>

            <Image
                src={footerBackground}
                alt="Crosssection of ground"
                className={styles.footerImage}
                fill
                priority
            ></Image>
        </footer>
    )
}
