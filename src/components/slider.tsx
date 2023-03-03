import { useState } from 'react'
import { ReactCompareSlider, styleFitContainer } from 'react-compare-slider'
import styles from '@/styles/Slider.module.scss'
import Image from 'next/image'
import sliderHandle from './images/slider/sliderHandle.svg'
import { FC } from 'react'

interface SliderImage {
    src: string
    alt: string
    caption: string
}

interface SliderProps {
    img1: SliderImage
    img2: SliderImage
    percentageToChangeCaption?: number
}

export const Slider: FC<SliderProps> = ({
    img1: { src: img1Src, alt: img1Alt, caption: img1Caption },
    img2: { src: img2Src, alt: img2Alt, caption: img2Caption },
    percentageToChangeCaption = 15,
}) => {
    const [caption, setCaption] = useState(img1Caption)

    return (
        <div className={styles.sliderContainer}>
            <ReactCompareSlider
                className={styles.slider}
                itemOne={
                    <Image
                        style={{
                            ...styleFitContainer({
                                objectFit: 'contain',
                                objectPosition: 'center',
                            }),
                        }}
                        src={img2Src}
                        alt={img2Alt}
                    />
                }
                itemTwo={
                    <Image
                        style={{
                            ...styleFitContainer({
                                objectFit: 'contain',
                                objectPosition: 'center',
                            }),
                        }}
                        src={img1Src}
                        alt={img1Alt}
                    />
                }
                onlyHandleDraggable
                position={0}
                handle={
                    <Image
                        alt="slider"
                        src={sliderHandle}
                        className={styles.sliderHandle}
                        style={{
                            ...styleFitContainer({
                                objectFit: 'contain',
                                objectPosition: 'center',
                            }),
                        }}
                    />
                }
                onPositionChange={(position) => {
                    if (position > percentageToChangeCaption) {
                        setCaption(img2Caption)
                    } else {
                        setCaption(img1Caption)
                    }
                }}
            />
            <caption>
                <span className={styles.sliderCaption}>{caption}</span>
            </caption>
        </div>
    )
}
