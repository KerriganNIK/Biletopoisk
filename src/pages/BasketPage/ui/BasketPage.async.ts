import {lazy} from "react";

export const BasketPageAsync = lazy(() => import("./BasketPage").then(({BasketPage}) => ({default: BasketPage})));