import {lazy} from "react";

export const FilmPageAsync = lazy(() => import("./FilmPage").then(({FilmPage}) => ({ default: FilmPage })));