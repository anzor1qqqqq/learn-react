export const XCounter = async callback => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=0');
    let total = response.headers.get('X-Total-Count');

    await callback(total);      
};