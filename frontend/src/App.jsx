import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";
import Song from "./pages/Song";
import Songs from "./pages/Songs";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Artist/:id" element={<Artist />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Song/:id" element={<Song />} />
        <Route path="/Songs" element={<Songs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
