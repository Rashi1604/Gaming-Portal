import React from "react";
import Slider from "react-slick";
import brand_logo1 from "../Media/Images/brand/brand_logo01.png";
import brand_logo2 from "../Media/Images/brand/brand_logo02.png";
import brand_logo3 from "../Media/Images/brand/brand_logo03.png";
import brand_logo4 from "../Media/Images/brand/brand_logo04.png";
import brand_logo5 from "../Media/Images/brand/brand_logo05.png";
import brand_logo6 from "../Media/Images/brand/brand_logo06.png";

const SlickSliderTop = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 4,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="brand-area brand-bg">
      <div className="container">
        <Slider
          dots={false}
          infinite={true}
          speed={1000}
          autoplay={true}
          arrows={false}
          slidesToShow={6}
          slidesToScroll={2}
          {...settings}
        >
          <div className="brand-item">
            <img
              src={brand_logo1}
              //   src="img/brand/brand_logo01.png"
              alt=""
            />
          </div>
          <div className="brand-item">
            <img
              src={brand_logo2}
              //   src="img/brand/brand_logo02.png"
              alt=""
            />
          </div>
          <div className="brand-item">
            <img
              src={brand_logo3}
              //   src="img/brand/brand_logo03.png"
              alt=""
            />
          </div>
          <div className="brand-item">
            <img
              src={brand_logo4}
              //   src="img/brand/brand_logo04.png"
              alt=""
            />
          </div>
          <div className="brand-item">
            <img
              src={brand_logo5}
              //   src="img/brand/brand_logo05.png"
              alt=""
            />
          </div>
          <div className="brand-item">
            <img
              src={brand_logo6}
              //   src="img/brand/brand_logo06.png"
              alt=""
            />
          </div>
          <div className="brand-item">
            <img
              src={brand_logo3}
              //   src="img/brand/brand_logo03.png"
              alt=""
            />
          </div>
        </Slider>
        {/* <div className="row brand-active">
            <div className="col-xl-2">
              <div className="brand-item">
                <img
                  src={brand_logo1}
                  //   src="img/brand/brand_logo01.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="brand-item">
                <img
                  src={brand_logo2}
                  //   src="img/brand/brand_logo02.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="brand-item">
                <img
                  src={brand_logo3}
                  //   src="img/brand/brand_logo03.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="brand-item">
                <img
                  src={brand_logo4}
                  //   src="img/brand/brand_logo04.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="brand-item">
                <img
                  src={brand_logo5}
                  //   src="img/brand/brand_logo05.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="brand-item">
                <img
                  src={brand_logo6}
                  //   src="img/brand/brand_logo06.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-2">
              <div className="brand-item">
                <img
                  src={brand_logo3}
                  //   src="img/brand/brand_logo03.png"
                  alt=""
                />
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};
export default SlickSliderTop;