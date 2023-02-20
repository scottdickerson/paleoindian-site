import { StoryPage } from "@/components/story-page";
import { StorySection } from "@/components/story-section";
import { TocScrollable } from "@/components/toc-scrollable";
import Image from "next/image";
import Head from "next/head";

const ORIGIN_STORY_SECTIONS = [
  {
    title: "Shared Beginnings",
    id: "shared-beginnings",
    summary: "Ancient people went on an EPIC road trip.",
    description:
      "<p>Humans started out in Africa. About 70,000 years ago, groups of people began to slowly move around the planet, making incredible journeys into new lands.</p>",
    interactive: (
      <Image
        src="/images/origin-stories/image1.svg"
        alt="Group of Paleoindians"
        fill
      />
    ),
    details:
      "<p>We don&apos;t know exactly how or when but eventually, people came to North America and the land we think of as Texas.</p> <p>This is what we know so far.</p>",
  },
  {
    title: "Sacred Stories",
    id: "sacred-stories",
    summary: "Some of the best stories start &ldquo;a long time ago...&rdquo;",
    description:
      "<p>The Tribal communities of Texas have many traditional stories about their beginnings or origins. These stories often show a deep connection to special places on the landscape.</p> <p>Watch the video below to learn more. </p>",
    details:
      "<p>This exhibit is focused on Paleoindians and the ancestors of Texas’ Native Peoples, but every culture around the world tells their own stories about the beginning of the world and people’s place within it. These stories may express ancient peoples’ experiences, passed on from generation to generation. They may serve to teach life lessons. Origin stories help us make sense of our world and who we are.</p>",
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
          <StorySection key={section.id} {...section}>
            {section.interactive}
          </StorySection>
        ))}
        <TocScrollable storySections={ORIGIN_STORY_SECTIONS}></TocScrollable>
      </StoryPage>
    </>
  );
};

export default OriginStories;
