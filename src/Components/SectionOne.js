import React from "react";
import { useNavigate } from "react-router-dom";

const SectionOne = (data) => {

  //To go on any other page
  const navigate=useNavigate();

  //To handle play games
  const handlePlayGames=()=>{
    data.data.forEach(e=>{
      if(e.category==='mostPlayed')
      {
        // console.log("selected ",e.game);
        localStorage.setItem("games",JSON.stringify(e.game));
        navigate("/seeAll");
      }
    })
  }

  return (
    <section className="slider-area slider-bg">
      <div className="contain">
        <div className="row justify-content-center">
          <div className="col-xl-9">
            <div className="slider-content text-center">
              <h2 className="tlt fix" data-in-effect="fadeInLeft">
              Portail de<span>jeux</span>
              </h2>
              <p className="wow fadeInUp mb-2" data-wow-delay="2s">
              DÉCOUVREZ DE NOUVEAUX JEUX BASÉS SUR LES NOUVELLES TECHNOLOGIES, PLEINS DE PLAISIR, DE DIVERTISSEMENT ET DE CONNAISSANCES.
              </p>
               <button onClick={()=>{
                  handlePlayGames();
                }}>
        jouer à des jeux 
        <div id="clip">
          <div id="leftTop" className="corner" />
          <div id="rightBottom" className="corner" />
          <div id="rightTop" className="corner" />
          <div id="leftBottom" className="corner" />
        </div>
        <span id="rightArrow" className="arrow" />
        <span id="leftArrow" className="arrow" />
      </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionOne;