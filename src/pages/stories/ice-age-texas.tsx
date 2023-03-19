import { StoryPage } from '@/components/story-page'
import { Slider } from '@/components/slider'
import { Tooltip } from '@/components/tooltip'
import { YouTubeVideo } from '@/components/youtube-video'
import { StorySectionProps } from '@/components/story-section'

import iceAge1 from '@/data/ice-age-texas/slider/Ice Age Map - Today@2x.png'
import iceAge2 from '@/data/ice-age-texas/slider/Ice Age Map - Before@2x.png'
import monstersAndMayhemThumbnail from '@/data/ice-age-texas/videos/2.3 Monsters and Mayhem - Title Card.png'

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
                Large body size is an
                <Tooltip
                    trigger="adaptation"
                    content="Certain physical or behavioral characteristics that help an organism survive in an environment."
                />
                to cold climates and many ice-age animals were bigger than
                modern types of similar animals. In fact, they are sometimes
                called mega-fauna which is just scientists speak for “really
                huge animals.” These animals
                <Tooltip
                    trigger="evolved"
                    content="Emerged as a distinct species or type of animal from earlier ancestor animal populations."
                />
                during the last
                <Tooltip
                    trigger="ice age"
                    content="Long periods lasting millions of years when the Earth has cold temperatures that lead to ice sheets and glaciers covering large areas."
                />
                and some went
                <Tooltip
                    trigger="extinct"
                    content="Died off and did not pass on their genes to new generations."
                />
                as the ice age ended. Others still have
                <Tooltip
                    trigger="descendants"
                    content="A person or animal's children, grand-children, great-grandchildren and all their relatives who live after them."
                />
                living today.
            </p>
        ),
    },
    {
        title: 'Monsters and Mayhem',
        id: 'monsters-and-mayhem',
        summary: 'According to these stories, the monsters had to go!',
        description:
            '<p>Some Tribal communities have stories of a time when Earth was new and filled with monsters! Maybe they were telling campfire stories, or maybe they were describing their changing world.</p><p>Watch the video below to hear some amazing stories.</p>',
        interactive: (
            <YouTubeVideo
                src="https://youtu.be/G65hcqn3ghM"
                thumbnail={{
                    src: monstersAndMayhemThumbnail,
                    alt: 'Monsters screaming!',
                }}
            />
        ),
        details: (
            <p>
                Native Americans from across Texas and America tell
                <Tooltip
                    trigger="origin"
                    content="The point or place where something begins."
                />
                stories of dark, chaotic times when people had to deal with some
                pretty scary monsters. Every culture has its own stories. In
                some, the monsters are wiped out by a sudden change like a flood
                or fire. In other stories, the first people must flee to
                survive. Archeological sites show us that Paleoindians lived
                alongside incredible animals that became
                <Tooltip
                    trigger="extinct"
                    content="Died off and did not pass on their genes to new generations."
                />
                in a changing climate. It&apos;s possible that their memories
                became the stuff of legend!
            </p>
        ),
    },
    {
        title: 'More Offshore?',
        id: 'more-offshore',
        summary: 'Science is better, down where it&apos;s wetter',
        description: `<p>Archeological sites aren&apos;t always on dry land… some of them are hidden beneath the waves! Due to rising sea levels over time, the shores people knew long ago are now deep underwater. </p>
        <p>Flip pieces of the photo below to explore techniques used in underwater archeology. </p>`,
        interactive: 'Dan to add flipper interactive here',
        details: (
            <>
                <p>
                    One of the most fascinating Paleoindian archeological sites
                    in Texas isn&apos;t really an archeological site at all
                    &mdash; it&apos;s a beach. Over the years, thousands of
                    Paleoindian artifacts and the bones of{' '}
                    <Tooltip
                        trigger="extinct"
                        content="Died off and did not pass on their genes to new generations. "
                    />{' '}
                    animals have washed ashore on a beach near the Texas &mdash;
                    Louisiana border.
                </p>
                <p>
                    Archeologists agree that the artifacts and bones are from an
                    underwater area that was once dry land. But now, due to
                    rising sea levels, what was once a grassy, coastal plain is
                    now ocean floor about 100 miles out at sea! To study these
                    sites, some scientists take the plunge and turn to
                    underwater archeology, a growing field in the study of
                    Paleoindian sites.
                </p>
            </>
        ),
    },
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
