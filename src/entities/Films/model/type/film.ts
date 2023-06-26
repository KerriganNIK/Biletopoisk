export interface Film {
    id: string;
    title: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    genre: string;
    rating: number;
    director: string;
    reviewIds: string[];
}

export interface Films {
    films: Film[];
}