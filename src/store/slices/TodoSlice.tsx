import { createSlice , PayloadAction  } from "@reduxjs/toolkit";
import { ALL , ACTIVE , COMPLETED } from "@/constant/statusFilterConstant";

type todo = {
    id : number ,
    title : string ,
    status : string 
} ;
// const initialState : todo[] = []  ;
const initialState = {
     items : [] as todo[] ,
     filter: ALL as "all" | "active" | "completed",
}
const todoSlice = createSlice({
     name : 'todos' ,
     initialState  ,
     reducers : {
          addItem : (state , action : PayloadAction<todo>) => {
                state.items.push(action.payload) ;
          } ,

          removeItem : (state , action : PayloadAction<number>) => {
                const id = action.payload ;
                const idx = state.items.findIndex(obj => obj.id == id) ;
                if(idx >=0){
                    state.items.splice(idx , 1) ;
                }
          } ,

          editItem : (state , action : PayloadAction<{id : number ,  data : Partial<todo>}>) => {
                const id = action.payload.id ;
                const updatedData = action.payload.data ;
                if(id >= 0){
                     state.items[id] = {...state.items[id] , ...updatedData} 
                }
                // return state.items.map(obj => obj.id == id ? {...obj , ...updatedData} : obj) 
          } ,
          setFilter : (state , action : PayloadAction<"all" | "active" | "completed">) => {
               state.filter = action.payload ;
          }
     }
})

export default todoSlice.reducer ;
export const {addItem , removeItem , editItem , setFilter} = todoSlice.actions ;