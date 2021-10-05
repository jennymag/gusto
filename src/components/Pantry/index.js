import React from "react";
import Navigation from "../Navigation";
import { withAuthorization } from "../Session";

const OnboardingLayout = ({ children }) => (
  <OnboardingLayout>
    <Navigation />
    {children}
  </OnboardingLayout>
);

const PantryPage = () => (
  <div>
    <h1>Pantry</h1>
  </div>
);

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(PantryPage);
