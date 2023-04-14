function PlayerOfWeekInfo({ name, nickname, photoUrl, team, data }) {
  return (
    <>
      <div className="playerOfTheWeekWrapper">
        <div className="playerOfTheWeekPlayer">
          <div>
            <img src={photoUrl} alt={photoUrl} className="playerOfTheWeek" />
          </div>
          <div className="playerOfTheWeekText">
            <div>{name}</div>
            <div>{nickname}</div>
            <div>
              {data.name} : {data.value}
            </div>
            <div>Rating 2.0 : {data.rating}</div>
            <div>Kills per round : {data.killsPerRound}</div>
            <div>Headshot : {data.headshots}</div>
            <div>Maps Played : {data.mapsPlayed}</div>
            <div>Death per round : {data.deathPerRound}</div>
            <div>Rounds contributed : {data.roundCont}</div>
          </div>
        </div>
        <div className="playerOfTheWeekTeam">
          <img
            src={team.iconUrl}
            alt={team.iconUrl}
            className="playerPhotoOfTheWeek"
          />
          <div className="playerOfTheWeekTeamName">
            {team.name.toUpperCase()}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayerOfWeekInfo;
