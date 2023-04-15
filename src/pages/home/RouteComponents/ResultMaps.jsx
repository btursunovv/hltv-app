function ResultMaps({ name, mapPhoto, score }) {
  return (
    <div>
      <div className="matchMapsContainer">
        <img src={mapPhoto} alt="" className="matchMaps" />
        <div className="matchMapName">{name}</div>
      </div>
      <div className="resultMapScore">Score : {score}</div>
    </div>
  );
}

export default ResultMaps;
