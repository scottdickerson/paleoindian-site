import { Quiz } from '@/components/quiz'
import climateChangeThumbnail from '@/data/ice-age-texas/quiz/Climate-Change@2x.png'
import climateChangeAnimated from '@/data/ice-age-texas/quiz/Climate-Change-animation.gif'
import cometThumbnail from '@/data/ice-age-texas/quiz/Comet@2x.png'
import cometAnimated from '@/data/ice-age-texas/quiz/Comet-animation.gif'
import peopleThumbnail from '@/data/ice-age-texas/quiz/People@2x.png'
import peopleAnimated from '@/data/ice-age-texas/quiz/People-animation.gif'

export const ExtinctionQuiz = () => (
    <Quiz
        questions={[
            {
                question: 'Was it climate change?',
                thumbnail: climateChangeThumbnail,
                animation: climateChangeAnimated,
                alt: 'A woolly mammoth getting burned by the sun.',
                choices: [
                    {
                        choice: 'YES',
                        moreInformation: {
                            title: 'YES',
                            details: `Climate change can lead to species extinction. 
    For example, a changing plant community 
    could impact an animal's food source.`,
                        },
                    },
                    {
                        choice: 'NO',
                        moreInformation: {
                            title: 'NO',
                            details: `Many of the species that died at the end 
            of the Ice Age had previously survived 
            other periods of major climate change.`,
                        },
                    },
                ],
            },
            {
                question: 'Was it a comet?',
                thumbnail: cometThumbnail,
                animation: cometAnimated,
                alt: 'A comet in space.',
                choices: [
                    {
                        choice: 'YES',
                        moreInformation: {
                            title: 'YES',
                            details: `There is some evidence that a comet hit the Earth around 12,900 years ago - near the time these animals went extinct. `,
                        },
                    },
                    {
                        choice: 'NO',
                        moreInformation: {
                            title: 'NO',
                            details: `Mostly large animals died. A comet would affect both large and small animals.`,
                        },
                    },
                ],
            },
            {
                question: 'Was it people?',
                thumbnail: peopleThumbnail,
                animation: peopleAnimated,
                alt: 'A paleoindian hunting an animal.',
                choices: [
                    {
                        choice: 'YES',
                        moreInformation: {
                            title: 'YES',
                            details: `Archeologists have found the bones of mammoths, giant sloths, and other now-extinct animals in Paleoindian campsites.`,
                        },
                    },
                    {
                        choice: 'NO',
                        moreInformation: {
                            title: 'NO',
                            details: `Paleoindians hunted other mammals that did not go extinct. And some animals that they probably didn't hunt went extinct anyway.`,
                        },
                    },
                ],
            },
        ]}
    />
)
