import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { checkUser } from "./API/API";
const Auth = ({children}) => {
  const navigate = useNavigate();
  const msisdn = localStorage.getItem("msisdn"); 

  const checkMsisdn = async () => {
    console.log(msisdn,"---m---")
    if (!msisdn) {
    navigate("/subscribe"); 
    return;

    } 
    try {
      const response = await axios.post(checkUser, { msisdn,service:'Gameit' });

      console.log("User check response:", response);
      if(response.data.result==0){
          navigate("/subscribe");
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  
};
  useEffect(() => {
    checkMsisdn();
  }, []);

  return(
    <>
    {children}
    </>
  ); // Or a loading spinner, etc.
};

export default Auth;
