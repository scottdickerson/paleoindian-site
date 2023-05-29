import styles from '@/styles/Flipper.module.scss'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

type Images = {
    opened: StaticImageData
    closed: StaticImageData
    openedText: string
    closedText: string
}

type Props = {
    images: Images[]
}

export default function Flipper({ images }: Props) {
    const [isOpened, setIsOpened] = useState(
        new Array(images.length).fill(false)
    )
    const isSmallMobile = useMediaQuery({ query: '(max-width: 400px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

    const toggleIsOpened = (index: any) => {
        const newIsOpened = [...isOpened]
        newIsOpened[index] = !newIsOpened[index]
        setIsOpened(newIsOpened)
    }
    return (
        <div className={styles.flipperWrapper}>
            {isSmallMobile && isPortrait && (
                <>
                    <div className={styles.mobileWarningBackground} />
                    <div className={styles.mobileWarning}>
                        To view this content please rotate your device or expand
                        your browser.
                    </div>
                </>
            )}
            {images.map((image: any, index: any) => (
                <div
                    key={index}
                    className={styles.imageWrapper}
                    onClick={() => toggleIsOpened(index)}
                >
                    <Image
                        src={isOpened[index] ? image.opened : image.closed}
                        className={styles.flipper}
                        alt={`Flipper ${index + 1}`}
                        fill
                    />
                    <div
                        className={`${styles.text} ${
                            isOpened[index]
                                ? styles.textIsOpened
                                : styles.textIsClosed
                        }`}
                    >
                        {isOpened[index] ? image.openedText : image.closedText}
                    </div>
                </div>
            ))}
        </div>
    )
}
