import { BrowserRouter, Routes, Route } from "react-router-dom";
import GamePage from "./pages/GamePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/game" element={<GamePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
