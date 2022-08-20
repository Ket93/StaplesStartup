import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Creator } from "./components/creator/creator.js";
import { FairGoer } from "./components/fair-goer.js";
import { HoverRating } from "./components/review.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FairGoer />} />
        <Route path="/fair-goer" element={<FairGoer />} />
        <Route path="/reviews" element={<HoverRating />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
