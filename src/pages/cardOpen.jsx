import React, {useState, useEffect} from 'react';
import { getOpenPostServer } from '../get_server/getOpenPostServer';
import { useParams } from 'react-router-dom';
import '../style/styleCardPost.css'

const CardOpen = () => {
    const [defaultObj, modifiedObj] = useState({});

    const index = useParams();

    const a = async () => {
        const data = await getOpenPostServer(index.id);
        modifiedObj(data);
    };

    useEffect(() => {
        a();
    }, []);

    const {userId, title, body} = defaultObj;

    return (
        <div className='content_card_open'>
            <div className='content_title'>
                <h1 className='title_id'>Пост ID:{userId}</h1>
                <h2 className='title_title'>{title}</h2>
            </div>

            <div className='content_body'>
                <p className='parag_text'>{body}</p>
            </div>
        </div>
    );
};
 
export default CardOpen;