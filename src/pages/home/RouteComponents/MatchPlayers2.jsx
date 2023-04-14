function MatchPlayers2({ name, nickname, role, photo }) {
  return (
    <div>
      <div>
        <img src={photo} alt={photo} className="playerPhoto" />
      </div>
      <div>{name}</div>
      <div>{nickname}</div>
      <div>role: {role}</div>
    </div>
  );
}

export default MatchPlayers2;
