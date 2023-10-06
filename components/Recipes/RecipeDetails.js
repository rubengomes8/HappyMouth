import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <View>
      <TouchableOpacity onPress={onClose}>
        <Text style={styles.onCloseText}>Close</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{recipe.title}</Text>
      <ScrollView>
        {recipe.instructions.map((instruction, index) => 
          <Text key={index}>{instruction}</Text>
        )}
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
