import { QuestionProps, Question } from './question'
import styles from '@/styles/Quiz.module.scss'

export const Quiz = ({ questions }: { questions: QuestionProps[] }) => (
    <div className={styles.quiz}>
        {questions.map((question, index) => (
            <Question {...question} key={index} />
        ))}
    </div>
)
