import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";

import PasswordChangeForm from "../PasswordChange";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <OnboardingLayout>
        <h1>Account: {authUser.email}</h1>
        <PasswordChangeForm />
      </OnboardingLayout>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
