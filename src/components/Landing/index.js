import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import logo from "../../pictures/logo.png";

const Landing = () => (
  <div className="landingBackground">
    <header className="landingHeader">
      <div className="circle">
        <img src={logo} alt="logo" className="smallLogo" />
      </div>
    </header>
    <section className="landingSection">
      <h1 className="onboardingH1">Gusto</h1>
      <h2 className="onboardingH2">
        One third of all food is wasted. Cook with Gusto and become the hero
      </h2>
      <Link to={ROUTES.SIGN_IN}>
        <button className="invertedButton">Get started</button>
      </Link>
    </section>
  </div>
);

export default Landing;
