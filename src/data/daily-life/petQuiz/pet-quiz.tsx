import { Quiz } from '@/components/quiz'
import climateChangeThumbnail from '@/data/ice-age-texas/quiz/Climate-Change@2x.png'
import climateChangeAnimated from '@/data/ice-age-texas/quiz/Climate-Change-animation.gif'
import cometThumbnail from '@/data/ice-age-texas/quiz/Comet@2x.png'
import cometAnimated from '@/data/ice-age-texas/quiz/Comet-animation.gif'
import peopleThumbnail from '@/data/ice-age-texas/quiz/People@2x.png'
import peopleAnimated from '@/data/ice-age-texas/quiz/People-animation.gif'

export const PetQuiz = () => (
    <Quiz
        questions={[
            {
                question: 'True or False? Paleoindians domesticated North American wolves.',
                thumbnail: climateChangeThumbnail,
                animation: climateChangeAnimated,
                alt: 'A cartoon North American wolf.',
                choices: [
                    {
                        choice: 'TRUE',
                        moreInformation: {
                            title: 'TRUE',
                            details: `Climate change can lead to species extinction. 
    For example, a changing plant community 
    could impact an animal's food source.`,
                        },
                    },
                    {
                        choice: 'FALSE',
                        moreInformation: {
                            title: 'FALSE',
                            details: `Many of the species that died at the end 
            of the ice age had previously survived 
            other periods of major climate change.`,
                        },
                    },
                ],
            },
            {
                question: 'True or False? Dogs had jobs like helping people hunt and protecting camp.',
                thumbnail: cometThumbnail,
                animation: cometAnimated,
                alt: 'A Native American and their wolf.',
                choices: [
                    {
                        choice: 'TRUE',
                        moreInformation: {
                            title: 'TRUE',
                            details: `There is some evidence that a comet hit the Earth around 12,900 years ago - near the time these animals went extinct. `,
                        },
                    },
                    {
                        choice: 'FALSE',
                        moreInformation: {
                            title: 'FALSE',
                            details: `Mostly large animals died. A comet would affect both large and small animals.`,
                        },
                    },
                ],
            },
            {
                question: 'True or False? Ancient dogs spent time with their people.',
                thumbnail: peopleThumbnail,
                animation: peopleAnimated,
                alt: 'A Native American watching the camp while their wolf sleeps.',
                choices: [
                    {
                        choice: 'TRUE',
                        moreInformation: {
                            title: 'TRUE',
                            details: `Archeologists have found the bones of mammoths, giant sloths, and other now-extinct animals in Paleoindian campsites.`,
                        },
                    },
                    {
                        choice: 'FALSE',
                        moreInformation: {
                            title: 'FALSE',
                            details: `Paleoindians hunted other mammals that did not go extinct. And some animals that they probably didn't hunt went extinct anyway.`,
                        },
                    },
                ],
            },
        ]}
    />
)
