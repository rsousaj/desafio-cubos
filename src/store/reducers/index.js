import {
  PAGE_CHANGED,
  SEARCH_MOVIE_FINISHED,
  SEARCH_MOVIE_REQUESTED,
  SEARCH_STRING_CHANGED,
} from "../constants";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  moviesShown: [],
  parte: 0,
  searchString: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUESTED:
      return {
        ...state,
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
    default:
      return state;
  }
};
