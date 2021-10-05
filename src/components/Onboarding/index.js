import React from "react";
import Navigation from "../Navigation";
import { withAuthorization } from "../Session";
import logo from "../../pictures/logo.png";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const OnboardingLayout = ({ children }) => (
  <OnboardingLayout>
    <Navigation />
    {children}
  </OnboardingLayout>
);

const OnboardingPage = () => (
  <div className="onboardingBackground">
    <header className="landingHeader">
      <div className="circle">
        <img src={logo} alt="logo" className="smallLogo" />
      </div>
    </header>
    <section className="landingSection">
      <p className="onboardingH1">Almost there!</p>
      <div class="container">
        <div class="skills html">50% Done</div>
      </div>
      <h1 className="onboardingH2">
        Add ingredients to your pantry to get started
      </h1>
      <Link to={ROUTES.HOME}>
        <button className="invertedButton">Not now</button>
      </Link>
      <Link to={ROUTES.PANTRY}>
        <button>Go to pantry</button>
      </Link>
    </section>
  </div>
);

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(OnboardingPage);
