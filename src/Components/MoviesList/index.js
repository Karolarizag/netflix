import { GetMoviesByGenre } from "../../Services/GetMoviesByGenre"
import { ShowMovies } from "../ShowMovies"

export const MoviesList = ({props}) => {
  const { genreMovies } = GetMoviesByGenre(props.id)

  return (
    <div>
      <div class="title-section">{props.name}</div>
      <div class="movies-section">
        <ShowMovies props={genreMovies} />
      </div>
    </div>
  )
}