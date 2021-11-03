import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import avatar from "../../pictures/avatar.png";
import PasswordChangeForm from "../PasswordChange";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <OnboardingLayout>
        <h1 className="pantryH1">Profile</h1>

        <section className="profilePage">
          <div className="profilePersonalDetails">
            <img src={avatar} alt="avatar" className="avatar" />

            <h2 className="emailH2">{authUser.email}</h2>
          </div>
          <PasswordChangeForm />
          <Link to={ROUTES.ABOUT} className="notActiveA">
            <div className="profileFlex">
              <h2 className="profileH2">About us</h2>
              <h2 className="profileArrow">&#10132;</h2>
            </div>
          </Link>
          <Link to={ROUTES.CONTACT} className="notActiveA">
            <div className="profileFlex">
              <h2 className="profileH2">Contact us</h2>
              <h2 className="profileArrow">&#10132;</h2>
            </div>
          </Link>
        </section>
      </OnboardingLayout>
    )}
  </AuthUserContext.Consumer>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AccountPage);
