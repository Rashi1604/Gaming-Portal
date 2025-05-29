import React from "react";
// import gamer_list_icon1 from "../Media/Images/icon/gamer_list_icon01.png";
// import gamer_list_icon2 from "../Media/Images/icon/gamer_list_icon02.png";
// import gamer_list_icon3 from "../Media/Images/icon/gamer_list_icon03.png";
import just_gamers_img from "../Media/Images/images/just_gamers_img.png";
import gamers_circle_line from "../Media/Images/images/gamers_circle_line.png";
import gamers_circle_shape from "../Media/Images/images/gamers_circle_shape.png";
import just_gamers_chart from "../Media/Images/images/just_gamers_chart.png";
import { convert } from "../Pages/ShowData";
import "../CSS/new.css";

const SectionTwo = (data) => {
  return (
    <section className="just-gamers-area just-gamers-bg  ">
      <div className="contain p-10 sm:p-4 ">
        <div className="ro">
          <div className="flex flex-col justify-between gap-6 p-10">
            <div className="section-title title-style-three white-title mb-70">
              <h2>
                TOP TROIS<span>Jeux</span>
              </h2>
      
            </div>
            <div className="just-gamers-list">
              <ul>
                {data.data?.map((value, key) => {
                  return (
                    <li key={key}>
                      <div
                        style={{cursor:"pointer"}}
                        className="just-gamers-list-icon"
                        onClick={() => {
                         window.location.href=`${value.game}`;
                        }}
                      >
                        <img
                          src={value.image}
                          alt="ImgSrc"
                          height="80px"
                          width="80px"
                        />
                      </div>
                      <div
                        className="just-gamers-list-content fix"
                        style={{cursor:"pointer"}}
                        onClick={() => {
                          window.location.href=`${value.game}`;
                        }}
                      >
                        {/* <h5 className="prevent-select">{value.name.toUpperCase()}</h5> */}
                        <h5 className="prevent-select">{value.name ? convert(value.name).toUpperCase() : ""}</h5>

                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-xl-7 col-lg-6 d-none d-lg-block">
            <div className="just-gamers-img">
              <img
                src={just_gamers_img}
                //   src="img/images/just_gamers_img.png"
                alt=""
                className="just-gamers-character"
              />
              <div className="just-gamers-circle-shape">
                <img
                  src={gamers_circle_line}
                  //   src="img/images/gamers_circle_line.png"
                  alt=""
                />
                <img
                  src={gamers_circle_shape}
                  // src="img/images/gamers_circle_shape.png"
                  alt=""
                  className="rotateme"
                />
              </div>
              <img
                src={just_gamers_chart}
                // src="img/images/just_gamers_chart.png"
                alt=""
                className="gamers-chart-shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionTwo;