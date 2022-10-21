import { useParams } from "react-router-dom"
import { GetMovieDetails } from "../Services/GetMovieDetails"

export const MovieDetail = () => {

  const {id} = useParams()
  const {movie, loading} = GetMovieDetails(id)

  return (
    <div>{movie.title}</div>
  )

}