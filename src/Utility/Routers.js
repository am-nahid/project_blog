import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home, Bollywood, Technology, Hollywood, Fitness, Food , CommonPage} from "../Routes";
import { PageNotFound } from "../Components";



const AppRoutes = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/bollywood" element={<Bollywood/>}/>
            <Route path="/technology" element={<Technology/>}/>
            <Route path='/hollywood' element={<Hollywood/>}/>
            <Route path='/fitness' element={<Fitness/>}/>
            <Route path='/food' element={<Food/>}/>
            <Route path='/common' element={<CommonPage/>}/>

            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;