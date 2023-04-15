import "./results.css";
import "./matches.css";
import MatchesInfoCard from "./MatchesInfoCard";
import fakeJSON from "../../../fakeJSON.json";
import { Link } from "react-router-dom";
import ResultsInfoCard from "./ResultsInfoCard";
function ResultsInfo() {
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <div className="matchesWrapper">
      {fakeJSON.Results.map((Results) => (
        <Link to={`./${Results.id}`}>
          <ResultsInfoCard
            id={Results.id}
            team1={Results.team1}
            team2={Results.team2}
            team1LogoUrl={Results.team1LogoUrl}
            team2LogoUrl={Results.team2LogoUrl}
            eventName={Results.eventName}
            mapsWonBy1={Results.mapsWinByTeam1}
            mapsWonBy2={Results.mapsWinByTeam2}
          />
        </Link>
      ))}
    </div>
  );
}

export default ResultsInfo;
