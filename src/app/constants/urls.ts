const baseURL = 'https://jsonplaceholder.typicode.com';

const users = `${baseURL}/users`;
const posts = (id: number) => `${baseURL}/posts/${id}`;

const urls = {
    users: {
        base: users
    },
    posts: (id: number) => posts(id)
};

export {
    urls
};