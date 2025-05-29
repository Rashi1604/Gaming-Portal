import React from "react";
import { useNavigate } from "react-router-dom";
import game_overview_thumb from "../Media/Images/images/game_overview_thumb.png";

const SectionThree = (list) => {

  //To go on any other page
  const navigate=useNavigate();

  //To Handle MostPlayed Button
  const handleMostPlayedButton=()=>{
    list.list.forEach(e=>{
      if(e.category==='mostPlayed')
      {
        // console.log("category ",e.category);
        // console.log("games ",e.game);
        localStorage.setItem("games",JSON.stringify(e.game));
        navigate("/seeAll");
      }
    })
  }

  return (
    <div className="breadcrumb-area breadcrumb-bg game-overview-breadcrumb">
      <div className="contain">
        <div className="ro align-items-center">
          <div className="col-xl-4 col-lg-6">
            <div className="game-overview-img">
              <img
                src={game_overview_thumb}
                // src="img/images/game_overview_thumb.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-xl-8 col-lg-6">
            <div className="breadcrumb-content text-center text-lg-left pl-80">
              <h2>
              Jeux les plus joués<span>{new Date().getFullYear()}</span>
              </h2>
              <div className="game-overview-status">
                <ul>
                  <li>
                    {/* <span>Total Wins :</span>- */}
                  </li>
                  <li>
                    {/* <span>Membership :</span>- */}
                  </li>
                  {/* <li>
                    <span>Categories :</span>Platinum ||
                  </li> */}
                </ul>
              </div>
              <span onClick={()=>{
                handleMostPlayedButton();
              }} className="btn btn-style-two">
                Essayez les plus joués...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SectionThree;