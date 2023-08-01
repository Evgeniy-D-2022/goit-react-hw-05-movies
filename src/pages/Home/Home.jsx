import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getTrendindMovies } from "../../Api";
import css from "./Home.module.css"
import MovieList from "components/MovieList/MovieList";

const Home = () => {

const [movies, setMovies] = useState([]);
const location = useLocation();

useEffect(()=> {
  getTrendindMovies().then(data => setMovies(data.results))
}, []);

    return (
          <div className={css.home_container}>
          <h1 className={css.home_title}>Tranding today</h1>
          <MovieList movies={movies} location={location}/>
          </div>
    )
}

export default Home;