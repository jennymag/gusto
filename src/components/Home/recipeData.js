import pancake from "../../pictures/sam-moqadam-yxZSAjyToP4-unsplash.jpg";
import frozenyoghurt from "../../pictures/photo-1495147466023-ac5c588e2e94.jpeg";
import beefstew from "../../pictures/photo-1608500218861-01091cdc501e.jpeg";
const recipeData = [
  {
    title: "Pancakes",
    time: "120 min",
    port: "4",
    id: 1,
    img: pancake,
    pantry: ["Wheat flour", "Salt", "Pepper", "Milk", "Eggs", "Butter", "Jam"],
    about: {
      ingredients: [
        "2 1/2 dl wheat flour",
        "1/2 tsk salt",
        "6 dl milk",
        "3 eggs",
        "butter for frying",
        "jam, berries or fruit for serving",
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
    time: "45 min",
    port: "4",
    id: 2,
    img: beefstew,
    pantry: [
      "Potato",
      "Mushroom",
      "Beef",
      "Oil",
      "Garlic",
      "Salt",
      "Pepper",
      "Corn starch",
      "Cooking cream",
      "Soy sauce",
      "Chicken broth",
    ],
    about: {
      ingredients: [
        "900g potato",
        "250g mushroom",
        "600g beef",
        "2 msk oil",
        "1 clove of garlic",
        "salt",
        "pepper",
        "1 msk corn starch",
        "2 1/2 dl cooking cream",
        "1 msk soy sauce",
        "2 1/2 dl chicken broth",
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
    time: "60 min",
    port: "4",
    id: 3,
    img: frozenyoghurt,
    pantry: ["Clementine", "Yoghurt", "Cocunut"],
    about: {
      ingredients: [
        "1 clementine",
        "1/2 dl natural yoghurt",
        "1 tsk shredded coconut",
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
