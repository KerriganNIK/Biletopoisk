import {createSelector} from "reselect";
import {Counter} from "@/entities/Counter/model/type/counter";

export const getTotalCount = createSelector(
    (state: any) => state.counter.countFilm,
    (countFilm) => countFilm.reduce((total: number, counter: Counter) => total + counter.value, 0)
);
