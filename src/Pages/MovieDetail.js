import { useParams } from "react-router-dom"
import { GetMovieDetails } from "../Services/GetMovieDetails"

export const MovieDetail = () => {

  const {id} = useParams()
  const {movie, loading} = GetMovieDetails(id)
  const img = `${process.env.REACT_APP_API_IMG}${movie.poster}`
  console.log(movie)

  return (
    <>
      <img scr={img} alt={movie.title} />
    </>
  )

}