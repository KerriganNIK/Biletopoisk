'use client';
import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./Navbar.module.css";
import Image from "next/image";
import {AppLink, AppLinkTheme} from "@/shared/ui/AppLink/AppLink";
import {useSelector} from "react-redux";
import {getTotalCount} from "@/entities/Counter/model/selector/getTotalCount/getTotalCount";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const count = useSelector(getTotalCount);

    return (
        <header className={classNames(classes.Navbar, {}, [className])}>
            <AppLink
                href='/'
                theme={AppLinkTheme.Logo}
                className={classes.logo}
            >
                Билетопоиск
            </AppLink>
            <div className={classes.container}>
                {count !== 0 && <div className={classes.count}>{count}</div>}
                <AppLink
                    href='/basket'
                    className={classes.basket}
                >
                    <Image
                        src='/svg/basket.svg'
                        alt='Basket'
                        width={32}
                        height={32}
                    />
                </AppLink>
            </div>
        </header>
    );
};
