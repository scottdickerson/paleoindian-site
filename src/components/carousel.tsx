import React from 'react'
import { useRef } from 'react'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import styles from '../styles/Carousel.module.scss'
import { useDraggable } from 'react-use-draggable-scroll'
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
    const ref =
        useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
    const { events } = useDraggable(ref) // Now we pass the reference to the useDraggable hook:

    const nextSlide = () => {
        const target = ref.current.scrollLeft - 700
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

        requestAnimationFrame(updateScroll)
    }

    const prevSlide = () => {
        const target = ref.current.scrollLeft + 700
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

        requestAnimationFrame(updateScroll)
    }

    return (
        <div
            className={styles.carouselWrapper}
            {...events}
            ref={ref} // add reference and events to the wrapping div
        >
            <button
                onClick={nextSlide}
                className={classNames(styles.arrow, styles.leftArrow)}
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
                className={classNames(styles.arrow, styles.rightArrow)}
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

            {images.map((image) => (
                <div className={styles.imageWrapper} key={image.id}>
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
