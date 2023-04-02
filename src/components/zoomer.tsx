import { StaticImageData } from 'next/image'
import { CSSProperties, useState } from 'react'
import { ResponsiveImage } from './responsive-image'
import styles from '@/styles/Zoomer.module.scss'

interface ZoomerProps {
    transformOrigin: CSSProperties['transformOrigin']
    scale: number
    src: StaticImageData
    alt: string
    details: {
        title: string
        subtitle: string
        details: string
    }
}

export const Zoomer = ({
    transformOrigin,
    src,
    alt,
    scale = 5,
    details: { title, subtitle, details },
}: ZoomerProps) => {
    const [isZoomed, setIsZoomed] = useState(true)
    return (
        <div className={styles.zoomerContainer}>
            {isZoomed && (
                <span className={styles.zoomerQuestion}>What is that?</span>
            )}
            <ResponsiveImage
                src={src}
                alt={alt}
                containerProps={{
                    className: styles.zoomer,
                    onClick: () => setIsZoomed((isZoomed) => !isZoomed),
                }}
                style={{
                    transformOrigin,
                    transform: `scale(${isZoomed ? scale : '1.0'})`,
                }}
            />
            {!isZoomed && (
                <div className={styles.zoomerDetails}>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <p>{details}</p>
                </div>
            )}
        </div>
    )
}
