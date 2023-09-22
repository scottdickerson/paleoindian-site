import { StoryPage } from '@/components/story-page'
import { Slider } from '@/components/slider'
import { ResponsiveImage } from '@/components/responsive-image'
import { Tooltip } from '@/components/tooltip'
import { YouTubeVideo } from '@/components/youtube-video'
import { TikTokPlayer } from '@/components/tiktok-video-player'

import { ClovisPointTooltip } from '@/data/origin-stories/tooltips/clovis-point-tooltip'
import { TooltipContentWithImage } from '@/components/tooltip-content-with-image'
import sharedBeginnings from '@/data/origin-stories/images/sharedBeginnings.svg'
import clovisMap1 from '@/data/origin-stories/slider/Clovis Map 1.webp'
import clovisMap2 from '@/data/origin-stories/slider/Clovis Map 2.webp'
import stemmedSpearFPO from '@/data/origin-stories/tooltips/Stemmed Spear FPO.png'
import { TOOLTIP_CONTENT, YOUTUBE_VIDEOS } from '@/data/data'
import { TIKTOK_VIDEOS } from '@/data/origin-stories/tiktokData'
import { TocScrollableProps } from '@/components/toc-scrollable'
import { StorySection } from '@/components/story-section'

const ORIGIN_STORY_SECTIONS: TocScrollableProps['storySections'] = [
    {
        title: 'Shared Beginnings',
        id: 'shared-beginnings',
    },
    {
        title: 'Sacred Stories',
        id: 'sacred-stories',
    },
    {
        title: 'When did people get here?',
        id: 'when-did-people-get-here',
    },
    {
        title: 'How did People get here?',
        id: 'how-did-people-get-here',
    },
    {
        title: 'A Texas-sized discovery',
        id: 'a-texas-sized-discovery',
    },
    {
        title: 'Learning more',
        id: 'learning-more',
    },
]

const OriginStories = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Origin Stories"
            storySections={ORIGIN_STORY_SECTIONS}
        >
            <StorySection
                {...ORIGIN_STORY_SECTIONS[0]}
                summary="Ancient people went on an EPIC road trip"
                description={
                    <>
                        <p>
                            Humans started out in Africa. About 70,000 years
                            ago, groups of people began to slowly move around
                            the planet, making incredible journeys into new
                            lands.
                        </p>
                    </>
                }
                interactive={
                    <ResponsiveImage
                        src={sharedBeginnings}
                        alt="Group of Paleoindians"
                        priority
                    />
                }
                details={
                    <>
                        <p>
                            We don’t know exactly how or when, but eventually,
                            people came to North America and the land we think
                            of as Texas.
                        </p>
                        <p>This is what we know so far.</p>
                    </>
                }
            />
            <StorySection
                {...ORIGIN_STORY_SECTIONS[1]}
                summary="Some of the best stories start &ldquo;a long time ago...&rdquo;"
                description={
                    <>
                        <p>
                            The Tribal communities of Texas have many
                            traditional stories about their beginnings or
                            origins. These stories often show a deep connection
                            to special places on the landscape.
                        </p>{' '}
                        <p>Watch the video below to learn more. </p>
                    </>
                }
                interactive={
                    <YouTubeVideo {...YOUTUBE_VIDEOS['sacred-stories']} />
                }
                details={
                    <p>
                        This exhibit is focused on Paleoindians and the
                        <Tooltip
                            trigger="ancestors"
                            content={TOOLTIP_CONTENT.ancestors}
                        />
                        of Texas’ Native Peoples, but every culture around the
                        world tells their own stories about the beginning of the
                        world and people’s place within it. These stories may
                        express ancient peoples’ experiences, passed on from
                        generation to generation. They may serve to teach life
                        lessons.
                        <Tooltip
                            trigger="Origin"
                            content={TOOLTIP_CONTENT.origin}
                        />
                        stories help us make sense of our world and who we are.
                    </p>
                }
            />
            <StorySection
                {...ORIGIN_STORY_SECTIONS[2]}
                summary="We’re not 100% sure but it’s a lot longer ago than scientists once thought!"
                description={
                    <>
                        <p>
                            Archeologists have found many places with ancient
                            campfires, tools, and evidence from people who lived
                            about 13,000 years ago. They thought these were
                            campsites of the first people in the Americas. Then
                            new discoveries of even older places challenged this
                            idea.
                        </p>
                        <p>
                            {' '}
                            Drag the slider to the right to compare the maps.
                        </p>
                    </>
                }
                interactive={
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
                }
                details={
                    <>
                        <p>
                            Archeologists try to answer questions by
                            <Tooltip
                                trigger="interpreting"
                                content={TOOLTIP_CONTENT.interpreting}
                            />
                            the evidence they find. Around 1940, archeologists
                            found evidence that people who made distinctive
                            <Tooltip
                                trigger="Clovis"
                                content={<ClovisPointTooltip />}
                            />
                            tools lived across America about 13,000 years ago.
                            For the next 60 years, most scientists agreed with
                            the interpretation that the people who used Clovis
                            tools were the first people to live in the land that
                            we think of as America.
                        </p>
                        <p>
                            In more recent years, archeologists have found a
                            handful of sites with new evidence of even earlier
                            peoples. At first, not all scientists accepted these
                            sites as proof. But, then archeologists in Texas
                            found stone tools and other objects made by people
                            who lived over 16,000 years ago.
                        </p>
                        <p>
                            Now, most scientists agree that we just don’t know
                            for sure when people first arrived in the Americas.
                            Learning more about this question is a job for
                            future researchers – maybe even you!
                        </p>
                    </>
                }
            />
            <StorySection
                {...ORIGIN_STORY_SECTIONS[3]}
                summary="¯\\_(ツ)_/¯ Unclear, but we’re excited to find out!"
                description={
                    <>
                        <p>
                            Recent discoveries in Texas tell us that people were
                            living here at least 16,000 years ago. But{' '}
                            <strong>how</strong> did the very first people
                            arrive? Well, it’s complicated.
                        </p>
                        <p>Watch this video to explore some possibilities. </p>
                    </>
                }
                interactive={
                    <YouTubeVideo
                        {...YOUTUBE_VIDEOS['how-did-people-get-here']}
                    />
                }
                details={
                    <>
                        <p>
                            For a long time, most textbooks taught that people
                            walked across the
                            <Tooltip
                                trigger="Bering Land Bridge"
                                content={TOOLTIP_CONTENT.beringLandBridge}
                                width={286}
                            />
                            through an ice-free corridor and into North America
                            around the end of the last
                            <Tooltip
                                trigger="Ice Age."
                                content={TOOLTIP_CONTENT.iceAges}
                                width={306}
                            />
                            Some scientists, Native American scholars, and
                            Tribal communities have long challenged the idea
                            that this was the ONLY path that people took to the
                            Americas. Today, a complicated picture is emerging
                            of multiple
                            <Tooltip
                                trigger="migrations"
                                content={TOOLTIP_CONTENT.migrations}
                                width={244}
                            />
                            of people at different times in the past.
                        </p>
                        <p>
                            For now, we don’t know for sure how people first
                            migrated to the land we think of as North America.
                            Keeping an open mind is an important part of
                            learning about the past.
                        </p>
                    </>
                }
            />
            <StorySection
                {...ORIGIN_STORY_SECTIONS[4]}
                summary="Science is always changing… and that’s a good thing! "
                description={
                    <>
                        <p>
                            In Texas, archeologists made a discovery that some
                            people thought was impossible. Researchers used
                            scientific tests and critical thinking to rewrite
                            Texas’ timeline.{' '}
                        </p>
                        <p>Watch the video to find out how they did it.</p>
                    </>
                }
                interactive={
                    <YouTubeVideo
                        {...YOUTUBE_VIDEOS['texas-sized-discovery']}
                    ></YouTubeVideo>
                }
                details={
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
                                content={TOOLTIP_CONTENT.gaultAndFriedkinSites}
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
                            that were older than those, they used several
                            different methods to demonstrate to the scientific
                            community that they found something important.
                        </p>
                        <p>
                            Through both
                            <Tooltip
                                trigger="absolute dating"
                                content={TOOLTIP_CONTENT.absoluteDating}
                                width={220}
                            />
                            and
                            <Tooltip
                                trigger="relative dating"
                                content={TOOLTIP_CONTENT.relativeDating}
                                width={242}
                            />
                            techniques, scientists were able to demonstrate that
                            their new discovery would change what we know about
                            when people arrived in North America. Or at least,
                            what we know so far.
                        </p>
                    </>
                }
            />
            <StorySection
                {...ORIGIN_STORY_SECTIONS[5]}
                summary="There’s always more to learn about the folks who came before us "
                description={
                    <>
                        <p>
                            With each new discovery, researchers can paint a
                            more detailed picture of the first people who called
                            this area home.{' '}
                        </p>
                        <p>Hear from researchers who study Paleoindians.</p>
                    </>
                }
                interactive={<TikTokPlayer videos={TIKTOK_VIDEOS} />}
                details={
                    <p>
                        Most professional archeologists focus on one or two
                        specialties within the larger study of the past. These
                        specialists spend their careers focused on learning as
                        much as they can about their piece of the puzzle. Then,
                        they write articles, give talks, and teach classes to
                        share what they’ve learned. They can also collaborate
                        with – and learn from – Native American communities who
                        ask that their{' '}
                        <Tooltip
                            trigger="ancestors,"
                            content={TOOLTIP_CONTENT.ancestors}
                        />
                        cultures, and spiritual beliefs are respected and
                        included.
                    </p>
                }
            />
        </StoryPage>
    )
}

export default OriginStories
