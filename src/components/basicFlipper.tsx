import styles from '../styles/Flipper.module.css'
import Image from 'next/image'
import { useState } from 'react'
import { FlipperImages } from '@/data/ice-age-texas/flipper/flipperData'

export default function DansFlipper() {
    const [flipperImages] = useState(FlipperImages)
    return (
        <div className={styles.flipperWrapper}>
            {flipperImages.map((image) => (
                <div>
                    <Image 
                        src={image.opened ? image.opened : image.closed}
                        className={`${styles.flipperImage} ${styles[image.id]}`}
                        alt="Flipper"
                        layout='responsive'
                    />
                </div>
            ))}
        </div>
    )
}