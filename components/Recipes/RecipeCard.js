import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RecipeCard = ({ recipe, onPress, onToggleFavorite }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Text style={styles.title}>{recipe.title}</Text>
        <View style={styles.content}>
          {<Text>{recipe.short_description}</Text>}
        </View>
        <TouchableOpacity
          onPress={() => {
            onToggleFavorite(recipe)
          }}
          style={styles.favoriteButton}
        >
          <Icon
            name={recipe.is_favorite ? 'star' : 'star-o'}
            size={24}
            color={recipe.is_favorite ? 'gold' : 'gray'}
          />
        </TouchableOpacity>
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
  favoriteButton: {
    padding: 8,
  },
});

export default RecipeCard;
