import React, { useState } from "react";
import "../../_dist/WelcomePage.css";
import BasePage from "./BasePage";

const WelcomePage = () => {
 
  const [isWelcome,setIsWelcome]=useState(true)
  return (<>
    {isWelcome?<section className="welcome-page-container">
      <h1>﴿ بسم الله الرحمان الرحيم﴾</h1>
      <img src="/images/invitation-ar.png" alt="invitation" />
      <div className="button-section">
        <div className="divider"></div>
        <button onClick={() => setIsWelcome(false)}> اضغط هنا</button>
        <div className="divider"></div>
      </div>
    </section>:
        <BasePage/>
    }
    </>
  );
};

export default WelcomePage;
