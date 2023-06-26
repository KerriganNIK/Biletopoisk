export interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
}

export interface Reviews {
    reviews: Review[];
}
