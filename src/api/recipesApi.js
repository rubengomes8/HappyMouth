import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_HOST = "http://192.168.1.92:8080"; // TODO should use .env

export const postGenerateRecipe = async (incIngredients, excIngredients, recipeType) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    if (token) {
      const response = await axios.post(`${API_HOST}/v1/recipes`, {
        include_ingredients: incIngredients,
        exclude_ingredients: excIngredients,
        recipe_type: recipeType,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      return response;
    } else {
      throw new Error("AccessToken not found in AsyncStorage");
    }
  } catch (error) {
    throw error;
  }
};

export const getUserRecipes = async () => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    if (token) {
      const response = await axios.get(`${API_HOST}/v1/recipes`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      return response;
    } else {
      throw new Error("AccessToken not found in AsyncStorage");
    }
  } catch (error) {
    throw error;
  }
};

export const updateUserRecipeFavoriteState = async (recipeID, isFavorite) => {
  try {
    const token = await AsyncStorage.getItem("AccessToken");
    if (token) {
      const response = await axios.patch(`${API_HOST}/v1/recipes/${recipeID}/favorite`, 
      {
        is_favorite: isFavorite
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } else {
      throw new Error("AccessToken not found in AsyncStorage");
    }
  } catch (error) {
    throw error;
  }
};
