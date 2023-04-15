function MatchMaps({ name, mapPhoto }) {
  return (
    <div>
      <div className="matchMapsContainer">
        <img src={mapPhoto} alt="" className="matchMaps" />
        <div className="matchMapName">{name}</div>
      </div>
    </div>
  );
}

export default MatchMaps;
