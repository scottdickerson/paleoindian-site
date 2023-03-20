import styles from '@/styles/Flipper.module.scss'
import Image from 'next/image'
import flipper1 from '@/data/ice-age-texas/flipper/More Offshore Illustration-05@2x.png'
import flipper2 from '@/data/ice-age-texas/flipper/More Offshore Illustration-01@2x.png'
import flipper3 from '@/data/ice-age-texas/flipper/More Offshore Illustration-06@2x.png'
import flipper4 from '@/data/ice-age-texas/flipper/More Offshore Illustration-02@2x.png'
import flipper5 from '@/data/ice-age-texas/flipper/More Offshore Illustration-07@2x.png'
import flipper6 from '@/data/ice-age-texas/flipper/More Offshore Illustration-03@2x.png'
import flipper7 from '@/data/ice-age-texas/flipper/More Offshore Illustration-08@2x.png'
import flipper8 from '@/data/ice-age-texas/flipper/More Offshore Illustration-04@2x.png'

export const Flipper = () => {
    const flipperImages = [
        flipper1,
        flipper2,
        flipper3,
        flipper4,
        flipper5,
        flipper6,
        flipper7,
        flipper8,
    ]

    const handleFlipperImageClick = () => {
        console.log(`Clicked!`)
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
                    src={flipperImages[2]}
                    className={`${styles.flipperImage} ${styles.flipper2}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => handleFlipperImageClick()}>
                <Image 
                    src={flipperImages[4]}
                    className={`${styles.flipperImage} ${styles.flipper3}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => handleFlipperImageClick()}>
                <Image 
                    src={flipperImages[6]}
                    className={`${styles.flipperImage} ${styles.flipper4}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
        </div>
    )
}