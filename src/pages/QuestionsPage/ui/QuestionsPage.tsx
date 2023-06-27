import {classNames} from "@/shared/lib/classNames/classNames";
import {QuestionsList} from "@/features";
import {AboutCard} from "@/shared/ui/AboutCard/AboutCard";

interface QuestionsPageProps {
    className?: string;
}

export const QuestionsPage = ({className}: QuestionsPageProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <AboutCard/>
            <QuestionsList/>
        </div>
    );
};