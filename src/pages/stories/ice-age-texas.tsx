import { StoryPage } from '@/components/story-page'
import { Slider } from '@/components/slider'
import { Tooltip } from '@/components/tooltip'
import { TOOLTIP_CONTENT } from '@/data/origin-stories/data'
import { YouTubeVideo } from '@/components/youtube-video'
import Flipper from '@/components/flipper'

import iceAge1 from '@/data/ice-age-texas/slider/Present Texas@1x.webp'
import iceAge2 from '@/data/ice-age-texas/slider/Ice Age Texas@1x.webp'
import monstersAndMayhemThumbnail from '@/data/ice-age-texas/videos/2-3_TitleCard@2x.webp'
import boneFragments from '@/data/ice-age-texas/zoomer/2-6-1_BisonSkull.webp'
import lithicDebitage from '@/data/ice-age-texas/zoomer/2-6-2_LithicDebitage.webp'
import charredOak from '@/data/ice-age-texas/zoomer/2-6-3_CharredWood.webp'
import humanCoprolites from '@/data/ice-age-texas/zoomer/2-6-4_Coprolite.webp'
import boneFragmentsZoomedIn from '@/data/ice-age-texas/zoomer/2-6-1_BisonSkull_macro.webp'
import lithicDebitageZoomedIn from '@/data/ice-age-texas/zoomer/2-6-2_LithicDebitage_macro.webp'
import charredOakZoomedIn from '@/data/ice-age-texas/zoomer/2-6-3_CharredWood_macro.webp'
import humanCoprolitesZoomedIn from '@/data/ice-age-texas/zoomer/2-6-4_Coprolite_macro.webp'
import { cardData } from '@/data/ice-age-texas/cards/data'
import { ExtinctionQuiz } from '@/data/ice-age-texas/quiz/extinction-quiz'
import { Zoomer } from '@/components/zoomer'
import { ZoomerSection } from '@/components/zoomer-section'
import Cards from '@/components/cards'
import { FlipperImages } from '@/data/ice-age-texas/flipper/flipperData'
import cardBack from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1 Essential Inventory Cards.webp'
import { TocScrollableProps } from '@/components/toc-scrollable'
import { StorySection } from '@/components/story-section'

const ICE_AGE_TEXAS_SECTIONS: TocScrollableProps['storySections'] = [
    {
        title: 'A Different World',
        id: 'a-different-world',
    },
    {
        title: 'Amazing Animals',
        id: 'amazing-animals',
    },
    {
        title: 'Monsters and Mayhem',
        id: 'monsters-and-mayhem',
    },
    {
        title: 'More Offshore?',
        id: 'more-offshore',
    },
    {
        title: 'Extinction',
        id: 'extinction',
    },
    {
        title: "That's Important?",
        id: 'thats-important',
    },
]

const OriginStories = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Ice Age Texas"
            storySections={ICE_AGE_TEXAS_SECTIONS}
        >
            <StorySection
                {...ICE_AGE_TEXAS_SECTIONS[0]}
                summary="Texas used to be chill and even bigger!"
                description={
                    <>
                        <p>
                            During the last Ice Age, the Texas coastline
                            extended farther out, and the climate was cooler and
                            wetter than it is today.
                        </p>{' '}
                        <p>Drag the slider to the right to compare the maps.</p>
                    </>
                }
                interactive={
                    <Slider
                        img1={{
                            src: iceAge1,
                            alt: 'Map of Texas as we know it today with the coastline extending far out into the Gulf of Mexico.',
                            caption: 'The coastline today...',
                        }}
                        img2={{
                            src: iceAge2,
                            alt: 'Ice covering the top half of the country with much less of the Texas coast above water.',
                            caption: '...and during the Ice Age',
                        }}
                    />
                }
                details={
                    <p>
                        The Earth has had at least five major
                        <Tooltip
                            trigger="Ice Ages"
                            content={TOOLTIP_CONTENT.iceAges}
                        />
                        or glacial periods. The most recent Ice Age
                        <Tooltip
                            trigger="ended"
                            content={TOOLTIP_CONTENT.ended}
                        />
                        very slowly over tens of thousands of years. The climate
                        slowly warmed and melting glacial ice flowed into the
                        ocean, causing sea levels to rise all over the world. By
                        about 11,000 years ago, the Texas coast looked about
                        like it does today. But the coastline isn’t the only
                        thing that changed. People, animals, and whole
                        <Tooltip
                            trigger="ecosystems"
                            content={TOOLTIP_CONTENT.ecosystems}
                        />
                        were affected by the changing climate.
                    </p>
                }
            />
            <StorySection
                {...ICE_AGE_TEXAS_SECTIONS[1]}
                summary="Giant lions, giant tigers, giant bears, oh my!"
                description={
                    <>
                        <p>
                            Ice-age Texas was home to amazing animals that are
                            now gone. Early ancestors of Native Americans lived
                            alongside and even hunted these animals.
                        </p>
                        <p>
                            Flip through the cards for fun facts about fantastic
                            fauna!
                        </p>
                    </>
                }
                interactive={<Cards cards={cardData} cardBack={cardBack} />}
                details={
                    <p>
                        Large body size is an
                        <Tooltip
                            trigger="adaptation"
                            content={TOOLTIP_CONTENT.adaptation}
                        />
                        to cold climates and many ice-age animals were bigger
                        than modern types of similar animals. In fact, they are
                        sometimes called mega-fauna which is just scientists
                        speak for “really huge animals.” These animals
                        <Tooltip
                            trigger="evolved"
                            content={TOOLTIP_CONTENT.evolved}
                        />
                        during the last
                        <Tooltip
                            trigger="Ice Age"
                            content={TOOLTIP_CONTENT.iceAges}
                        />
                        and some went
                        <Tooltip
                            trigger="extinct"
                            content={TOOLTIP_CONTENT.extinct}
                        />
                        as the Ice Age ended. Others still have
                        <Tooltip
                            trigger="descendants"
                            content={TOOLTIP_CONTENT.descended}
                        />
                        living today.
                    </p>
                }
            />
            <StorySection
                {...ICE_AGE_TEXAS_SECTIONS[2]}
                summary="According to these stories, the monsters had to go!"
                description={
                    <>
                        <p>
                            Some Tribal communities have stories of a time when
                            Earth was new and filled with monsters! Maybe they
                            were telling campfire stories, or maybe they were
                            describing their changing world.
                        </p>
                        <p>
                            Watch the video below to hear some amazing stories.
                        </p>
                    </>
                }
                interactive={
                    <YouTubeVideo
                        src="https://youtu.be/Zdvtz04V660"
                        thumbnail={{
                            src: monstersAndMayhemThumbnail,
                            alt: 'Monsters screaming!',
                        }}
                    />
                }
                details={
                    <p>
                        Native Americans from across Texas and America tell
                        <Tooltip
                            trigger="origin"
                            content={TOOLTIP_CONTENT.origin}
                        />
                        stories of dark, chaotic times when people had to deal
                        with some pretty scary monsters. Every culture has its
                        own stories. In some, the monsters are wiped out by a
                        sudden change like a flood or fire. In other stories,
                        the first people must flee to survive. Archeological
                        sites show us that Paleoindians lived alongside
                        incredible animals that became
                        <Tooltip
                            trigger="extinct"
                            content={TOOLTIP_CONTENT.extinct}
                        />
                        in a changing climate. It’s possible that their memories
                        became the stuff of legend!
                    </p>
                }
            />
            <StorySection
                {...ICE_AGE_TEXAS_SECTIONS[3]}
                summary="Science is better, down where it’s wetter"
                description={
                    <>
                        <p>
                            Archeological sites aren’t always on dry land… some
                            of them are hidden beneath the waves! Due to rising
                            sea levels over time, the shores people knew long
                            ago are now deep underwater.{' '}
                        </p>
                        <p>
                            Flip pieces of the photo below to explore techniques
                            used in underwater archeology.{' '}
                        </p>
                    </>
                }
                interactive={<Flipper images={FlipperImages} />}
                details={
                    <>
                        <p>
                            One of the most fascinating Paleoindian
                            archeological sites in Texas isn’t really an
                            archeological site at all — it’s a beach. Over the
                            years, thousands of Paleoindian artifacts and the
                            bones of
                            <Tooltip
                                trigger="extinct"
                                content={TOOLTIP_CONTENT.extinct}
                            />
                            animals have washed ashore on a beach near the
                            Texas-Louisiana border.
                        </p>
                        <p>
                            Archeologists agree that the artifacts and bones are
                            from an underwater area that was once dry land. But
                            now, due to rising sea levels, what was once a
                            grassy, coastal plain is now ocean floor about 100
                            miles out at sea! To study these sites, some
                            scientists take the plunge and turn to underwater
                            archeology, a growing field in the study of
                            Paleoindian sites.
                        </p>
                    </>
                }
            />
            <StorySection
                {...ICE_AGE_TEXAS_SECTIONS[4]}
                summary="What happened to the mammoths, sabertooth cats, and giant sloths?"
                description={
                    <>
                        <p>
                            Near the end of the last Ice Age, around 60 North
                            American species died out. Scientists still aren’t
                            exactly sure what happened, but they have a few
                            ideas.
                        </p>
                        <p> What do you think happened all those years ago? </p>
                    </>
                }
                interactive={<ExtinctionQuiz />}
                details={
                    <p>
                        Animal species go
                        <Tooltip
                            trigger="extinct"
                            content={TOOLTIP_CONTENT.extinct}
                        />
                        all the time. It happens for a lot of reasons. But when
                        many species go extinct all at once, scientists look for
                        a BIG reason, and they call it an extinction event. The
                        Earth has had several extinction events. Scientists want
                        to understand why some animals (looking at you,
                        crocodiles) lived through several while other animals
                        (RIP sabertooth cats) didn’t.
                    </p>
                }
            />
            <StorySection
                {...ICE_AGE_TEXAS_SECTIONS[5]}
                summary="It looks like a piece of boring rock to me…"
                description={
                    <>
                        <p>
                            Archeologists excavate sites very slowly, and every
                            tiny piece they find could be important! This
                            carefully collected evidence helps us understand
                            Paleoindians and their environments.
                        </p>
                        <p>Can you identify the evidence below?</p>
                    </>
                }
                interactive={
                    <ZoomerSection>
                        <Zoomer
                            src={boneFragments}
                            zoomedInSrc={boneFragmentsZoomedIn}
                            transformOrigin="35% 50%"
                            scale={8}
                            alt="Bison bones"
                            details={{
                                title: 'Bison bones',
                                subtitle:
                                    '10,000 BP, Bonfire Shelter, Val Verde County, TX',
                                details:
                                    'Tiny bone leftovers can tell us what people ate for dinner, what kind of hunting strategies they used, and even if a certain camp was a seasonal hunting location.',
                            }}
                        />
                        <Zoomer
                            src={lithicDebitage}
                            zoomedInSrc={lithicDebitageZoomedIn}
                            transformOrigin="48.47% 60.169%"
                            scale={12}
                            alt="Lithic debitage"
                            details={{
                                title: 'Lithic debitage',
                                subtitle:
                                    '12,000 BP, Wilson Leonard Site, Williamson County, TX',
                                details:
                                    'When people chip away at stone to make tools, tiny flakes like these break off. Archeologists study them to identify where the stone came from and even what kind of thing the stone tool artist was making.  ',
                            }}
                        />
                        <Zoomer
                            src={charredOak}
                            zoomedInSrc={charredOakZoomedIn}
                            transformOrigin="35% 50%"
                            scale={8}
                            alt="Charred wood"
                            details={{
                                title: 'Charred wood',
                                subtitle: 'Date Unknown, Val Verde County, TX',
                                details:
                                    'Charred wood samples from ancient campfires can tell us when a campfire burned and what species of trees were in the area. Seeds from ancient campfires can help us understand what people ate and the local ecosystem.',
                            }}
                        />
                        <Zoomer
                            src={humanCoprolites}
                            zoomedInSrc={humanCoprolitesZoomedIn}
                            transformOrigin="35% 50%"
                            scale={8}
                            alt="Human coprolites"
                            details={{
                                title: 'Human coprolites',
                                subtitle:
                                    'Date Unknown, Spirit Eye Cave, Presidio County, TX',
                                details:
                                    "These terrific turds provide information about a person's diet, health, and even genetics. To date, no Paleoindian coprolites have been found in Texas, but finding a #2 is a #1 priority!",
                            }}
                        />
                    </ZoomerSection>
                }
                details={
                    <>
                        <p>
                            Archeologists carefully collect everything,
                            including charred plants, tiny flakes from stone
                            tools, soil samples, and animal bone fragments. They
                            also document the exact location and context of each
                            sample. In labs, specialists can then identify and
                            analyze the samples.
                        </p>
                        <p>
                            It may not look important at first glance, but this
                            evidence helps us understand what Texas’ environment
                            was like and how Paleoindian peoples interacted with
                            their world.
                        </p>
                        <p>
                            Beware: some collectors dig into archeological sites
                            to find “arrowheads” and destroy all this important
                            evidence! If you come across an archeological site,
                            please keep your hands to yourself.
                        </p>
                    </>
                }
            />
        </StoryPage>
    )
}

export default OriginStories
