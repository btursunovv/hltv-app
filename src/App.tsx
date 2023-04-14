import React from "react";
import "./assets/styles/global.css";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import fakeData from "./fakeData";
import RankingPage from "./pages/home/RouteComponents/RankingPage";
import PlayerOfWeek from "./pages/home/RouteComponents/PlayerOfWeek";
import Matches from "./pages/home/RouteComponents/Matches";
import MatchesInfo from "./pages/home/RouteComponents/MatchesInfo";
import MatchesDetails from "./pages/home/RouteComponents/MatchesEmpty";
import MatchesEmpty from "./pages/home/RouteComponents/MatchesEmpty";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/teams/:name" element={<RankingPage />}></Route>
      <Route path="/playerOfTheWeek" element={<PlayerOfWeek />}></Route>
      <Route path="/matches" element={<Matches />}></Route>
      <Route path="/results" element={<Matches />}></Route>
      <Route path="/matches/:id" element={<MatchesEmpty />}></Route>
    </Routes>
  );
}

export default App;
