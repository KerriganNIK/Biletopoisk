import {classNames} from "@/shared/lib/classNames/classNames";
import {FilmDescription} from "@/entities/Films/ui/FilmDescription/FilmDescription";
import {useGetFilmByIdQuery} from "@/entities/Films/model/services/FilmsApi/FilmsApi";
import {Loader} from "@/shared/ui/Loader/Loader";
import {ReviewsList} from "@/entities/Reviews";
import {useGetReviewByIdQuery} from "@/entities/Reviews/model/services/ReviewsApi/ReviewsApi";

interface FilmPageProps {
    className?: string;
    id: string;
}

export const FilmPage = ({ className, id }: FilmPageProps) => {
    const { data: filmData, isLoading: isFilmLoading, error: filmError } = useGetFilmByIdQuery(id);
    const { data: reviewData, isLoading: isReviewLoading, error: reviewError } = useGetReviewByIdQuery(id);

    if (isFilmLoading || isReviewLoading) {
        return <Loader />;
    }

    if (!filmData || !reviewData || filmError || reviewError) {
        return <div>error</div>;
    }

    return (
        <div className={classNames('classes.FilmPage', {}, [className])}>
            <FilmDescription data={filmData} />
            <ReviewsList data={reviewData} />
        </div>
    );
};
