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
            window.history.replaceState(null, '', '#' + sectionId)
            // smooth scroll so that the section element is at the top of the page
            section.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
