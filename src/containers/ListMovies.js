import React from "react";
import { connect } from "react-redux";
import MoviePreview from "../components/MoviePreview";
import Pagination from "../components/Pagination";
import Search from "../components/Search";

const ListMovies = ({ movies }) => {
  console.log("MOVIES ", movies);

  return (
    <>
      <div
        style={{
          margin: 0,
          marginBottom: "10px",
          padding: "6px",
          backgroundColor: "#116193",
          color: "#00e8e4",
          textAlign: "center",
        }}
      >
        <h1>MOVIES</h1>
      </div>
      <div style={{ width: "90%", margin: "auto" }}>
        <Search />
        {movies &&
          movies.map((movie) => (
            <MoviePreview
              title={movie.title}
              overview={movie.overview}
              releaseDate={movie.release_date}
              voteAverage={movie.vote_average}
            />
          ))}

        <Pagination />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviesShown,
});

export default connect(mapStateToProps)(ListMovies);
