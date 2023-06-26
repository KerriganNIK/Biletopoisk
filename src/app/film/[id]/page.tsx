'use client'
import {Suspense} from "react";
import {Loader} from "@/shared/ui/Loader/Loader";
import {FilmPage} from "@/pages/FilmPage";
import '../../../app/styles/globals.css';
export default function Page({params}: {params: {id: string}}) {
    return (
        <main className='container'>
            <Suspense fallback={<Loader/>}>
                <FilmPage id={params.id}/>
            </Suspense>
        </main>
    )
}
