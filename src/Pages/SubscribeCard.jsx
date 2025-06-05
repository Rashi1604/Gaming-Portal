import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAmount } from "../API/API";
import  {subscribeUser} from '../API/API'
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SubscribeCard = () => {
const navigate = useNavigate();
 const uniqueId = uuidv4(); 
const handlePackChange = (event) => {
  const newPack = event.target.value;
  setSelectedPack(newPack);
  console.log("Pack changed to:", newPack);
  };
 const packs = ["Daily", "Weekly", "Monthly"];
  const [selectedPack, setSelectedPack] = useState("Daily");
  const [amount, setAmount] = useState(null);
   const [loading, setLoading] = useState(false);
  const fetchAmountIfNotCached = async (pack) => {
    const key = `amount_${pack}`;
    const cached = localStorage.getItem(key);

    if (cached) {
      console.log(`Using cached amount for ${pack}:`, cached);
      return;
    }

    try {
      const res = await axios.post(getAmount, { pack });
      const amount = res.data[0]?.amount; 

      if (amount !== undefined) {
        localStorage.setItem(key, amount);
        console.log(`Fetched amount for ${pack}:`, amount);
      }
    } catch (err) {
      console.error(`Error fetching amount for ${pack}:`, err);
    }
  };

  // Pre-fetch all packs on first load
  useEffect(() => {
    packs.forEach((pack) => {
      fetchAmountIfNotCached(pack);
    });
  }, []);
  // Update UI amount when selected pack changes
  useEffect(() => {
    const key = `amount_${selectedPack}`;
    const cachedAmount = localStorage.getItem(key);
    setAmount(cachedAmount);
  }, [selectedPack]);


const [msisdn, setMsisdn] = useState("");

  const handleSubscribe = async () => {
  setLoading(true);

  const payload = {
      pack: selectedPack,
      msisdn: msisdn,
      service: "Gameit",
      amount: amount,
      trx_id:uniqueId
    };

    console.log(payload,'data--for subscribe--------')


  if( !selectedPack || !msisdn || !amount || !uniqueId){
    toast.warning('Something Went Wrong!!')
    return;
  }
  try {
    const response = await axios.post(subscribeUser, payload);
    console.log("Subscribe success:", response.data);
    toast.success(response?.data?.msg)
    // navigate("/"); // Navigate after successful subscription
    
if (response.data.result === 1) {
  navigate("/"); // Navigate only if result === 1
} else {
  toast.error("Abonnement échoué. Veuillez réessayer.");
}

  } catch (error) {
    console.error("Subscribe failed:", error);
    const errorMsg = error?.response?.data?.msg;

    // Check if user already subscribed
    if (errorMsg && errorMsg.toLowerCase().includes("already")) {
      toast.info("Déjà abonné. Redirection vers l'accueil...");
      navigate("/"); // Navigate to homepage if already subscribed
    } else {
      toast.error(errorMsg || "Erreur d'abonnement");
    }
  } finally {
    setLoading(false);
  }
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
        <p className="subscribe-text">
          Recevez des conseils de jeu exclusifs, des mises à jour et des codes de
          triche directement dans votre boîte mail. Dominez votre prochaine
          bataille !
        </p>
<input
  // type="number"
  value={msisdn}
  onChange={(e) => {
    setMsisdn(e.target.value);
    localStorage.setItem("msisdn", e.target.value); 
  }}
  placeholder="Entrez votre numéro"
  className="subscribe-input"
/>
        {/* Dropdown for Pack Selection */}
        <select
          value={selectedPack}
          onChange={handlePackChange}
          className="subscribe-dropdown"
        >
          <option value="Daily">Tous les jours</option>
          <option value="Weekly">hebdomadaire</option>
          <option value="Monthly">Mensuel</option>
        </select>
         <button
          onClick={handleSubscribe}
          className="subscribe-button"
          disabled={loading} // <-- disable while loading
        >
          {loading ? "Abonnement en cours..." : "S'abonner"} {/* <-- dynamic text */}
        </button>
      </div>
    </div>
  );
};
export default SubscribeCard;
