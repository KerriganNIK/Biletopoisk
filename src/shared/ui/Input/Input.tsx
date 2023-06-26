import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./Input.module.css";
import React, {InputHTMLAttributes, memo} from "react";

export enum ThemeInput {
    Default = 'default',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;
interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: ThemeInput;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo(function Input({ className, theme, value, onChange, type = 'text', ...otherProps }: InputProps) {
    function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        onChange?.(event.target.value);
    }

    return (
        <input
            className={classNames(classes.Input, {}, [className, theme !== undefined ? classes[theme] : ''])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            {...otherProps}
        />
    );
});

Input.displayName = 'Input';
