import { StaticImageData } from 'next/image'
import { CSSProperties, useState } from 'react'
import { ResponsiveImage } from './responsive-image'
import styles from '@/styles/Zoomer.module.scss'

interface ZoomerProps {
    transformOrigin: CSSProperties['transformOrigin']
    scale: number
    src: StaticImageData
    alt: string
}

export const Zoomer = ({
    transformOrigin,
    src,
    alt,
    scale = 5,
}: ZoomerProps) => {
    const [isZoomed, setIsZoomed] = useState(true)
    return (
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
    )
}
