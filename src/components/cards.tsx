import React, { useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/Cards.module.scss'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import cardBack from '@/components/images/cards/Card Back - Digital.png'
import leftArrow from '@/components/images/cards/LeftArrow.svg'
import rightArrow from '@/components/images/cards/RightArrow.svg'

export const calculateVisibleCardArray = (
    cardData: any[],
    selectedIndex: number
): any[] => {
    const leftMostCard = selectedIndex - 2
    const rightMostCard = selectedIndex + 2
    const visibleCardArray = []
    for (let i = leftMostCard; i <= rightMostCard; i++) {
        visibleCardArray.push(cardData.at(i % cardData.length))
    }
    return visibleCardArray
}

interface CardProps {
    cards: { id: string; image: StaticImageData; caption: string }[]
    pdf: string
}

const Cards = ({ cards, pdf }: CardProps) => {
    const [current, setCurrent] = useState(2)
    const length = cards.length
    const cardContainerRef = useRef<HTMLDivElement>(null)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        cardContainerRef?.current?.style.setProperty(
            '--flipDirection',
            '180deg'
        )
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        cardContainerRef?.current?.style.setProperty(
            '--flipDirection',
            '180deg'
        )
    }

    if (!Array.isArray(cards) || cards.length <= 0) {
        return null
    }

    const visibleCards = calculateVisibleCardArray(cards, current)

    return (
        <>
            <div className={styles.container} ref={cardContainerRef}>
                <button
                    onClick={nextSlide}
                    className={classnames(styles.arrow, styles.leftarrow)}
                >
                    <Image
                        id="leftArrow"
                        src={leftArrow}
                        alt="Left Arrow"
                        height={48}
                        width={48}
                    />
                </button>
                <button
                    className={classnames(styles.arrow, styles.rightarrow)}
                    onClick={prevSlide}
                >
                    <Image
                        id="rightArrow"
                        src={rightArrow}
                        alt="Right Arrow"
                        height={48}
                        width={48}
                    />
                </button>
                <div className={styles.cardsContainer}>
                    {visibleCards.map((card, index) => {
                        return (
                            <div
                                key={`Card-${card.id}`}
                                id={`Card-${card.id}`}
                                className={classnames(
                                    styles.card,
                                    {
                                        [styles.flipCard]: index === 2,
                                    },
                                    styles[`card${index}`]
                                )}
                            >
                                <Image
                                    src={cardBack}
                                    alt={`Card ${index}`}
                                    width="352"
                                    height="493"
                                    className={styles.cardBack}
                                />
                                <Image
                                    src={card.image}
                                    alt={`Card ${index}`}
                                    width="352"
                                    height="493"
                                    className={styles.cardFront}
                                />
                            </div>
                        )
                    })}
                </div>
                <div id="text" className={styles.background}></div>
                <span className={styles.text}>
                    {visibleCards.at(current % 5).caption}
                </span>
                <a className={styles.downloadButton} href={pdf} download>
                    <span className={styles.playAlong}>Play along!</span> Click
                    here to download printable cards and play the
                    hunter-gatherer game.
                </a>
                {/* This div is to handle the swipe animation */}
                <motion.div
                    className={styles.swipeContainer}
                    drag="x"
                    dragMomentum={false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0}
                    onDragEnd={(event, info) => {
                        if (info.offset.x > 0) {
                            prevSlide()
                        } else {
                            nextSlide()
                        }
                    }}
                ></motion.div>
            </div>
        </>
    )
}

export default Cards
