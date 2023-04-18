import React from 'react';
import { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Carousel.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useDraggable } from "react-use-draggable-scroll";
import leftArrow from '@/components/images/cards/LeftArrow.svg'
import rightArrow from '@/components/images/cards/RightArrow.svg'

type Images = { id: string; image: StaticImageData; }

type Props = { images: Images[] }

export function DailyLifeCarousel({ images }: Props) {

    // We will use React useRef hook to reference the wrapping div:
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

    const nextSlide = () => {
        console.log(`Hello world!`);
    }

    const prevSlide = () => {
        console.log(`Hello world!`);
    }

    return (
        <div className={styles.carouselWrapper} 
        {...events}
        ref={ref} // add reference and events to the wrapping div
        >
            <button
                    onClick={nextSlide}
                    className={`${styles.arrow} ${styles.leftArrow}`}
                >
                    <Image
                        id="leftArrow"
                        src={leftArrow}
                        alt="Left Arrow"
                        height={36}
                        width={36}
                    />
                </button>
                <button
                    className={`${styles.arrow} ${styles.rightArrow}`}
                    onClick={prevSlide}
                >
                    <Image
                        id="rightArrow"
                        src={rightArrow}
                        alt="Right Arrow"
                        height={36}
                        width={36}
                    />
                </button>

            {images.map((image: any, index: any) => (
                <div className={styles.imageWrapper} key={index}>
                    <Image
                        src={image.image}
                        alt={image.id}
                        className={styles.image}
                    />
                    <div className={styles.imageTextContainer}>
                        
                        {/* Title */}
                        <p className={`
                            ${styles.imageTextTitle} 
                            ${styles.imageText}
                            `}>
                                {image.title}
                        </p>
                        {/* Description */}
                        <p className={`
                            ${styles.imageTextDescription} 
                            ${styles.imageText}
                            `}>
                                {image.description}
                        </p>
                        {/* Body */}
                        <p className={`
                            ${styles.imageText} 
                            ${styles.imageTextBody}
                            `}>
                                {image.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}