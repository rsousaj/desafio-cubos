import {
  SEARCH_MOVIE_REQUESTED,
  SEARCH_MOVIE_FINISHED,
  SEARCH_STRING_CHANGED,
  PAGE_CHANGED,
  MOVIE_DETAILS_REQUESTED,
  MOVIE_DETAILS_COMPLETED,
  CLEARED_MOVIE_DETAIL,
  LOADED_GENRES_REQUESTED,
  LOADED_GENRES_COMPLETED,
} from "../constants";
import axios from "axios";

export const search = (searchString) => async (dispatch) => {
  dispatch({ type: SEARCH_MOVIE_REQUESTED });
  dispatch({ type: SEARCH_STRING_CHANGED, payload: searchString });

  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=pt-BR&query=${searchString}&page=1&include_adult=false`
  );
  console.log(response);

  dispatch({ type: SEARCH_MOVIE_FINISHED, payload: response.data });
};

export const setPage = (page, qtyMoviesInCache, searchString) => async (
  dispatch
) => {
  console.log("page", page);
  console.log("qtyMoviesInCache", qtyMoviesInCache);
  console.log("searchString", searchString);

  if (page * 5 >= qtyMoviesInCache) {
    console.log("requisitando nova leva");
    dispatch({ type: SEARCH_MOVIE_REQUESTED });

    const pageAux = qtyMoviesInCache / 20;

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=pt-BR&query=${searchString}&page=${pageAux}&include_adult=false`
    );

    dispatch({ type: SEARCH_MOVIE_FINISHED, payload: response.data });
  }

  dispatch({ type: PAGE_CHANGED, payload: page });
};

export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: MOVIE_DETAILS_REQUESTED });

  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=pt-BR`
  );
  console.log(response);

  dispatch({ type: MOVIE_DETAILS_COMPLETED, payload: response.data });
};

export const clearMovieDetails = () => (dispatch) => {
  dispatch({ type: CLEARED_MOVIE_DETAIL });
};

export const loadGenres = () => async (dispatch) => {
  dispatch({ type: LOADED_GENRES_REQUESTED });

  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=pt-BR`
  );

  dispatch({ type: LOADED_GENRES_COMPLETED, payload: response.data.genres });
};
