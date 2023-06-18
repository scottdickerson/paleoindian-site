import Image from 'next/image'
import arrowHeadPointer from './images/arrowhead/Stone Pointer.svg'
import styles from '@/styles/Arrowhead.module.scss'
import { RefObject, useEffect, useRef, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export const ArrowheadScroller = ({
    scrollTarget,
}: {
    scrollTarget: RefObject<HTMLElement>
}) => {
    const [isVisable, setIsVisable] = useState(true)
    const scrollTimer = useRef<ReturnType<typeof setTimeout>>()
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' })

    useEffect(() => {
        window.addEventListener('scroll', handleHideAfterScroll)
        return () => {
            clearTimeout(scrollTimer?.current)
            window.removeEventListener('scroll', handleHideAfterScroll)
        }
    }, [])

    const handleHideAfterScroll = () => {
        // set invisible after scrolling
        scrollTimer.current = setTimeout(() => {
            setIsVisable(false)
        }, 200)
    }
    return isVisable ? (
        <button
            className={styles.arrowHead}
            onClick={() => {
                scrollTarget.current?.scrollIntoView({
                    behavior: 'smooth',
                })
            }}
        >
            <Image
                src={arrowHeadPointer}
                alt="arrowhead"
                width={isMobile ? 16 : 25}
                height={isMobile ? 52 : 82}
            />
        </button>
    ) : null
}
