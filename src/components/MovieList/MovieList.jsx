import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";
import notfound from "../../images/not-found.JPG";

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <div className={css.home_container}>
          <ul className={css.home_list}>
           {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                state={{ from: location }}
                to={`/movies/${movie.id}`}>
                  <img
                src={movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : notfound
                }
                alt={movie.title}
              />
                </Link>
              </li>
            )
           })}
          </ul>
          </div>
    )
};

export default MovieList;