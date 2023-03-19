import dynamic from 'next/dynamic'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { PlayButton } from './video'
import styles from '@/styles/ResponsiveImage.module.scss'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export interface YouTubeVideoProps {
    src: string
    thumbnail: { src: StaticImageData; alt: string }
}

const VideoThumbnail = ({ src, alt }: YouTubeVideoProps['thumbnail']) => (
    <Image src={src} alt={alt} className={styles.responsiveImage}></Image>
)

export const YouTubeVideo = ({ src, thumbnail }: YouTubeVideoProps) => {
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
                    <VideoThumbnail {...thumbnail} />
                </>
            )}
            <ReactPlayer
                url={src}
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
