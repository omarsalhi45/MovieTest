import { GET_MOVIES } from "../../constants/actionTypes";
import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "react-js-pagination";

import useStyles from "./styles";
import Movie from "./movie/Movie";
import { categoriesCall, MoviesCall } from "../../actions/moviesCall";
const Movies = () => {
  const classes = useStyles();
  const itemsCountPerPage = 4;
  const [activePage, setActivePage] = useState(1);
  const [bounds, setBounds] = useState([0, itemsCountPerPage]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { moviesRed, moviesFiltred } = useSelector((state) => state.moviesRed);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setBounds([
      (pageNumber - 1) * itemsCountPerPage,
      pageNumber * itemsCountPerPage,
    ]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const searchMovie = () => {
    if (search.trim()) {
      dispatch(categoriesCall(search));
    }
  };
  useEffect(() => {
    dispatch(MoviesCall());
  }, []);

  return (
    // <div className="d-flex  align-items-center flex-column">
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={6} md={9}>
            {moviesFiltred ? (
              <Grid
                container
                alignItems="stretch"
                spacing={3}
              >
                {moviesFiltred.slice(bounds[0], bounds[1]).map((movie) => (
                  <Grid key={movie.id} item xs={12} sm={12} md={6} lg={3}>
                    <Movie movie={movie} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Grid
                className={classes.container}
                container
                alignItems="stretch"
                spacing={3}
              >
                {moviesRed.slice(bounds[0], bounds[1]).map((movie) => (
                  <Grid key={movie.id} item xs={12} sm={12} md={6} lg={3}>
                    <Movie movie={movie} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
            >
              <TextField
                name="search"
                variant="outlined"
                label="search Memories"
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />

              <Button onClick={searchMovie} variant="contained" color="primary">
                Search
              </Button>
            </AppBar>
            <Pagination
              className={classes.Pagination}
              activePage={activePage}
              itemsCountPerPage={itemsCountPerPage}
              totalItemsCount={12}
              pageRangeDisplayed={itemsCountPerPage / 2}
              onChange={handlePageChange}
              itemClass="page-item"
              linkClass="page-link"
            />
          </Grid>
        </Grid>
      </Container>
    </Grow>
    // </div>
  );
};

export default Movies;
