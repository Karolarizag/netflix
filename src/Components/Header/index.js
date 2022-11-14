import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <div class="w-full h-14 flex px-20 header">
      <Link to="/">
        <img class="h-10 mt-2 mr-5" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="netflix" />
      </Link>
      {/* <p class="font-bold mt-4 mx-2">Inicio</p>
      <p class="font-bold mt-4 mx-2">Series TV</p>
      <p class="font-bold mt-4 mx-2">Películas</p>
      <p class="font-bold mt-4 mx-2">Novedades más vistas</p>
      <p class="font-bold mt-4 mx-2">Mi lista</p> */}
    </div>
  )
}