import { Quiz } from '@/components/quiz'
import WolfThumbnail from '@/data/daily-life/petQuiz/Grey-Wolf-animation.gif'
import HuntingThumbnail from '@/data/daily-life/petQuiz/Dog-job-animation.gif'
import RestingThumbnail from '@/data/daily-life/petQuiz/Dog-friend-animation.gif'
import QuestionMarkThumbnail from '@/data/daily-life/petQuiz/Question-Mark-animation.gif'

export const PetQuiz = () => (
    <Quiz
        questions={[
            {
                question:
                    'True or False? Paleoindians domesticated North American wolves.',
                animation: WolfThumbnail,
                thumbnail: QuestionMarkThumbnail,
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
                        isCorrect: true,
                        moreInformation: {
                            title: 'THAT’S RIGHT!',
                            details: `Paleoindian’s dogs were related to an extinct species of grey wolf from Eurasia. They came to North America with the Paleoindians.`,
                        },
                    },
                ],
            },
            {
                question:
                    'True or False? Dogs had jobs like helping people hunt and protecting camp.',
                animation: HuntingThumbnail,
                thumbnail: QuestionMarkThumbnail,
                alt: 'A Native American and their wolf.',
                choices: [
                    {
                        choice: 'TRUE',
                        isCorrect: true,
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
                question:
                    'True or False? Ancient dogs spent time with their people.',
                animation: RestingThumbnail,
                thumbnail: QuestionMarkThumbnail,
                alt: 'A Native American watching the camp while their wolf sleeps.',
                choices: [
                    {
                        choice: 'TRUE',
                        isCorrect: true,
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
