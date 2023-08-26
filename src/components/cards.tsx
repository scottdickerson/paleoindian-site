import React, { useRef, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import styles from '@/styles/Cards.module.scss'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import leftArrow from '@/components/images/cards/LeftArrow.svg'
import rightArrow from '@/components/images/cards/RightArrow.svg'
import { useMediaQuery } from 'react-responsive'

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
    cardBack: StaticImageData
}

const Cards = ({ cards, pdf, cardBack }: CardProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
    const [current, setCurrent] = useState(2)
    const length = cards.length
    const cardContainerRef = useRef<HTMLDivElement>(null)

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        cardContainerRef?.current?.style.setProperty(
            '--flipDirection',
            '-180deg'
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
            <div className={styles.container}>
                <button
                    onClick={nextSlide}
                    className={classnames(styles.arrow, styles.leftarrow)}
                >
                    <Image
                        id="leftArrow"
                        src={leftArrow}
                        alt="Left Arrow"
                        height={isMobile ? 36 : 48}
                        width={isMobile ? 36 : 48}
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
                        height={isMobile ? 36 : 48}
                        width={isMobile ? 36 : 48}
                    />
                </button>
                <div className={styles.cardsContainer}>
                    {visibleCards.map((card, index) => {
                        return (
                            <div
                                ref={index === 2 ? cardContainerRef : null}
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
                <span className={styles.text}>{cards[current].caption}</span>
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
                        if (Math.abs(info.offset.x) > 100) {
                            if (info.offset.x > 0) {
                                prevSlide()
                            } else {
                                nextSlide()
                            }
                        }
                    }}
                    onClick={() => nextSlide()}
                ></motion.div>
            </div>
        </>
    )
}

export default Cards
