import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div class="w-full h-14 flex px-20 header">
        <img class="h-10 mt-2 mr-5" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" />
      <div class="sm:invisible lg:visible flex">
        <Link class="font-bold mt-4 mx-2" to="/"> Inicio </Link>
        <Link class="font-bold mt-4 mx-2" to="/shows">TV shows</Link>
        <Link class="font-bold mt-4 mx-2" to="/films">Films</Link>
        <Link class="font-bold mt-4 mx-2" to="/news">News</Link>
        <Link class="font-bold mt-4 mx-2" to="/mylist">My list</Link>
      </div>      
    </div>
  )
}