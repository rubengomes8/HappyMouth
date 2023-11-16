import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, RefreshControl } from "react-native";
import CreateRecipeButton from "../components/Recipes/CreateRecipeButton.jsx";
import RecipeCard from "../components/Recipes/RecipeCard.jsx";
import NewRecipeModal from "../components/Recipes/NewRecipeModal.jsx";
import RecipeDetailsModal from "../components/Recipes/RecipeDetailsModal.jsx";
import { getUserRecipes } from "../api/recipegeneratorApi.js";
import { useTheme } from '../contexts/ThemeContext';


const RecipesScreen = ({}) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isNewRecipeModalVisible, setNewRecipeModalVisible] = useState(false);
  const [isRecipeDetailsModalVisible, setRecipeDetailsModalVisible] =
    useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [userRecipes, setUserRecipes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // USER RECIPES
  const fetchUserRecipes = async () => {
    const response = await getUserRecipes();
    setUserRecipes(response.data);
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      await fetchUserRecipes();
      setRefreshing(false);
    } catch (error) {
      setRefreshing(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserRecipes();
  }, []);

  // NEW RECIPE MODAL
  const openNewRecipeModal = () => {
    setNewRecipeModalVisible(true);
  };

  const closeNewRecipeModal = () => {
    setNewRecipeModalVisible(false);
  };

  const closeNewRecipeModalAndUpdateRecipes = (newUserRecipe) => {
    setUserRecipes( prevUserRecipes => [...(prevUserRecipes ?? []), newUserRecipe])
    setNewRecipeModalVisible(false);
  };

  createRecipeHandler = ({}) => {
    openNewRecipeModal();
  };

  pressCardHandler = ({}) => {};

  // RECIPE DETAILS MODAL
  const openRecipeDetailsModal = (recipe) => {
    setSelectedRecipe(recipe);
    setRecipeDetailsModalVisible(true);
  };

  const closeRecipeDetailsModal = () => {
    setSelectedRecipe({});
    setRecipeDetailsModalVisible(false);
  };

  const recipeDetailsHandler = (recipe) => {
    openRecipeDetailsModal(recipe);
  };

  // FAVORITE RECIPE TOGGLE
  const onToggleFavorite = (recipeToUpdate) => {
    setUserRecipes((userRecipes) =>
      userRecipes.map((recipe) =>
        recipe.id === recipeToUpdate.id
          ? { ...recipe, is_favorite: !recipe.is_favorite }
          : recipe
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
      >
        {userRecipes ? (
          userRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onPress={() => recipeDetailsHandler(recipe)}
              onToggleFavorite={() => onToggleFavorite(recipe)}
            ></RecipeCard>
          ))
        ) : (
          <View style={styles.noRecipesView}>
            <Text style={isDarkMode ? styles.noRecipesTextDark : styles.noRecipesTextLight}>Create your first recipe</Text>
          </View>
        )}
      </ScrollView>
      <View>
        <CreateRecipeButton onPress={createRecipeHandler}></CreateRecipeButton>
      </View>
      <NewRecipeModal
        isVisible={isNewRecipeModalVisible}
        onClose={closeNewRecipeModal}
        onCloseAndUpdateRecipes={closeNewRecipeModalAndUpdateRecipes}
      />
      <RecipeDetailsModal
        isVisible={isRecipeDetailsModalVisible}
        onClose={closeRecipeDetailsModal}
        recipe={selectedRecipe}
      />
    </View>
  );
};

export default RecipesScreen;

const styles = StyleSheet.create({
  noRecipesView: {
    flex: 1,
    marginTop: 250, // TODO
    alignItems: "center",
    justifyContent: "center",
  },
  noRecipesTextLight: {
    fontWeight: "bold",
  },
  noRecipesTextDark: {
    color: "lightgray",
    fontWeight: "bold",
  },
});
