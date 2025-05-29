import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import SectionOne from "../Components/SectionOne";
import SlickSliderTop from "../Components/SlickSliderTop";
import SlickSliderBottom from "../Components/SlickSliderBottom";
import OwlSlider from "../Components/OwlSlider";
import SectionTwo from "../Components/SectionTwo";
import SectionThree from "../Components/SectionThree";
import Footer from "../Components/Footer";
import Preloader from "../Components/Preloader";
import GetRequest from "../API/GetRequest";
import { getGamesApi } from "../Data/data";
import "../CSS/new.css";
import loader from '../Animations/loader.json'
import Lottie from "lottie-react";
import { convert } from "./ShowData";

const Home = () => {



  // console.log(convert('Tetris Cube'),'dfhghj')

  
  useEffect(()=>{
    getGamesFromBackend();
  },[]);

  const navigate=useNavigate();

 
  const getGamesFromBackend=()=>{
      const promise=GetRequest(getGamesApi);
      promise.then(e=>{
      console.log("data ",e.response);

      if(e.message==='Network Error')
      {
        // console.log("Backend is Not Working");
        navigate("/error");
      }

      processGamesData(e.response);
      gettingThreeGames(e.response);
    })
  };

  const[data,setData]=useState([]);

  const processGamesData=(games)=>{
    // console.log("games ",games);
   var newGames = filteredGames(games);

const updatedGames = newGames.map(category => {
  if (category.name === "Adventure") {
    return {
      ...category,
      game: category.game.filter((_, index) => index !== 4) // remove 5th item
    };
  }
  return category;
});

console.log(updatedGames,"===newgames---")


const puzzleCategory = updatedGames.find(cat => cat.category === "Puzzle");
  const otherCategories = updatedGames.filter(cat => cat.category !== "Puzzle");


  const finalGames = puzzleCategory
    ? [...otherCategories, puzzleCategory] // Move Puzzle to end
    : updatedGames;

    // setData(newGames);
        setData(finalGames);

    setLoaderState(true);
    setDivState(false);
  }
  // console.log(data, "GAMES_HERE")
  let count=0;

  //Hook to store three games array
  const[threeGamesArray,setThreeGamesArray]=useState([]);

  //Method to get Three Games randomly
  const gettingThreeGames=(games)=>{
    games.forEach(e=>{
      if(e.category==='mostPlayed')
      {
        // console.log("e ",e);
        let arr=e.game.splice(0,3);
        // console.log("arr ",arr);
        setThreeGamesArray(arr);
      }
    })
  }

  //Loader
  let Loader=require('react-loader');
  let options = {
    lines: 13,
    length: 30,
    width: 15,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: 'white',
    opacity: 0.85,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute'
  };

  //State for Loader
  const[loaderState,setLoaderState]=useState(false);

  //Hook to store starting div state(loading div)
  const[divState,setDivState]=useState(true);
  // console.log(data, "games");
  return (
    <>
      {
        divState ?
        <div className="h-[100vh] w-full" >
        <Lottie animationData={loader} style={{height:'100vh',background:"linear-gradient(135deg, #1e3a8a, #2563eb, #1e40af)"}} />
      </div>
      :
      <>
       <Header data={data}/>
     
      <>
        <SectionOne data={data} />
        {/* <SlickSliderTop /> */}

        <div className="area-bg-one">

          {data?.map((e,key)=>{
            count=count+1;
            // console.log(count);
            // console.log("e ",e);
            if(e.category==='mostPlayed')
              return(<span key={key}></span>)
            else
              return(
                <div key={key}>
                  <OwlSlider
                      list={e.game}
                      data={data}
                      key={key}
                      id={e.category}
                      name={e.category}
                    />
                    {count===2?<SectionTwo key={count} data={threeGamesArray}/>:<></>}
                    {count===4?<SectionThree list={data} key={count}/>:<></>}
                    {count===8?<SlickSliderBottom key={count}/>:<></>}
                </div>
              )
          })}
        </div>
      </>
      <Footer />
      </>
      }
     
    </>
  );
};
export default Home;

function filteredGames(games) {
  const removeGames = games?.map(prop => {
      if (prop.category === "Arcade") {
          const filteredGame = prop.game.filter(item => item.name !== "Handless Millionaire");
          return { ...prop, game: filteredGame };
      } else {
          return prop;
      }
  });

  return removeGames;
}