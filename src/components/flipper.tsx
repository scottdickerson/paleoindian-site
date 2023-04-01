import styles from '@/styles/Flipper.module.scss'
import Image from 'next/image'
import { useState } from 'react';
import { FlipperImages } from '@/data/ice-age-texas/flipper/flipperData'

export default function Flipper() {
  const [isOpened, setIsOpened] = useState(new Array(FlipperImages.length).fill(false));

  const toggleIsOpened = (index:any) => {
    const newIsOpened = [...isOpened];
    newIsOpened[index] = !newIsOpened[index];
    setIsOpened(newIsOpened);
  };
  return (
    <div className={styles.flipperWrapper}>
      {FlipperImages.map((image, index) => (
        <div key={index} className={styles.imageWrapper} onClick={() => toggleIsOpened(index)}>
          <Image
            src={isOpened[index] ? image.opened : image.closed}
            className={styles.flipper}
            alt={`Flipper ${index + 1}`}
            // Hello world!
          />
          <div className={`${styles.text} ${isOpened[index] ? styles.textIsOpened : styles.textIsClosed}`}>
            {isOpened[index] ? image.openedText : image.closedText}
          </div>
        </div>
      ))}
    </div>
  );
}
