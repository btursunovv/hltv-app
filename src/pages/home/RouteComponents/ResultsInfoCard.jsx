import "./results.css";

function ResultsInfoCard({
  id,
  team1,
  team2,
  team1LogoUrl,
  team2LogoUrl,
  eventName,
  mapsWonBy1,
  mapsWonBy2,
}) {
  return (
    <div>
      <div className="resultsMainWrapper">
        <div className="resultGameWrapper">
          <div className="resultsTeamName1">{team1}</div>
          <img
            src={team1LogoUrl}
            alt={team1LogoUrl}
            className="resultsInfoCardImg1"
          />
          <div className="">
            {mapsWonBy1} - {mapsWonBy2}
          </div>
          <img
            src={team2LogoUrl}
            alt={team2LogoUrl}
            className="resultsInfoCardImg2"
          />
          <div className="resultsTeamName2">{team2}</div>
          <div className="resultsEventName">{eventName}</div>
        </div>
      </div>
    </div>
  );
}

export default ResultsInfoCard;
