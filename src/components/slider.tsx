import { ReactNode, useState } from 'react'
import { ReactCompareSlider, styleFitContainer } from 'react-compare-slider'
import styles from '@/styles/Slider.module.scss'
import Image, { StaticImageData } from 'next/image'
import sliderHandle from './images/slider/sliderHandle.svg'
import sliderHandleMobile from './images/slider/sliderHandleMobile.svg'
import { useMediaQuery } from 'react-responsive'

import { FC } from 'react'
import classNames from 'classnames'

interface SliderImage {
    src: StaticImageData
    alt: string
    caption: ReactNode
}

interface SliderProps {
    img1: SliderImage
    img2: SliderImage
    percentageToChangeCaption?: number
}

export const Slider: FC<SliderProps> = ({
    img1: { src: img1Src, alt: img1Alt, caption: img1Caption },
    img2: { src: img2Src, alt: img2Alt, caption: img2Caption },
    percentageToChangeCaption = 5,
}) => {
    const [caption, setCaption] = useState(img1Caption)
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const determineCorrectImage = () => {
        if (isMobile) {
            return sliderHandleMobile
        } else {
            return sliderHandle
        }
    }

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
                        alt="Slider handle"
                        src={determineCorrectImage()}
                        className={styles.sliderHandle}
                        style={{
                            ...styleFitContainer({
                                objectFit: 'contain',
                                objectPosition: 'center',
                                width: 'unset',
                                maxWidth: 'unset',
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
            <div className={styles.captionContainer}>
                {img1Caption && (
                    <span
                        className={classNames(styles.sliderCaption, {
                            [styles.visible]: caption === img1Caption,
                        })}
                    >
                        {img1Caption}
                    </span>
                )}
                {img2Caption && (
                    <span
                        className={classNames(styles.sliderCaption, {
                            [styles.visible]: caption === img2Caption,
                        })}
                    >
                        {img2Caption}
                    </span>
                )}
            </div>
        </div>
    )
}
