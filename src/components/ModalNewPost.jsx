import React, {useState} from 'react';
import '../style/styleModale.css'

const ModalNewPost = ({status, setStatus, callback, length}) => {
    const [defaultObj, modifiedObj] = useState({title: '', body: ''});

    let classStyle;

    status ? classStyle = ['modal_block', 'active'] : classStyle = ['modal_block'];

    const endProgram = () => {
        defaultObj['id'] = length;
        modifiedObj({...defaultObj, defaultObj});


        callback(defaultObj);
        setStatus(false);

        modifiedObj({title: '', body: ''})
    };
    
    return (  
        <div className={classStyle.join(' ')} onClick={() => {
            setStatus(false);
            modifiedObj({title: '', body: ''})
        }}>
            <div className='modal_content' onClick={event => event.stopPropagation()}>
                <div className='style_input_contant'>

                    <input className='input_create_post' type="text" placeholder="Введите заголовок поста" 
                    onChange={event => modifiedObj({...defaultObj, title: event.target.value})}
                    />

                    <input className='input_create_post' type="text" placeholder="Введите текст поста" 
                    onChange={event => modifiedObj({...defaultObj, body: event.target.value})}
                    />

                    <button className='button' onClick={endProgram}>Добавить пост</button>

                </div>
            </div>
        </div>
    );
};
 
export default ModalNewPost;