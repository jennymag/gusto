import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import LogoCircle from "../Navigation/LogoCircle";
import foodData from "./foodData";
import FoodCard from "../Pantry/FoodCard";

import * as ROUTES from "../../constants/routes";

const AddIngredientsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  function searchIngredient(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <OnboardingLayout>
      <header class="pantryHeader">
        <LogoCircle />
      </header>
      <h1 className="pantryH1">Add ingredients</h1>
      <input
        autoFocus
        onChange={searchIngredient}
        className="searchField"
        placeholder="Search ingredients to add"
        onFocus={(e) => (e.target.placeholder = "")}
        onBlur={(e) => (e.target.placeholder = "Search ingredient to add")}
      />
      <img src="" alt="b" />
      <section className="pantrySection">
        {foodData
          .filter((food) => food.title.includes(searchTerm))
          .map((food) => (
            <FoodCard food={food} />
          ))}

        <Link to={ROUTES.PANTRY}>
          <button>Done</button>
        </Link>
      </section>
    </OnboardingLayout>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AddIngredientsPage);
