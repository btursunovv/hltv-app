function PlayerDetails({ name, nickname, role, photo }) {
  return (
    <>
      <div>
        <div>
          <img src={photo} alt={photo} className="playerPhoto" />
        </div>
        <div className="playerInfo">
          <div>{name}</div>
          <div>{nickname}</div>
          <div>role : {role}</div>
        </div>
      </div>
    </>
  );
}

export default PlayerDetails;
