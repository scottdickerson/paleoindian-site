import { useState, useRef, MutableRefObject } from 'react'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/Carousel.module.scss'
// import { useDraggable } from 'react-use-draggable-scroll'
import leftArrow from '@/components/images/cards/LeftArrow.svg'
import rightArrow from '@/components/images/cards/RightArrow.svg'

type Images = {
    id: string
    title: string
    description: string
    text: string
    image: StaticImageData
}

type Props = { images: Images[] }

export function DailyLifeCarousel({ images }: Props) {
    // We will use React useRef hook to reference the wrapping div:
    const ref = useRef<HTMLDivElement>() as MutableRefObject<HTMLInputElement>
    // const { events } = useDraggable(ref) // Now we pass the reference to the useDraggable hook:
    const [currentSlide, setCurrentSlide] = useState(0)

    const calculateImageWidth = () => {
        // get image with id of image id which matches current slide
        const image = images.at(currentSlide)
        if (image) {
            // get image width
            const imageWidth =
                document.getElementById(image.id)?.clientWidth ?? 700
            // return image width
            return imageWidth
        } else {
            return 400
        }
    }

    const nextSlide = () => {
        const target = ref.current.scrollLeft + calculateImageWidth()
        const start = ref.current.scrollLeft
        const easing = (t: number) => t * t
        const duration = 500 // milliseconds
        const startTime = performance.now()

        const updateScroll = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(1, elapsedTime / duration)
            const nextScroll = start + easing(progress) * (target - start)
            ref.current.scrollLeft = nextScroll

            if (progress < 1) {
                requestAnimationFrame(updateScroll)
            }
        }

        setCurrentSlide((currentSlide) => (currentSlide + 1) % images.length)

        requestAnimationFrame(updateScroll)
    }

    const prevSlide = () => {
        const target = ref.current.scrollLeft - calculateImageWidth()
        const start = ref.current.scrollLeft
        const easing = (t: number) => t * t
        const duration = 500 // milliseconds
        const startTime = performance.now()

        const updateScroll = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(1, elapsedTime / duration)
            const nextScroll = start + easing(progress) * (target - start)
            ref.current.scrollLeft = nextScroll

            if (progress < 1) {
                requestAnimationFrame(updateScroll)
            }
        }

        setCurrentSlide((currentSlide) => currentSlide - 1)

        requestAnimationFrame(updateScroll)
    }

    // const calculateImageHeight = () => {
    //     if (ref.current) {
    //         const images = ref.current.children
    //         let maxHeight = 400
    //         for (let i = 0; i < images.length; i++) {
    //             const image = images[i]
    //             console.log('image height', image.clientHeight)
    //             if (image.clientHeight > maxHeight) {
    //                 maxHeight = image.clientHeight
    //             }
    //         }
    //         // forEach((image) => {
    //         //     console.log(image.)
    //         // })
    //         // images.reduce((prev, current) => {
    //         //     const currentImageHeight =
    //         //         document?.getElementById(current.id)?.clientHeight || 0

    //         //     return currentImageHeight > prev ? currentImageHeight : prev
    //         // }, 400)
    //         return maxHeight
    //     }
    // }

    return (
        <div
            className={styles.carouselWrapper}
            // style={{ minHeight: calculateImageHeight() }}
            // {...events}
            ref={ref} // add reference and events to the wrapping div
        >
            <button
                onClick={prevSlide}
                className={classNames(styles.arrow, styles.leftArrow, {
                    [styles.clickable]: currentSlide !== 0,
                })}
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
                className={classNames(styles.arrow, styles.rightArrow, {
                    [styles.clickable]: currentSlide !== images.length - 1,
                })}
                onClick={nextSlide}
            >
                <Image
                    id="rightArrow"
                    src={rightArrow}
                    alt="Right Arrow"
                    height={36}
                    width={36}
                />
            </button>

            {images.map((image) => (
                <div
                    className={styles.imageWrapper}
                    key={image.id}
                    id={image.id}
                >
                    <Image
                        src={image.image}
                        alt={image.id}
                        className={styles.image}
                    />
                    <div className={styles.imageTextContainer}>
                        {/* Title */}
                        <p
                            className={classNames(
                                styles.imageTextTitle,
                                styles.imageText
                            )}
                        >
                            {image.title}
                        </p>
                        {/* Description */}
                        <p
                            className={classNames(
                                styles.imageTextDescription,
                                styles.imageText
                            )}
                        >
                            {image.description}
                        </p>
                        {/* Body */}
                        <p
                            className={classNames(
                                styles.imageText,
                                styles.imageTextBody
                            )}
                        >
                            {image.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}
