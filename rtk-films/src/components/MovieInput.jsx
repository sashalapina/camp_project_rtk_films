import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from '../features/movies/favoriteMoviesSlice';

const MovieInput = () => {
    const [movieTitle, setMovieTitle] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.favoriteMovies.movies);
    
    const handleAddMovie = () => {
      setError('');
      
      if (movieTitle.trim() === '') {
        setError('Назвение фильма не может быть пустым');
        return;
      }
        
      const movieExists = movies.some(movie => movie.title.toLowerCase() === movieTitle.toLowerCase());
        if (movieExists) {
          setError('Этот фильм уже добавлен в избранное');
          return;
        }

      const newMovie = {
        id: Date.now(),
        title: movieTitle,
      };
      dispatch(addMovie(newMovie));
      setMovieTitle('');
    };

    const handleInputChange = (e) => {
      setMovieTitle(e.target.value);
      if (error) {
        setError('');
      }
    };
    
    return (
      <>
      <div className='film-add-container'>
        <input
          type="text"
          placeholder="Введите название фильма"
          value={movieTitle}
          onChange={handleInputChange}
        />
        <button onClick={handleAddMovie}>
          Добавить в избранное
        </button>
      </div>
      <div className='error-message-container'>
        {error && <p className='error-message'>{error}</p>}
      </div>
      </>
    );
};

export default MovieInput;
