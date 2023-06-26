'use client';
import {useEffect, useState} from "react";
import {TRANSLATIONS} from "@/shared/config/translations/translations";

const useTranslatedGenre = (genre: string): string => {
    const [translatedGenre, setTranslatedGenre] = useState<string>(genre);

    useEffect(() => {
        if (TRANSLATIONS.genres.hasOwnProperty(genre)) {
            setTranslatedGenre(TRANSLATIONS.genres[genre]);
        }
    }, [genre]);

    return translatedGenre;
};

export default useTranslatedGenre;
