import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import LogoCircle from "../Navigation/LogoCircle";
import foodData from "../AddIngredients/foodData";
import * as ROUTES from "../../constants/routes";
import FoodCard from "./FoodCard";
import scan from "../../pictures/scan.png";

const PantryPage = () => {
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
      <header class="pantryHeader">
        <LogoCircle />
      </header>
      <h1 className="pantryH1">Pantry</h1>
      <input
        onClick={searchForIngredients}
        className="searchField"
        placeholder="Search ingredients to add"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Search ingredient to add")}
      />
      <img src={scan} className="scan" alt="scan barcode" />
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
          food.isAdded ? <FoodCard food={food} /> : null
        )}
        {!foodData.some((i) => i.isAdded) ? (
          <p class="pantryP">
            Your pantry is empty. Add ingredients by searching or scanning it's
            barcode.
          </p>
        ) : null}
      </section>
    </OnboardingLayout>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(PantryPage);
