'use client';
import {Provider} from "react-redux";
import {ReactNode} from "react";
import {store} from "@/app/providers/StoreProvider/store/store";

interface StoreProviderProps {
    children: ReactNode;
}

export const StoreProvider = ({children}: StoreProviderProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};