import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
     name : 'theme' ,
     initialState : false ,
     reducers : {
          switchTheme(state){
               return !state ;
          }
     }
})

export default themeSlice.reducer ;
export const {switchTheme} = themeSlice.actions ;