import React from 'react';
//import { useLink } from '../hooks/useLink';
import '../style/styleButtonSwitch.css';

const ButtonSwitchList = () => {
    return ( 
        <div className='contant_button_switch'>
            <button className='button_swipe'>Назад</button>
            <button className='button_swipe'>Вперед</button>
        </div>
    );
};
 
export default ButtonSwitchList;