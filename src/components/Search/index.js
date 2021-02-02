import React, { useState } from "react";
import styled from "styled-components";
import { search } from "../../store/actions";
import { connect } from "react-redux";

const SearchInput = styled.input`
  padding: 1em;
  margin-bottom: 1em;
  background: #ebebeb;
  border: none;
  border-radius: 30px;
  width: 100%;
`;

const Search = ({ doSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const buscar = (e) => {
    e.preventDefault();
    doSearch(searchTerm);
  };

  return (
    <>
      <form onSubmit={buscar}>
        <SearchInput
          type="text"
          placeholder="Busque um filme por nome, ano ou gênero"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      {/* <button onClick={buscar}>Pesquisar</button> */}
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  doSearch: (searchTerm) => dispatch(search(searchTerm)),
});

export default connect(null, mapDispatchToProps)(Search);
