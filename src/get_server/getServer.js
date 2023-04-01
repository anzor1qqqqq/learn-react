export async function request() {
    const a =  await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(obj => {
        return obj;
    });

    return a;
};
