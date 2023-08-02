import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieQuery } from "../../Api"
import SearchBar from "components/SearchBar/SearchBar";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import css from "./Movies.module.css";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') ?? '';

    useEffect(() => {
        if (query === '') return;

        const getByQuery = async() => {
            setLoading(true);
            try {
                const response = await getMovieQuery(query, page);
                const searchMovies = response.results;
                if(searchMovies.length === 0) {
                    return setError(`Not Found ${query}`)
                }
                setMovies(searchMovies)            
                
            } catch (error) {
                setError(error.message)    
            }
            finally {
                setLoading(false)
            }
        };
        getByQuery()  
    }, [page, query]);

    // const handleSubmit = query => {
    //     const params = query !== '' ? { query } : {};
    //     setSearchParams(params);   
    // };

    const setParams = newQuery => {
        if (newQuery === '') {
          alert('Empty string');
          return;
        } else if (query === newQuery) {
          alert('Try again');
          return;
        }
    
        setPage(1);
        setMovies([]);
        setError(null);
        setLoading(true);
        setSearchParams({ query: newQuery });
      };

    return (
        <div className={css.movies_container}>
            <SearchBar setParams={setParams}/>
            {error && <div className={css.error_text}>{error}</div>}
      {movies.length !== 0 && query !== '' && (
        <>
          <MovieList movies={movies} />
          {loading && <Loader />}
        </>
      )}
      {loading && <Loader />}
        </div>
    );
};

export default Movies;