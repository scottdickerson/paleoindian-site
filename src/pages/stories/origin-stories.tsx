import { StoryPage } from "@/components/story-page";
import { StorySection } from "@/components/story-section";
import { TocScrollable } from "@/components/toc-scrollable";
import { faker } from "@faker-js/faker";
import Head from "next/head";

const multiParagraph = new Array(10)
  .fill(`<p>${faker.lorem.paragraphs(3)}<p/>`)
  .join("");

const ORIGIN_STORY_SECTIONS = [
  {
    title: "Shared Beginnings",
    id: "shared-beginnings",
    summary: "Ancient people went on an EPIC road trip.",
    description: "<p>Humans started out in Africa...</p>",
    details: multiParagraph,
  },
  {
    title: "Sacred Stories",
    id: "sacred-stories",
    summary: "Some of the best stories start &ldquo;a long time ago...&rdquo;",
    description:
      "<p>The Tribal communities of Texas have many traditional stories...</p>",
    details: multiParagraph,
  },
];

const OriginStories = () => {
  return (
    // nextjs title section
    <>
      <Head>
        <title>Texas Paleoindian - Origin Stories</title>
      </Head>

      <StoryPage>
        {ORIGIN_STORY_SECTIONS.map((section) => (
          <StorySection key={section.id} {...section}></StorySection>
        ))}
        <TocScrollable storySections={ORIGIN_STORY_SECTIONS}></TocScrollable>
      </StoryPage>
    </>
  );
};

export default OriginStories;
