import { useContext } from "react";
import { StorySectionProps } from "./story-section";
import styles from "../styles/TocScrollable.module.scss";
import { StoryPageContext } from "./story-page";
import classNames from "classnames";

export const TocScrollable = ({
  storySections,
}: {
  storySections: StorySectionProps[];
}) => {
  const { highlightedSection, setHighlightedSection } =
    useContext(StoryPageContext) || {};

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (section.id === storySections[0].id) {
        //  top story should scroll to top of page so we show the header too
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        section.scrollIntoView({ behavior: "smooth" });
      }
      // I don't know WHY I have to do this, but sometimes the section doesn't get highlighted by the intersection observer
      if (setHighlightedSection) {
        setHighlightedSection(sectionId);
      }
    }
  };

  return (
    <div className={styles.toccontainer}>
      <nav>
        <ul className={styles.toc}>
          {storySections.map((section) => (
            <li key={section.id}>
              <a
                className={classNames(
                  { [styles.highlighted]: highlightedSection === section.id },
                  styles.tocitem
                )}
                onClick={() => handleSectionClick(section.id)}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
