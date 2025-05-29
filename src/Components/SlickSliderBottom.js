import React from "react";
import Slider from "react-slick";
import t_brand_logo1 from "../Media/Images/brand/t_brand_logo01.png";
import t_brand_logo2 from "../Media/Images/brand/t_brand_logo02.png";
import t_brand_logo3 from "../Media/Images/brand/t_brand_logo03.png";
import t_brand_logo4 from "../Media/Images/brand/t_brand_logo04.png";
import t_brand_logo5 from "../Media/Images/brand/t_brand_logo05.png";

const SlickSliderBottom = () => {
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
    <div className="brand-area t-brand-bg">
      <div className="container custom-container">
        <Slider
          dots={false}
          infinite={true}
          speed={1000}
          autoplay={true}
          arrows={false}
          slidesToShow={5}
          slidesToScroll={2}
          {...settings}
          className="row s-brand-active"
        >
          <div className="col-12">
            <div className="t-brand-item">
              <img
                src={t_brand_logo1}
                // src="img/brand/t_brand_logo01.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="t-brand-item">
              <img
                src={t_brand_logo2}
                // src="img/brand/t_brand_logo02.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="t-brand-item">
              <img
                src={t_brand_logo3}
                // src="img/brand/t_brand_logo03.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="t-brand-item">
              <img
                src={t_brand_logo4}
                // src="img/brand/t_brand_logo04.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="t-brand-item">
              <img
                src={t_brand_logo5}
                // src="img/brand/t_brand_logo05.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-12">
            <div className="t-brand-item">
              <img
                src={t_brand_logo3}
                // src="img/brand/t_brand_logo03.png"
                alt=""
              />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default SlickSliderBottom;
