import React, { ReactNode, PropsWithChildren } from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import styles from '@/styles/Popover.module.scss'

export const PopoverTrigger = (props: PopoverPrimitive.PopoverTriggerProps) => (
    <PopoverPrimitive.Trigger {...props} className={styles.popoverTrigger} />
)

export const PopoverContent = React.forwardRef<
    HTMLDivElement,
    PropsWithChildren<PopoverPrimitive.PopoverContentProps>
>(({ children, ...props }, forwardedRef) => (
    <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
            className={styles.popoverContent}
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

export const Popover = ({ trigger, content }: PopoverProps) => {
    return (
        <PopoverPrimitive.Root>
            <PopoverTrigger>{trigger}</PopoverTrigger>
            <PopoverContent>{content}</PopoverContent>
        </PopoverPrimitive.Root>
    )
}
