import React from 'react';
import '../style/styleButtonSwitch.css';

const ButtonSwitchList = ({dlist, mList}) => {
    let disableButtonForward = false;
    let disableButtonBack = false;

    if (dlist.page === Math.ceil(dlist.xTotal / 10)) {
        disableButtonForward = true;
    } else if (dlist.page === 1) {
        disableButtonBack = true;
    };

    const backList = () => mList({...dlist, page: --dlist.page});
    const forwardList = () => mList({...dlist, page: ++dlist.page});

    return ( 
        <div className='contant_button_switch'>
            <button className='button_swipe back' disabled={disableButtonBack} onClick={backList}>Назад</button>
            <button className='button_swipe forward' disabled={disableButtonForward} onClick={forwardList}>Вперед</button>
        </div>
    );
};
 
export default ButtonSwitchList;