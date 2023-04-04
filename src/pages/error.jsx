import React from 'react';

const ErrorList = () => {
    const containerMessError = {
        display: 'flex',
        width: '70%',
        margin: '20px auto',
        flexDirection: 'column',
        textAlign: 'center',
        fontSize: 20,
    };

    return (
        <div style={containerMessError}>
            <h1>Oops!</h1>
            <p>Данной ссылке не существует</p>
        </div>
    );
};
 
export default ErrorList;