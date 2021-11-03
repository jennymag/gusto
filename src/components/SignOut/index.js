import React from "react";
import { withFirebase } from "../Firebase";
const SignOutButton = ({ firebase }) => (
  <button className="signOutBtn" type="button" onClick={firebase.doSignOut}>
    Sign Out <span className="authMenuLinkSpan">→</span>
  </button>
);
export default withFirebase(SignOutButton);
