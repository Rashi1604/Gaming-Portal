
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_gameit from "../Media/Images/logo_gameit.png";
import { deactivateUser } from "../API/API";
import axios from "axios";

import {  toast } from 'react-toastify';
const Header = (data) => {
  const [isUnsubscribing, setIsUnsubscribing] = useState(false);
  const navigate = useNavigate();
  const [searchList, setSearchList] = useState([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false); // mobile menu toggle

  const handleSearch = (search) => {
    let arr = [];
    data.data.forEach((e) => {
      e.game.forEach((f) => {
        if (
          search !== "" &&
          search !== " " &&
          (f.name.toLowerCase().startsWith(search) || f.name.startsWith(search))
        ) {
          arr.push(f.name);
        }
      });
    });
    setSearchList(arr);
  };
  
  // const msisdn = localStorage.getItem("msisdn");
//   const handleUnSubscribe = async () => {
//   const msisdn = localStorage.getItem("msisdn");

//   try {
//     const payload = {
//       msisdn,
//       service: "Gameit",
//     };
//     const response = await axios.post(deactivateUser, payload);
//     console.log("Unsubscribe response:", response);
//     toast.success(response.data.msg)
//     localStorage.removeItem("msisdn");
//     navigate("/subscribe");

//   } catch (error) {
//     toast.error(error.response.data.msg)
//   }
// };
const handleUnSubscribe = async () => {
  const msisdn = localStorage.getItem("msisdn");
  setIsUnsubscribing(true);

  try {
    const payload = {
      msisdn,
      service: "Gameit",
    };
    const response = await axios.post(deactivateUser, payload);
    console.log("Unsubscribe response:", response);
    toast.success(response.data.msg);
    localStorage.removeItem("msisdn");
    navigate("/subscribe");
  } catch (error) {
    toast.error(error.response?.data?.msg || "Unsubscribe failed");
  } finally {
    setIsUnsubscribing(false);
  }
};

  const handleSearchPlay = (name) => {
    data.data.forEach((e) => {
      e.game.forEach((f) => {
        if (f.name === name) {
          window.location.href = f.game;
        }
      });
    });
  };

  const handleCategoryClick = () => {
    setShowMobileMenu(false); // close menu on category click
  };

  return (
    <header>
      <div id="sticky-header" className="main-header">
        <div className="container-fluid container-full-padding">
          <div className="row">
            <div className="col-12">
              <div className="main-menu">
                <nav className="d-flex gap-4">
                  <div className="logo">
                    <span style={{ cursor: "pointer" }}>
                      <Link to="/">
                        <img src={logo_gameit} alt="Logo" />
                      </Link>
                    </span>
                  </div>

                  <div id="mobile-menu" className="navbar-wrap d-none d-lg-flex">
                    <ul>
                      <li className="show"><a href="#Sports">SPORTIFS</a></li>
                      <li><a href="#Funny">DRÔLE</a></li>
                      <li><a href="#Action">D'ACTION</a></li>
                      <li><a href="#Adventure">D'AVENTURE</a></li>
                      <li><a href="#Racing">COURSES</a></li>
                      <li><a href="#Kids">KIDS</a></li>
                      <li><a href="#Arcade">ARCADE</a></li>
                      <li><a href="#Puzzle">PUZZLE</a></li>
                    </ul>
                  </div>

                  <div className="header-action flex mr-4">
                    <ul className="d-flex gap-2">
                      <li className="d-lg-none ">
                        <button
                          onClick={() => setShowMobileMenu(!showMobileMenu)}
                          style={{
                            background: "none",
                            border: "none",
                            color: "white",
                            fontSize: "20px",
                            fontSize: "30px",
                            height: "5rem",
                            width: "5rem"
                          }}
                        >
                          <i className="fas fa-bars"></i>
                        </button>
                      </li>
                      <li className="header-search">
                        <a
                          data-toggle="modal"
                          data-target="#search-modal"
                          href="/"
                        >
                          <i className="fas fa-search"></i>
                        </a>
                      </li>
                      <li className="p-2">
  {/* <button className="unbtn"
    style={{
      backgroundColor:'#EF7D00',
      color: "white",
      borderRadius: "5px",
      fontWeight: "bold",
      width: "7rem",
      height:"3rem",
      cursor:"pointer"
      
    }}
    onClick=
      {handleUnSubscribe}
  >
    Unsubscribe
  </button> */}
  <button
  className="unbtn"
  disabled={isUnsubscribing}
  style={{
    backgroundColor: isUnsubscribing ? '#f6a256' : '#EF7D00',
    color: "white",
    borderRadius: "5px",
    fontWeight: "bold",
    width: "9rem",
    height: "3rem",
    cursor: isUnsubscribing ? "not-allowed" : "pointer",
    opacity: isUnsubscribing ? 0.7 : 1,
    
  }}
  onClick={handleUnSubscribe}
>
  {isUnsubscribing ? "Désabonnement en cours..." : "Se désabonner"}
</button>

</li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="mobile-menu d-lg-none">
                {showMobileMenu && (
                  <div className="mobile-nav" style={{ position: "relative" }}>
                    {/* Close icon */}
                    <button
                      onClick={() => setShowMobileMenu(false)}
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        height:"50px",
                        width:"50px",
                        fontSize: "2rem",
                        background: "#005DAA",
                        border: "none",
                        cursor: "pointer"
                        
                      }}
                      aria-label="Close Menu"
                    >
                      &times;
                    </button>

                    <ul style={{ paddingTop: "40px" }}>
                      <li><a href="#Sports" onClick={handleCategoryClick}>SPORTIFS</a></li>
                      <li><a href="#Funny" onClick={handleCategoryClick}>Funny</a></li>
                      <li><a href="#Action" onClick={handleCategoryClick}>D'ACTION</a></li>
                      <li><a href="#Adventure" onClick={handleCategoryClick}>D'AVENTURE</a></li>
                      <li><a href="#Racing" onClick={handleCategoryClick}>Racing</a></li>
                      <li><a href="#Kids" onClick={handleCategoryClick}>Kids</a></li>
                      <li><a href="#Arcade" onClick={handleCategoryClick}>ARCADE</a></li>
                      <li><a href="#Puzzle" onClick={handleCategoryClick}>PUZZLE</a></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Search Modal */}
            <div
              className="modal fade"
              id="search-modal"
              tabIndex="-1"
              role="dialog"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
              
      <div className="InputContainer">
        <i className="fas fa-search searchicon "></i>
        <input placeholder="chercher ici" onChange={(e) => handleSearch(e.target.value)}  id="input" className="input" name="text" type="text" />
      </div>

                    <div className="search-main-div">
                      {searchList?.length > 0 &&
                        searchList.map((val, key) => (
                          <div key={key} className="search-div">
                            <span
                              className="search-span"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleSearchPlay(val)}
                            >
                              {val}
                            </span>
                          </div>
                        ))}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
