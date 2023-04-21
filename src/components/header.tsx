import headerimage from '@/data/educator-guide/header.png'
// import styles from '@/styles/Educator'
import Image from 'next/image'

export const Header = () => {
    return (
        <>
        <Image 
            src={headerimage}
            alt='header'
            // className={styles.header}
        >
        </Image>
    </>
    )
}