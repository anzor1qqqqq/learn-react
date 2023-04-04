export const getOpenPostServer = async id => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(response => response.json()).then(obj => {
        return obj;
    });

    return await data;
};