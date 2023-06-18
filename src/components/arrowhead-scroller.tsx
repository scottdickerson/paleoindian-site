import Image from 'next/image'
import arrowHeadPointer from './images/arrowhead/Stone Pointer.svg'
import styles from '@/styles/Arrowhead.module.scss'
import { RefObject, createContext, useContext, useEffect, useRef } from 'react'
import { useMediaQuery } from 'react-responsive'

export interface ArrowheadContextValue {
    isVisible: boolean
    setIsVisible: (isVisible: boolean) => void
}
// context keeping track of whether a arrow is visible or not
// used to hide the arrow after scrolling
export const ArrowheadContext = createContext<ArrowheadContextValue>({
    isVisible: true,
    setIsVisible: () => {},
})

export const ArrowheadScroller = ({
    scrollTarget,
}: {
    scrollTarget: RefObject<HTMLElement>
}) => {
    const { isVisible, setIsVisible } = useContext(ArrowheadContext) ?? {
        isVisible: true,
        setIsVisible: () => {},
    }
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
            setIsVisible(false)
        }, 200)
    }
    return isVisible ? (
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
