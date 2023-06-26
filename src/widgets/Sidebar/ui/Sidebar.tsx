import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./Sidebar.module.css";
import {Input, ThemeInput} from "@/shared/ui/Input/Input";
import React from "react";
import {Dropdown} from "@/shared/ui/Dropdown/Dropdown";
interface SidebarProps {
    className?: string;
    searchChange?: (value: string) => void;
    valueInput?: string;
    itemCinema: { content: string; onClick: () => void }[];
    itemGenre: { content: string; onClick: () => void }[] | [];
}

export const Sidebar = ({className, searchChange, valueInput, itemCinema, itemGenre}: SidebarProps) => {
    return (
        <div className={classNames(classes.Sidebar, {}, [className])}>
            <div>
                <h1>Фильтр поиска</h1>
                <p>Название</p>
                <Input
                    value={valueInput}
                    onChange={searchChange}
                    theme={ThemeInput.Default}
                    placeholder='Введите название'
                />
                <p className={classes.genre}>Жанр</p>
                <Dropdown trigger="Выберите Жанр" items={itemGenre} />
                <p className={classes.cinema}>Кинотеатр</p>
                <Dropdown trigger="Выберите кинотеатр" items={itemCinema} />
            </div>
        </div>
    );
};