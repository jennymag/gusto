import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import LogoCircle from "../Navigation/LogoCircle";

const Landing = () => (
  <div className="landingBackground">
    <header className="landingHeader">
      <LogoCircle />
    </header>
    <section className="landingSection">
      <h1 className="landingH1">Gusto</h1>
      <h2 className="landingH2">
        One third of all food is wasted. Cook with Gusto and become the hero
      </h2>
      <Link to={ROUTES.SIGN_IN}>
        <button className="invertedButton">Get started</button>
      </Link>
    </section>
  </div>
);

export default Landing;
