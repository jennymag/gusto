import React, { useState } from "react";

const FoodCard = ({ food }) => {
  const [activeToggleBtn, setActiveToggleBtn] = useState(false);
  //const [foodKey, setFoodKey] = useState(undefined);

  function toggleButton(event) {
    console.log(event.currentTarget.parentElement.dataset.index);
    //event.target.parentElement);
    //setFoodKey("");
    if (activeToggleBtn === false) {
      setActiveToggleBtn(true);
    } else {
      setActiveToggleBtn(false);
    }
  }
  return (
    <div className="foodCard" key={food.id} data-index={food.id}>
      <h1 className="foodAvatar">{food.img}</h1>

      <div className="foodInfo">
        <h2 className="foodH2">{food.title}</h2>
        <p className="foodP">{food.category}</p>
      </div>
      <div>
        <button
          onClick={toggleButton}
          className={
            activeToggleBtn === false ? "addBtn foodBtn" : "removeBtn foodBtn"
          }
        >
          {activeToggleBtn === false ? "+" : "✔︎"}
        </button>
      </div>
    </div>
  );
};
export default FoodCard;
