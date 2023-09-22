import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export interface TikTokVideoProps {
    src: string
    isStarted?: boolean
}

export const TikTokVideo = ({ src, isStarted }: TikTokVideoProps) => {
    return (
        <ReactPlayer
            url={src}
            height="100%"
            width="100%"
            playing={isStarted}
            style={{ visibility: isStarted ? 'visible' : 'hidden' }}
            config={{
                youtube: {
                    playerVars: {
                        controls: 0,
                    },
                },
            }}
        />
    )
}
