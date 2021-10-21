import React from "react";

const MatchingIngredients = ({ pantry, ingredients }) => {
  const result = ingredients.filter((i) => pantry.includes(i));
  return (
    <span>
      {result.length}/{ingredients.length} matching ingredients
    </span>
  );
};

export default MatchingIngredients;
