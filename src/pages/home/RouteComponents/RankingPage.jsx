import TopBar from "../components/TopBar";
import logo from "../../../assets/images/logo.png";
import ad1 from "../../../assets/images/ad1.png";
import ad2 from "../../../assets/images/ad2.png";
import ad3 from "../../../assets/images/ad3.png";
import ad4 from "../../../assets/images/ad4.png";
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
import data from "../../../fakeJSON.json";

function RankingPage() {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  // const result = fakeData.teamsData.find((item) => item === params.name);

  const { id } = useParams();
  const team = data.TopTeams.find((team) => team.name === id);

  // const params = useParams();

  console.log(team);

  return (
    <>
      <TopBar />
      <div className="wrapperFull">
        <div id="logo" onClick={navigateHome}>
          <a href="#">
            <img src={logo} alt="logo" id="logo-img" />
          </a>
          <a href="#">
            <img src={ad1} alt="logo" />
          </a>
          <a href="#">
            <img src={ad2} alt="logo" />
          </a>
        </div>
        <div id="main-content">
          <aside id="left-content">
            <div id="loot-bet-ad">
              <a href="#">
                <img src={ad3} alt="Loot bet ad" />
              </a>
            </div>
            <PlayerOfTheWeek
              name={fakeData.playerOfTheWeek.name}
              nickName={fakeData.playerOfTheWeek.nickName}
              photoUrl={fakeData.playerOfTheWeek.photoUrl}
              team={fakeData.playerOfTheWeek.team}
              data={fakeData.playerOfTheWeek.data}
            />
            <div id="betway-ad">
              <a href="#">
                <img src={ad4} alt="betway" />
              </a>
            </div>
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
                {/* <Routes>
                  <Route path="/teams" element={<Home />} />
                  <Route path="/" element={<Home />} />
                </Routes> */}
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
            <RankingDetails />
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
            <div id="ad4">
              <a href="#">
                <img src="https://i.imgur.com/UOpA8IG.png" alt="ad4" />
              </a>
            </div>
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

export default RankingPage;
