// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo_gameit from "../Media/Images/logo_gameit.png";


// const Header = (data) => {

//   // To go on other page
//   const navigate=useNavigate();

//   // State to store search results
//   const[searchList,setSearchList]=useState([]);

//   // Method to show entered text
//   const handleSearch=(search)=>{
//     // console.log("search is ",search);
//     // console.log("data is ",data);
    
//     let arr=[];
//     data.data.forEach(e=>{
//       e.game.forEach(f=>{
//         // console.log("f ",f.name);

//         if(search!=='' && search!==' ' && 
//           (f.name.toLowerCase().startsWith(search) || f.name.startsWith(search)))
//         {
//           // console.log(f.name);
//           arr.push(f.name);
//         }
//       })
//     })
//     // console.log("arry is ",arr);
//     setSearchList(arr);
//   }

//   //Method to play that search game by its name
//   const handleSearchPlay=(name)=>{
//     // console.log("game name is ",name);
    
//     //Get Selected Game
//     data.data.forEach(e=>{
//       e.game.forEach(f=>{
//         if(f.name===name)
//         {
//           // console.log(f.game);
//           window.location.href=f.game;
//         }
//       })
//     })

//   }

//   return (
//     <header>
//       <div id="sticky-header" className="main-header">
//         <div className="container-fluid container-full-padding">
//           <div className="row">
//             <div className="col-12">
//               <div className="main-menu">
//                 <nav>
//                   <div className="logo">
//                     <span style={{cursor:"pointer"}} onClick={()=>{
//                       // navigate("/redirect");
//                     }}>
//                       <Link to="/">
//                       <img
//                         src={logo_gameit}
//                         //   src="../Documentation/assets/img/logo_gameit.png"
//                         alt="Logo"
//                       />
//                       </Link>
                     
//                     </span>
//                    </div>
//                    <div
//                     id="mobile-menu"
//                     className="navbar-wrap d-none d-lg-flex"
//                   >
//                     <ul>
//                       <li className="show">
//                         <a href="#Sports"></a>
//                       </li>
//                       <li>
//                         <a href="#Funny">Funny</a>
//                       </li>
//                       <li>
//                         <a href="#Action">D'ACTION</a>e
//                       </li>
//                       <li>
//                         <a href="#Adventure">D'AVENTURE</a>
//                       </li>
//                       <li>
//                         <a href="#Racing">Racing</a>
//                       </li>
//                       <li>
//                         <a href="#Kids">Kids</a>
//                       </li>
//                       <li>
//                         <a href="#Arcade">ARCADE</a>
//                       </li>
//                       <li>
//                         <a href="#Puzzle">PUZZLE</a>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="header-action">
//                     <ul>
//                       <li className="header-search">
//                         <a
//                           data-toggle="modal"
//                           data-target="#search-modal"
//                           href="/">
//                           <i className="fas fa-search"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>
//               </div>
//               <div className="mobile-menu"></div>
//             </div>
//             {/* <!-- Modal Search --> */}
//             <div
//               className="modal fade"
//               id="search-modal"
//               tabIndex="-1"
//               role="dialog"
//               aria-hidden="true"
//             >
//               <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                   <form>
//                     <input type="text" placeholder="Search here..." onChange={(e)=>{
//                       handleSearch(e.target.value);
//                     }}/>
//                     <button>
//                       <i className="fa fa-search"></i>
//                     </button>
//                     <div className="search-main-div">
//                     {searchList?.length>0 && searchList?.map((val,key)=>{
//                       // console.log("v ",val);
//                       return(
//                           <div key={key} className="search-div"><span className="search-span"
//                           style={{cursor:"pointer"}} 
//                           onClick={()=>{
//                             handleSearchPlay(val);
//                           }}>{val}</span></div>
//                       )
//                     })}
//                   </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import logo_gameit from "../Media/Images/logo_gameit.png";

// const Header = (data) => {
//   const navigate = useNavigate();

//   const [searchList, setSearchList] = useState([]);
//   const [showMobileMenu, setShowMobileMenu] = useState(false); // added

//   const handleSearch = (search) => {
//     let arr = [];
//     data.data.forEach(e => {
//       e.game.forEach(f => {
//         if (
//           !== '' &&
//           search !== ' ' &&
//           (f.name.toLowerCase().startsWith(search) || f.name.startsWith(search))
//         ) {
//           arr.push(f.name);
//         }
//       });
//     });
//     setSearchList(arr);
//   };

//   const handleSearchPlay = (name) => {
//     data.data.forEach(e => {
//       e.game.forEach(f => {
//         if (f.name === name) {
//           window.location.href = f.game;
//         }
//       });
//     });
//   };

//   return (
//     <header>
//       <div id="sticky-header" className="main-header">
//         <div className="container-fluid container-full-padding">
//           <div className="row">
//             <div className="col-12">
//               <div className="main-menu">
//                 <nav>
//                   <div className="logo">
//                     <span style={{ cursor: "pointer" }}>
//                       <Link to="/">
//                         <img src={logo_gameit} alt="Logo" />
//                       </Link>
//                     </span>
//                   </div>

//                   <div id="mobile-menu" className="navbar-wrap d-none d-lg-flex">
//                     <ul>
//                       <li className="show"><a href="#Sports">SPORTIFS</a></li>
//                       <li><a href="#Funny">Funny</a></li>
//                       <li><a href="#Action">D'ACTION</a></li>
//                       <li><a href="#Adventure">D'AVENTURE</a></li>
//                       <li><a href="#Racing">Racing</a></li>
//                       <li><a href="#Kids">Kids</a></li>
//                       <li><a href="#Arcade">ARCADE</a></li>
//                       <li><a href="#Puzzle">PUZZLE</a></li>
//                     </ul>
//                   </div>

//                   <div className="header-action">
//                     <ul>
//                       <li className="d-lg-none">
//                         <button
//                           onClick={() => setShowMobileMenu(!showMobileMenu)}
//                           style={{
//                             background: "none",
//                             border: "none",
//                             color: "white",
//                             fontSize: "20px",
//                           }}
//                         >
//                           <i className="fas fa-bars"></i>
//                         </button>
//                       </li>
//                       <li className="header-search">
//                         <a
//                           data-toggle="modal"
//                           data-target="#search-modal"
//                           href="/"
//                         >
//                           <i className="fas fa-search"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>
//               </div>

//               <div className="mobile-menu d-lg-none">
//                 {showMobileMenu && (
//                   <div className="mobile-nav">
//                     <ul>
//                       <li><a href="#Sports">SPORTIFS</a></li>
//                       <li><a href="#Funny">Funny</a></li>
//                       <li><a href="#Action">D'ACTION</a></li>
//                       <li><a href="#Adventure">D'AVENTURE</a></li>
//                       <li><a href="#Racing">Racing</a></li>
//                       <li><a href="#Kids">Kids</a></li>
//                       <li><a href="#Arcade">ARCADE</a></li>
//                       <li><a href="#Puzzle">PUZZLE</a></li>
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div
//               className="modal fade"
//               id="search-modal"
//               tabIndex="-1"
//               role="dialog"
//               aria-hidden="true"
//             >
//               <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                   <form>
//                     <input
//                       type="text"
//                       placeholder="Search here..."
//                       onChange={(e) => {
//                         handleSearch(e.target.value);
//                       }}
//                     />
//                     <button>
//                       <i className="fa fa-search"></i>
//                     </button>
//                     <div className="search-main-div">
//                       {searchList?.length > 0 &&
//                         searchList?.map((val, key) => {
//                           return (
//                             <div key={key} className="search-div">
//                               <span
//                                 className="search-span"
//                                 style={{ cursor: "pointer" }}
//                                 onClick={() => {
//                                   handleSearchPlay(val);
//                                 }}
//                               >
//                                 {val}
//                               </span>
//                             </div>
//                           );
//                         })}
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo_gameit from "../Media/Images/logo_gameit.png";

const Header = (data) => {
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
                <nav>
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

                  <div className="header-action">
                    <ul>
                      <li className="d-lg-none">
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
