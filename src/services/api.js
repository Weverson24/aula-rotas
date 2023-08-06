import axios from 'axios'
// BASE URL : https://api.themoviedb.org/3
// URL DA API : /discover/movie?api_key=338548ff71ef864f137bd2d29c0cd9f7&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
