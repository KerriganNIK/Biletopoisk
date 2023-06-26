import {classNames} from "@/shared/lib/classNames/classNames";
import {Film} from "@/entities/Films/model/type/film";
import {TicketCard} from "@/features/Basket/ui/TicketCard/TicketCard";

interface MovieListProps {
    className?: string;
    data: { movie: Film; value: number }[];
}

export const MovieList = ({className, data}: MovieListProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            {data.map((item) => { // Проход по массиву и получение свойства movie
                const { movie } = item;
                return (
                    <TicketCard
                        key={movie.id}
                        data={movie}
                        idTicket={movie.id}
                    />
                );
            })}
        </div>
    );
};