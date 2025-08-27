"use client"
import { useState } from "react";
import { AiOutlineSun , AiOutlineMoon } from "react-icons/ai";

export default function ThemeIcon(){
    const [dark , setDark] = useState(false) ;
   const iconStyle = {color : "#fff" , cursor : 'pointer' , fontSize : '20px'}
    return(
         <span onClick={() => setDark(!dark)}>
             {
                 dark ? <AiOutlineMoon style={iconStyle}/> : <AiOutlineSun style={iconStyle}/>
             }
         </span>
    )
}