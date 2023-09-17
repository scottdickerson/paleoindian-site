/**nextjs fixed footer  with svg background */
import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import footerBackground from './images/footer/footerBackground.svg'
import Link from 'next/link'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { ROUTES } from '@/utils/routes'
import dynamic from 'next/dynamic'

interface FooterProps {
    className?: string
    pagePath: string
}

export const Footer = ({ className, pagePath }: FooterProps) => {
    const isFixed =
        useMediaQuery({
            query: '(min-height: 768px)',
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
                        <Link
                            href={ROUTES.EDUCATOR_GUIDE}
                            className={
                                pagePath === ROUTES.EDUCATOR_GUIDE ||
                                pagePath.includes('activities') ||
                                pagePath.includes('bibliography')
                                    ? styles.linkSelected
                                    : undefined
                            }
                        >
                            Educator Guide
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={ROUTES.TXDOT_AND_TRIBES}
                            className={
                                pagePath === ROUTES.TXDOT_AND_TRIBES
                                    ? styles.linkSelected
                                    : undefined
                            }
                        >
                            TxDOT and Tribes
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={ROUTES.ABOUT}
                            className={
                                pagePath === ROUTES.ABOUT
                                    ? styles.linkSelected
                                    : undefined
                            }
                        >
                            About the exhibit
                        </Link>
                    </li>
                </ul>
            </nav>

            <Image
                src={footerBackground}
                alt="Cross-section of underground"
                className={styles.footerImage}
                fill
                priority
            ></Image>
        </footer>
    )
}

export default dynamic(() => Promise.resolve(Footer), { ssr: false })
