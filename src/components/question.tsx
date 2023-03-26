import styles from '@/styles/Question.module.scss'
import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'

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

interface QuestionProps {
    question: string
    thumbnail: StaticImageData
    animation: StaticImageData
    alt: string
    choices: {
        choice: string
        moreInformation: ChoiceDetailsProps
    }[]
    /* This quiz may not have a correct choice, in which case it allows both clicks */
    correctChoice?: string
}

export const Question = ({
    question,
    thumbnail,
    alt,
    choices,
}: QuestionProps) => {
    const [choice1Clicked, setChoice1Clicked] = useState(false)
    const [choice2Clicked, setChoice2Clicked] = useState(false)

    return (
        <div className={styles.parent}>
            <div className={styles.question}>{question}</div>
            <div className={styles.image}>
                <Image src={thumbnail} alt={alt} fill />
            </div>
            <button
                className={classNames(
                    styles.choice,
                    styles.choice1,
                    choice1Clicked
                        ? styles.choiceClicked
                        : styles.choiceNotClicked
                )}
                onClick={() => setChoice1Clicked(true)}
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
                        : styles.choiceNotClicked
                )}
                onClick={() => setChoice2Clicked(true)}
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
