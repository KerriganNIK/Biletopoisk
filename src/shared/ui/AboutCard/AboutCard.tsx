import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./AboutCard.module.css";

interface AboutCardProps {
    className?: string;
}

export const AboutCard = ({className}: AboutCardProps) => {
    return (
        <div className={classNames(classes.AboutCard, {}, [className])}>
            <h1>Вопросы-ответы</h1>
        </div>
    );
};