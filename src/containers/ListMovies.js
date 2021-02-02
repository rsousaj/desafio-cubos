import React, { useEffect } from "react";
import { connect } from "react-redux";
import MoviePreview from "../components/MoviePreview";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import Loader from "react-loader-spinner";

const ListMovies = ({ movies, loading }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [movies]);

  return (
    <>
      <main style={{ width: "90%", margin: "auto" }}>
        <Search />
        {loading ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
            style={{ textAlign: "center" }}
          />
        ) : (
          movies.map((movie, index) => (
            <MoviePreview
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
              index={index}
              id={movie.id}
            />
          ))
        )}

        <Pagination />
      </main>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviesShown,
  loading: state.loadingList,
});

export default connect(mapStateToProps)(ListMovies);
