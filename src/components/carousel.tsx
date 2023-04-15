import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import styles from '../styles/Carousel.module.scss';

export function DailyLifeCarousel({ images }: any) {
    return (
        <Carousel
        className={styles.carousel}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={500}
        >
        {images.map((image: any, index: any) => (
            <div key={index} className={styles.imageWrapper}>
            <Image src={image} className={styles.image} alt={`Daily Life ${index + 1}`} />
            </div>
        ))}
        </Carousel>
    );
}

// Path: src/components/carousel.tsx