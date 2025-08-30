import { configureStore } from "@reduxjs/toolkit"; 
import themeSlice from "./slices/ThemeSlice";
import todoSlice from "./slices/TodoSlice" ;

const store = configureStore({
    reducer : {
        theme : themeSlice ,
        todos : todoSlice 
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
