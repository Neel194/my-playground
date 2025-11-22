import { Routes, Route } from "react-router-dom";
import ButtonPlayground from "./pages/ButtonPlayground.jsx";
import CardPlayground from "./pages/CardPlayground.jsx";
import PortfolioAboutSection from "./pages/PortfolioAboutSection.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/button" element={<ButtonPlayground />} />
      <Route path="/card" element={<CardPlayground />} />
      <Route path="/about" element={<PortfolioAboutSection />} />
    </Routes>
  );
};
export default App;
