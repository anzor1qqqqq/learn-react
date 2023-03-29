import React from 'react';

const InputSearch = ({filter, setFilter}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20}}>
            <input type="text" onChange={event => setFilter({...filter, search: event.target.value})}/>
        </div>
    );
};
 
export default InputSearch;