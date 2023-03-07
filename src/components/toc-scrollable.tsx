import { useContext } from 'react'
import { StorySectionProps } from './story-section'
import styles from '../styles/TocScrollable.module.scss'
import { StoryPageContext } from './story-page'
import classNames from 'classnames'
import tocBackground from './images/toc/tocBackground.svg'
import Image from 'next/image'
import arrowPicture from './images/toc/tocArrow.svg'

export const TocScrollable = ({
    storySections,
}: {
    storySections: StorySectionProps[]
}) => {
    const { highlightedSection } = useContext(StoryPageContext) || {}

    const handleSectionClick = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            window.location.hash = sectionId
            if (section.id === storySections[0].id) {
                //  top story should scroll to top of page so we show the header too
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        }
    }

    return (
        <div className={styles.toccontainer}>
            <Image
                src={tocBackground}
                alt=""
                fill
                className={styles.tocBackgroundImage}
                priority
            ></Image>
            <nav className={styles.tocwrapper} aria-label="Table of Contents">
                <ul className={styles.toc}>
                    {storySections.map((section) => (
                        <ol key={section.id}>
                            <a
                                className={classNames(
                                    {
                                        [styles.highlighted]:
                                            highlightedSection === section.id,
                                    },
                                    styles.tocitem
                                )}
                                href={`#${section.id}`} // this is for accessibility
                                onClick={() => handleSectionClick(section.id)}
                            >
                                <span>{section.title}</span>
                            </a>
                        </ol>
                    ))}
                </ul>
                <a
                    className={styles.arrowToTop}
                    onClick={() => handleSectionClick(storySections[0].id)}
                >
                    <Image src={arrowPicture} alt="Back to top" />
                </a>
            </nav>
        </div>
    )
}
