import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

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
        <TouchableOpacity
          onPress={() => {onToggleFavorite(recipe)}}
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
});

export default RecipeCard;
