import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";

const AboutPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <OnboardingLayout>
        <h1 className="pantryH1">About us</h1>

        <section>
          <h2 className="aboutH2">Save food</h2>
          <p className="aboutP">
            Gustos mission is to turn your food waste into delicious meals
          </p>
          <h2 className="aboutH2">Save money</h2>
          <p className="aboutP">
            Tired of buying ingridients that you never use? Gusto helps you to
            save money by making it easy to prepare meals based on your pantry
          </p>
          <h2 className="aboutH2">Save time</h2>
          <p className="aboutP">
            Tired of going to the grocery store every day? Save time by using
            Gustos smart recipes
          </p>
          <h2 className="aboutH2">Save the universe</h2>
          <p className="aboutP">Yeah. You heard us.. it’s the truth.</p>
        </section>
      </OnboardingLayout>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AboutPage);
