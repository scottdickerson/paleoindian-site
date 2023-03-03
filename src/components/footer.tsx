/**nextjs fixed footer  with svg background */
import React from 'react'
import styles from '../styles/Footer.module.scss'
import Image from 'next/image'
import footerBackground from './images/footer/footerBackground.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image
                src={footerBackground}
                alt="Crosssection of ground"
                fill
            ></Image>
        </footer>
    )
}
