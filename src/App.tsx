import React from "react";
import "./assets/styles/global.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import fakeData from "./fakeData";
import RankingPage from "./pages/home/RouteComponents/RankingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/teams/:name" element={<RankingPage />}></Route>
    </Routes>
  );
}

export default App;
