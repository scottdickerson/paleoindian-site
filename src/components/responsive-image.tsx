import type { ImageProps } from 'next/image'
import Image from 'next/image'
import styles from '@/styles/ResponsiveImage.module.scss'
import classNames from 'classnames'

type ResponsiveImageProps = ImageProps & {}

export const ResponsiveImage = ({
    className,
    ...props
}: ResponsiveImageProps) => {
    return (
        <div className={styles.responsiveImageContainer}>
            <Image
                {...props}
                className={classNames(styles.responsiveImage, className)}
            />
        </div>
    )
}
