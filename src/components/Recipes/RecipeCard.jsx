import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import IngredientLabel from "../Ingredients/IngredientLabel";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from '../../styles/colors';

const RecipeCard = ({ recipe, onPress, onToggleFavorite }) => {

  const { isDarkMode, toggleTheme } = useTheme();

  const capitalizedTitle = recipe.title.charAt(0).toUpperCase() + recipe.title.slice(1);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={isDarkMode ? darkStyles.recipeCard : lightStyles.recipeCard}>
        <Text style={isDarkMode ? darkStyles.boldOnBackgroundMediumText : lightStyles.boldOnBackgroundMediumText}>{capitalizedTitle}</Text>

        <View style={styles.ingredientLabelsContainer}>
          {recipe.definitions.include_ingredients ? (
            recipe.definitions.include_ingredients
              .slice(0, 3)
              .map((ingredientName) => (
                <IngredientLabel
                  key={ingredientName}
                  style={styles.ingredientLabel}
                  type="included"
                  ingredientName={ingredientName}>
                </IngredientLabel>
              ))
          ) : null}
          {recipe.definitions.include_ingredients &&
            recipe.definitions.include_ingredients.length > 3 && (
              <IngredientLabel
                key={"..."}
                type="included"
                ingredientName={"..."}>
              </IngredientLabel>
            )}
        </View>

        <View style={styles.ingredientLabelsContainer}>
          {recipe.definitions.exclude_ingredients ? (
            recipe.definitions.exclude_ingredients
              .slice(0, 3)
              .map((ingredientName) => (
                <IngredientLabel
                  key={ingredientName}
                  style={styles.ingredientLabel}
                  type="excluded"
                  ingredientName={ingredientName}>
                </IngredientLabel>
              ))
          ) : null}
          {recipe.definitions.exclude_ingredients &&
            recipe.definitions.exclude_ingredients.length > 3 && (
              <IngredientLabel
                key={"..."}
                type="excluded"
                ingredientName={"..."}>
              </IngredientLabel>
            )}
        </View>


        <TouchableOpacity
          onPress={() => { onToggleFavorite(recipe) }}
          style={styles.favoriteButton}
        >
          <Icon
            name={recipe.is_favorite ? 'star' : 'star-o'}
            size={24}
            color={recipe.is_favorite ?
              isDarkMode ? darkThemeColors.secondary : lightThemeColors.secondary :
              isDarkMode ? "gray" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  favoriteButton: {
    padding: 8,
  },
  ingredientLabelsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default RecipeCard;
