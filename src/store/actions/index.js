import {
  SEARCH_MOVIE_REQUESTED,
  SEARCH_MOVIE_FINISHED,
  SEARCH_STRING_CHANGED,
  PAGE_CHANGED,
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

  if (page * 5 > qtyMoviesInCache) {
    dispatch({ type: SEARCH_MOVIE_REQUESTED });

    const pageAux = qtyMoviesInCache / 20;

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&language=pt-BR&query=${searchString}&page=${pageAux}&include_adult=false`
    );

    dispatch({ type: SEARCH_MOVIE_FINISHED, payload: response.data });
  }

  dispatch({ type: PAGE_CHANGED, payload: page });
};
