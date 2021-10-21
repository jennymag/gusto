import React, { useState, useContext } from "react";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import recipeData from "./recipeData";
import { useHistory } from "react-router-dom";
import filter from "../../pictures/filter.png";
import { PantryContext } from "../App/PantryContext";
import MatchingIngredients from "./MatchingIngredients";

const HomePage = () => {
  const { pantry, createTogglePantryStatus } = useContext(PantryContext);
  let history = useHistory();
  const [searchTerm, setSearchTerm] = useState("");

  function searchIngredient(event) {
    setSearchTerm(event.target.value);
  }

  function handleClick(title) {
    return function () {
      history.push({
        pathname: `/home/${title}`,
      });
    };
  }

  // function compareArrays(ingredients) {

  // }

  return (
    <OnboardingLayout>
      <header className="pantryHeader">
        <div className="filterContainer">
          <img src={filter} alt="filter" className="logo" />
        </div>
      </header>
      <h1 className="pantryH1">Recipes</h1>
      <input
        onChange={searchIngredient}
        className="searchField"
        placeholder="Search recipe"
      ></input>
      <section className="recipeSection">
        {recipeData
          .filter((recipe) =>
            recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((recipe) => (
            <div
              onClick={handleClick(recipe.title)}
              className="recipeCard"
              key={recipe.id}
            >
              <img className="recipeImg" src={recipe.img} alt={recipe.title} />

              <div className="recipeContainer">
                <h1 className="recipeTitle">{recipe.title}</h1>
                <div className="recipeBar">
                  <p className="recipeTime">
                    <span>🕚 </span> {recipe.time} min
                  </p>
                  <p className="recipePort">
                    <span>🍽 </span>
                    {recipe.port} port
                  </p>
                  <p className="recipeIngr">
                    <span>🥣 </span>
                    <MatchingIngredients
                      pantry={pantry}
                      ingredients={recipe.ingredients}
                    />
                  </p>
                </div>
                <div className="tagBar">
                  {recipe.tags.course[0] ? (
                    <p className="recipeTags">{recipe.tags.course[0]}</p>
                  ) : null}
                  {recipe.tags.course[1] ? (
                    <p className="recipeTags">{recipe.tags.course[1]}</p>
                  ) : null}
                  {recipe.tags.course[2] ? (
                    <p className="recipeTags">{recipe.tags.course[2]}</p>
                  ) : null}
                  {recipe.tags.specialPref ? (
                    <p className="recipeTags">{recipe.tags.specialPref}</p>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
      </section>
    </OnboardingLayout>
  );
};
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
