import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";

const ContactPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <OnboardingLayout>
        <h1 className="pantryH1">Contact us</h1>

        <section>
          <h2 className="aboutH2">Email</h2>
          <p className="aboutP">test@test.test</p>
          <h2 className="aboutH2">Phone</h2>
          <p className="aboutP">070-00000000</p>
        </section>
      </OnboardingLayout>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(ContactPage);
