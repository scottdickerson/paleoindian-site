import { TooltipContentWithImage } from '@/components/tooltip-content-with-image'
import clovisToolImage from './Clovis Tool FPO.png'

export const ClovisPointTooltip = () => (
    <TooltipContentWithImage
        src={clovisToolImage}
        alt="A picture of a Clovis Point"
        title="Clovis Point"
        description="Unknown Source"
    />
)
