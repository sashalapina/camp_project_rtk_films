import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie } from '../features/movies/favoriteMoviesSlice';

const MovieInput = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const dispatch = useDispatch();
    
    const handleAddMovie = () => {
        if (movieTitle.trim()) {
            const newMovie = {
                id: Date.now(),
                title: movieTitle,
            };
            dispatch(addMovie(newMovie));
            setMovieTitle('');
        }
    };
    
    return (
      <div className='film-add-container'>
        <input
          type="text"
          placeholder="Введите название фильма"
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
        />
        <button onClick={handleAddMovie}>
          Добавить в избранное
        </button>
      </div>
    );
};

export default MovieInput;
