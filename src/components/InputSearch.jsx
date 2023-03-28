import React from 'react';

const InputSearch = ({callback}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 20}}>
            <input type="text" onChange={event => callback(event.target.value)}/>
        </div>
    );
}
 
export default InputSearch;