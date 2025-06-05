import React, { useEffect }  from 'react';
//Import CSS of Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

//Import CSS of React Toastify
import 'react-toastify/dist/ReactToastify.css';

//Import CSS of Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import CSS of Owl Carousel
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './App.css';
import { ToastContainer } from 'react-toastify'

//Import CSS for ow.carousel
// import 'owl.carousel/dist/assets/owl.carousel.css';

//Other Imports
import Routing from './Routes/Routing';

function App() {
  let language = localStorage.getItem("language");

  useEffect(() => {
    if(!language || language === "null") {
        localStorage.setItem("language", "en")
    }
  }, []);

  return (
    <>
      <ToastContainer 
        // theme="colored"
        // position='top-center'
        // autoClose={3000}
        // closeOnClick={true}
        // draggable
        // pauseOnHover

      />
      <Routing/>
      {/* <ToastContainer/> */}
    </>
  );              
}

export default App;