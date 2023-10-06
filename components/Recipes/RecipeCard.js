import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.content}>
          {<Text>{recipe.shortDescription}</Text>}
        </View>
        <View style={styles.iconContainer}>
          <Icon name="star" size={20} color="black" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 15,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  content: {},
  iconContainer: {
    position: "absolute",
    top: 16,
    right: 16,
  },
});

export default RecipeCard;
