'use client';
import React, {Suspense} from 'react';
import {MainPage} from "@/pages/MainPage";
import './styles/globals.css';
import {Loader} from "@/shared/ui/Loader/Loader";

export default function Home() {
    return (
        <main>
            <Suspense fallback={<Loader/>}>
                <MainPage/>
            </Suspense>
        </main>
    );
}
