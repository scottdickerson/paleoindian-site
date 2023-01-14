import Link from "next/link";
import styles from "../styles/StoryNavigation.module.scss";
import classNames from "classnames";

// navigation header react component
// constant for each page
export const STORY_PAGES = {
  ["/"]: { title: "Home" },
  ["origin-stories"]: { title: "Origin Stories" },
  ["daily-life"]: { title: "Daily Life" },
  ["ice-age-texas"]: { title: "Ice-Age Texas" },
} as const;

interface StoryNavigationProps {
  selectedPage: keyof typeof STORY_PAGES;
}

export const StoryNavigation = ({ selectedPage }: StoryNavigationProps) => {
  return (
    <nav className={styles.navbar}>
      <ul>
        {Object.entries(STORY_PAGES).map(([key, value]) => {
          const isSelected = selectedPage === key;
          return (
            <li
              key={key}
              className={classNames(styles.navitem, {
                [styles.selected]: isSelected,
              })}
            >
              <Link href={`/${key}`.replace("//", "/")}>{value.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
