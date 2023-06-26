import '../styles/globals.css'
import {QuestionsPage} from "@/pages/QuestionsPage";
import {Suspense} from "react";
import {Loader} from "@/shared/ui/Loader/Loader";
export default function Page() {
    return (
        <main>
            <Suspense fallback={<Loader/>}>
                <QuestionsPage/>
            </Suspense>
        </main>
    )
}
