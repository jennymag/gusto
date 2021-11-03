import logo from "../../pictures/logo.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import LogoCircle from "../Navigation/LogoCircle";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => {
  const [isMenuClosed, setIsMenuClosed] = useState(true);

  function closeMenu() {
    if (isMenuClosed === true) {
      setIsMenuClosed(false);
    } else if (isMenuClosed === false) {
      setIsMenuClosed(true);
    }
  }

  return (
    <nav className="authNav">
      <a className="closeBtn" onClick={closeMenu}>
        ☰
      </a>
      {isMenuClosed === false ? (
        <div className="authMenu overlay">
          <ul className="authUl">
            <li>
              <a className="closeBtn" onClick={closeMenu}>
                ✕
              </a>
            </li>
            <li className="authMenuLink">
              <span className="authMenuLinkHome">⌂</span>
              <Link to={ROUTES.HOME}>Recipes</Link>
            </li>
            <li className="authMenuLink">
              <span className="authMenuLinkPantry">🁣</span>
              <Link to={ROUTES.PANTRY}>Pantry</Link>
            </li>
            <li className="authMenuLink">
              <Link to={ROUTES.ACCOUNT}>
                <span className="authMenuLinkProfile">
                  <i className="far">&#xf2bd;</i>
                </span>
                Profile
              </Link>
            </li>
            <li className="authMenuSignOut">
              <SignOutButton />
            </li>
          </ul>
        </div>
      ) : null}
      <LogoCircle />
    </nav>
  );
};
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
