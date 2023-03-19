import { StoryPage } from '@/components/story-page'
import { Slider } from '@/components/slider'
import { Tooltip } from '@/components/tooltip'
// import { YouTubeVideo } from '@/components/youtube-player'
import { StorySectionProps } from '@/components/story-section'

import iceAge1 from '@/data/ice-age-texas/slider/Ice Age Map - Today@2x.png'
import iceAge2 from '@/data/ice-age-texas/slider/Ice Age Map - Before@2x.png'

const ICE_AGE_TEXAS_SECTIONS: StorySectionProps[] = [
    {
        title: 'A Different World',
        id: 'a-different-world',
        summary: 'Texas used to be chill and even bigger!',
        description:
            '<p>During the last ice age, the Texas coastline extended farther out and the climate was cooler and wetter than it is today.</p> <p>Compare the maps below.</p>',
        interactive: (
            <Slider
                img1={{
                    src: iceAge1,
                    alt: 'Map of Texas as we know it today with the coastline extending far out into the Gulf of Mexico.',
                    caption: 'The coastline today...',
                }}
                img2={{
                    src: iceAge2,
                    alt: 'Ice covering the top half of the country with much less of the Texas coast above water.',
                    caption: '...and during the ice age',
                }}
            />
        ),
        details: (
            <>
                <p>
                    The earth has had at least five major
                    <Tooltip
                        trigger="ice ages"
                        content="Long periods lasting millions of years when the Earth has cold temperatures that lead to ice sheets and glaciers covering large areas."
                    />
                    or glacial periods. The most recent ice age
                    <Tooltip
                        trigger="ended"
                        content="Or did it? Some scientists think we are still technically in an ice age, but in a warmer inter-glacial phase. "
                    />
                    very slowly over tens of thousands of years. The climate
                    slowly warmed and melting glacial ice flowed into the ocean,
                    causing sea levels to rise all over the world. By about
                    11,000 years ago the Texas coast looked about like it does
                    today. But the coastline isn&apos;t the only thing that
                    changed. People, animals, and whole
                    <Tooltip
                        trigger="ecosystems"
                        content="A geographic area where plants, animals, and other organisms, as well as weather and landscape, work together to form a web of life."
                    />
                    were affected by the changing climate.
                </p>
            </>
        ),
    },
    {
        title: 'Amazing Animals',
        id: 'amazing-animals',
        summary: 'Giant lions, giant tigers, giant bears, oh my!',
        description:
            '<p>Ice-age Texas was home to amazing animals that are now gone. Early ancestors of Native Americans lived alongside and even hunted these animals.</p><p>Flip through the cards for fun facts about fantastic fauna!',
        interactive: <>TBD</>,
        details: (
            <p>
                Large body size is an adaptation to cold climates and many
                ice-age animals were bigger than modern types of similar
                animals. In fact, they are sometimes called mega-fauna which is
                just scientists speak for “really huge animals.” These animals
                evolved during the last ice age and some went extinct as the ice
                age ended. Others still have descendants living today.
            </p>
        ),
    },
    // {
    //     title: 'When did people get here?',
    //     id: 'when-did-people-get-here',
    //     summary:
    //         'We&apos;re not 100% sure, but a lot longer ago than scientists once thought!',
    //     description:
    //         '<p>Archeologists have found many places with ancient campfires, tools, and evidence from people who lived about 13,000 years ago. They thought these were campsites of the first people in the Americas. Then new discoveries of even older places challenged this idea.</p><p> Compare the maps below.</p> ',
    //     interactive: (
    //         <Slider
    //             img1={{
    //                 src: clovisMap1,
    //                 alt: 'Original Clovis sites shown on a map of the United States',
    //                 caption:
    //                     'Places where people using Clovis tools lived about 13,000 years ago.',
    //             }}
    //             img2={{
    //                 src: clovisMap2,
    //                 alt: 'Pre-Clovis sites shown on a map of the United States',
    //                 caption:
    //                     'Places with some evidence of people living before 13,000 years ago.',
    //             }}
    //         />
    //     ),
    //     details: (
    //         <>
    //             <p>
    //                 Archeologists try to answer questions by
    //                 <Tooltip
    //                     trigger="interpreting"
    //                     content="Decide and explain what something means."
    //                 />
    //                 the evidence they find. Around 1940, archeologists found
    //                 evidence that people who made distinctive
    //                 <Tooltip
    //                     trigger="Clovis"
    //                     content={<ClovisPointTooltip />}
    //                 />
    //                 tools, lived across America about 13,000 years ago. For the
    //                 next 60 years, most scientists agreed with the
    //                 interpretation that the people who used Clovis tools were
    //                 the first people to live in the land that we think of as
    //                 America.
    //             </p>
    //             <p>
    //                 In more recent years, archeologists have found a handful of
    //                 sites with new evidence of even earlier peoples. At first,
    //                 not all scientists accepted these sites as proof. But, then
    //                 archeologists in Texas found stone tools and other objects
    //                 made by people who lived over 16,000 years ago.
    //             </p>
    //             <p>
    //                 Now, most scientists agree that we just don&apos;t know for
    //                 sure when people first arrived in the Americas. Learning
    //                 more about this question is a job for future researchers
    //                 &ndash; maybe even you!
    //             </p>
    //         </>
    //     ),
    // },
    // {
    //     title: 'How did People get here?',
    //     id: 'how-did-people-get-here',
    //     summary: `¯\\_(ツ)_/¯ Unclear, but we&apos;re excited to find out!`,
    //     description: `<p>Recent discoveries in Texas tell us that people were living here at least 16,000 years ago. But <strong>how</strong> did the very first people arrive? Well, it&apos;s complicated.</p>
    //   <p>Watch this video to explore some possibilities. </p>`,
    //     interactive: (
    //         <YouTubeVideo {...YOUTUBE_VIDEOS['how-did-people-get-here']} />
    //     ),
    //     details: (
    //         <>
    //             <p>
    //                 For a long time, most textbooks taught that people walked
    //                 across the
    //                 <Tooltip
    //                     trigger="Bering land bridge"
    //                     content="A very narrow strip of land that connected Asia to North American long ago.  It connected what is now Russia to Alaska."
    //                     width={286}
    //                 />
    //                 through an ice-free corridor, and into North America around
    //                 the end of the last
    //                 <Tooltip
    //                     trigger="ice age"
    //                     content="Long periods lasting millions of years when the Earth has cold temperatures that lead to ice sheets and glaciers covering large areas."
    //                     width={306}
    //                 />
    //                 . Some scientists, Native American scholars, and Tribal
    //                 communities have long challenged the idea that this was the
    //                 ONLY path that people took to the Americas. Today, a
    //                 complicated picture is emerging of multiple
    //                 <Tooltip
    //                     trigger="migrations"
    //                     content="Long journeys taken by animals or humans moving from one home to another."
    //                     width={244}
    //                 />
    //                 of people at different times in the past.
    //             </p>
    //             <p>
    //                 For now, we don&apos;t know for sure how people first
    //                 migrated to the land we think of as North America. Keeping
    //                 an open mind is an important part of learning about the
    //                 past.
    //             </p>
    //         </>
    //     ),
    // },
    // {
    //     title: 'A Texas-sized discovery',
    //     id: 'a-texas-sized-discovery',
    //     summary: `Science is always changing… and that&apos;s a good thing! `,
    //     description: `<p>In Texas, archeologists made a discovery that some people thought was impossible. Researchers used scientific tests and critical thinking to rewrite Texas&apos; timeline. </p>
    // <p>Watch the video to find out how.</p>`,
    //     interactive: (
    //         <YouTubeVideo
    //             {...YOUTUBE_VIDEOS['texas-sized-discovery']}
    //         ></YouTubeVideo>
    //     ),
    //     details: (
    //         <>
    //             <p>
    //                 Remember
    //                 <Tooltip
    //                     trigger="Clovis"
    //                     content={<ClovisPointTooltip />}
    //                 />
    //                 tools? When archeologists at the
    //                 <Tooltip
    //                     trigger="Gault and Friedkin sites"
    //                     content="These two archeological sites in Bell County Texas are very close together and probably represent one large area where people lived as long as 16,000 years ago. "
    //                     width={368}
    //                 />
    //                 in Texas discovered
    //                 <Tooltip
    //                     trigger="tools"
    //                     content={
    //                         <TooltipContentWithImage
    //                             src={stemmedSpearFPO}
    //                             alt="Spear point"
    //                             title="Stemmed Point"
    //                             description="Friedkin Site, Texas"
    //                         />
    //                     }
    //                 />
    //                 that were older than those, they used several different
    //                 methods to demonstrate to the scientific community that they
    //                 found something important.
    //             </p>
    //             <p>
    //                 Through both
    //                 <Tooltip
    //                     trigger="absolute dating"
    //                     content="Methods to determine specific age of an object (within a time range)."
    //                     width={220}
    //                 />
    //                 and
    //                 <Tooltip
    //                     trigger="relative dating"
    //                     content="Methods to figure out if one artifact is older or younger than another artifact."
    //                     width={242}
    //                 />
    //                 techniques, scientists were able to demonstrate that their
    //                 new discovery would change what we know about when people
    //                 arrived in North America. Or at least, what we know so far.
    //             </p>
    //         </>
    //     ),
    // },
    // {
    //     title: 'Learning more',
    //     id: 'learning-more',
    //     summary: `There&apos;s always more to learn about the folks who came before us `,
    //     description: `<p>With each new discovery, researchers can paint a more detailed picture of the first people who called this area home. </p>
    // <p>Hear from young researchers who study Paleoindians.</p>`,
    //     interactive: <TikTokPlayer videos={TIKTOK_VIDEOS} />,
    //     details: (
    //         <>
    //             <p>
    //                 Most professional archeologists focus on one or two
    //                 specialties within the larger study of the past. These
    //                 specialists spend their careers focused on learning as much
    //                 as they can about their piece of the puzzle. Then, they
    //                 write articles, give talks, and teach classes to share what
    //                 they&apos;ve learned. They can also collaborate with &ndash;
    //                 and learn from &ndash; Native American communities who ask
    //                 that their{' '}
    //                 <Tooltip
    //                     trigger="ancestors"
    //                     content={TOOLTIP_CONTENT.ancestors}
    //                 />
    //                 , cultures, and spiritual beliefs are respected and
    //                 included.
    //             </p>
    //         </>
    //     ),
    // },
]

const OriginStories = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Ice Age Texas"
            storySections={ICE_AGE_TEXAS_SECTIONS}
        />
    )
}

export default OriginStories
