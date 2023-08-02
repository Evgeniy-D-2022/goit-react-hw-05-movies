import BackLink from "components/BackLink/BackLink";
import Loader from "components/Loader/Loader";
import { getMovieId } from "../../Api";
import css from "./MoviesDetails.module.css";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";


const MoviesDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    console.log(movie);
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    useEffect(() => {
        getMovieId(id).then(data=> setMovie(data))
    }, [id, setMovie]);

    const { poster_path, title, vote_average, overview, genres, budget } = movie;

    return (
        <main>
            <BackLink to={backLinkHref.current}/>
            <div>
                <img src={poster_path && `https://image.tmdb.org/t/p/w300${poster_path}` } alt="Film Poster" />
                <div>
                    <p>{title}</p>
                    {vote_average && (
            <p>User score: {Math.round(vote_average * 10)}%</p>
          )}
          <p><span>Owerview </span>{overview}</p>
          <p><span>Genres: </span>
          {genres?.map(({ name }) => name).join(', ')}</p>
                </div>
            </div>
            <div className={css.info}>
                <p><span>Budget: </span>{budget} USD</p>
                <p>Info: </p>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Review</Link>
                    </li>
                </ul>
            </div>
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </main>
    )

}

export default MoviesDetails;