import { DailyLifeCarousel } from '@/components/carousel'
import { carouselData } from '@/data/daily-life/carouselData'
import { StorySection } from '@/components/story-section'
import { StoryPage } from '@/components/story-page'
import Cards from '@/components/cards'
import { YouTubeVideo } from '@/components/youtube-video'
import { TOOLTIP_CONTENT, YOUTUBE_VIDEOS } from '@/data/data'
import { TikTokPlayer } from '@/components/tiktok-video-player'
import { PetQuiz } from '@/data/daily-life/petQuiz/pet-quiz'
import { WhatWasForDinnerData } from '@/data/daily-life/what-was-for-dinner-data'
import { EssentialInvetoryData } from '@/data/daily-life/essential-inventory-data'
import { Tooltip } from '@/components/tooltip'
import cardBack from '@/data/daily-life/cards/essential-inventory/Paleo - 3.1 Essential Inventory Cards.webp'
import { DAILY_LIFE_TIKTOK_VIDEOS } from '@/data/daily-life/tiktokData'
import { TocScrollableProps } from '@/components/toc-scrollable'

const DAILY_LIFE_TEXAS_SECTIONS: TocScrollableProps['storySections'] = [
    {
        title: 'Essential Inventory',
        id: 'essential-inventory',
    },
    {
        title: '(Not just) stone age',
        id: 'not-just-stone-age',
    },
    {
        title: 'What was for dinner?',
        id: 'what-was-for-dinner',
    },
    {
        title: 'Life Lessons',
        id: 'life-lessons',
    },
    {
        title: 'Paleo Pets',
        id: 'paleo-pets',
    },
    {
        title: 'Written in Stone',
        id: 'written-in-stone',
    },
]

const DailyLife = () => {
    return (
        <StoryPage
            title="Texas Paleoindian - Daily Life"
            storySections={DAILY_LIFE_TEXAS_SECTIONS}
        >
            <StorySection
                {...DAILY_LIFE_TEXAS_SECTIONS[0]}
                summary="People make stuff, we learn stuff – we’ve always been good at it"
                description={
                    <>
                        <p>
                            16,000 years ago, everybody, everywhere lived as
                            hunter-gatherers. But that doesn’t mean people were
                            simple! They had deep knowledge and skills to thrive
                            in their environments.
                        </p>
                        <p>
                            Flip through the cards below, and put yourself in
                            their woven grass sandals!
                        </p>
                    </>
                }
                interactive={
                    <Cards cards={EssentialInvetoryData} cardBack={cardBack} />
                }
                details={
                    <>
                        <p>
                            When Paleoindians first walked into Texas, they
                            shared a lifestyle with every other person on the
                            planet. It would be thousands and thousands of years
                            before humanity would get around to inventing
                            agriculture, forging metal, or even making pottery.
                        </p>
                        <p>
                            Being a
                            <Tooltip
                                trigger="hunter-gatherer"
                                content={TOOLTIP_CONTENT.hunterGatherer}
                            />
                            meant having a deep understanding of the land, the
                            animals, and the seasons. They had knowledge of how
                            to craft the things they needed from natural
                            materials. They knew which plants could fill their
                            bellies and cure aches and pains. They were experts,
                            and they needed this knowledge to survive.
                        </p>
                        <p>
                            Of course, there is more to life than just
                            surviving! It is important to remember that ancient
                            peoples played games, told stories, made music, and
                            lived full lives with their friends and family.
                        </p>
                    </>
                }
            />
            <StorySection
                {...DAILY_LIFE_TEXAS_SECTIONS[1]}
                summary="Stone tools “rock” at surviving the test of time  ;)"
                description={
                    <>
                        <p>
                            But do their powers of preservation paint an uneven
                            picture of Paleoindian peoples?
                        </p>
                        <p>Watch the video to learn more. </p>
                    </>
                }
                interactive={
                    <YouTubeVideo
                        {...YOUTUBE_VIDEOS[DAILY_LIFE_TEXAS_SECTIONS[1].id]}
                    />
                }
                details={
                    <p>
                        Until recently, illustrations of Paleoindian life almost
                        always featured guys with stone spears… and not much
                        else. We need to remember that the earliest peoples made
                        things that are far rarer than stone in the
                        archeological record. Woven mats and sandals, bone
                        tools, and ceremonial items have all been found in Texas
                        sites, usually in caves where cool, dry air helps
                        preserve these precious clues to the lives of
                        Paleoindians.
                    </p>
                }
            />
            <StorySection
                {...DAILY_LIFE_TEXAS_SECTIONS[2]}
                summary="Maybe something easy to get?"
                description={
                    <>
                        <p>
                            Paleoindians did hunt mammoths and other megafauna
                            but not every day. Would you like to bust your hump
                            hunting a dangerous animal, or would you just kick
                            back and catch a fish?
                        </p>
                        <p>Check out what was on the menu. </p>
                    </>
                }
                interactive={
                    <Cards cards={WhatWasForDinnerData} cardBack={cardBack} />
                }
                details={
                    <>
                        <p>
                            It’s fun to think about the skills and talent needed
                            to take home a mammoth for dinner, but archeologists
                            now know that people ate a lot of other things that
                            were way easier to manage. How do we know what
                            Paleoindians ate for dinner? Many different fields
                            of study can help answer that question.
                            Zooarcheologists study animal bones found in
                            archeological sites. Paleoethnobotanists study
                            charred seeds from campfires. Lithic analysts study
                            tiny residue of animal blood and plant starches left
                            on tools.
                        </p>
                        <p>
                            We know that Paleoindians hunted and trapped lots of
                            different animals and ate plenty of plants. Although
                            hunters are often depicted as men, women and
                            children did their fair share of work to keep
                            everybody fed. Animals like deer, rabbits, turtles,
                            and fish would have been a reliable source of
                            protein. Native Texas plants, like pecans, tubers,
                            and wild onions, provided nutrition and flavor.
                        </p>
                    </>
                }
            />
            <StorySection
                {...DAILY_LIFE_TEXAS_SECTIONS[3]}
                summary="Ancestors of Indigenous people were the first to learn the landscape"
                description={
                    <>
                        <p>
                            Their knowledge was important for surviving and
                            thriving, and it has been passed down through
                            generations. Today, those traditions are still
                            around, often with a modern twist.{' '}
                        </p>
                        <p>
                            Hear from Native American people below about their
                            favorite traditions.{' '}
                        </p>
                    </>
                }
                interactive={<TikTokPlayer videos={DAILY_LIFE_TIKTOK_VIDEOS} />}
                details={
                    <p>
                        Native American
                        <Tooltip
                            trigger="ancestors"
                            content={TOOLTIP_CONTENT.ancestors}
                        />
                        became experts in selecting native plants for food and
                        medicine. They knew the best season and location for
                        harvesting specific plants or hunting their favorite
                        game. They learned where to find the right kind of stone
                        for tool making. And they learned to navigate from place
                        to place, finding the best places to cross a river or a
                        mountain. They passed this knowledge and deep
                        relationship with the landscape down through the
                        generations where it still flows today.
                    </p>
                }
            />
            <StorySection
                {...DAILY_LIFE_TEXAS_SECTIONS[4]}
                summary="Our furry friends have a long history"
                description={
                    <>
                        <p>
                            Over 20,000 years ago, wolves and humans figured out
                            that they could help each other survive. They joined
                            forces, and the world’s oldest friendship began.
                        </p>
                        <p>
                            Sit, roll over, and test your doggy knowledge below!
                        </p>
                    </>
                }
                interactive={<PetQuiz />}
                details={
                    <>
                        <p>
                            When Paleoindians first came to the Americas,
                            <Tooltip
                                trigger="domesticated"
                                content={TOOLTIP_CONTENT.domesticated}
                            />
                            dogs were trotting along beside them. Bones and
                            other artifacts discovered around ancient camp sites
                            tell us a lot about man’s best friend. By studying
                            DNA, we know that dogs and people were together long
                            before they came to North America. In fact, Native
                            Americans’ dogs were
                            <Tooltip
                                trigger="descended"
                                content={TOOLTIP_CONTENT.descended}
                            />
                            from a line of grey wolves in{' '}
                            <Tooltip
                                trigger="Eurasia."
                                content={TOOLTIP_CONTENT.eurasia}
                            />
                            Scientists can trace their DNA back through
                            generations to learn more about how dogs – and their
                            friendships with people – changed over time.
                        </p>
                    </>
                }
            />
            <StorySection
                {...DAILY_LIFE_TEXAS_SECTIONS[5]}
                summary="Stone tools tell a story – if you ask the right questions"
                description={
                    <>
                        <p>
                            When archeologists find stone tools, even broken
                            pieces, they open a window into the past. They
                            carefully document the artifact’s position and
                            context and then study it in the lab.{' '}
                        </p>
                        <p>Flip through these Paleoindian artifacts. </p>
                    </>
                }
                interactive={<DailyLifeCarousel images={carouselData} />}
                details={
                    <p>
                        When collectors take stone tools, all this potential
                        information is lost. Additionally, they may disturb a
                        grave or other sacred spot. It’s very important to never
                        dig or disturb a place where ancient Indigenous people
                        lived.
                    </p>
                }
            />
        </StoryPage>
    )
}

export default DailyLife
