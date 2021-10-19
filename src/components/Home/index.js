import React from "react";
import { withAuthorization } from "../Session";
import { OnboardingLayout } from "../Navigation/OnboardingLayout";
import recipeData from "./recipeData";
import { Link, useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const HomePage = () => {
  let history = useHistory();

  function handleClick(title) {
    return function () {
      history.push({
        pathname: `/home/${title}`,
      });
    };
  }
  return (
    <OnboardingLayout>
      <h1>Recipes</h1>
      <input className="searchField" placeholder="Search recipe"></input>
      <section className="recipeSection">
        {recipeData.map((recipe) => (
          <div onClick={handleClick(recipe.title)} className="recipeCard">
            <img className="recipeImg" src={recipe.img} alt={recipe.title} />

            <div className="recipeContainer">
              <h1 className="recipeTitle">{recipe.title}</h1>
              <div className="recipeBar">
                <p className="recipeTime">🕚 {recipe.time}</p>
                <p className="recipePort">🍽 {recipe.port} port</p>
                <p className="recipeIngr">🥣 {recipe.pantry} ingredients</p>
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
