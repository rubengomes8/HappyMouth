import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <View>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.onCloseText}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{recipe.title}</Text>
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
