import React from "react";
import PrivateRoute from "./PrivateRoutes"
import Main from './login';
import App from './App';
import {BrowserRouter,Routes, Route } from "react-router-dom";

export default function Landing(){

    const pull_data = (info) =>{
        console.log(info)
    }

    return(
        <>
    <BrowserRouter >
    {/* <Main /> */}
    <Routes>
      <Route path = "/" element={<Main func = {pull_data}/>}></Route>
      <Route path = "/dashboard" element = {<PrivateRoute  data ={pull_data} redirectTo="/"><App/></PrivateRoute>}></Route>

    </Routes>
    
    </BrowserRouter>
        </>
    )
}