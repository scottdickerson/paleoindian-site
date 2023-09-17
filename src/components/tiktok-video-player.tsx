/** NextJS Thumbnail gallery with a 4x4 grid handles click events and gives a callback */

import { useState } from 'react'
import { StaticImageData } from 'next/image'
import styles from '@/styles/TikTokPlayer.module.scss'
import { ResponsiveImage } from './responsive-image'
import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'
import { TikTokVideo } from './tiktok-video'

interface ThumbnailGalleryProps {
    images: {
        src: StaticImageData
        alt?: string
        id: string
        videoSrc: string
    }[]
    onClick: (imageId?: string) => void
    selectedImage?: string
    className?: string
    // Determine whether the thumb should be replaced by an inline video
    shouldPlayInline?: boolean
}

const ThumbnailGallery = ({
    images,
    onClick,
    className,
    selectedImage,
    shouldPlayInline,
}: ThumbnailGalleryProps) => {
    const handleClick = (id: string) => {
        onClick(id)
    }
    return (
        <div className={classNames(styles.thumbnailGallery, className)}>
            {images.map(({ src, alt, id, videoSrc }) => {
                return shouldPlayInline && selectedImage === id ? (
                    <TikTokVideo
                        key={id}
                        src={videoSrc}
                        isStarted
                    ></TikTokVideo>
                ) : (
                    <ResponsiveImage
                        key={id}
                        src={src}
                        alt={alt || ''}
                        fill
                        containerProps={{
                            className: styles.imageContainer,
                            onClick: () => handleClick(id),
                        }}
                        className={
                            !shouldPlayInline &&
                            selectedImage &&
                            selectedImage !== id
                                ? styles.unselectedImage
                                : undefined
                        }
                    />
                )
            })}
        </div>
    )
}

export interface TikTokPlayerProps {
    videos: Record<string, { thumbnail: StaticImageData; video: string }>
}

export const TikTokPlayer = ({ videos }: TikTokPlayerProps) => {
    const [selectedVideo, setSelectedVideo] = useState<string>()

    // useEffect(() => {
    //     const handleResize = () => {
    //         setSelectedVideo(undefined)
    //     }
    //     window.addEventListener('resize', handleResize)
    //     return () => {
    //         window.removeEventListener('resize', handleResize)
    //     }
    // }, [])

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
    return (
        <div className={styles.tiktokPlayer}>
            {!isMobile && (
                <div className={styles.videoTile}>
                    {!selectedVideo && (
                        <div className={styles.selectVideoTile}>
                            Select a video
                        </div>
                    )}
                    {selectedVideo && (
                        <TikTokVideo
                            src={videos[selectedVideo].video}
                            isStarted={!!selectedVideo}
                        ></TikTokVideo>
                    )}
                </div>
            )}
            <ThumbnailGallery
                images={Object.entries(videos).map(
                    ([id, { thumbnail, video }]) => ({
                        src: thumbnail,
                        id,
                        videoSrc: video,
                    })
                )}
                onClick={(id) => {
                    setSelectedVideo(id)
                }}
                selectedImage={selectedVideo}
                shouldPlayInline={isMobile}
            />
        </div>
    )
}
