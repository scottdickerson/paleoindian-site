import styles from '@/styles/Flipper.module.scss'
import Image from 'next/image'
import flipper1 from '@/data/ice-age-texas/flipper/More Offshore Illustration-05@2x.png'
import flipper2 from '@/data/ice-age-texas/flipper/More Offshore Illustration-06@2x.png'
import flipper3 from '@/data/ice-age-texas/flipper/More Offshore Illustration-07@2x.png'
import flipper4 from '@/data/ice-age-texas/flipper/More Offshore Illustration-08@2x.png'

export const Flipper = () => {
    return (
        <div className={styles.flipperWrapper}>
            <Image 
                src={flipper1}
                className={`${styles.flipperImage} ${styles.flipper1}`}
                alt="Flipper"
                layout='responsive'
            />
            <Image 
                src={flipper2}
                className={`${styles.flipperImage} ${styles.flipper2}`}
                alt="Flipper"
                layout='responsive'
            />
            <Image 
                src={flipper3}
                className={`${styles.flipperImage} ${styles.flipper3}`}
                alt="Flipper"
                layout='responsive'
            />
            <Image 
                src={flipper4}
                className={`${styles.flipperImage} ${styles.flipper4}`}
                alt="Flipper"
                layout='responsive'
            />
        </div>
    )
}