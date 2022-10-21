import { Link } from 'react-router-dom'
import { parseDate } from '../../Services/Utils'

export const MovieCard = ({ movie }) => {

  const img = `${process.env.REACT_APP_API_IMG}${movie.poster_path}`
  // Cut the title so it doesn't see too large on the card
  const movieTitle = movie.title.length > 25 ? `${movie.title.slice(0, 25)}...` : movie.title
  // Format date 
  const { movieDate } = parseDate(movie.release_date)
  const popularity = movie.popularity.toString().split('.')[0]

  return (
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-5">
      <img class="rounded-t-lg" src={img} alt="movie-poster" />
      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movieTitle}</h5>
        <span class="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">{movieDate}</span>
        <span class="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Popularity: {popularity}</span>
        <div>
          <Link to={`/${movie.id}`}>
            <button class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5">
              See details
              <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )

}
