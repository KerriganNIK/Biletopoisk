import { useMemo, useState } from "react";
import { classNames } from "@/shared/lib/classNames/classNames";
import classes from "./Counter.module.css";
import { Button, ThemeButton } from "@/shared/ui/Button/Button";
import { Film } from "@/entities/Films/model/type/film";
import { MouseEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeFilmCount, setFilmCount} from "@/entities/Counter/model/slice/CounterSlice";
import { getFilmsCount } from "@/entities/Counter/model/selector/getFilmCount/getFilmsCount";

interface CounterProps {
    className?: string;
    movie: Film;
}

export const Counter = ({ className, movie }: CounterProps) => {
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();
    const movieCount = useSelector(getFilmsCount);

    const increment = useMemo(
        () => (event: MouseEvent) => {
            event.stopPropagation();
            if (count < 30) {
                setCount(count + 1);
                dispatch(setFilmCount({ film: movie, count: count + 1 }));
            }
        },
        [count, dispatch, movie]
    );

    const decrement = useMemo(
        () => (event: MouseEvent) => {
            event.stopPropagation();
            if (count > 0) {
                setCount(count - 1);
                dispatch(setFilmCount({ film: movie, count: count - 1 }));
            }

            if (count === 1) {
                dispatch(removeFilmCount(movie.id));
            }
        }, [count, dispatch, movie]
    );

    const displayCount = movieCount ? movieCount.find((item: { movie: Film; value: number }) => item.movie === movie)?.value || 0 : 0;

    useMemo(() => {
        setCount(displayCount);
    }, [displayCount]);

    return (
        <div className={classNames(classes.Counter, {}, [className])}>
            <Button className={displayCount !== 0 ? classes.active : ""} theme={ThemeButton.Decrement} onClick={decrement}>
                -
            </Button>
            <h1>{displayCount}</h1>
            <Button className={displayCount === 30 ? classes.disable : ""} theme={ThemeButton.Increment} onClick={increment}>
                +
            </Button>
        </div>
    );
};
