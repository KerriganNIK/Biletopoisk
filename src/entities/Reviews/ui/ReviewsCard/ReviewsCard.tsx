import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./ReviewsCard.module.css";
import Image from "next/image";
interface ReviewsCardProps {
    className?: string;
    name: string;
    text: string;
    rating: number;
}

export const ReviewsCard = ({className, name, text, rating}: ReviewsCardProps) => {
    return (
        <div className={classNames(classes.ReviewsCard, {}, [className])}>
            <div className={classes.Image}>
                <Image
                    src='/svg/review.svg'
                    alt='Review'
                    width={32}
                    height={32}
                />
            </div>
            <div className={classes.Details}>
                <div className={classes.DetailsName}>
                    <div className={classes.Name}>
                        <span>{name}</span>
                    </div>
                    <div className={classes.Review}>
                        Оценка: <span>{rating}</span>
                    </div>
                </div>
                <div>
                    {text}
                </div>
            </div>
        </div>
    );
};