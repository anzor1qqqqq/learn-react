import React, { useContext } from 'react';
import { AuthContext } from '../contex/contextElem';
import { Link, useNavigate } from 'react-router-dom';
import '../style/styleApp.css'

const NavBar = () => {
  const {defaultContex, modifiedContex} = useContext(AuthContext);
  const navig = useNavigate();

  const CloseUser = () => {
    modifiedContex(false);
    localStorage.removeItem('bool');
    navig('/');
  };

  return ( 
      <div className="nav_bar_contant">
        <div className="nav_bar">
          <Link to="/about" className="link_button">О сайте</Link>
          <Link to="/listAboutPost" className="link_button">Посты</Link>
        
          {defaultContex 
          ? <Link onClick={CloseUser} className="link_button close_btn">Выйти</Link>
          : ''
          }
        </div>
      </div>
  );
};
 
export default NavBar;