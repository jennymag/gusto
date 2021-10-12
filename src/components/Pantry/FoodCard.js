import React, { useState } from "react";

const FoodCard = ({ food, addIngredient }) => {
  const [activeToggleBtn, setActiveToggleBtn] = useState(false);
  const [foodKey, setFoodKey] = useState(undefined);

  function toggleButton(event) {
    console.log(event.currentTarget.parentElement.dataset.index);
    //event.target.parentElement);
    setFoodKey("");
    if (activeToggleBtn === false) {
      setActiveToggleBtn(true);
    } else {
      setActiveToggleBtn(false);
    }
  }
  return (
    <div className="foodCard" key={food.id} data-index={food.id}>
      <h1 className="foodH1">{food.img}</h1>
      <div>
        <h2 className="foodH2">{food.title}</h2>
        <p className="foodP">{food.category}</p>
      </div>
      <button
        onClick={toggleButton}
        className={activeToggleBtn === false ? "addBtn" : "removeBtn"}
      >
        {activeToggleBtn === false ? "+" : "✔︎"}
      </button>
    </div>
  );
};
export default FoodCard;
