import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import RecipeDetailsIngredients from "./RecipeDetailsIngredients";
import RecipeDetailsInstructions from "./RecipeDetailsInstructions";
import { AntDesign, Ionicons } from '@expo/vector-icons';

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from "../../styles/colors";

const RecipeDetails = ({ recipe, onClose }) => {

  const { isDarkMode, toggleTheme } = useTheme();
  const capitalizedTitle = recipe.title.charAt(0).toUpperCase() + recipe.title.slice(1);

  return (
    <View style={isDarkMode ? darkStyles.newRecipeModalContent : lightStyles.newRecipeModalContent}>
      <TouchableOpacity onPress={onClose}>
        <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
          <AntDesign style ={{marginTop: 4}} name="down" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
        </View>
      </TouchableOpacity>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredMediumText : lightStyles.boldOnBackgroundCenteredMediumText}>{capitalizedTitle}</Text>
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
