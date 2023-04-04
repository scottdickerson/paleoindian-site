import styles from '@/styles/Flipper.module.scss'
import Image from 'next/image'
import { useState } from 'react';

type Images = {
  opened: any;
  closed: any;
  openedText: any;
  closedText: any;
}

type Props = {
  images: Images[];
}

export default function Flipper({ images }: Props) {
  const [isOpened, setIsOpened] = useState(new Array(images.length).fill(false));

  const toggleIsOpened = (index:any) => {
    const newIsOpened = [...isOpened];
    newIsOpened[index] = !newIsOpened[index];
    setIsOpened(newIsOpened);
  };
  return (
    <div className={styles.flipperWrapper}>
      {images.map((image:any, index:any) => (
        <div key={index} className={styles.imageWrapper} onClick={() => toggleIsOpened(index)}>
          <Image
            src={isOpened[index] ? image.opened : image.closed}
            className={styles.flipper}
            alt={`Flipper ${index + 1}`}
          />
          <div className={`${styles.text} ${isOpened[index] ? styles.textIsOpened : styles.textIsClosed}`}>
            {isOpened[index] ? image.openedText : image.closedText}
          </div>
        </div>
      ))}
    </div>
  );
}
