import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import CreateRecipeButton from "../components/Recipes/CreateRecipeButton.js";
import RecipeCard from "../components/Recipes/RecipeCard.js";
import NewRecipeModal from "../components/Recipes/NewRecipeModal.js";
import RecipeDetailsModal from "../components/Recipes/RecipeDetailsModal.js";
import ExampleRecipes from "../examples/Recipe.js";

const RecipesScreen = ({}) => {
  const [isNewRecipeModalVisible, setNewRecipeModalVisible] = useState(false);
  const [isRecipeDetailsModalVisible, setRecipeDetailsModalVisible] =
    useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState({});

  // New recipe modal
  const openNewRecipeModal = () => {
    setNewRecipeModalVisible(true);
  };

  const closeNewRecipeModal = () => {
    setNewRecipeModalVisible(false);
  };

  createRecipeHandler = ({}) => {
    openNewRecipeModal();
    console.log("Create recipe handler");
  };

  pressCardHandler = ({}) => {
    console.log("Press card handler");
  };

  // Recipe details modal
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
    console.log("recipe details handler");
  };
  const myRecipes = ExampleRecipes;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {myRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            onPress={() => recipeDetailsHandler(recipe)}
          ></RecipeCard>
        ))}
      </ScrollView>
      <View>
        <CreateRecipeButton onPress={createRecipeHandler}></CreateRecipeButton>
      </View>
      <NewRecipeModal
        isVisible={isNewRecipeModalVisible}
        onClose={closeNewRecipeModal}
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
