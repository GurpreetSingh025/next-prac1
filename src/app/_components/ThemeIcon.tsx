"use client"
import { useState } from "react";
import { AiOutlineSun , AiOutlineMoon } from "react-icons/ai";
import { useSelector , useDispatch } from "react-redux";
import { switchTheme } from "@/store/slices/ThemeSlice" ;
// import { RootState } from "@reduxjs/toolkit/query";
import { RootState } from "@/store";

export default function ThemeIcon(){
   const dispatch = useDispatch() ;
   const themeState = useSelector((state : RootState) => state.theme) ;
   const iconStyle = {color : "#fff" , cursor : 'pointer' , fontSize : '20px'}
    return(
         <span onClick={() => dispatch(switchTheme())}>
             {
                 themeState ? <AiOutlineMoon style={iconStyle}/> : <AiOutlineSun style={iconStyle}/>
             }
         </span>
    )
}