import { useContext } from 'react'
import { StorySectionProps } from './story-section'
import styles from '../styles/TocScrollable.module.scss'
import { StoryPageContext } from './story-page'
import classNames from 'classnames'
import tocBackground from './images/toc/tocBackground.svg'
import Image from 'next/image'
import arrowPicture from './images/toc/tocArrow.svg'

export interface TocScrollableProps {
    storySections: Pick<StorySectionProps, 'id' | 'title'>[]
}

export const TocScrollable = ({ storySections }: TocScrollableProps) => {
    const { highlightedSection, setHighlightedSection } =
        useContext(StoryPageContext) || {}

    const handleSectionClick = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            window.location.hash = sectionId
            // smooth scroll so that the section element is at the top of the page
            // section.scrollIntoView({ behavior: 'smooth', block: 'start' })
            setHighlightedSection?.(sectionId)
        }
    }

    return (
        <div className={styles.toccontainer}>
            <Image
                src={tocBackground}
                alt="Table of Contents Background"
                aria-hidden
                fill
                className={styles.tocBackgroundImage}
                priority
            ></Image>
            <nav className={styles.tocwrapper} aria-label="Table of Contents">
                <ol className={styles.toc}>
                    {storySections.map((section) => (
                        <li key={section.id} className={styles.tocListItem}>
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
                                <div className={styles.tocText}>
                                    {section.title}
                                </div>
                                <div
                                    className={
                                        highlightedSection === section.id
                                            ? styles.highlightedBackground
                                            : undefined
                                    }
                                ></div>
                            </a>
                        </li>
                    ))}
                </ol>
                <a
                    className={styles.arrowToTop}
                    onClick={() => {
                        // reset hash to retrigger scrolling tracking
                        window.location.hash = ''
                        window.scrollTo({ top: 0, behavior: 'auto' })
                        setHighlightedSection?.(storySections[0].id)
                    }}
                >
                    <Image
                        src={arrowPicture}
                        alt="Arrowhead pointing upwards"
                    />
                </a>
            </nav>
        </div>
    )
}
