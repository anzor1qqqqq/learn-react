import React, {useState, useEffect} from 'react';
import { LoadingAnimate } from '../components/loadingAnimate';
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

    const {id, title, body} = defaultObj;

    if (Object.keys(defaultObj).length === 0) {
        return (
            <LoadingAnimate/>
        );
    };

    return (
        <div className='content_card_open'>
            <div className='content_title'>
                <h1 className='title_id'>Пост ID: {id}</h1>
                <h2 className='title_title'>{title}</h2>
            </div>

            <div className='content_body'>
                <p className='parag_text'>{body}</p>
            </div>
        </div>
    );
};
 
export default CardOpen;