import React from "react";
import styled from "styled-components";
import imagemExemplo from "../../assets/example.jpeg";

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
`;

const Informacoes = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Topo = styled.div`
  background-color: #116193;
  min-height: 50px;

  p {
    margin-top: 30px;
    margin-left: 100px;
    margin-bottom: 0px;
    color: #00e8e4;
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
  background-color: #ebebeb;
  margin-right: 2px;
  height: 100%;
`;

const MoviePreview = ({ title, releaseDate, overview, voteAverage }) => {
  return (
    <Container>
      <ImagemContainer>
        <img src={imagemExemplo} />
      </ImagemContainer>
      <Informacoes>
        <Topo>
          <Pontuacao>
            <span>{voteAverage * 10}%</span>
          </Pontuacao>
          <p>{title}</p>
        </Topo>
        <Caracteristicas>
          <p style={{ marginLeft: "100px", marginTop: 0 }}>{releaseDate}</p>
          <p style={{ marginTop: "30px" }}>{overview}</p>
        </Caracteristicas>
      </Informacoes>
    </Container>
  );
};

export default MoviePreview;
