import React from "react";
import OwlCarousel from "react-owl-carousel";
import { useNavigate } from "react-router-dom";
import { convert } from "../Pages/ShowData";

const OwlSlider = (props) => {

  //To go On other page
  const navigate=useNavigate();

  //Options for Owl Carousel
  const options = {
    items: 3,
    margin: 30,
    nav: true,
    loop: true,
    navText: [
      '<i class=" fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    // margin: 30,
    responsiveClass: true,
    // nav: true,
    dots: false,
    autoplay: true,
    // navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1.5,
      },
      400: {
        items: 1.5,
      },
      600: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  //Method to Handle See All
  const seeAllButton=(category)=>{
    // console.log("category is ",category);
    // console.log("props.data is ",props.data);
    gettingRequiredData(props.data,category);
  }

  //Getting Required Data
  const gettingRequiredData=(data,category)=>{
    data.forEach(e=>{
      if(category===e.category)
      {
        // console.log("games ",e.game);
        //Adding Games in Local Storage for Now - but will use Redux Here
        localStorage.setItem("games",JSON.stringify(e.game));
      }
    })
    navigate("/seeAll");
  }

  return (
    <section className="latest-games-area pt-120" id={props.id}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8">
            <div className="section-title mb-25">
              <h2>
                <span>{convert(props.name)}</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <OwlCarousel
              {...options}
              className="latest-games-active owl-carousel owl-theme"
            >
              {props.list?.map((e,key)=>{
                return(
                  <div className="latest-games-items mb-30" key={key}>
                    <a href={e.game}>
                  <div className="latest-games-thumb">
                    
                      <img
                        src={e.image}
                        alt="Game SRC"
                        
                      />
                    
                    {/* changes */}
                <div className="card-hover-overlay">
      <i className="fas fa-play play-icon"></i>
      <div className="play-text">JOUER MAINTENANT</div>
    </div>
                  </div>
                  </a>
                  <div className="latest-games-content">
                    <div className="lg-tag">
                      {/* <a href="#/" onClick={()=>{
                        seeAllButton(props.name);
                      }}>{e.category}</a> */}
                    </div>
               <p>{e.name ? convert(e.name) : ""}</p>

                  </div>
                </div>
                )
              })}
              
            </OwlCarousel>
            <div className="see-all">
              {/* <button>
                <span className="btn wow fadeInUp" onClick={()=>{
                    seeAllButton(props.name);
                }}>
                  SEE ALL
                </span>
              </button> */}
               <button className="learn-more" onClick={()=>{
                    seeAllButton(props.name);
                }} >
        <span className="circle" aria-hidden="true">
          <span className="icon arrow" />
        </span>
        <span className="button-text">VOIR TOUT</span>
      </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OwlSlider;