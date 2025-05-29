import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SectionOne from "../Components/SectionOne";


const SeeAll = () => {

  //Getting On Page Load
  useEffect(() => {
    getLocalStorageData();
  }, []);

  //State to Store Selected Game Data
  const [data, setData] = useState([]);

  //Getting Data From Local Storage
  // const getLocalStorageData = () => {
  //   let games = JSON.parse(localStorage.getItem("games"));
  //   console.log("games ", games);
  //   setData(games);
  // };
  const getLocalStorageData = () => {
  let games = JSON.parse(localStorage.getItem("games"));
  if (Array.isArray(games)) {
    // Remove only the 5th item
    games.splice(5, 1);
  }
  console.log("games ", games);
  setData(games);
};


  return (
    <>
      <Header />
      <SectionOne />
      <div className="area-bg-one">
        <section className="upcoming-games-area upcoming-games-bg pt-120 p-4">
          <div className="contain">
            <div className="row">
              {data?.map((value, index) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4 mb-4" style={{height:'25rem'}} key={index}>
                    <div className="upcoming-game-item ">
                      <div className="upcoming-game-head">
                        <div className="uc-game-head-title">
                          
                            <span onClick={()=>{
                              window.location.href=value.game;
                            }} style={{cursor:"pointer"}}>{value.name}</span>
                         
                        </div>
                        <div className="uc-game-price">
                          <h5>&#9971;</h5>
                        </div>
                      </div>
                      <p>
                        Compete with players remote island winner takes showdown
                        known issue.
                      </p>
                      <div className="upcoming-game-thumb">
                        <img src={value.image} alt="Src" />
                        <div className="upcoming-game-cart">
                          <a href={value.game} className="btn transparent-btn">
                            <i className="fas fa-shopping-basket"></i>JOUER
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* <div className="col-lg-4 col-md-6">
                <div className="upcoming-game-item mb-40">
                  <div className="upcoming-game-head">
                    <div className="uc-game-head-title">
                      <h4>
                        <a href="/">Blocker</a>
                      </h4>
                    </div>
                    <div className="uc-game-price">
                      <h5>&#9971;</h5>
                    </div>
                  </div>
                  <p>
                    Compete with players remote island winner takes showdown
                    known issue.
                  </p>
                  <div className="upcoming-game-thumb">
                    <img src={blocker} alt="" />
                    <div className="upcoming-game-cart">
                      <a href="/" className="btn transparent-btn">
                        <i className="fas fa-shopping-basket"></i>Play
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* <div className="col-lg-4 col-md-6">
                <div className="upcoming-game-item mb-40">
                  <div className="upcoming-game-head">
                    <div className="uc-game-head-title">
                      <h4>
                        <a href="/">Cat and Ghost</a>
                      </h4>
                    </div>
                    <div className="uc-game-price">
                      <h5>&#x1F919;</h5>
                    </div>
                  </div>
                  <p>
                    Compete with players remote island winner takes showdown
                    known issue.
                  </p>
                  <div className="upcoming-game-thumb">
                    <img src={cat_and_ghosts} alt="" />
                    <div className="upcoming-game-cart">
                      <a href="/" className="btn transparent-btn">
                        <i className="fas fa-shopping-basket"></i>Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="upcoming-game-item mb-40">
                  <div className="upcoming-game-head">
                    <div className="uc-game-head-title">
                      <h4>
                        <a href="/">Chess Tower</a>
                      </h4>
                    </div>
                    <div className="uc-game-price">
                      <h5>&#x1F93E;</h5>
                    </div>
                  </div>
                  <p>
                    Compete with players remote island winner takes showdown
                    known issue.
                  </p>
                  <div className="upcoming-game-thumb">
                    <img src={chess_tower} alt="" />
                    <div className="upcoming-game-cart">
                      <a href="/" className="btn transparent-btn">
                        <i className="fas fa-shopping-basket"></i>Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="upcoming-game-item mb-40">
                  <div className="upcoming-game-head">
                    <div className="uc-game-head-title">
                      <h4>
                        <a href="/">Dice Jump</a>
                      </h4>
                    </div>
                    <div className="uc-game-price">
                      <h5>&#x1F947;</h5>
                    </div>
                  </div>
                  <p>
                    Compete with players remote island winner takes showdown
                    known issue.
                  </p>
                  <div className="upcoming-game-thumb">
                    <img src={dice_jump} alt="" />
                    <div className="upcoming-game-cart">
                      <a href="/" className="btn transparent-btn">
                        <i className="fas fa-shopping-basket"></i>Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="upcoming-game-item mb-40">
                  <div className="upcoming-game-head">
                    <div className="uc-game-head-title">
                      <h4>
                        <a href="/">hOOKS</a>
                      </h4>
                    </div>
                    <div className="uc-game-price">
                      <h5>&#x1F3C1;</h5>
                    </div>
                  </div>
                  <p>
                    Compete with players remote island winner takes showdown
                    known issue.
                  </p>
                  <div className="upcoming-game-thumb">
                    <img src={dont_touch_the_hooks} alt="" />
                    <div className="upcoming-game-cart">
                      <a href="/" className="btn transparent-btn">
                        <i className="fas fa-shopping-basket"></i>Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="upcoming-game-item mb-40">
                  <div className="upcoming-game-head">
                    <div className="uc-game-head-title">
                      <h4>
                        <a href="/">fREE kICK PeNALITY</a>
                      </h4>
                    </div>
                    <div className="uc-game-price">
                      <h5>&#x1F3B1;</h5>
                    </div>
                  </div>
                  <p>
                    Compete with players remote island winner takes showdown
                    known issue.
                  </p>
                  <div className="upcoming-game-thumb">
                    <img src={Free_Kick_Penalty} alt="" />
                    <div className="upcoming-game-cart">
                      <a href="/" className="btn transparent-btn">
                        <i className="fas fa-shopping-basket"></i>Play
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};
export default SeeAll;
