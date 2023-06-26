import {classNames} from "@/shared/lib/classNames/classNames";
import {ReviewsCard} from "@/entities/Reviews/ui/ReviewsCard/ReviewsCard";
import {Review} from "@/entities/Reviews/model/type/reviews";
interface ReviewsListProps {
    className?: string;
    data: Review[];
}

export const ReviewsList = ({className, data}: ReviewsListProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            {data.map((review: Review) => {
                return (
                    <ReviewsCard
                        key={review.id}
                        name={review.name}
                        text={review.text}
                        rating={review.rating}
                    />
                );
            })}
        </div>
    );
};