import React from "react";
import { withAuthorization } from "../Session";

import { useParams } from "react-router-dom";

import recipeData from "./recipeData";

const CookingPage = () => {
  let { title } = useParams();

  const found = recipeData.find((recipe) => recipe.title === title);

  return (
    <div>
      <h1>{found.title}</h1>

      <img src={found.img} alt={found.title} />

      <div>
        <div className="recipeInfoBar">
          <p>🕚 {found.time}</p>
          <p>🍽 {found.port} port</p>
          <p>🥣 2/11 ingredients</p>
        </div>
        <ul className="recipeNav">
          <li>Ingredients</li>
          <li>Do like this</li>
        </ul>
        <section>
          <h2>From your pantry</h2>
          <h2>Ingredients to buy</h2>
        </section>
      </div>
    </div>
  );
};
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(CookingPage);
