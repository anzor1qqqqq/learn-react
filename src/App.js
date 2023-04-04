import React from "react";
import NavBar from "./static/navBar";
import AppRoute from "./routes/AppRoute";
import { BrowserRouter } from "react-router-dom";

import './style/styleApp.css'

function App() {

    return (
      <BrowserRouter>
        <NavBar/>
        <AppRoute/>
      </BrowserRouter>
    );
};

export default App;