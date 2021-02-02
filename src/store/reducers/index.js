import {
  CLEARED_MOVIE_DETAIL,
  LOADED_GENRES_REQUESTED,
  PAGE_CHANGED,
  SEARCH_MOVIE_FINISHED,
  SEARCH_MOVIE_REQUESTED,
  SEARCH_STRING_CHANGED,
  LOADED_GENRES_COMPLETED,
  VIEW_MOVIE_SELECTED,
  MOVIE_DETAILS_COMPLETED,
  MOVIE_DETAILS_REQUESTED,
} from "../constants";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  moviesShown: [],
  parte: 0,
  searchString: "",
  loadingList: false,
  genres: [],
  selectedMovie: {},
  movieLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUESTED:
      return {
        ...state,
        loadingList: true,
      };

    case SEARCH_MOVIE_FINISHED:
      const moviesShown = action.payload.results.slice(0, 5);
      const results = [...state.results, ...action.payload.results];

      return {
        ...state,
        ...action.payload,
        results,
        moviesShown,
        parte: 1,
        loadingList: false,
      };

    case SEARCH_STRING_CHANGED:
      console.log("action.payload:", action.payload);

      return {
        ...state,
        searchString: action.payload,
      };

    case PAGE_CHANGED:
      const page = action.payload;
      const begin = (page - 1) * 5;
      const end = begin + 5;

      return {
        ...state,
        parte: page,
        moviesShown: state.results.slice(begin, end),
      };

    case MOVIE_DETAILS_REQUESTED:
      return {
        ...state,
        movieLoading: true,
      };

    case MOVIE_DETAILS_COMPLETED:
      const UpdatedselectedMovie = Object.assign({}, state.selectedMovie);
      UpdatedselectedMovie.budget = action.payload.budget;
      UpdatedselectedMovie.original_language = action.payload.original_language;
      UpdatedselectedMovie.status = action.payload.status;
      UpdatedselectedMovie.revenue = action.payload.revenue;

      return {
        ...state,
        selectedMovie: UpdatedselectedMovie,
        movieLoading: false,
      };

    case CLEARED_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: {},
      };

    case LOADED_GENRES_REQUESTED:
      return {
        ...state,
      };

    case LOADED_GENRES_COMPLETED:
      console.log(action.payload);

      return {
        ...state,
        genres: action.payload,
      };

    case VIEW_MOVIE_SELECTED:
      const selectedMovie = Object.assign({}, state.results[action.payload]);
      console.log(selectedMovie);
      return {
        ...state,
        selectedMovie,
      };

    default:
      return state;
  }
};
