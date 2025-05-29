import React, { useState } from "react";
// import "../../src/CSS/Style.css"; 

import { useNavigate } from "react-router-dom";
const SubscribeCard = () => {
const navigate = useNavigate();
const [selectedPack,setSelectedPack]=useState("weekly");
const handlePackChange = (event) => {
    setSelectedPack(event.target.value);
  };


  const handleSubscribe = () => {
    navigate("/"); 

  };
  return (
    <div className="subscribe-container">
      <div className="subscribe-card">
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10l9-6 9 6-9 6-9-6z"
            />
          </svg>
        </div>
        <h2 className="subscribe-title">Rejoignez les joueurs !</h2>
        {/* <p className="subscribe-text">
          Get exclusive gaming tips, updates, and cheat codes delivered straight
          to your inbox. Dominate your next battle!
        </p> */}
          <p className="subscribe-text">
        Recevez des conseils de jeu exclusifs, des mises à jour et des codes de triche directement dans votre boîte mail. Dominez votre prochaine bataille !
        </p>
        <input
          type="Number"
          placeholder="Enter Your Number"
          className="subscribe-input"
        />
          {/* Dropdown for Pack Selection */}
        <select
          value={selectedPack}
          onChange={handlePackChange}
          className="subscribe-dropdown"
        >
          <option value="Daily">Tous les jours</option> //Daily
          <option value="Weekly">hebdomadaire </option> //weekly
          <option value="Monthly">Mensuel </option> Monthly
        </select>
        <button onClick={handleSubscribe}
         className="subscribe-button">S'abonner</button>
      </div>
    </div>
  );
};

export default SubscribeCard;
