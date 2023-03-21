import styles from '@/styles/Flipper.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import { FlipperImages } from '@/data/ice-age-texas/flipper/flipperData'

export default function Flipper() {
    const [isOpened, setIsOpened] = useState(false);
    const toggleIsOpened = () => setIsOpened(!isOpened);
    const closedImages = FlipperImages.map((image) => image.closed);
    const openedImages = FlipperImages.map((image) => image.opened);
    const images = isOpened ? openedImages : closedImages;
    
    return (
      <div className={styles.flipperWrapper}>
        {images.map((image, index) => (
          <div onClick={toggleIsOpened}>
          <Image
            key={index}
            src={image}
            className={styles.flipper}
            alt={`Flipper ${index + 1}`}
            layout="responsive"
          />
          </div>
        ))}
      </div>
    );
}