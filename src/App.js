import "./App.css";
import ListMovies from "./containers/ListMovies";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewMovie from "./containers/ViewMovie";
import { LOADED_GENRES } from "./store/constants";
import { loadGenres } from "./store/actions";
import { useEffect } from "react";

function App({ doLoadGenres }) {
  useEffect(() => {
    doLoadGenres();
  }, []);

  return (
    <div className="App">
      <header
        style={{
          margin: 0,
          marginBottom: "10px",
          padding: "6px",
          backgroundColor: "#116193",
          color: "#00e8e4",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "Abel, sans-serif",
            fontWeight: 300,
            letterSpacing: 2,
          }}
        >
          Movies
        </h1>
      </header>

      <Router>
        <Switch>
          <Route path="/view/:id">
            <ViewMovie />
          </Route>
          <Route path="/">
            <ListMovies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  doLoadGenres: () => dispatch(loadGenres()),
});

export default connect(null, mapDispatchToProps)(App);

//https://api.themoviedb.org/3/genre/movie/list?api_key=3dd201829f02c89e874cd7886778186a&language=pt-BR
