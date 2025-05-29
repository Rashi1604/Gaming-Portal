import React, { useEffect, useState } from "react";
import { getHeader, getRequest, postRequest } from "../lib";
import Loader from "../Components/Loader";
import classes from "./Form.module.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [loading] = useState(true);
  const q = new URLSearchParams(window.location.search);
  const nav = useNavigate();

  useEffect(() => {
    redirectUser();
  }, []);

  const redirectUser = async () => {
    const msisdn = await getHeader();
    if (msisdn) {
      console.log("got msisdn =>", msisdn)
      return await checkSubApi(msisdn);
    } else {
      return await upstreamRedirect();
    }
  }

  const upstreamRedirect = async () => {
    let ext_ref = q.get("ext_ref") || 'GH_' + getUuid();
    let redirectUrl
      = `http://ke-webfun.upp.st/KSD-KESAF-H2NCO/gamehub-001023834940-daily-no-web?trxID=${ext_ref}`;

    const [e1, data] = await postRequest("/save-redirect-logs", {
      ext_ref: ext_ref,
      redirectUrl,
    });
    if (e1) {
      return console.log("Network error try again");
    }
    if (data.result === 0) {
      return console.log("Reload")
    }
    return window.location.replace(redirectUrl);
  }
  // check subscription with this =>
  const checkSubApi = async (msisdn) => {
    const [e0, data] = await getRequest(
      `/subscribe-user/check-sub?msisdn=${msisdn}`
    );
    if (e0) {
      return await upstreamRedirect();
    }
    if (data.result == 1) {
      Cookies.set("h2n-kenya-msisdn", msisdn, { expires: 2 });
      localStorage.setItem("msisdn", msisdn);
      return nav("/games");
    } else {
      return await upstreamRedirect();
    }
  };
  return (
    <main className={classes.bgContainer}>
      {loading && <Loader />}
    </main>
  );
};

export default Form;


function getUuid() {
  let str = 'qwertyuiopasdfghjklzxcvbnm1234567890';
  let uuid = "";
  for (let i = 0; i < str.length; i++) {
    uuid += str.charAt(Math.random() * str.length);
  }
  return uuid;
}
