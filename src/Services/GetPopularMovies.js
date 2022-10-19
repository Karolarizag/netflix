import { useEffect, useState } from "react"


export const GetPopularMovies = () => {
  const [ page, setPage ] = useState(1)
  const [ loading, setLoading ] = useState(false)
  const [totalPages, setTotalPages] = useState(1);
  const [ movies, setMovies ] = useState([])
  
  
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
  
  useEffect(() => {
    
    const fetchData = async () => {

      await page===1 ? setLoading(true) : setLoading(false)

      const request = await fetch(API_URL)
      const response = await request.json()

      if( page === 1){
        setMovies(response.results)
      }
      else{
        setMovies(response.results)
      }

      setLoading(false)
      setTotalPages(response.total_pages)

      return response

    }
    
    fetchData()


  }, [page, API_URL])

  return { movies, page, setPage, loading }

}
