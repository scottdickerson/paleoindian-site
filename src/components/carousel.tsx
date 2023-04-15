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
        <Carousel
        className={styles.carousel}
        showThumbs={false}
        autoPlay
        showArrows
        infiniteLoop
        >
            {images.map((image: any, index: any) => (
                <div key={index}>
                    <Image
                        src={image.image}
                        alt={image.id}
                    />
                </div>
            ))}
        </Carousel>
    );
}

// Path: src/components/carousel.tsx