import { Quiz } from '@/components/quiz'
import WolfThumbnail from '@/data/daily-life/Images/Grey-Wolf-animation.png'
import climateChangeAnimated from '@/data/ice-age-texas/quiz/Climate-Change-animation.gif'
import HuntingThumbnail from '@/data/daily-life/Images/Dog-job-animation.png'
import cometAnimated from '@/data/ice-age-texas/quiz/Comet-animation.gif'
import RestingThumbnail from '@/data/daily-life/Images/Dog-friend-animation.png'
import peopleAnimated from '@/data/ice-age-texas/quiz/People-animation.gif'

export const PetQuiz = () => (
    <Quiz
        questions={[
            {
                question: 'True or False? Paleoindians domesticated North American wolves.',
                thumbnail: WolfThumbnail,
                animation: climateChangeAnimated,
                alt: 'A cartoon North American wolf.',
                choices: [
                    {
                        choice: 'TRUE',
                        moreInformation: {
                            title: 'NOPE',
                            details: `Paleoindian’s dogs were descended from an extinct species of grey wolf from Eurasia. They came to North America with the Paleoindians.`,
                        },
                    },
                    {
                        choice: 'FALSE',
                        moreInformation: {
                            title: 'THAT’S RIGHT!',
                            details: `Paleoindian’s dogs were related to an extinct species of grey wolf from Eurasia. They came to North America with the Paleoindians.`,
                        },
                    },
                ],
            },
            {
                question: 'True or False? Dogs had jobs like helping people hunt and protecting camp.',
                thumbnail: HuntingThumbnail,
                animation: cometAnimated,
                alt: 'A Native American and their wolf.',
                choices: [
                    {
                        choice: 'TRUE',
                        moreInformation: {
                            title: 'GOOD JOB!',
                            details: `Scientists have even found evidence that the Paleoindians bred their dogs to be able to pull heavy sleds.`,
                        },
                    },
                    {
                        choice: 'FALSE',
                        moreInformation: {
                            title: 'NOPE!',
                            details: `Some dogs today lay around, but ancient dogs likely had jobs. Scientists think Paleoindians even bred their dogs to pull heavy sleds.`,
                        },
                    },
                ],
            },
            {
                question: 'True or False? Ancient dogs spent time with their people.',
                thumbnail: RestingThumbnail,
                animation: peopleAnimated,
                alt: 'A Native American watching the camp while their wolf sleeps.',
                choices: [
                    {
                        choice: 'TRUE',
                        moreInformation: {
                            title: 'YOU NAILED IT!',
                            details: `Archeologists have found chewed bones around camp sites, which tells us that Fido liked to enjoy a snack near his friends.`,
                        },
                    },
                    {
                        choice: 'FALSE',
                        moreInformation: {
                            title: 'GOOD TRY!',
                            details: `Archeologists have found chewed bones around camp sites, which tells us that Fido liked to enjoy a snack near his friends.`,
                        },
                    },
                ],
            },
        ]}
    />
)
