import { Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetail"

export const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}
