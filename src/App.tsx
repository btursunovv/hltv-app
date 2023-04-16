import React from "react";
import "./assets/styles/global.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import fakeData from "./fakeData";
import RankingPage from "./pages/home/RouteComponents/RankingPage";
import PlayerOfWeek from "./pages/home/RouteComponents/PlayerOfWeek";
import Matches from "./pages/home/RouteComponents/Matches";

import MatchesDetailMain from "./pages/home/RouteComponents/MatchesDetailMain";

import Results from "./pages/home/RouteComponents/Results";
import ResultsDetailMain from "./pages/home/RouteComponents/ResultsDetailMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/teams/:name" element={<RankingPage />}></Route>
      <Route path="/playerOfTheWeek" element={<PlayerOfWeek />}></Route>
      <Route path="/matches" element={<Matches />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/matches/:id" element={<MatchesDetailMain />}></Route>
      <Route path="/results/:id" element={<ResultsDetailMain />}></Route>
    </Routes>
  );
}

export default App;
