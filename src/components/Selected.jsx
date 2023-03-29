import React from 'react';

const SelectedOption = ({defaultOption, optionAnoth, filter, setFilter, value}) => {
    return ( 
        <div>
            <select value={value} name="" id="" onChange={event => setFilter({...filter, sort: event.target.value})}>
                <option value="" disabled>{defaultOption}</option>
                
                {optionAnoth.map(item => 
                    <option value={item.id} key={item.name}>{item.name}</option>
                )}
            </select>
        </div>
    );
};
 
export default SelectedOption;