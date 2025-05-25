import axios from "axios";

const baseUrl = "http://localhost:4005/movies";

const getAllMovies = () => axios.get(baseUrl);

const getMovieById = movieId => axios.get(`${baseUrl}/${movieId}`);

const addNewMovie = movie => axios.post(`${baseUrl}`, movie);

const editMovie = (movieId, movie) => axios.put(`${baseUrl}/${movieId}`, movie);

const deleteMovie = movieId => axios.delete(`${baseUrl}/${movieId}`);

export { getAllMovies, getMovieById, addNewMovie, editMovie, deleteMovie };
