import MatchPlayers1 from "./MatchPlayers1";
import MatchPlayers2 from "./MatchPlayers2";
import MatchMaps from "./MatchMaps";

function MatchesDetails({
  id,
  matchTime,
  matchGames,
  team1,
  team2,
  team1LogoUrl,
  team2LogoUrl,
  eventLogo,
  eventName,
  players1,
  players2,
  maps,
}) {
  return (
    <div>
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
        <div></div>
      </div>
      <div>
        <div className="matchPlayers1">
          {players1.map((player) => (
            <MatchPlayers1
              name={player.name}
              nickname={player.nickname}
              role={player.role}
              photo={player.photo}
            />
          ))}
        </div>
        <div className="matchPlayers2">
          {players2.map((player) => (
            <MatchPlayers2
              name={player.name}
              nickname={player.nickname}
              role={player.role}
              photo={player.photo}
            />
          ))}
        </div>
        <div>
          {maps.map((map) => (
            <MatchMaps name={map.name} mapPhoto={map.MapPhotoUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatchesDetails;
