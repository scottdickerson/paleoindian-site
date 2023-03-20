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
    return (
        <div className={styles.flipperWrapper}>
            <div onClick={() => {console.log(`Clicked!`)}}>
                <Image 
                    src={flipper1}
                    className={`${styles.flipperImage} ${styles.flipper1}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => {console.log(`Clicked!`)}}>
                <Image 
                    src={flipper3}
                    className={`${styles.flipperImage} ${styles.flipper2}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => {console.log(`Clicked!`)}}>
                <Image 
                    src={flipper5}
                    className={`${styles.flipperImage} ${styles.flipper3}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
            <div onClick={() => {console.log(`Clicked!`)}}>
                <Image 
                    src={flipper7}
                    className={`${styles.flipperImage} ${styles.flipper4}`}
                    alt="Flipper"
                    layout='responsive'
                />
            </div>
        </div>
    )
}