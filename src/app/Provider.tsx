"use client";

import { Provider } from "react-redux";
import store from "@/store";

type Providers =  {
    children : React.ReactNode
}
export default function Providers({children} : Providers ){
     return(
          <Provider store={store}>
               {children}
          </Provider>
     )
}