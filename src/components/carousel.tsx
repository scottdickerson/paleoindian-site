import Image, { StaticImageData } from 'next/image';
import styles from '../styles/Carousel.module.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

type Images = {
    id: string;
    image: StaticImageData;
}

type Props = {
    images: Images[]
}

export function DailyLifeCarousel({ images }: Props) {
    return (
        <div className={styles.carouselWrapper} >
            {images.map((image: any, index: any) => (
                <div
                    className={styles.imageWrapper} 
                    key={index}
                >
                    <Image
                        src={image.image}
                        alt={image.id}
                        className={styles.image}
                    />
                    <div
                        className={styles.imageTextContainer}
                    >
                        <p className={styles.imageTextTitle}>{image.title}</p>
                        <p className={styles.imageTextDescription}>{image.description}</p>
                        <p className={styles.imageText}>{image.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Path: src/components/carousel.tsx