import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./Footer.module.css";
import {AppLink} from "@/shared/ui/AppLink/AppLink";

interface FooterProps {
    className?: string;
}

export const Footer = ({className}: FooterProps) => {
    return (
        <footer className={classNames(classes.Footer, {}, [className])}>
            <AppLink className={classes.questions} href='/questions'>Вопросы и ответы</AppLink>
            <AppLink className={classes.footer} href='/about'>О нас</AppLink>
        </footer>
    );
};
