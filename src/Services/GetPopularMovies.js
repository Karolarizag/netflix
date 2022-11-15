import { useEffect, useState } from "react"

export const GetPopularMovies = () => {
  const [ loading, setLoading ] = useState(false)
  const [ popularMovies, setPopularMovies ] = useState([])
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true) 
      const request = await fetch(API_URL)
      const response = await request.json()
      setLoading(false)
      setPopularMovies(response.results)
    }
    fetchData()
  }, [API_URL])

  return { popularMovies, loading }
}
