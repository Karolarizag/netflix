import { useEffect, useState } from "react"

export const GetMovieDetails = ( id ) => {
  const API_MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
  const [ movie, setMovie ] = useState({})
  const [ loading, setLoading ] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(API_MOVIE_URL)
      const response = await request.json()
      setMovie(response)
      setLoading(false)
      return response
    }
    fetchData()
  }, [id, API_MOVIE_URL])
  
  return { movie, loading }
}