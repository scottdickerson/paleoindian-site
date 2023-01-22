import {
  PropsWithChildren,
  ReactNode,
  useContext,
  useEffect,
  useRef,
} from "react";
import styles from "../styles/StorySection.module.scss";
import * as DOMPurify from "dompurify";
import { StoryPageContext } from "./story-page";

// nextjs section html component
export interface StorySectionProps {
  /* unique id used to link from the TOC */
  id: string;
  /* all of these properties support HTML being passed within the string */
  title: string;
  summary: string;
  description: string;
  details: string;
}

export const StorySection = ({
  id,
  title,
  summary,
  description,
  children,
  details,
}: PropsWithChildren<StorySectionProps>) => {
  const { setHighlightedSection } = useContext(StoryPageContext) || {};
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef?.current) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && setHighlightedSection) {
          console.log("section intersecting", id, entry);
          setHighlightedSection(id);
        }
      });
      observer.observe(sectionRef.current);
    }
  }, [id, setHighlightedSection]);

  return (
    <section className={styles.section} id={id} ref={sectionRef}>
      <h2
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <h3
        className={styles.summary}
        dangerouslySetInnerHTML={{ __html: summary }}
      />
      <div
        className={styles.description}
        dangerouslySetInnerHTML={{ __html: description }}
      />
      {children}
      <div
        className={styles.details}
        dangerouslySetInnerHTML={{ __html: details }}
      />
    </section>
  );
};
