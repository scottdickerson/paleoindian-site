import { Carousel } from 'react-responsive-carousel';
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
        <div
        className={styles.carouselWrapper}
        >
        <Carousel
        className={styles.carousel}
        showThumbs={false}
        autoPlay // remove this later
        showArrows
        infiniteLoop
        >
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
                        <p> Hello World! </p>
                    </div>
                </div>
            ))}
        </Carousel>
        </div>
    );
}

// Path: src/components/carousel.tsx