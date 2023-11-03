import axios from "axios";

const API_HOST = "http://192.168.1.112:8080"; // TODO should use .env

// TODO use react query to have cache!
export const getIngredientsSortedByName = async (sortByName) => {
  try {
    const response = await axios.get(
      `${API_HOST}/v1/ingredients?sort-by-name=${sortByName}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    ingredients = addSelectedToIngredients(response.data, false);
    // console.log(ingredients);
    return ingredients;
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
