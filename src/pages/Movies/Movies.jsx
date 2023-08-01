import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieQuery } from "../../Api"
import SearchBar from "components/SearchBar/SearchBar";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import Error from "components/Error/Error";

const Movies = () => {
    const [movies, setMovies] = useState(null);
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
                const { result, totalPage } = await getMovieQuery(query)
                setMovies(result)
                setPage(totalPage)
                
            } catch (error) {
                setError(error.message)
                
            }
            finally {
                setLoading(false)
            }
        };
        getByQuery()  
    }, [query]);

    const setParams = query => {
        const params = query !== '' ? { query } : {};
        setSearchParams(params)
    }

    return (
        <div>
            <SearchBar setParams={setParams}/>
            {loading && <Loader/>}
            {movies && !loading && <MovieList movies={movies}/>}
            {page === 0 && (
                <Error errText={'ERROR'}/>
            )}
            {error && (<Error errText={`wrong ${error} TRY AGAIN`}/>)}
         
        
        </div>
    );
};

export default Movies;