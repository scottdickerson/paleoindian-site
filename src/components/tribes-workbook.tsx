import { useMediaQuery } from 'react-responsive'
import sharedTraditions from '@/data/txdot-and-tribes/Shared Traditions@2x.png'
import styles from '@/styles/TribesWorkbook.module.scss'
import captionedImageStyles from '@/styles/CaptionedImage.module.scss'
import { ResponsiveImage } from './responsive-image'
import classNames from 'classnames'

const WorkbookCredit = () => (
    <span
        className={classNames(
            captionedImageStyles.caption,
            captionedImageStyles.photoCredit
        )}
    >
        Courtesy of Texas Department of Transportation
    </span>
)

const WorkbookPhoto = () => (
    <ResponsiveImage
        src={sharedTraditions}
        alt="Texas and Tribes text over mountains"
        containerProps={{ className: styles.photo }}
    />
)

const WorkbookExplanation = () => (
    <span className={captionedImageStyles.caption}>
        Working together TxDOT and Tribal representatives created this
        educational booklet. You can download a copy here.
    </span>
)

export const TexasAndTribesSharedTraditionsWorkbook = ({
    className,
}: {
    className?: string
}) => {
    const isTablet = useMediaQuery({
        query: '(max-width: 1024px) and (min-width: 769px)',
    })

    return (
        <a
            href="/pdfs/Texas And Tribes Workbook.pdf"
            download
            className={className}
        >
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    {isTablet ? <WorkbookExplanation /> : <WorkbookPhoto />}
                </div>
                <div className={styles.rightSide}>
                    {isTablet ? <WorkbookPhoto /> : <WorkbookExplanation />}
                    <WorkbookCredit />
                </div>
            </div>
        </a>
    )
}
