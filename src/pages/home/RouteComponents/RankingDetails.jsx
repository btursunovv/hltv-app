import PlayerDetails from "./PlayerDetails";

function RankingDetails({ name, rank, logo, players }) {
  return (
    <div>
      <div className="teamBar">
        <div>
          <img src={logo} alt={logo} className="imgLogo" />
        </div>
        <div className="teamName">team: {name}</div>
        <div className="teamRank">rank : {rank}</div>
      </div>

      <div className="playerDetails">
        {players.map((player) => (
          <PlayerDetails
            name={player.name}
            nickname={player.nickname}
            role={player.role}
            photo={player.photo}
          />
        ))}
      </div>
    </div>
  );
}

export default RankingDetails;
