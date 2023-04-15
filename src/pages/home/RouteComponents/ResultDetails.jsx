import MatchPlayers1 from "./MatchPlayers1";
import MatchPlayers2 from "./MatchPlayers2";
import MatchMaps from "./MatchMaps";
import ResultMaps from "./ResultMaps";

function ResultDetails({
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
  mapsWonBy1,
  mapsWonBy2,
}) {
  return (
    <div>
      <div className="resultsMapsScore">
        <div className="resultsTeamInfo">
          <img src={team1LogoUrl} alt="" className="resultsScoreImg1" />
          <div className="resultScoreTeamName">{team1}</div>
          <div className="resultScoreValue">{mapsWonBy1}</div>
        </div>
        <div className="resultOfTheMatch">
          <div className="resultsMatchTime">{matchTime}</div>
          <div>{eventName}</div>
          <div>Match Ended</div>
        </div>
        <div className="resultsTeamInfo">
          <img src={team2LogoUrl} alt="" className="resultsScoreImg2" />
          <div className="resultScoreTeamName">{team2}</div>
          <div className="resultScoreValue">{mapsWonBy2}</div>
        </div>
      </div>
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
          <ResultMaps
            name={map.name}
            score={map.score}
            mapPhoto={map.MapPhotoUrl}
          />
        ))}
      </div>
      <div className="resultTable">
        <table>
          <thead>
            <tr>
              <th>Player Name</th>
              <th>Kills</th>
              <th>Deaths</th>
              <th>Assists</th>
              <th>ADR</th>
              <th>KAST</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>s1mple</td>
              <td>28</td>
              <td>12</td>
              <td>4</td>
              <td>107.4</td>
              <td>83.3%</td>
            </tr>
            <tr>
              <td>electronic</td>
              <td>21</td>
              <td>15</td>
              <td>2</td>
              <td>79.9</td>
              <td>77.8%</td>
            </tr>
            <tr>
              <td>Perfecto</td>
              <td>12</td>
              <td>15</td>
              <td>2</td>
              <td>46.9</td>
              <td>61.1%</td>
            </tr>
            <tr>
              <td>b1t</td>
              <td>17</td>
              <td>16</td>
              <td>5</td>
              <td>68.5</td>
              <td>72.2%</td>
            </tr>
            <tr>
              <td>npl</td>
              <td>10</td>
              <td>17</td>
              <td>2</td>
              <td>46.7</td>
              <td>66.7%</td>
            </tr>
            <tr>
              <td>cadiaN</td>
              <td>22</td>
              <td>14</td>
              <td>4</td>
              <td>87.1</td>
              <td>83.3%</td>
            </tr>
            <tr>
              <td>stavn</td>
              <td>17</td>
              <td>17</td>
              <td>5</td>
              <td>73.1</td>
              <td>77.8%</td>
            </tr>
            <tr>
              <td>TeSeS</td>
              <td>14</td>
              <td>18</td>
              <td>5</td>
              <td>58.5</td>
              <td>66.7%</td>
            </tr>
            <tr>
              <td>sjuush</td>
              <td>14</td>
              <td>18</td>
              <td>2</td>
              <td>55.2</td>
              <td>72.2%</td>
            </tr>
            <tr>
              <td>jabbi</td>
              <td>12</td>
              <td>20</td>
              <td>3</td>
              <td>50.6</td>
              <td>61.1%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ResultDetails;
