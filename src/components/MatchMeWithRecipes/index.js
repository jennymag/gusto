import React from "react";
import { withAuthorization } from "../Session";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const MatchMeWithRecipesPage = () => (
  <section className="matchSection">
    <h1 className="matchH1">
      Con gratulations!🥳 You just added your first ingredients to the pantry
    </h1>
    <div className="skillbarContainer">
      <div className="skills html100">100% Done</div>
    </div>
    <p className="matchP">You can add or change your pantry at any time</p>
    <Link to={ROUTES.HOME}>
      <button className="matchBtn">Match me with tasty recipes!</button>
    </Link>
  </section>
);

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(MatchMeWithRecipesPage);
