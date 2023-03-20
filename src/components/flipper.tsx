import styles from '@/styles/Flipper.module.scss'
import Image from 'next/image'
import { FlipperImages } from '@/data/ice-age-texas/flipper/flipperData'

export const Flipper = () => {
    const flipperImages = FlipperImages.map((flipperImage) => flipperImage.closed)

    const handleFlipperImageClick = () => {

    }
    
    return (
        <div className={styles.flipperWrapper}>
            <div onClick={() => handleFlipperImageClick()}>
                <Image 
                    src={flipperImages[0]}
                    className={`${styles.flipperImage} ${styles.flipper1}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => handleFlipperImageClick()}>
                <Image 
                    src={flipperImages[1]}
                    className={`${styles.flipperImage} ${styles.flipper2}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => handleFlipperImageClick()}>
                <Image 
                    src={flipperImages[2]}
                    className={`${styles.flipperImage} ${styles.flipper3}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => handleFlipperImageClick()}>
                <Image 
                    src={flipperImages[3]}
                    className={`${styles.flipperImage} ${styles.flipper4}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
        </div>
    )
}