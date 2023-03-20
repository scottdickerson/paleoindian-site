import styles from '@/styles/Flipper.module.scss'
import Image from 'next/image'
import { FlipperImages } from '@/data/ice-age-texas/flipper/flipperData'

export default function DansFlipper() {
    const flipperImages = FlipperImages;
    return (
        <div className={styles.flipperWrapper}>
            {flipperImages.map((image) => (
                <div key={image.id}>
                    <Image 
                        src={image.closed}
                        className={`${styles.flipperImage} ${styles[image.id]}`}
                        alt="Flipper"
                        layout='responsive'
                    />
                </div>
            ))}
        </div>
    )
}
