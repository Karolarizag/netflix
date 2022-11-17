import { useParams } from "react-router-dom"
import { GetMovieDetails } from "../Services/GetMovieDetails"
import { GetSimilarMovies } from "../Services/GetSimilarMovies"
import { playOutlined, star } from "../Services/icons"
import { MovieCard } from "../Components/MovieCard"

export const MovieDetail = () => {

  const {id} = useParams()
  const {movie, loading} = GetMovieDetails(id)
  const {similarMovies, loadingMovies} = GetSimilarMovies(id)
  const img = `${process.env.REACT_APP_API_IMG}${movie.backdrop_path}`
  const poster = `${process.env.REACT_APP_API_IMG}${movie.poster_path}`
  const rating = loading ? null : movie.vote_average.toString().split('.')[0]
  const genres = loading ? null : movie.genres.map(genre => {
    return (
      <div class="badge bg-secondary" key={genre.id}>{genre.name}</div>
    )
  })
  const productionCompanies = loading ? null : movie.production_companies.map(company => {
    return (    
      <div class="badge bg-secondary py-2">
        <img class="h-4" src={`${process.env.REACT_APP_API_IMG}${company.logo_path}`} alt={company.name} />
      </div>
    )
  })
  const languages = loading ? null : movie.spoken_languages.map(lang => {
    return (
      <p class="mr-4">{lang.name}</p>
    )
  })
  const status = loading ? null : movie.status === 'Released' ? <div class="badge bg-success h-6 ml-2 my-auto text-base">{movie.status}</div> : <div class="badge bg-primary h-6 ml-2 my-auto">{movie.status}</div>
  const similarMoviesArray = loadingMovies ? null : similarMovies.map(movie => {
    return (
      <MovieCard movie={movie} key={movie.key} />
    )
  })
  const button = movie.homepage !== "" ? (
    <a class="button-primary mt-10 w-[90px]" href={movie.homepage} target="_blank" rel="noreferrer">
      <icon class="my-auto">{playOutlined}</icon> 
      <p>Play</p>
    </a>
  ) : null

  console.log(movie)

  return (
    <>
    {
      loading 
      ? null
      : 
      <div class="detail-page">
        <div class="detail-background" style={{backgroundImage: `url(${img})`}} />
        <div class="detail-content">
          <img class="detail-poster" src={poster} alt={movie.title} />
          <div class="movie-info sm:mt-8 lg:mt-0">
            <div class="container">
              <h1>{movie.title}</h1>
              {status}
            </div>
            <p class="-mt-3 mb-3 italic">{movie.tagline}</p>
            <div class="flex justify-start mx-0">
              <icon class="mt-1 mr-2">{star}</icon> {`Rating: ${rating}`} 
            </div>
            <div class="container my-3">
              { genres }
            </div>
            <div>
              <h4>Overview:</h4>
              <p class="max-w-[80vh] bg-base bg-opacity-60">{movie.overview}</p>
            </div>
            <div class="mt-3">
              <h4>Companies:</h4>
              <div class="container">
                {productionCompanies}
              </div>
            </div>
            <div class="my-3">
              <h4>Languages:</h4>
              <div class="container">
                {languages}
              </div>
            </div>
            {button}
          </div>
        </div>
        <div class="mt-40">
          <h2 class="text-center">Similar movies:</h2>
          <div class="container flex-wrap justify-center w-screen mx-auto mb-10">
            {similarMoviesArray}
          </div>
        </div>
    </div>
    }
    </>
  )
}