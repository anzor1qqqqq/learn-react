import React, {useContext} from 'react';
import Error from "../pages/error";
import Posts from "../pages/listAboutPost";
import About from "../pages/about";
import CardOpen  from "../pages/cardOpen";
import Login from '../pages/login';
import { LoadingAnimate } from '../components/loadingAnimate';
import { AuthContext } from '../contex/contextElem';
import { Routes, Route, Navigate } from "react-router-dom";

const AppRoute = () => {
  const {defaultContex, modifiedContex, defaultLoad} = useContext(AuthContext);

  if (defaultLoad) {
    return(
      <LoadingAnimate/>
    );
  }

  if (defaultContex) {
    return (
      <Routes>

        <Route path="/" element={<Navigate to={'/listAboutPost'} push/>}></Route>

        <Route path="/listAboutPost" element={<Posts/>}></Route>
        <Route path="/about" element={<About/>}></Route>

        <Route path='/listAboutPost/:id' element={<CardOpen/>}></Route>

        <Route path="/error" element={<Error/>}></Route>
        <Route path="/login" element={<Navigate to='/listAboutPost' replace/>}></Route> 
        <Route path="/*" element={<Navigate to='/error' replace/>}></Route> 

      </Routes> 
  );
  } else {
    return (
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/*' element={<Navigate to='/login' replace/>}></Route>
      </Routes>
    );
  };
};
 
export default AppRoute;