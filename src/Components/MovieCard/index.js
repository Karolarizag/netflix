import { Link } from 'react-router-dom'
import { add, arrowDownCircle, like, play, netflix } from '../../Services/icons'

export const MovieCard = ({ movie }) => {

  const img = `${process.env.REACT_APP_API_IMG}${movie.backdrop_path}`
  const movieTitle = movie.title.length > 25 ? `${movie.title.slice(0, 25)}...` : movie.title

  return (
    <div class="movie-card">
      <img class="card-front movie-img" src={img} alt={movie.title} />
      <img class="netflix-icon" src={netflix} alt="netflix" />
      <div class="card-hover card-back p-3">
        <div class="flex justify-between">
          <div class="flex">
            <button>
              <Link to={`/${movie.id}`}>
                {play}
              </Link>
            </button>
            <button>{add}</button>
            <button>{like}</button>
          </div>
          <div>
            <Link to={`/${movie.id}`}>
              <button>{arrowDownCircle}</button>
            </Link>
          </div>
        </div>
        <h5>{movieTitle}</h5>
        <div class="mb-2">
          <span class={`badge text-base bg-alert ${movie.adult ? 'bg-alert' : 'bg-success'}`}>{movie.adult ? '+18' : '+12'}</span>
        </div>
      </div>
    </div>
  )

}
