import "./matches.css";
import MatchesInfoCard from "./MatchesInfoCard";
import fakeJSON from "../../../fakeJSON.json";
import { Link } from "react-router-dom";
function MatchesInfo() {
  let currentDate = new Date().toJSON().slice(0, 10);
  return (
    <div className="matchesWrapper">
      <div class="matchDayHeadline">{currentDate}</div>

      {fakeJSON.Matches.map((Matches) => (
        <Link to={`./${Matches.id}`}>
          <MatchesInfoCard
            id={Matches.id}
            team1={Matches.team1}
            team2={Matches.team2}
            team1LogoUrl={Matches.team1LogoUrl}
            team2LogoUrl={Matches.team2LogoUrl}
            eventLogo={Matches.eventLogo}
            eventName={Matches.eventName}
            matchTime={Matches.matchTime}
            matchGames={Matches.matchGames}
          />
        </Link>
      ))}
    </div>
  );
}

export default MatchesInfo;
