import { useParams } from "react-router-dom"
import { GetMovieDetails } from "../Services/GetMovieDetails"
import { API_IMG } from "../Services/Utils"

export const MovieDetail = () => {

  const {id} = useParams()
  const {movie, loading} = GetMovieDetails(id)
  const img = `${API_IMG}${movie.poster_path}`
  console.log(movie)

  return (
    <div class="detail-page">
      <div class="detail-background" style={{backgroundImage: `url(${img})`}} />
      <div class="detail-content">
        <img class="detail-poster" src={img} alt={movie.title} />
        <div>
          <h1>{movie.title}</h1>
        </div>
      </div>
    </div>
  )

}