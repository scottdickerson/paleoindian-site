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
                        <p className={styles.imageTextTitle}> Title </p>
                        <p className={styles.imageTextDescription}> 12,000 - 13,000 BP, Gault site knife Bell county TX</p>
                        <p className={styles.imageText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus accumsan nulla, vel imperdiet leo venenatis a. Nulla in mi et ipsum molestie hendrerit. Morbi quis porta lectus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur eu metus dictum, vestibulum tortor non, convallis felis. Quisque pharetra ante mauris, non mollis diam luctus sed. In dictum leo eu ante aliquet, vel facilisis dui semper. Proin magna urna, auctor ut augue sed, maximus pulvinar tellus. Aenean eget purus vel turpis bibendum elementum non non felis. Aenean lobortis nec erat non commodo. Vivamus scelerisque dignissim suscipit. Sed mattis arcu sed felis pharetra egestas. </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Path: src/components/carousel.tsx