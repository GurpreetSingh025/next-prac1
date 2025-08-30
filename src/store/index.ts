import { configureStore } from "@reduxjs/toolkit"; 
import themeSlice from "./slices/ThemeSlice";

const store = configureStore({
    reducer : {
        theme : themeSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
