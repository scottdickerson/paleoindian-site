import React from 'react';
import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Carousel.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDraggable } from "react-use-draggable-scroll";

type Images = {
    id: string;
    image: StaticImageData;
}

type Props = {
    images: Images[]
}

export function DailyLifeCarousel({ images }: Props) {
    // We will use React useRef hook to reference the wrapping div:
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

    return (
        <div className={styles.carouselWrapper} 
        {...events}
        ref={ref} // add reference and events to the wrapping div
        >
            {images.map((image: any, index: any) => (
                <div className={styles.imageWrapper} key={index}>
                    <Image
                        src={image.image}
                        alt={image.id}
                        className={styles.image}
                    />
                    <div className={styles.imageTextContainer}>
                        <p className={styles.imageTextTitle}>{image.title}</p>
                        <p className={styles.imageTextDescription}>{image.description}</p>
                        <p className={styles.imageText}>{image.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}