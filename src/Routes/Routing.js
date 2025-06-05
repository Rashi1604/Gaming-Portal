import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../Pages/Home";
import PageNotFound from "../Pages/PageNotFound";
import SeeAll from "../Pages/SeeAll";
import ErrorPage from "../Pages/Error";
import PacmanLoader from "react-spinners/PacmanLoader"
import { styled } from "styled-components";
import Form from "../Pages/Form";
import Tnc from "../Pages/Tnc";
import { getRequest } from "../lib";
import Cookies from "js-cookies";
 import TermsConditions from "../Components/TermsAndConditions";
import Lottie from "lottie-react";
import Loader from "../Components/Loader";
import SubscribeCard from "../Pages/SubscribeCard";
import Auth from "../Auth";
import SubscribeAuth from "../SubscribeAuth";

const Routing = () => {
  
  return (<>
    
      <Routes>
        {/* <Route path="/" exact={true} element={<Form />} /> */}
        {/* <Route path="/tnc" exact={true} element={<Tnc />} /> */}
        <Route path="/" exact={true} element={<Auth><Home /></Auth>}></Route>
        <Route path="/seeAll" exact={true} element={<Auth><SeeAll /></Auth>}></Route>
        <Route path="*" exact={true} element={<PageNotFound />}></Route>
        <Route path="/error" exact={true} element={<ErrorPage />}></Route>
        <Route path="/tnc" exact={true} element={< TermsConditions/>}></Route>
        <Route path="/subscribe" exact={true} element={<SubscribeCard/>}></Route>
      </Routes>
  </>)
}
export default Routing;

const SuspenseSpinner = styled.div`
 background-color: #23242a;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;