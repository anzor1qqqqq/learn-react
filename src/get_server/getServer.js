export const request = async (limit, page) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`).then(response => response.json()).then(obj => {
        return obj;
    });

    return data;
};
