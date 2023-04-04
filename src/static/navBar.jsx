import React from 'react';
import { Link } from 'react-router-dom';
import '../style/styleApp.css'

const NavBar = () => {
    return ( 
        <div className="nav_bar_contant">
          <div className="nav_bar">
            <Link to="/about" className="link_button">О сайте</Link>
            <Link to="/listAboutPost" className="link_button">Посты</Link>
          </div>
        </div>
    );
};
 
export default NavBar;