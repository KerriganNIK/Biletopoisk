import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./FilmDescription.module.css";
import {Film} from "@/entities/Films/model/type/film";
import {TRANSLATIONS} from "@/shared/config/translations/translations";
import {Counter} from "@/entities/Counter";

interface FilmDescriptionProps {
    className?: string;
    data: Film;
}

export const FilmDescription = ({className, data}: FilmDescriptionProps) => {
    const translatedGenre = getTranslatedGenre(data.genre);

    function getTranslatedGenre(genre: string): string {
        if (TRANSLATIONS.genres.hasOwnProperty(genre)) {
            return TRANSLATIONS.genres[genre];
        }

        return genre;
    }

    return (
        <div className={classNames(classes.FilmDescription, {}, [className])}>
            <div className={classes.Image}>
                <img src={data.posterUrl} alt="" />
            </div>
            <div className={classes.Details}>
                <div className={classes.Title}>
                    {data.title}
                    <Counter movie={data}/>
                </div>
                <div className={classes.Genre}>
                    <ul>
                        <li><span>Жанр:</span> {translatedGenre}</li>
                        <li><span>Год выпуска:</span> {data.releaseYear}</li>
                        <li><span>Рейтинг:</span> {data.rating}</li>
                        <li><span>Режиссёр:</span> {data.director}</li>
                    </ul>
                </div>
                <div className={classes.Description}>
                    <p>Описание</p>
                    {data.description}
                </div>
            </div>
        </div>
    );
};