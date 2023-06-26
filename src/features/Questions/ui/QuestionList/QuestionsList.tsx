import {classNames} from "@/shared/lib/classNames/classNames";
import {QuestionCard} from "@/features/Questions/ui/QuestionCard/Question";
import {Question} from "@/features/Questions/model/type/question";

interface QuestionsListProps {
    className?: string;
}

const questionAnswer: Question[] = [
    {nameQuestion: "Что такое Билетопоиск?", answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."},
    {nameQuestion: "Когда был основан билетопоиск?", answer: "Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов."}
];

export const QuestionsList = ({className}: QuestionsListProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            {questionAnswer.map((question, index) => (
                <QuestionCard
                    key={index}
                    question={question}
                />
            ))}
        </div>
    );
};
