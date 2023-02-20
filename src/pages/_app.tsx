import {
  STORIES_PATH,
  StoryNavigation,
  StoryNavigationProps,
} from "@/components/story-navigation";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { encodeSansFont } from "@/fonts";

const shouldShowHeader = (pathname: string) => {
  return pathname.includes(STORIES_PATH);
};

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <>
      {shouldShowHeader(pathname) && (
        <header className={encodeSansFont.className}>
          <StoryNavigation
            selectedPage={pathname as StoryNavigationProps["selectedPage"]}
          />
        </header>
      )}
      <main className={encodeSansFont.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
