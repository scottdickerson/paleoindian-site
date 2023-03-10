import { StoryPage } from '@/components/story-page'
import { StorySection } from '@/components/story-section'
import { TocScrollable } from '@/components/toc-scrollable'
import Head from 'next/head'
import { Video } from '@/components/video'
import { Slider } from '@/components/slider'
import sharedBeginnings from './origin-stories/sharedBeginnings.svg'
import clovisMap1 from './origin-stories/Clovis Map 1_Clovis.svg'
import clovisMap2 from './origin-stories/Clovis Map 2_Pre-Clovis.svg'
import { ResponsiveImage } from '@/components/responsive-image'
import { Tooltip } from '@/components/tooltip'
import { ClovisPointTooltip } from './origin-stories/components/clovis-point-tooltip'
import { TooltipContentWithImage } from '@/components/tooltip-content-with-image'
import stemmedSpearFPO from './origin-stories/Stemmed Spear FPO.png'

const TOOLTIP_CONTENT = {
    ancestors: 'A person related to you that lived a long time ago.',
}

const ORIGIN_STORY_SECTIONS = [
    {
        title: 'Shared Beginnings',
        id: 'shared-beginnings',
        summary: 'Ancient people went on an EPIC road trip.',
        description:
            '<p>Humans started out in Africa. About 70,000 years ago, groups of people began to slowly move around the planet, making incredible journeys into new lands.</p>',
        interactive: (
            <ResponsiveImage
                src={sharedBeginnings}
                alt="Group of Paleoindians"
                priority
            />
        ),
        details: (
            <>
                <p>
                    We don&apos;t know exactly how or when but eventually,
                    people came to North America and the land we think of as
                    Texas.
                </p>
                <p>This is what we know so far.</p>
            </>
        ),
    },
    {
        title: 'Sacred Stories',
        id: 'sacred-stories',
        summary:
            'Some of the best stories start &ldquo;a long time ago...&rdquo;',
        description:
            '<p>The Tribal communities of Texas have many traditional stories about their beginnings or origins. These stories often show a deep connection to special places on the landscape.</p> <p>Watch the video below to learn more. </p>',
        interactive: (
            <Video src="../videos/origin-stories/1.2_fullanimatic_02.mp4" />
        ),
        details: (
            <>
                <p>
                    This exhibit is focused on Paleoindians and the
                    <Tooltip
                        trigger="ancestors"
                        content={TOOLTIP_CONTENT.ancestors}
                    />
                    of Texas??? Native Peoples, but every culture around the world
                    tells their own stories about the beginning of the world and
                    people???s place within it. These stories may express ancient
                    peoples&apos; experiences, passed on from generation to
                    generation. They may serve to teach life lessons.
                    <Tooltip
                        trigger="Origin"
                        content="The point or place where something begins."
                    />
                    stories help us make sense of our world and who we are.
                </p>
            </>
        ),
    },
    {
        title: 'When did people get here?',
        id: 'when-did-people-get-here',
        summary:
            'We&apos;re not 100% sure, but a lot longer ago than scientists once thought!',
        description:
            '<p>Archeologists have found many places with ancient campfires, tools, and evidence from people who lived about 13,000 years ago. They thought these were campsites of the first Americans. Then new discoveries of even older places challenged this idea.</p><p> Compare the maps below.</p> ',
        interactive: (
            <Slider
                img1={{
                    src: clovisMap1,
                    alt: 'Original Clovis sites shown on a map of the United States',
                    caption:
                        'Places where people using Clovis tools lived about 13,000 years ago.',
                }}
                img2={{
                    src: clovisMap2,
                    alt: 'Pre-Clovis sites shown on a map of the United States',
                    caption:
                        'Places with some evidence of people living before 13,000 years ago.',
                }}
            />
        ),
        details: (
            <>
                <p>
                    Archeologists try to answer questions by
                    <Tooltip
                        trigger="interpreting"
                        content="Decide and explain what something means."
                    />
                    the evidence they find. Around 1940, archeologists found
                    evidence that people who made distinctive
                    <Tooltip
                        trigger="Clovis"
                        content={<ClovisPointTooltip />}
                    />
                    tools, lived across America about 13,000 years ago. For the
                    next 60 years, most scientists agreed with the
                    interpretation that the people who used Clovis tools were
                    the first people to live in the land that we think of as
                    America.
                </p>
                <p>
                    In more recent years, archeologists have found a handful of
                    sites with new evidence of even earlier peoples. At first,
                    not all scientists accepted these sites as proof. But, then
                    archeologists in Texas found stone tools and other objects
                    made by people who lived over 16,000 years ago.
                </p>
                <p>
                    Now, most scientists agree that we just don&apos;t know for
                    sure when people first arrived in the Americas. Learning
                    more about this question is a job for future researchers
                    &ndash; maybe even you!
                </p>
            </>
        ),
    },
    {
        title: 'How did People get here?',
        id: 'how-did-people-get-here',
        summary: `??\\_(???)_/?? Unclear, but we&apos;re excited to find out!`,
        description: `<p>Recent discoveries in Texas tell us that people were living here at least 16,000 years ago. But <strong>how</strong> did the very first people arrive? Well, it&apos;s complicated.</p>
      <p>Watch this video to explore some possibilities. </p>`,
        interactive: (
            <Video src="../videos/origin-stories/1.4_animatic_v03.mp4" />
        ),
        details: (
            <>
                <p>
                    For a long time, most textbooks taught that people walked
                    across the
                    <Tooltip
                        trigger="Bering land bridge"
                        content="A very narrow strip of land that connected Asia to North American long ago.  It connected what is now Russia to Alaska."
                        width={286}
                    />
                    through an ice-free corridor, and into North America around
                    the end of the last
                    <Tooltip
                        trigger="ice age"
                        content="Long periods lasting millions of years when the Earth has cold temperatures that lead to ice sheets and glaciers covering large areas."
                        width={306}
                    />
                    . Some scientists, Native American scholars, and Tribal
                    communities have long challenged the idea that this was the
                    ONLY path that people took to the Americas. Today, a
                    complicated picture is emerging of multiple
                    <Tooltip
                        trigger="migrations"
                        content="Long journeys taken by animals or humans moving from one home to another."
                        width={244}
                    />
                    of people at different times in the past.
                </p>
                <p>
                    For now, we don&apos;t know for sure how people first
                    migrated to the land we think of as North America. Keeping
                    an open mind is an important part of learning about the
                    past.
                </p>
            </>
        ),
    },
    {
        title: 'A Texas-sized discovery',
        id: 'a-texas-sized-discovery',
        summary: `Science is always changing??? and that&apos;s a good thing! `,
        description: `<p>In Texas, archeologists made a discovery that some people thought was impossible. Researchers used scientific tests and critical thinking to rewrite Texas&apos; timeline. </p>
    <p>Watch the video to find out how.</p>`,
        interactive: <Video src="../videos/austin-tx.mp4" />,
        details: (
            <>
                <p>
                    Remember
                    <Tooltip
                        trigger="Clovis"
                        content={<ClovisPointTooltip />}
                    />
                    tools? When archeologists at the
                    <Tooltip
                        trigger="Gault and Friedkin sites"
                        content="These two archeological sites in Bell County Texas are very close together and probably represent one large area where people lived as long as 16,000 years ago. "
                        width={368}
                    />
                    in Texas discovered
                    <Tooltip
                        trigger="tools"
                        content={
                            <TooltipContentWithImage
                                src={stemmedSpearFPO}
                                alt="Spear point"
                                title="Stemmed Point"
                                description="Friedkin Site, Texas"
                            />
                        }
                    />
                    that were older than those, they used several different
                    methods to demonstrate to the scientific community that they
                    found something important.
                </p>
                <p>
                    Through both
                    <Tooltip
                        trigger="absolute dating"
                        content="Methods to determine specific age of an object (within a time range)."
                        width={220}
                    />
                    and
                    <Tooltip
                        trigger="relative dating"
                        content="Methods to figure out if one artifact is older or younger than another artifact."
                        width={242}
                    />
                    techniques, scientists were able to demonstrate that their
                    new discovery would change what we know about when people
                    arrived in North America. Or at least, what we know so far.
                </p>
            </>
        ),
    },
    {
        title: 'Learning more',
        id: 'learning-more',
        summary: `There&apos;s always more to learn about the folks who came before us `,
        description: `<p>With each new discovery, researchers can paint a more detailed picture of the first people who called this area home. </p>
    <p>Hear from young researchers who study Paleoindians.</p>`,
        interactive: 'TBD',
        details: (
            <>
                <p>
                    Most professional archeologists focus on one or two
                    specialties within the larger study of the past. These
                    specialists spend their careers focused on learning as much
                    as they can about their piece of the puzzle. Then, they
                    write articles, give talks, and teach classes to share what
                    they&apos;ve learned. They can also collaborate with &ndash;
                    and learn from &ndash; Native American communities who ask
                    that their{' '}
                    <Tooltip
                        trigger="ancestors"
                        content={TOOLTIP_CONTENT.ancestors}
                    />
                    , cultures, and spiritual beliefs are respected and
                    included.
                </p>
            </>
        ),
    },
]

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
                <TocScrollable
                    storySections={ORIGIN_STORY_SECTIONS}
                ></TocScrollable>
            </StoryPage>
        </>
    )
}

export default OriginStories
