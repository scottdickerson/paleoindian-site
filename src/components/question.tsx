import styles from '@/styles/Question.module.scss'
import classNames from 'classnames'
import { useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useRef, useState } from 'react'

interface ChoiceDetailsProps {
    title: string
    details: string
}

const ChoiceDetails = ({ title, details }: ChoiceDetailsProps) => (
    <div className={styles.choiceDetails}>
        {title}
        <p>{details}</p>
    </div>
)

export interface QuestionProps {
    question: string
    thumbnail: StaticImageData
    animation: StaticImageData
    alt: string
    choices: {
        choice: string
        moreInformation: ChoiceDetailsProps
        isCorrect?: boolean // some questions have correct answers
    }[]
    /* This quiz may not have a correct choice, in which case it allows both clicks */
    correctChoice?: string
}

export const Question = ({
    question,
    thumbnail,
    animation,
    alt,
    choices,
}: QuestionProps) => {
    const [choice1Clicked, setChoice1Clicked] = useState(false)
    const [choice2Clicked, setChoice2Clicked] = useState(false)
    const questionRef = useRef<HTMLImageElement>(null)
    const isInView = useInView(questionRef, {
        amount: 1,
        once: true,
    })
    const choiceHasCorrectAnswer = choices.some(
        (choice) => choice.isCorrect !== undefined && choice.isCorrect
    )
    const choiceWasClicked = choice1Clicked || choice2Clicked

    const shouldTriggerAnimation =
        (choiceHasCorrectAnswer && choiceWasClicked) ||
        (!choiceHasCorrectAnswer && isInView)

    return (
        <div className={styles.parent}>
            <div className={styles.question}>{question}</div>
            <div className={styles.image}>
                <Image
                    src={!shouldTriggerAnimation ? thumbnail : animation}
                    alt={alt}
                    fill
                    ref={questionRef}
                />
            </div>
            <button
                className={classNames(
                    styles.choice,
                    styles.choice1,
                    choice1Clicked
                        ? styles.choiceClicked
                        : styles.choiceNotClicked,
                    {
                        [styles.choiceDisabled]:
                            choiceWasClicked && choiceHasCorrectAnswer,
                    }
                )}
                onClick={
                    choiceWasClicked && choiceHasCorrectAnswer
                        ? undefined
                        : () => setChoice1Clicked(true)
                }
            >
                {choice1Clicked ? (
                    <ChoiceDetails {...choices[0].moreInformation} />
                ) : (
                    choices[0].choice
                )}
            </button>
            <button
                className={classNames(
                    styles.choice,
                    styles.choice2,
                    choice2Clicked
                        ? styles.choiceClicked
                        : styles.choiceNotClicked,
                    {
                        [styles.choiceDisabled]:
                            choiceWasClicked && choiceHasCorrectAnswer,
                    }
                )}
                onClick={
                    choiceWasClicked && choiceHasCorrectAnswer
                        ? undefined
                        : () => setChoice2Clicked(true)
                }
            >
                {choice2Clicked ? (
                    <ChoiceDetails {...choices[1].moreInformation} />
                ) : (
                    choices[1].choice
                )}
            </button>
        </div>
    )
}
