import logo from "../../pictures/logo.png";
import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
  <nav className="authNav">
    <ul>
      <li>
        <Link to={ROUTES.HOME}>Recipes</Link>
      </li>
      <li>
        <Link to={ROUTES.PANTRY}>Pantry</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Profile</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </nav>
);
const NavigationNonAuth = () => (
  <nav className="nonAuthNav">
    <ul>
      <li className="backArrow">
        <Link className="backArrow" to={ROUTES.LANDING}>
          &#8592;
        </Link>
      </li>
      <li>
        <div className="logoContainer">
          <img src={logo} alt="logo" className="bigLogo" />
        </div>
      </li>
      <div className="flexCenter">
        <li>
          <Link to={ROUTES.SIGN_IN}>Sign in</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        </li>
      </div>
    </ul>
  </nav>
);

export default Navigation;