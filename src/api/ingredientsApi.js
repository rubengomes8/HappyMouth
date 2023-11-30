import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_HOST = "http://192.168.1.228:8080"; // TODO should use .env

// TODO use react query to have cache!
export const getIngredientsSortedByName = async (sortByName) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    if (token) {
      const response = await axios.get(
        `${API_HOST}/v1/ingredients?sort-by-name=${sortByName}`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      ingredients = addSelectedToIngredients(response.data, false);
      // console.log(ingredients);
      return ingredients;
    } else {
      throw new Error('AccessToken not found in AsyncStorage');
    }
  } catch (error) {
    throw error;
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
