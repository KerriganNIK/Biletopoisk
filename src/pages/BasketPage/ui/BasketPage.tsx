'use client';
import {classNames} from "@/shared/lib/classNames/classNames";
import {MovieList} from "@/features/Basket";
import {useSelector} from "react-redux";
import {getFilmsCount} from "@/entities/Counter/model/selector/getFilmCount/getFilmsCount";
import {TotalCount} from "@/entities/Counter";
import classes from "./BasketPage.module.css";

interface BasketPageProps {
    className?: string;
}

export const BasketPage = ({className}: BasketPageProps) => {
    const films = useSelector(getFilmsCount)

    return (
        <div className={classNames(classes.BasketPage, {}, [className])}>
            <MovieList data={films}/>
            <div className={classes.bottom}>
                <TotalCount/>
            </div>
        </div>
    );
};