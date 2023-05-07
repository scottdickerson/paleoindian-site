import styles from '@/styles/PartnerLogos.module.scss'
import tempPhoto from '@/components/images/partner-logos/temp@2x.png'
import Image from 'next/image'
import classNames from 'classnames'

export const PartnerLogos = ({ className }: { className?: string }) => (
    <div className={classNames(styles.partnerLogos, className)}>
        <h2>Partners</h2>
        <div className={styles.partnerLogosWrapper}>
            <Image src={tempPhoto} alt="temp photo" />
            <Image src={tempPhoto} alt="temp photo" />
            <Image src={tempPhoto} alt="temp photo" />
            <Image src={tempPhoto} alt="temp photo" />
        </div>
    </div>
)
