import pancake from "../../pictures/sam-moqadam-yxZSAjyToP4-unsplash.jpg";
import frozenyoghurt from "../../pictures/photo-1495147466023-ac5c588e2e94.jpeg";
import beefstew from "../../pictures/photo-1608500218861-01091cdc501e.jpeg";
const recipeData = [
  {
    title: "Pancakes",
    time: "45",
    port: "4",
    id: 1,
    img: pancake,
    ingredients: [18, 5, 12, 20, 21],
    about: {
      amountAndIngredients: [
        { food: "Wheat flour", id: 21, am: "2 1/2 dl" },
        { food: "Salt", id: 12, am: "1/2 tsk" },
        { food: "Milk", id: 20, am: "6 dl" },
        { food: "Eggs", id: 5, am: "3" },
        { food: "Butter", id: 18, am: "(For frying)" },
        { food: "Jam", id: 22, am: "(For serving)" },
      ],
      doLikeThis: [
        "1. Blend flour and salt in a bowl. Whisk half of the milk until it becomes a smooth batter. Then add the last milk and the eggs and whisk.",
        "2. Fry thin pancakes in a pan with butter.",
        "3. Serve with jam, berries or fruit.",
      ],
    },
    tags: {
      specialPref: "Vegetarian",
      course: ["Breakfast", "Dinner", "Lunch"],
    },
  },
  {
    title: "Beef in creamy mushroom sauce",
    time: "40",
    port: "4",
    id: 2,
    img: beefstew,
    ingredients: [8, 9, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    about: {
      amountAndIngredients: [
        { food: "Potato", id: 8, am: "900g" },
        { food: "Mushroom", id: 9, am: "250g" },
        { food: "Beef", id: 7, am: "600g" },
        { food: "Oil", id: 10, am: "2 msk" },
        { food: "Garlic", id: 11, am: "1 Clove of" },
        { food: "Salt", id: 12, am: "" },
        { food: "Pepper", id: 13, am: "" },
        { food: "Corn starch", id: 14, am: "1 msk" },
        { food: "Cooking cream", id: 15, am: "2 1/2 dl" },
        { food: "Soy sauce", id: 19, am: "1 msk" },
        { food: "Chicken broth", id: 24, am: "2 1/2 dl" },
      ],
      doLikeThis: [
        "1. Peel and boil the potatos",
        "2. Cut the mushrooms in pieces",
        "3. Shred the beef and fry half of it in oil. Add chopped garlic, salt and pepper. Put the beef to the side when fried",
        "4. Fry the mushroom until golden and add the beef to the pan again.",
        "5. Mix the corn starch with cooking cream and blend into the pan together with soy sauce and chicken broth. Let it cook for 5 min.",
        "6. Serve with potato",
      ],
    },
    tags: { specialPref: "", course: ["Dinner", "Lunch"] },
  },
  {
    title: "Frozen yoghurt clementine",
    time: "60",
    port: "4",
    id: 3,
    img: frozenyoghurt,
    ingredients: [24, 23, 16],
    about: {
      amountAndIngredients: [
        { food: "Clementine", id: 24, am: "1" },
        { food: "Yoghurt", id: 23, am: "1/2 dl" },
        { food: "Shredded coconut", id: 16, am: "1 tsk" },
      ],
      doLikeThis: [
        "1. Peel the clementine and separate it",
        "2. Dip the clementine pieces in yoghurt",
        "3. Put the pieces on a plate with a layer of baking paper",
        "4. Sprinkle cocunut on top and freeze for 2 hours.",
      ],
    },
    tags: { specialPref: "Vegetarian", course: ["Snack"] },
  },
];

export default recipeData;
