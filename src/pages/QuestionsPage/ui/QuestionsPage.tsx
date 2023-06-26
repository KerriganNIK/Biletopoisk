import {classNames} from "@/shared/lib/classNames/classNames";
import {QuestionsList} from "@/features";

interface QuestionsPageProps {
    className?: string;
}

export const QuestionsPage = ({className}: QuestionsPageProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <QuestionsList/>
        </div>
    );
};