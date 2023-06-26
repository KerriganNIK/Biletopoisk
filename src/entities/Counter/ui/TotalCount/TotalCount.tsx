import {classNames} from "@/shared/lib/classNames/classNames";
import classes from "./TotalCount.module.css";
import {useSelector} from "react-redux";
import {getTotalCount} from "@/entities/Counter/model/selector/getTotalCount/getTotalCount";

interface TotalCountProps {
    className?: string;
}

export const TotalCount = ({className}: TotalCountProps) => {
    const totalCount = useSelector(getTotalCount);

    return (
        <div className={classNames(classes.TotalCount, {}, [className])}>
            <div>
                <p>Итого билетов:</p>
            </div>
            <div>
                <p>{totalCount}</p>
            </div>
        </div>
    );
};