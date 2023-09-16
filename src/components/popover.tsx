import React, { ReactNode, PropsWithChildren } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import styles from '@/styles/Popover.module.scss'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import classNames from 'classnames'
import { encodeSansCondensed } from '@/utils/fonts'

export const PopoverTrigger = (props: PopoverPrimitive.PopoverTriggerProps) => (
    <PopoverPrimitive.Trigger {...props} className={styles.popoverTrigger} />
)

export const PopoverContent = React.forwardRef<
    HTMLDivElement,
    PropsWithChildren<PopoverPrimitive.PopoverContentProps>
>(({ children, ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            className={classNames(
                styles.popoverContent,
                encodeSansCondensed.className
            )}
            side="top"
            {...props}
            ref={forwardedRef}
        >
            {children}
            <PopoverPrimitive.Arrow
                className={styles.popoverArrow}
                width={16}
                height={7}
            />
        </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
))

export interface PopoverProps {
    trigger: ReactNode
    content: ReactNode
    width?: number
}

export const Popover = ({ trigger, content, width = 232 }: PopoverProps) => {
    const [open, setOpen] = React.useState(false)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, 'change', () => {
        setOpen(false)
    })
    return (
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
            {' '}
            <PopoverTrigger
                onClick={() => setOpen(true)}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
            >
                {trigger}
            </PopoverTrigger>
            <PopoverContent
                style={{ maxWidth: `${width}px`, zIndex: 100 }}
                side="top"
            >
                {content}
            </PopoverContent>{' '}
        </PopoverPrimitive.Root>
    )
}
