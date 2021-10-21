import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import PantryPage from "../Pantry";
import CookingPage from "../Home/CookingPage";
import AddIngredientsPage from "../AddIngredients";
import OnboardingPage from "../Onboarding";
import MatchMeWithRecipesPage from "../MatchMeWithRecipes";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import { PantryContext } from "./PantryContext";

const App = () => {
  const [pantry, setPantry] = useState([16, 17, 18]);
  function createTogglePantryStatus(id) {
    return (e) => {
      if (pantry.includes(id)) {
        setPantry(pantry.filter((i) => i !== id));
      } else {
        setPantry([...pantry, id]);
      }

      console.log(pantry);
    };
  }

  return (
    <PantryContext.Provider value={{ pantry, createTogglePantryStatus }}>
      <Router>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
          <Route path={ROUTES.COOKINGPAGE} component={CookingPage} />
          <Route path={ROUTES.HOME} component={HomePage} />

          <Route path={ROUTES.ACCOUNT} component={AccountPage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.ONBOARDING} component={OnboardingPage} />
          <Route path={ROUTES.ADD_INGREDIENTS} component={AddIngredientsPage} />
          <Route path={ROUTES.PANTRY} component={PantryPage} />
          <Route
            path={ROUTES.MATCHMEWITHRECIPES}
            component={MatchMeWithRecipesPage}
          />
        </Switch>
      </Router>
    </PantryContext.Provider>
  );
};
export default withAuthentication(App);
