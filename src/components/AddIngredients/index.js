import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import LogoCircle from "../Navigation/LogoCircle";
import foodData from "./foodData";
import FoodCard from "../Pantry/FoodCard";
import scan from "../../pictures/scan.png";
import * as ROUTES from "../../constants/routes";
import { PantryContext } from "../App/PantryContext";

const AddIngredientsPage = () => {
  const { pantry, createTogglePantryStatus } = useContext(PantryContext);
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
      <img src={scan} className="scan" alt="scan barcode" />
      <section className="pantrySection">
        {foodData
          .filter((food) =>
            food.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((food) => (
            <FoodCard
              food={food}
              inPantry={pantry.includes(food.id)}
              togglePantryStatus={createTogglePantryStatus(food.id)}
            />
          ))}

        <Link to={ROUTES.MATCHMEWITHRECIPES}>
          <button>Done</button>
        </Link>
      </section>
    </OnboardingLayout>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(AddIngredientsPage);
