import { useEffect, useState } from "react"
import { API_KEY } from "./Utils"

export const GetGenres = () => {
  const [ loading, setLoading ] = useState(false)
  const [ genres, setGenres ] = useState([])
  const API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`
  

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true) 
      const request = await fetch(API_URL)
      const response = await request.json()
      setLoading(false)
      setGenres(response.genres)
    }
    fetchData()
  }, [API_URL])
  return { genres, loading }
}
