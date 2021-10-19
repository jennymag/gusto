import React, { useState } from "react";

const FoodCard = ({ food, inPantry, togglePantryStatus }) => {
  return (
    <div className="foodCard" key={food.id}>
      <h1 className="foodAvatar">{food.img}</h1>

      <div className="foodInfo">
        <h2 className="foodH2">{food.title}</h2>
        <p className="foodP">{food.category}</p>
      </div>
      <div>
        <button
          onClick={togglePantryStatus}
          className={inPantry ? "removeBtn foodBtn" : "addBtn foodBtn"}
        >
          {inPantry ? "✔︎" : "+"}
        </button>
      </div>
    </div>
  );
};
export default FoodCard;
