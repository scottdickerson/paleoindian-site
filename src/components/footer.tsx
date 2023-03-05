/**nextjs fixed footer  with svg background */
import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import footerBackground from './images/footer/footerBackground.svg'
import Link from 'next/link'
import classNames from 'classnames'

interface FooterProps {
    className?: string
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(styles.footer, className)}>
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
            ></Image>
        </footer>
    )
}
