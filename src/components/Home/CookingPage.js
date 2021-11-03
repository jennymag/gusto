import React, { useState, useContext } from "react";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import { useParams } from "react-router-dom";
import LogoCircle from "../Navigation/LogoCircle";
import recipeData from "./recipeData";
import MatchingIngredients from "./MatchingIngredients";
import { PantryContext } from "../App/PantryContext";

const CookingPage = () => {
  const { pantry, createTogglePantryStatus } = useContext(PantryContext);
  const [activeCategory, setActiveCategory] = useState();
  let { title } = useParams();
  const found = recipeData.find((recipe) => recipe.title === title);

  const ingredientsInPantry = found.about.amountAndIngredients.filter((i) =>
    pantry.includes(i.id)
  );
  const ingredientsToBuy = found.about.amountAndIngredients.filter(
    (i) => !pantry.includes(i.id)
  );

  function changeColor(e) {
    let index = e.target.innerText;
    if (index === "INGREDIENTS") {
      setActiveCategory(undefined);
    } else if (index === "DO LIKE THIS") {
      setActiveCategory("DO LIKE THIS");
    }
  }
  return (
    <OnboardingLayout>
      <div>
        <h1 className="pantryH1">{found.title}</h1>
        <div className="cookingImgContainer">
          <img src={found.img} alt={found.title} className="cookingImg" />
        </div>
        <div>
          <div className="recipeInfoBar">
            <p>
              <span role="img">🕚 </span> {found.time} min
            </p>
            <p>
              <span role="img">🍽 </span> {found.port} port
            </p>
            <p>
              <span role="img">🥣 </span>
              <MatchingIngredients
                pantry={pantry}
                ingredients={found.ingredients}
              />
            </p>
          </div>
          <ul className="recipeNav">
            <li
              onClick={changeColor}
              className={activeCategory === undefined ? "active" : ""}
            >
              INGREDIENTS
            </li>
            <li
              onClick={changeColor}
              className={activeCategory === "DO LIKE THIS" ? "active" : ""}
            >
              DO LIKE THIS
            </li>
          </ul>
          <section className="cookingContainer">
            {activeCategory ? (
              <h2>
                {found.about.doLikeThis.map((i) => (
                  <p className="cookingP">{i}</p>
                ))}
              </h2>
            ) : (
              <div>
                {ingredientsInPantry.length === 0 ? null : (
                  <h2 className="cookingH2 bold">From your pantry</h2>
                )}
                {ingredientsInPantry.map((i) => (
                  <p className="cookingP">
                    {i.am} {i.food}
                  </p>
                ))}
                {ingredientsToBuy.length === 0 ? null : (
                  <h2 className="cookingH2 bold">Ingredients to buy</h2>
                )}
                {ingredientsToBuy.map((i) => (
                  <p className="cookingP">
                    {i.am} {i.food}
                  </p>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </OnboardingLayout>
  );
};
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(CookingPage);
