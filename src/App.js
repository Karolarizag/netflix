import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { MovieDetail } from "./Pages/MovieDetail"

export const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}
