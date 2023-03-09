import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { PopoverProps } from './popover'
import styles from '@/styles/Popover.module.scss'

type TooltipProps = PopoverProps

export const Tooltip = ({ trigger, content, width = 232 }: TooltipProps) => (
    <TooltipPrimitive.Root>
        {' '}
        <TooltipPrimitive.Trigger className={styles.popoverTrigger}>
            {trigger}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                className={styles.popoverContent}
                style={{ maxWidth: `${width}px` }}
                side="top"
            >
                {content}
                <TooltipPrimitive.Arrow
                    className={styles.popoverArrow}
                    width={16}
                    height={7}
                />
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>{' '}
    </TooltipPrimitive.Root>
)
