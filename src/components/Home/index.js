import React from "react";
import { withAuthorization } from "../Session";
import Navigation from "../Navigation";

const OnboardingLayout = ({ children }) => (
  <div>
    <Navigation />
    {children}
  </div>
);

const HomePage = () => (
  <OnboardingLayout>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </OnboardingLayout>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
