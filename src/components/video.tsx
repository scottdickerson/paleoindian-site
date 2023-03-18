// responsive video component with src prop
import styles from '@/styles/Video.module.scss'
import { MouseEventHandler, useRef, useState } from 'react'
import Image from 'next/image'
import playButton from './images/video/playButton.svg'

export const PlayButton = ({
    onClick,
}: {
    onClick: MouseEventHandler<HTMLDivElement>
}) => {
    return (
        <div className={styles.playButton} onClick={onClick}>
            <Image src={playButton} alt="Play video" fill />
        </div>
    )
}

export const Video = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isStarted, setIsStarted] = useState(false)

    const handleClick = () => {
        if (isStarted) {
            videoRef.current?.pause()
        } else {
            videoRef.current?.play()
        }
        setIsStarted((isStarted) => !isStarted)
    }

    return (
        <>
            {!isStarted && <PlayButton onClick={handleClick} />}
            <video
                src={`${src}#t=0.001`} // workaround for preview not working on iOS
                className={styles.video}
                ref={videoRef}
                onClick={handleClick}
                onEnded={() => setIsStarted(false)}
            ></video>
        </>
    )
}
