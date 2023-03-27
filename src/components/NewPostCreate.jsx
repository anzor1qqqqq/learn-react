import React, {useState} from 'react';

const NewPostCreate = ({callback}) => {
    let [defaultInput, modifiedInput] = useState({title: '', body: ''});

    const styleInputContant = {
        display: 'flex',
        justifyContent: 'center',
        margin: 15,
    };

    const addNewPost = () => {
        defaultInput['id'] = Date.now();
        
        modifiedInput({...defaultInput, defaultInput});
        
        callback(defaultInput);

        modifiedInput({title: '', body: ''})
    };

    return (
        <div style={styleInputContant}>

            <input style={{marginRight: 20}} type="text" placeholder="Введите заголовок поста" 
            onChange={event => modifiedInput({...defaultInput, title: event.target.value})}
            />

            <input type="text" placeholder="Введите текст поста" 
            onChange={event => modifiedInput({...defaultInput, body: event.target.value})}
            />

            <button style={{marginLeft: 35, padding: 5}} onClick={addNewPost}>Добавить пост</button>

        </div>
    );
}
 
export default NewPostCreate;