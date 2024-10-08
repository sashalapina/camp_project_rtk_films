import './App.css'
import FavoriteMoviesList from './components/FavoriteMoviesList'
import MovieInput from './components/MovieInput'

function App() {
  
  return (
    <>
      <div>
        <h1 className='film-icon'>Мои избранные фильмы</h1>
          <MovieInput />
          <FavoriteMoviesList />
      </div>
    </>
  )
}

export default App