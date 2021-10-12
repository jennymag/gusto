import React from "react";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";

const HomePage = () => (
  <OnboardingLayout>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </OnboardingLayout>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
