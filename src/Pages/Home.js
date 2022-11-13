import { ShowMovies } from "../Components/ShowMovies"
import { GetPopularMovies } from "../Services/GetPopularMovies"
import { GetGenres } from "../Services/GetGenres"
import { MoviesList } from "../Components/MoviesList"

export const Home = () => {

  const { popularMovies } = GetPopularMovies()
  const { genres } = GetGenres()

  const movies = genres.map(genre => {
    return (
        <MoviesList props={genre} key={genre.id} />
    )
  })

  return (
    <div>
      <div class="title-section">Popular movies</div>
      <div class="movies-section">
        <ShowMovies props={popularMovies} />
      </div> 
      { movies }
    </div>
  );
}
