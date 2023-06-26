import '../styles/globals.css'
import {AboutPage} from "@/pages/AboutPage";
import {Loader} from "@/shared/ui/Loader/Loader";
import {Suspense} from "react";
export default function Page() {
    return (
        <main>
            <Suspense fallback={<Loader/>}>
                <AboutPage/>
            </Suspense>
        </main>
    )
}
