import { DailyLifeCarousel } from '@/components/carousel'
import { carouselData } from '@/data/daily-life/carouselData'
import { StorySectionProps } from '@/components/story-section'
import { StoryPage } from '@/components/story-page'
import Cards from '@/components/cards'
import { cardData } from '@/data/ice-age-texas/cards/data'
import { YouTubeVideo } from '@/components/youtube-video'
import moreThanStoneThumbnail from '@/data/daily-life/more-than-stone-thumbnail.png'
import { TIKTOK_VIDEOS } from '@/data/origin-stories/data'
import { TikTokPlayer } from '@/components/tiktok-video-player'
import { PetQuiz } from '@/data/daily-life/petQuiz/pet-quiz'

const DAILY_LIFE_TEXAS_SECTIONS: StorySectionProps[] = [
    {
        title: 'Essential Inventory',
        id: 'essential-inventory',
        summary: `People make stuff, we learn stuff – we’ve always been good at it.`,
        description:
            `<p>16,000 years ago, everybody, everywhere lived as hunter-gatherers. But that doesn’t mean people were simple! They had deep knowledge and skills to thrive in their environments. 
            Flip through the cards below and put yourself in their woven grass sandals! </p>`,
        interactive: (
            <Cards cards={cardData} pdf="/pdfs/Ice Age Texas Cards.pdf" />
        ),
        details: (
            <>
            <p>
                When Paleoindians first walked into Texas, they shared a lifestyle with every other person on the planet. It would be thousands and thousands of years before humanity would get around to inventing agriculture, forging metal, or even making pottery.
            </p>
            <p>
                Being a hunter-gatherer meant having a deep understanding of the land, the animals, and the seasons. They had knowledge of how to craft the things they needed from natural materials. They knew which plants could fill their bellies and cure aches and pains. They were experts and they needed this knowledge to survive.
            </p>
            <p>
                Of course, there is more to life than just surviving! It is important to remember that ancient peoples played games, told stories, made music, and lived full lives with their friends and family. 
            </p>
            </>
        ),
    },
    {
        title: '(Not just) stone age',
        id: 'not-just-stone-age',
        summary: 'Stone tools “rock” at surviving the test of time  ;)',
        description:
            `<p>But do their powers of preservation paint an uneven picture of Paleoindian peoples?
            Watch the video to learn more. </p>`,
        interactive: (
            <YouTubeVideo
                src="https://youtu.be/TbrFI5LddaY"
                thumbnail={{
                    src: moreThanStoneThumbnail,
                    alt: 'Two people holding a stone spear',
                }}
            />
        ),
        details: (
            <>
            <p>
            Until recently, illustrations of Paleoindian life almost always featured guys with stone spears…and not much else. We need to remember that the earliest peoples made things that are far rarer than stone in the archeological record. Woven mats and sandals, bone tools, and ceremonial items have all been found in Texas sites, usually in caves where cool, dry air helps preserve these precious clues to the lives of Paleoindians. 
            </p>
            </>
        ),
    },
    {
        title: 'What was for dinner?',
        id: 'what-was-for-dinner',
        summary: "",
        description:
            "<p></p>",
        interactive: (
            <Cards cards={cardData} pdf="/pdfs/Ice Age Texas Cards.pdf" />
        ),
        details: (
            <>
            <p>

            </p>
            <p>

            </p>
            </>
        ),
    },
    {
        title: 'Life Lessons',
        id: 'life-lessons',
        summary: "",
        description:
            "<p></p>",
        interactive: (
            <>
            <p>NEED TO CHANGE VIDEOS</p>
            <TikTokPlayer videos={TIKTOK_VIDEOS} />
            </>
        ),
        details: (
            <>
            <p>

            </p>
            </>
        ),
    },
    {
        title: 'Paleo Pets',
        id: 'palaeo-pets',
        summary: "",
        description:
            "<p></p>",
        interactive: (
            <PetQuiz />
        ),
        details: (
            <>
            <p>

            </p>
            </>
        ),
    },
    {
        title: 'Written in Stone',
        id: 'written-in-stone',
        summary: '.',
        description:
            "<p></p>",
        interactive: (
            <DailyLifeCarousel
                images={carouselData}
            />
        ),
        details: (
            <>
                <p>

                </p>
            </>
        ),
    },
]


const DailyLife = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Daily Life"
            storySections={DAILY_LIFE_TEXAS_SECTIONS}
        />        
    )
}

export default DailyLife
