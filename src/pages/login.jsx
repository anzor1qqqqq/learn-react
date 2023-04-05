import React, {useContext} from 'react';
import { AuthContext } from '../contex/contextElem';
import { useNavigate } from "react-router-dom";
import '../style/styleLoginForm.css'

const Login = () => {
    const {defaultContex, modifiedContex} = useContext(AuthContext);
    const navig = useNavigate();

    const Login = event => {
        event.preventDefault();
        modifiedContex(true);

        localStorage.setItem('bool', 'true');

        navig('/');
    };

    return (
        <div className='content_login'>
            <div className='login_block'>
                <h1 className='title_login'>АВТОРИЗАЦИЯ</h1>

                    <form action="" className='login_form' onSubmit={event => Login(event)}>
                        <input className='input_login' type="text" placeholder='Введите email'/>
                        <input className='input_login' type="text" placeholder='Введите пароль'/>

                        <button className='login_btn'>Войти</button>
                    </form>
            </div>
        </div>
    );
};
 
export default Login;