import React, { useState, useEffect } from "react";
import NavBar from "./static/navBar";
import AppRoute from "./routes/AppRoute";
import { AuthContext } from "./contex/contextElem";
import { BrowserRouter } from "react-router-dom";
import './style/styleApp.css'

function App() {
    const [defaultContex, modifiedContex] = useState(false);
    const [defaultLoad, modifiedLoad] = useState(true);

    const protect = () => {
      modifiedLoad(false);

      const local = localStorage.getItem('bool') || false;

      if (local === 'true') modifiedContex(true);
    };

    useEffect(() => {
      protect();
    }, []);

    return (
      <AuthContext.Provider value={{
        defaultContex,
        modifiedContex,
        defaultLoad,
      }}>
        <BrowserRouter>
          <NavBar/>
          <AppRoute/>
        </BrowserRouter>
      </AuthContext.Provider>
    );
};
export default App;