import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchMovieDetails } from "../store/actions";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  width: 90%;
  margin: auto;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  flex: 1;
  background-color: #ebebeb;

  h1 {
    margin-top: 10px;
    margin-left: 30px;
    margin-bottom: 10px;
    color: #116193;
    font-size: 26px;
    font-weight: 400;
    font-family: "Abel", sans-serif;
  }
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f3f3f3;
`;

const Caracteristicas = styled.div`
  color: #464646;
  font-size: 15px;
  margin-left: 30px;
  margin-right: 30px;
`;

const TituloSecao = styled.h2`
  font-size: 19px;
  font-weight: 400;
  font-family: "Abel", sans-serif;
  color: #116193;
  border-bottom: 2px solid #00e8e4;
  padding-bottom: 5px;
`;

const ImagemContainer = styled.div`
  background-color: #ebebeb;
  text-align: center;
  margin: 0;
`;

const ViewMovie = ({ fetchMovieDetails, selectedMovie, loading }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchMovieDetails(id);

    return () => {};
  }, [id]);

  return (
    <Container>
      <Title>
        <h1>{selectedMovie.title}</h1>
      </Title>
      <Informacoes>
        <Caracteristicas>
          <TituloSecao>Sinopse</TituloSecao>
          <p>{selectedMovie.overview}</p>
          <br />
          <TituloSecao>Informações</TituloSecao>
          <table style={{ width: "100%" }}>
            <thead
              style={{
                fontFamily: "Abel, sans-serif",
                fontSize: "16px",
                textAlign: "left",
                color: "#116193",
              }}
            >
              <th>Situação</th>
              <th>Idioma</th>
              <th>Duração</th>
              <th>Orçamento</th>
              <th>Receita</th>
              <th>Lucro</th>
            </thead>
            <tbody>
              {loading ? (
                <Loader
                  type="Puff"
                  color="#00BFFF"
                  height={30}
                  width={30}
                  timeout={3000}
                  style={{ textAlign: "center" }}
                />
              ) : (
                <tr>
                  <td>{selectedMovie.status}</td>
                  <td>{selectedMovie.original_language}</td>
                </tr>
              )}
            </tbody>
          </table>
        </Caracteristicas>
        <ImagemContainer>
          <img src="https://image.tmdb.org/t/p/w300/bqBGQUV1IsLP1zXwMxwgXwYfNG2.jpg" />
        </ImagemContainer>
      </Informacoes>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchMovieDetails: (id) => dispatch(fetchMovieDetails(id)),
  clearMovieDetails: () => dispatch(),
});

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
  loading: state.movieLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewMovie);
