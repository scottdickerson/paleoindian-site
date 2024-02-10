import dynamic from 'next/dynamic'
import { StaticImageData } from 'next/image'
import { DetailedHTMLProps, ImgHTMLAttributes, useState } from 'react'
import { PlayButton } from './video'
import responsiveStyles from '@/styles/ResponsiveImage.module.scss'
import styles from '@/styles/YouTubeVideo.module.scss'
import classNames from 'classnames'
import { ResponsiveImage } from './responsive-image'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export interface YouTubeVideoProps {
    src: string
    className?: string
    thumbnail: Omit<
        DetailedHTMLProps<
            ImgHTMLAttributes<HTMLImageElement>,
            HTMLImageElement
        >,
        'src' | 'alt' | 'width' | 'height' | 'placeholder' | 'ref'
    > & {
        src: StaticImageData
        alt: string
    }
}

const VideoThumbnail = ({ ...props }: YouTubeVideoProps['thumbnail']) => (
    <ResponsiveImage
        {...props}
        className={responsiveStyles.responsiveImage}
    ></ResponsiveImage>
)

export const YouTubeVideo = ({
    src,
    className,
    thumbnail,
}: YouTubeVideoProps) => {
    const [isStarted, setIsStarted] = useState(false)

    const handleClick = () => {
        setIsStarted((isStarted) => !isStarted)
    }
    return (
        <div
            className={classNames(styles.youTubeVideo, className)}
            onClick={handleClick}
        >
            {!isStarted && (
                <>
                    <PlayButton></PlayButton>
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
