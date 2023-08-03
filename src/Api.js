import axios from "axios";

const MAIN_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'c9873e67c5e03bd61e79d852c2fd46a6';

export async function getTrendindMovies() {
    const url = `${MAIN_URL}/trending/movie/day?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url)
        return response.data;
    }
    catch (error) {
       console.log(error);
    }
};

export async function getMovieId(id) {
    const url = `${MAIN_URL}/movie/${id}?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url)
        return response.data;
    }
    catch (error) {
       console.log(error);
    }
};

export async function getMovieCast(id) {
    const url = `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url)
        // return response.data;
        return response.data.cast;
    }
    catch (error) {
       console.log(error);
    }
};

export async function getMovieReview(id) {
    const url = `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}`;
    try {
        const response = await axios.get(url)
        // return response.data;
        return response.data.results;
    }
    catch (error) {
       console.log(error);
    }
};

export async function getMovieQuery(query, page) {
    const url = `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
    try {
        const response = await axios.get(url)
        return response.data;
    }
    catch (error) {
       console.log(error);
    }
};
