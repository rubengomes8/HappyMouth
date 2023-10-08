import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import RecipeDetailsIngredients from "./RecipeDetailsIngredients.js";
import RecipeDetailsInstructions from "./RecipeDetailsInstructions.js";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <View>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.onCloseText}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{recipe.title}</Text>
      <ScrollView>
        <RecipeDetailsIngredients
          ingredients={recipe.ingredients}
        ></RecipeDetailsIngredients>
        <RecipeDetailsInstructions
          instructions={recipe.instructions}
        ></RecipeDetailsInstructions>
      </ScrollView>
    </View>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  onCloseText: {
    color: "blue",
    fontSize: 16,
  },
});
