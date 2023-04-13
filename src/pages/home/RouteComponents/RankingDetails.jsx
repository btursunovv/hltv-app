function RankingDetails({ name, rank, logo, players }) {
  return (
    <div>
      <div>{name}</div>
      <div>{rank}</div>
      <div>
        <img src={logo} alt={logo} />
      </div>
    </div>
  );
}

export default RankingDetails;
