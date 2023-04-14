function MatchesInfoCard({
  id,
  team1,
  team2,
  team1LogoUrl,
  team2LogoUrl,
  eventLogo,
  eventName,
  matchTime,
  matchGames,
}) {
  return (
    <div className="matchesInfoCardMain">
      <div className="matchesCol1">
        <div>{matchTime}</div>
        <div>{matchGames}</div>
      </div>
      <div className="matchesInfoTeams">
        <div className="matchesInfoTeam1">
          <img src={team1LogoUrl} className="matchesInfoCardImg" />
          <div>{team1}</div>
        </div>
        <div className="matchesInfoTeam2">
          <img src={team2LogoUrl} className="matchesInfoCardImg" />
          <div>{team2}</div>
        </div>
      </div>
      <div className="matchesEventLogo">
        <img src={eventLogo} />
      </div>
      <div className="matchesEventName">{eventName}</div>
    </div>
  );
}

export default MatchesInfoCard;
