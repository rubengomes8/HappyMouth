const ExampleRecipes = [
  {
    id: 1,
    title: "Delicious Pasta",
    short_description: "Pasta with tomato and parmesan cheese",
    favourite: true,
    definitions: {
      include_ingredients: ["Tomato", "Cheese"],
      exclude_ingredients: ["Onion"],
    },
    instructions: [
      "Boil water in a large pot.",
      "Add pasta and cook until al dente.",
      "Heat olive oil in a pan and add tomato sauce.",
      "Simmer for 10 minutes.",
      "Drain pasta and add it to the sauce.",
      "Mix in Parmesan cheese.",
      "Serve hot and enjoy!",
    ],
  },
  {
    id: 2,
    title: "Delicious steak with french fries",
    short_description: "Grilled steak with french fries",
    favourite: true,
    definitions: {
      include_ingredients: ["Meat", "Potato", "Oregon"],
      exclude_ingredients: ["Onion"],
    },
    instructions: [
      "Cut the potatoes in sticks.",
      "Deep fry them or fry them using an airfrier.",
      "Heat olive oil in a pan and add the steak,",
      "Simmer for 10 minutes.",
      "Drain the french potatoes.",
      "Mix the french potatoes with oregon, salt and pepper.",
      "Serve the steak with the potatoes and enjoy!",
    ],
  },
];
  
  export default ExampleRecipes;