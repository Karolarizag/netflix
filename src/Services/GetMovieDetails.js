import { useEffect, useState } from "react"

export const GetMovieDetails = ( id ) => {
  const API_MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  const API_MOVIE_REVIEW = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  const [ movie, setMovie ] = useState({})
  const [ reviews, setReviews ] = useState({})
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      const moviesRequest = await fetch(API_MOVIE_URL)
      const moviesResponse = await moviesRequest.json()
      setMovie(moviesResponse)

      const reviewsRequest = await fetch(API_MOVIE_REVIEW)
      const reviewsResponse = await reviewsRequest.json()
      setReviews(reviewsResponse.results)

      setLoading(false)
      return {moviesResponse, reviewsResponse}
    }
    fetchData()
  }, [id, API_MOVIE_URL, API_MOVIE_REVIEW])
  
  return { movie, reviews, loading }
}