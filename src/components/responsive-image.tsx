import type { ImageProps } from 'next/image'
import Image from 'next/image'
import styles from '@/styles/ResponsiveImage.module.scss'
import classNames from 'classnames'
import React from 'react'

type ResponsiveImageProps = ImageProps & {
    containerProps?: React.HTMLAttributes<HTMLDivElement>
}

export const ResponsiveImage = ({
    className,
    containerProps,
    ...props
}: ResponsiveImageProps) => {
    return (
        <div
            {...containerProps}
            className={classNames(
                containerProps?.className,
                styles.responsiveImageContainer
            )}
        >
            <Image
                {...props}
                className={classNames(styles.responsiveImage, className)}
            />
        </div>
    )
}
