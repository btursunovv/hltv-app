import TopBar from "../components/TopBar";
import logo from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import "./ranking.css";
import Footer from "../components/Footer";
import PlayerOfTheWeek from "../components/PlayerOfTheWeek";
import fakeData from "../../../fakeData";
import Team from "../components/RankingTeam";
import Event from "../components/Events";
import Gallerie from "../components/Gallerie";
import Activity from "../components/Activity";
import Match from "../components/Match";
import { useParams } from "react-router-dom";
import RankingDetails from "./RankingDetails";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import fakeJSON from "../../../fakeJSON.json";
import PlayerOfWeekInfo from "./PlayerOfWeekInfo";
import MatchesInfo from "./MatchesInfo";
import MatchesDetails from "./MatchesDetails";

function MatchesEmpty() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  const { id } = useParams();
  const match = fakeJSON.Matches.find((stats) => stats.id === id);

  return (
    <>
      <TopBar />
      <div className="wrapperFull">
        <div className="wrapperLogo">
          <div id="logo" onClick={navigateHome}>
            <a href="#">
              <img src={logo} alt="logo" id="logo-img" />
            </a>
          </div>
        </div>

        <div id="main-content">
          <aside id="left-content">
            {/* <div id="loot-bet-ad">
              <a href="#">
                <img src={ad3} alt="Loot bet ad" />
              </a>
            </div> */}
            <Link to="/playerOfTheWeek">
              <PlayerOfTheWeek
                name={fakeData.playerOfTheWeek.name}
                nickName={fakeData.playerOfTheWeek.nickName}
                photoUrl={fakeData.playerOfTheWeek.photoUrl}
                team={fakeData.playerOfTheWeek.team}
                data={fakeData.playerOfTheWeek.data}
              />
            </Link>

            <div id="ranking">
              <h5>
                <a href="#">RANKING</a>
              </h5>
              <div id="teams-box">
                {fakeData.teamsData.map((team) => (
                  <Link to={`/teams/${team.name}`}>
                    <Team
                      rank={team.rank}
                      name={team.name}
                      logoUrl={team.logoUrl}
                    />
                  </Link>
                ))}
              </div>
              <div id="complete-ranking">
                <span>Complete ranking</span>
                <span>Last updated: 26th of Oct</span>
              </div>
            </div>
            <div id="events">
              <h5>
                <a href="#">EVENTS</a>
              </h5>
              <div id="events-box">
                {fakeData.eventsData.map((event) => (
                  <Event
                    name={event.name}
                    daysToStart={event.daysToStart}
                    logoUrl={event.logoUrl}
                  />
                ))}
              </div>
            </div>
            <Gallerie
              photoUrl={fakeData.gallerie.photoUrl}
              photoDescription={fakeData.gallerie.photoDescription}
            />
          </aside>
          <div id="center-content">
            <MatchesDetails
              id={match.id}
              team1={match.team1}
              team2={match.team2}
              team1LogoUrl={match.team1LogoUrl}
              team2LogoUrl={match.team2LogoUrl}
              eventLogo={match.eventLogo}
              eventName={match.eventName}
              matchTime={match.matchTime}
              matchGames={match.matchGames}
              players1={match.players1}
              players2={match.players2}
              maps={match.maps}
            />
          </div>
          <aside className="right-content">
            <a href="#">
              <h5>RECENT ACTIVITY</h5>
            </a>
            <div>
              {fakeData.recentActivities.map((activity) => (
                <Activity
                  type={activity.type}
                  title={activity.title}
                  comments={activity.comments}
                />
              ))}
              <div id="new-topic">
                <span>Post new topic</span>
              </div>
            </div>
            {/* <div id="ad4">
              <a href="#">
                <img src="https://i.imgur.com/UOpA8IG.png" alt="ad4" />
              </a>
            </div> */}
            <div>
              <h5>LATEST REPLAYS</h5>
              <div id="latest-replay">
                {fakeData.latestReplays.map((replay) => (
                  <Match time={replay.time} teams={replay.teams} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default MatchesEmpty;
