import classes from "./Button.module.css";
import {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";

export enum ThemeButton {
    Fill = "fill",
    Increment = "increment",
    Decrement = "decrement",
    Clear = 'clear',
    Cancel = 'cancel',
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = ({className, children, theme, ...otherProps}) => {
    return (
        <button
            className={classNames(classes.Button, {}, [className, theme !== undefined ? classes[theme] : ''])}
            {...otherProps}
        >
            {children}
        </button>
    );
};