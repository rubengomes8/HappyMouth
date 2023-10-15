import axios from "axios";

const API_HOST = "http://192.168.1.227:8080"; // TODO should use .env

export const postGenerateRecipe = async (inc_ingredients, exc_ingredients) => {
  try {
    const response = await axios.post(
      `${API_HOST}/api/recipes`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: {
            include_ingredients: inc_ingredients,
            exclude_ingredients: exc_ingredients,
        }
      }
    );
    console.log(response.json());
  } catch (error) {
    alert(error);
  }
};

const addSelectedToIngredients = (ingredients, selectedValue) => {
  if (ingredients != undefined) {
    return ingredients.map((item) => ({
      ...item,
      selected: selectedValue,
    }));
  }
  return null;
};
