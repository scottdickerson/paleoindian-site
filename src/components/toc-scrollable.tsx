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
    const { highlightedSection, setHighlightedSection } =
        useContext(StoryPageContext) || {}

    const handleSectionClick = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            if (section.id === storySections[0].id) {
                //  top story should scroll to top of page so we show the header too
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                section.scrollIntoView({ behavior: 'smooth' })
            }
            // I don't know WHY I have to do this, but sometimes the section doesn't get highlighted by the intersection observer
            if (setHighlightedSection) {
                setHighlightedSection(sectionId)
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
            ></Image>
            <nav className={styles.tocwrapper}>
                <ul className={styles.toc}>
                    {storySections.map((section) => (
                        <li key={section.id}>
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
                        </li>
                    ))}
                    <li className={styles.arrowToTop}>
                        <a
                            onClick={() =>
                                handleSectionClick(storySections[0].id)
                            }
                        >
                            <Image src={arrowPicture} alt="Back to top" />
                        </a>{' '}
                    </li>
                </ul>
            </nav>
        </div>
    )
}
