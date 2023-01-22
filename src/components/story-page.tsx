import { PropsWithChildren, useState, createContext } from "react";
import styles from "../styles/StoryPage.module.scss";

interface StoryPageContextValues {
  highlightedSection: string | null;
  setHighlightedSection: (sectionId: string | null) => void;
}

export const StoryPageContext = createContext<StoryPageContextValues | null>(
  null
);

export const StoryPage = ({ children }: PropsWithChildren) => {
  const [highlightedSection, setHighlightedSection] = useState<string | null>(
    null
  );

  return (
    <StoryPageContext.Provider
      value={{ highlightedSection, setHighlightedSection }}
    >
      <main className={styles.storyPage}>{children}</main>;
    </StoryPageContext.Provider>
  );
};
