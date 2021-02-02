import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import imagemExemplo from "../../assets/example.jpeg";
import { VIEW_MOVIE_SELECTED } from "../../store/constants";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  @media only screen and (max-width: 550px) {
    flex-direction: column;
  }
`;

const ImagemContainer = styled.div`
  background-color: #ebebeb;
  min-width: 200px;
  text-align: center;
  margin: 0;
  height: 300px;
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Topo = styled.div`
  background-color: #116193;
  min-height: 50px;

  h1 {
    margin-top: 20px;
    margin-left: 100px;
    margin-bottom: 15px;
    color: #00e8e4;
    font-size: 26px;
    font-weight: 400;
    font-family: "Abel", sans-serif;
  }
`;

const Pontuacao = styled.div`
  background-color: #116193;
  display: inline-block;
  border: 1px #116193 solid;
  border-radius: 90%;
  padding: 1px;
  margin-left: 15px;
  margin-top: 20px;
  position: absolute;
  z-index: 10;

  span {
    border: 3px #00e8e4 solid;
    display: inline-block;
    border-radius: 90%;
    padding: 15px 10px 15px 10px;
    color: #00e8e4;
  }
`;

const Caracteristicas = styled.div`
  color: #464646;
  font-size: 15px;
  background-color: #ebebeb;
  margin-right: 2px;
  height: 100%;
`;

const MoviePreview = ({
  title,
  releaseDate,
  overview,
  voteAverage,
  index,
  viewMovie,
  id,
}) => {
  const history = useHistory();

  const onClick = (index) => {
    viewMovie(index);
    history.push(`/view/${id}`);
  };

  return (
    <Container>
      <ImagemContainer>
        <img
          src={imagemExemplo}
          onClick={() => onClick(index)}
          style={{ cursor: "pointer" }}
        />
      </ImagemContainer>
      <Informacoes>
        <Topo>
          <Pontuacao>
            <span>{voteAverage * 10}%</span>
          </Pontuacao>
          <h1>{title}</h1>
        </Topo>
        <Caracteristicas>
          <p style={{ marginLeft: "100px", marginTop: 0, color: "#7a7a7a" }}>
            {releaseDate}
          </p>
          <p style={{ margin: "30px 30px 10px 30px" }}>{overview}</p>
        </Caracteristicas>
      </Informacoes>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  viewMovie: (index) => dispatch({ type: VIEW_MOVIE_SELECTED, payload: index }),
});

export default connect(null, mapDispatchToProps)(MoviePreview);
