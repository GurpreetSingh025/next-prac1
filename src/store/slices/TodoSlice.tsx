import { createSlice , PayloadAction  } from "@reduxjs/toolkit";

type todo = {
    id : number ,
    title : string ,
    status : string 
} ;
const initialState : todo[] = []  ;
const todoSlice = createSlice({
     name : 'todos' ,
     initialState  ,
     reducers : {
          addItem : (state , action : PayloadAction<todo>) => {
                state.push(action.payload) ;
          } ,

          removeItem : (state , action : PayloadAction<number>) => {
                const id = action.payload ;
                const idx = state.findIndex(obj => obj.id == id) ;
                if(idx >=0){
                    state.splice(idx , 1) ;
                }
          } ,

          editItem : (state , action : PayloadAction<{id : number ,  data : Partial<todo>}>) => {
                const id = action.payload.id ;
                const updatedData = action.payload.data ;
                return state.map(obj => obj.id == id ? {...obj , ...updatedData} : obj) 
          }
     }
})

export default todoSlice.reducer ;
export const {addItem , removeItem , editItem} = todoSlice.actions ;