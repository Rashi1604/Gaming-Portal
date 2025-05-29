import React from 'react'
import styled from 'styled-components'

const Tnc = () => {
  return (
    <TermsContainr>
        <div className='term-box'>
            <h1>TERMS & CONDITIONS</h1>
            <br></br>
            <ul>
                <li>Game Hub  is gaming and entertainment portal.This portal covers a wide range of mental skills. This portal has plenty of popular game like racing, skills , adventure , and sports that will give user the sparks their skills and creativity</li>
                <li>The service cost is KSH 1/day.</li>
                <li>Your Subscription will be renewed at KSH 1/day, automatically until you unsubscribe.</li>
                <li>You can unsubscribe from Game hub, anytime, by dialing USSD code *456*20# or alternatively visit the product portal to unsubscribe.</li>
                <li>You must be more than 14+ to have received permission from your parents or guardian who is authorized to pay your bill. </li>
                <li>All data-enabled features and smartphone users can enjoy full service.</li>
                <li>Customer can access the content at any time during the subscription validity period.</li>
            </ul>
        </div>
        <footer>@Kiddz-mania</footer>
    </TermsContainr>
  )
}

export default Tnc

const TermsContainr = styled.div`
    min-width: 80%;
    max-width: 100%;
    width: 800;
    height: 100vh;
    background-color: black;
    .term-box {
        padding: 50px;
    }
    h1{
        font-family: 'Times New Roman', Times, serif;
        letter-spacing: 4px;
        color: white;
        font-weight: 800;
        text-align: center;
        font-size: 45px;
    }
    ul {
        width: 100%;
        list-style: circle;
        color: white;
        li {
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 700;
            color: whitesmoke;
        }
    }
    footer {
        font-family: 'Times New Roman', Times, serif;
        letter-spacing: 4px;
        color: black;
        font-weight: 800;
        text-align: center;
    }
    @media screen and (max-width: 768px) {
        .term-box {
            padding: 10px;
        }
    }
`;
