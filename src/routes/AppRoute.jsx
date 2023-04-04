import React from 'react';
import Error from "../pages/error";
import Posts from "../pages/listAboutPost";
import About from "../pages/about";
import  CardOpen  from "../pages/cardOpen";
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoute = () => {
    return (
        <Routes>

          <Route exact path="/listAboutPost" element={<Posts/>}></Route>
          <Route path="/about" element={<About/>}></Route>

          <Route exact path='/listAboutPost/:id' element={<CardOpen/>}></Route>

          <Route path="/error" element={<Error/>}></Route>
          <Route path="/*" element={<Navigate to='/error' replace/>}></Route> 

        </Routes> 
    );
};
 
export default AppRoute;