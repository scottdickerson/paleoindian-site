import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { PlayButton } from './video'
import styles from '@/styles/ResponsiveImage.module.scss'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

const VideoThumbnail = ({
    url,
    alt,
}: {
    url: StaticImageData
    alt: string
}) => <Image src={url} alt={alt} className={styles.responsiveImage}></Image>

interface YouTubeVideoProps {
    url: string
    thumbnail: { src: StaticImageData; alt: string }
}

export const YouTubeVideo = ({
    url,
    thumbnail: { src: thumbnailSrc, alt: thumbnailAlt },
}: YouTubeVideoProps) => {
    const [isStarted, setIsStarted] = useState(false)

    const handleClick = () => {
        setIsStarted((isStarted) => !isStarted)
    }
    return (
        <div
            style={{
                aspectRatio: 'auto 16 / 9',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                backgroundColor: 'black',
            }}
        >
            {!isStarted && (
                <>
                    <PlayButton onClick={handleClick}></PlayButton>
                    <VideoThumbnail url={thumbnailSrc} alt={thumbnailAlt} />
                </>
            )}
            <ReactPlayer
                url={url}
                height="100%"
                width="100%"
                playing={isStarted}
                style={{ visibility: isStarted ? 'visible' : 'hidden' }}
                config={{
                    youtube: {
                        playerVars: {
                            modestbranding: 1,
                            controls: 1,
                        },
                    },
                }}
            />
        </div>
    )
}
