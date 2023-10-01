import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import CreateRecipeButton from "../components/Recipes/CreateRecipeButton.js";
import RecipeCard from "../components/Recipes/RecipeCard.js";
import NewRecipeModal from "../components/Recipes/NewRecipeModal.js";
const RecipesScreen = ({}) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  createRecipeHandler = ({}) => {
    openModal();
    console.log("Create recipe handler");
  };

  pressCardHandler = ({}) => {
    console.log("Press card handler");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <RecipeCard
          title={"Favourite"}
          onPress={pressCardHandler}
        ></RecipeCard>
        <RecipeCard
          title={"TODO"}
          onPress={pressCardHandler}
        ></RecipeCard>
        <RecipeCard
          title={"TODO"}
          onPress={pressCardHandler}
        ></RecipeCard>
        <RecipeCard
          title={"TODO"}
          onPress={pressCardHandler}
        ></RecipeCard>
        <RecipeCard
          title={"TODO"}
          onPress={pressCardHandler}
        ></RecipeCard>
      </ScrollView>
      <View>
        <CreateRecipeButton onPress={createRecipeHandler}></CreateRecipeButton>
      </View>
      <NewRecipeModal isVisible={isModalVisible} onClose={closeModal} />
    </View>
  );
};

export default RecipesScreen;
