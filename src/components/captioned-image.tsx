// nextjs component for image with caption in figure semantic html
//
import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/CaptionedImage.module.scss'
import classNames from 'classnames'

interface CaptionedImageProps {
    src: StaticImageData
    alt: string
    caption: string
    photoCredit: string
    className?: string
}

export const CaptionedImage = ({
    src,
    alt,
    caption,
    photoCredit,
    className,
}: CaptionedImageProps) => {
    return (
        <figure className={classNames(styles.imageBlock, className)}>
            <Image src={src} alt={alt} className={styles.image} />
            <figcaption className={styles.caption}>
                {caption}
                <br />
                <span className={styles.photoCredit}>{photoCredit}</span>
            </figcaption>
        </figure>
    )
}
