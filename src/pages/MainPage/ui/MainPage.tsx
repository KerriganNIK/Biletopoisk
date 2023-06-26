'use client';
import {classNames} from "@/shared/lib/classNames/classNames";
import {useGetCinemaByIdQuery, useGetCinemaQuery, useGetFilmsQuery} from "@/entities/Films/model/services/FilmsApi/FilmsApi";
import {FilmsList} from "@/entities/Films/ui/FilmsList/FilmsList";
import {Sidebar} from "@/widgets/Sidebar/ui/Sidebar";
import React, {useState} from "react";
import classes from "./MainPage.module.css";
import {TRANSLATIONS} from "@/shared/config/translations/translations";
import {Loader} from "@/shared/ui/Loader/Loader";

interface MainPageProps {
    className?: string;
}

export const MainPage = ({className}: MainPageProps) => {
    const [searchValue, setSearchValue] = useState('');
    const [selectedCinemaId, setSelectedCinemaId] = useState<string | null>(null);
    const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
    const [filmsDataSort, setFilmsData] = useState<any[]>([]);

    const { data: filmsData, isLoading: filmsIsLoading, error: filmsError } = useGetFilmsQuery({});
    const { data: cinemaData, isLoading: cinemaIsLoading, error: cinemaError } = useGetCinemaQuery({});
    const { data: cinemaMoviesData, isLoading: cinemaMoviesIsLoading, error: cinemaMoviesError } = useGetCinemaByIdQuery(selectedCinemaId ?? '');


    if (filmsIsLoading || cinemaIsLoading || cinemaMoviesIsLoading) {
        return <Loader/>;
    }

    if (filmsError || !filmsData || cinemaError || !cinemaData || cinemaMoviesError || !cinemaMoviesData) {
        return <div>Error</div>;
    }

    const optionsCinema = [
        { content: 'Не выбрано', onClick: handleCinemaReset },
        ...cinemaData.map((cinema: { name: string, id: string }) => ({
            content: cinema.name,
            onClick: () => handleCinemaClick(cinema.id),
        })),
    ];

    const optionsGenre = [
        {content: 'Не выбрано', onClick: handleResetGenre},
        ...Object.keys(TRANSLATIONS.genres).map((genre: string) => ({
        content: TRANSLATIONS.genres[genre],
        onClick: () => handleGenreClick(genre),
    }))];

    function handleCinemaClick(cinemaId: string) {
        setSelectedCinemaId(cinemaId);
    }

    function handleGenreClick(genre: string) {
        setSelectedGenre(genre);
    }

    function handleSearchChange(value: string) {
        setSearchValue(value);
    }

    function handleResetGenre() {
        setSelectedGenre(null);
    }

    function handleCinemaReset() {
        setSelectedCinemaId(null);
    }

    return (
        <div className={classNames(classes.MainPage, {}, [className])}>
            <div className={classes.SideBar}>
                <Sidebar
                    valueInput={searchValue}
                    searchChange={handleSearchChange}
                    itemCinema={optionsCinema}
                    itemGenre={optionsGenre}
                />
            </div>
            <FilmsList
                className={classes.Films}
                data={cinemaMoviesData || filmsDataSort || filmsData}
                searchItem={searchValue}
                genre={selectedGenre}
            />
        </div>
    );
};
