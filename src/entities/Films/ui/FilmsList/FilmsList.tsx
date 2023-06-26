import {classNames} from "@/shared/lib/classNames/classNames";
import {Film} from "@/entities/Films/model/type/film";
import {FilmCard} from "@/entities/Films/ui/FilmCard/FilmCard";

interface FilmsListProps {
    className?: string;
    data: Film[];
    searchItem: string;
    genre: string | null;
}

export const FilmsList = ({ className, data, searchItem, genre }: FilmsListProps) => {
    const filteredData = data.filter((film) =>
        film.title.toLowerCase().includes(searchItem?.toLowerCase() ?? "") &&
        film.genre.toLowerCase().includes(genre?.toLowerCase() ?? "")
    );

    return (
        <div className={classNames("", {}, [className])}>
            {filteredData.map((film) => {
                return (
                    <FilmCard
                        key={film.id}
                        data={film}
                    />
                );
            })}
        </div>
    );
};