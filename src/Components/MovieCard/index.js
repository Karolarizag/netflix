import { Link } from 'react-router-dom'

export const MovieCard = ({ movie }) => {

  const img = `${process.env.REACT_APP_API_IMG}${movie.poster_path}`
  const movieTitle = movie.title.length > 25 ? `${movie.title.slice(0, 25)}...` : movie.title

  return (
    <div class="movie-card">
      <Link to={`/${movie.id}`}>
        <img class="card-front" src={img} alt="movie-poster" />
        <div class="card-hover card-back p-5">
          <h5>{movieTitle}</h5>
          <div>
            <span class="badge bg-accent">
              <svg 
              className="w-6 h-6" 
              fill="currentColor" 
              viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>{movie.vote_average}
            </span>
          </div>
          <div class="mb-2">
            <span class={`badge bg-alert ${movie.adult ? 'bg-alert' : 'bg-success'}`}>{movie.adult ? '+18' : 'Family content'}</span>
          </div>
        </div>
      </Link>
    </div>
  )

}
