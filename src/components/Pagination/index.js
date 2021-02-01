import React from "react";
import ReactPaginate from "react-paginate";
import { connect } from "react-redux";
import { setPage } from "../../store/actions";
import "./pagination.css";

const Pagination = ({
  page,
  qtyMovies,
  qtyMoviesInCache,
  searchString,
  onSetPage,
}) => {
  const handlePageClick = (data) => {
    onSetPage(++data.selected, qtyMoviesInCache, searchString);
  };

  return (
    <div style={{ margin: "30px" }}>
      <ReactPaginate
        pageCount={qtyMovies}
        pageRangeDisplayed={4}
        marginPagesDisplayed={0}
        previousLabel={null}
        nextLabel={null}
        breakLabel={null}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        pageClassName={"pageClassName"}
        activeClassName={"activeClassName"}
        activeLinkClassName={"activeLink"}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  page: state.parte,
  qtyMovies: state.total_results,
  qtyMoviesInCache: state.results.length,
  searchString: state.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  onSetPage: (page, qtyMoviesInCache, searchString) =>
    dispatch(setPage(page, qtyMoviesInCache, searchString)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
