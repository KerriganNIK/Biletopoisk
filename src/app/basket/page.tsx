import '../styles/globals.css'
import {Suspense} from "react";
import {Loader} from "@/shared/ui/Loader/Loader";
import {BasketPage} from "@/pages/BasketPage";
export default function Page() {
    return (
        <main className='container'>
            <Suspense fallback={<Loader/>}>
                <BasketPage/>
            </Suspense>
        </main>
    )
}
