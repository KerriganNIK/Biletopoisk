'use client';
import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./FilmCard.module.css";
import {useRouter} from "next/navigation";
import {Counter} from "@/entities/Counter";
import {Film} from "@/entities/Films/model/type/film";
import useTranslatedGenre from "@/shared/lib/hooks/useTranslatedGenre/useTranslatedGenre";
interface FilmCardProps {
    className?: string;
    data: Film;
}

export const FilmCard = ({className, data}: FilmCardProps) => {
    const translatedGenre = useTranslatedGenre(data.genre);
    const router = useRouter();
    function openFilm() {
        router.push(`/film/${data.id}`)
    }

    return (
        <div
            className={classNames(classes.FilmCard, {}, [className])}
            onClick={openFilm}
        >
            <div className={classes.Image}>
                <img src={data.posterUrl} alt="" />
            </div>
            <div className={classes.Details}>
                <div className={classes.Title}>
                    <div>
                        {data.title}
                    </div>
                    <div>
                        <Counter
                            movie={data}
                        />
                    </div>
                </div>
                <div className={classes.Genre}>
                    {translatedGenre}
                </div>
            </div>
        </div>
    );
};
