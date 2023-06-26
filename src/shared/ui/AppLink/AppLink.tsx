import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./AppLink.module.css";
import Link, { LinkProps } from "next/link";
import { FC, HTMLProps } from "react";

export enum AppLinkTheme {
    Default = 'default',
    Logo = 'logo',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps & HTMLProps<HTMLAnchorElement>> = (props) => {
    const {
        className,
        href,
        children,
        theme = AppLinkTheme.Default,
        ref,
        ...otherProps
    } = props

    return (
        <Link
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            href={href}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
