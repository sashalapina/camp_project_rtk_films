import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../features/movies/favoriteMoviesSlice';

const FavoriteMoviesList = () => {
    const movies = useSelector((state) => state.favoriteMovies.movies);
    const dispatch = useDispatch();
    
    return (
      <div>
        <h2>Избранные фильмы</h2>
        <ul className='list-reset'>
            {movies.map((movie) => (
                <li key={movie.id}>
                    {movie.title}
                  <button onClick={() => dispatch(removeMovie(movie.id))}>Удалить</button>
                </li>
            ))}
        </ul>
      </div>
    );
};

export default FavoriteMoviesList;
