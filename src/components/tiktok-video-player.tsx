/** NextJS Thumbnail gallery with a 4x4 grid handles click events and gives a callback */

import { useState } from 'react'
import { StaticImageData } from 'next/image'
import styles from '@/styles/TikTokPlayer.module.scss'
import { ResponsiveImage } from './responsive-image'
import classNames from 'classnames'

interface ThumbnailGalleryProps {
    images: { src: StaticImageData; alt?: string; id: string }[]
    onClick: (imageId?: string) => void
    selectedImage?: string
    className?: string
}

const ThumbnailGallery = ({
    images,
    onClick,
    className,
    selectedImage,
}: ThumbnailGalleryProps) => {
    const handleClick = (id: string) => {
        if (selectedImage === id) {
            onClick()
        } else {
            onClick(id)
        }
    }
    return (
        <div className={classNames(styles.thumbnailGallery, className)}>
            {images.map(({ src, alt, id }) => (
                <ResponsiveImage
                    key={id}
                    src={src}
                    alt={alt || ''}
                    containerProps={{
                        className: styles.imageContainer,
                        onClick: () => handleClick(id),
                    }}
                    className={
                        selectedImage && selectedImage !== id
                            ? styles.unselectedImage
                            : undefined
                    }
                />
            ))}
        </div>
    )
}

interface TikTokPlayerProps {
    videos: Record<string, { thumbnail: StaticImageData; video: string }>
}

export const TikTokPlayer = ({ videos }: TikTokPlayerProps) => {
    const [selectedVideo, setSelectedVideo] = useState<string>()
    return (
        <div className={styles.tiktokPlayer}>
            {!selectedVideo && (
                <div className={styles.selectVideoTile}>Select a video</div>
            )}
            {selectedVideo && (
                <video
                    className={styles.videoTile}
                    src={videos[selectedVideo].video}
                    autoPlay
                    controls
                ></video>
            )}
            <ThumbnailGallery
                images={Object.entries(videos).map(([id, { thumbnail }]) => ({
                    src: thumbnail,
                    id,
                }))}
                onClick={(id) => {
                    setSelectedVideo(id)
                }}
                selectedImage={selectedVideo}
            />
        </div>
    )
}
