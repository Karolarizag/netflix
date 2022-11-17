import { useEffect, useState } from "react"

export const GetSimilarMovies = ( id ) => {
  const API_MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  

  const [ similarMovies, setMovies ] = useState({})
  const [ loadingMovies, setLoading ] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(API_MOVIE_URL)
      const response = await request.json()
      setMovies(response.results)
      setLoading(false)
      return response
    }
    fetchData()
  }, [id, API_MOVIE_URL])
  
  return { similarMovies, loadingMovies }
}