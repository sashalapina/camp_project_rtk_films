import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie, clearFavorites } from '../features/movies/favoriteMoviesSlice';

const FavoriteMoviesList = () => {
    const movies = useSelector((state) => state.favoriteMovies.movies);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('')

    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    return (
      <div>
        <h2>Избранные фильмы</h2>
        <div className="search-container">
          <input
            type="text"
            placeholder='Поиск'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => dispatch(clearFavorites())}>Очистить список</button>
        </div>
        <ul className='list-reset'>
          {filteredMovies.map((movie) => (
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
