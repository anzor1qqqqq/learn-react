import { useState } from 'react';
import { request } from "../get_server/getServer";
import { XCounter } from '../get_server/XCounter';

export const useFetching = (callback, listElem) => {
    const [defaultLoad, modifiedLoad] = useState(true);
    const [statusDefault, modifiedStatus] = useState('');
    let date;

    const startDate = async (list, dList) => {
        const x = await XCounter();
        list({...dList, xTotal: x})

        modifiedLoad(true);
        
        date = await request(listElem.limit, listElem.page).catch(error => console.log(error));

        try {
            if (!date) {
                throw new Error('Ошибка! - неправильная ссылка');
            };

            await callback(date);
        } catch(error) {
            modifiedStatus(date);
            console.log(error.message);
        };

        modifiedLoad(false);
    };

    return [startDate, defaultLoad, statusDefault];
};