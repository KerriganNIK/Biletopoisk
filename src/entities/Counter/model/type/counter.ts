import {Film} from "@/entities/Films/model/type/film";

export interface Counter {
    value: number;
    movie: Film;
}

export interface CounterSchema {
    countFilm: Counter[];
}