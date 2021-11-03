import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import LogoCircle from "../Navigation/LogoCircle";
import foodData from "../AddIngredients/foodData";
import * as ROUTES from "../../constants/routes";
import FoodCard from "./FoodCard";
import scan from "../../pictures/scan.png";
import { PantryContext } from "../App/PantryContext";

const PantryPage = () => {
  const { pantry, createTogglePantryStatus } = useContext(PantryContext);
  const [activeCategory, setActiveCategory] = useState();
  let history = useHistory();
  function searchForIngredients() {
    history.push(ROUTES.ADD_INGREDIENTS);
  }

  function changeColor(e) {
    let index = e.target.innerText;
    if (index === "All") {
      setActiveCategory(undefined);
    } else if (index === "Fridge") {
      setActiveCategory("Fridge");
    } else if (index === "Freezer") {
      setActiveCategory("Freezer");
    } else if (index === "Dry foods") {
      setActiveCategory("Dry foods");
    }
  }
  const filteredFood = foodData.filter(
    (food) => food.category === activeCategory || activeCategory === undefined
  );
  return (
    <OnboardingLayout>
      <h1 className="pantryH1">Pantry</h1>
      <input
        onClick={searchForIngredients}
        className="searchField"
        placeholder="Search ingredients to add"
      />

      <nav className="categoryNav">
        <ul className="categoryList">
          <li
            className={activeCategory === undefined ? "active" : ""}
            onClick={changeColor}
          >
            All
          </li>
          <li
            className={activeCategory === "Fridge" ? "active" : ""}
            onClick={changeColor}
          >
            Fridge
          </li>
          <li
            className={activeCategory === "Freezer" ? "active" : ""}
            onClick={changeColor}
          >
            Freezer
          </li>
          <li
            className={activeCategory === "Dry foods" ? "active" : ""}
            onClick={changeColor}
          >
            Dry foods
          </li>
        </ul>
      </nav>
      <section className="pantrySection">
        {filteredFood.map((food) =>
          pantry.includes(food.id) ? (
            <FoodCard
              key={food.id}
              food={food}
              inPantry={pantry.includes(food.id)}
              togglePantryStatus={createTogglePantryStatus(food.id)}
            />
          ) : null
        )}
        {pantry.length === 0 ? (
          <p class="pantryP">
            Your pantry is empty. Add ingredients by searching for them.
          </p>
        ) : null}
      </section>
    </OnboardingLayout>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(PantryPage);
