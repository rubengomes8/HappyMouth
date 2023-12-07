import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, Ionicons } from '@expo/vector-icons';

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from "../../styles/colors";

import RecipeIngredientsSummary from "./RecipeIngredientsSummary";

const Step4 = ({
  ingredients,
  recipeTypes,
  onPrevious,
  onSubmit,
  onClose,
  isSubmitButtonDisabled,
}) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose}>
        <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
          <AntDesign style ={{marginTop: 4}} name="down" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
        </View>
      </TouchableOpacity>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredMediumText : lightStyles.boldOnBackgroundCenteredMediumText}>Recipe summary</Text>
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredMediumText : lightStyles.boldOnBackgroundCenteredMediumText}>{"Recipe Type: "}</Text>
        <Text style={isDarkMode ? darkStyles.onBackgroundMediumText : lightStyles.onBackgroundMediumText}>{recipeTypes.filter(t => t.chosen)[0].type.toUpperCase()}</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={isDarkMode ? darkStyles.boldOnBackgroundLeftMediumText : lightStyles.boldOnBackgroundLeftMediumText}>Included Ingredients</Text>
        <RecipeIngredientsSummary ingredients={ingredients.filter((i) => i.isIncluded)} type="included"></RecipeIngredientsSummary>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={isDarkMode ? darkStyles.boldOnBackgroundLeftMediumText : lightStyles.boldOnBackgroundLeftMediumText}>Excluded Ingredients</Text>
        <RecipeIngredientsSummary ingredients={ingredients.filter((i) => i.isExcluded)} type="excluded"></RecipeIngredientsSummary>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <View
          style={[isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin]}
        >
          <TouchableOpacity onPress={onPrevious}>
            <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
              <Ionicons name="md-arrow-back" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={isSubmitButtonDisabled ? styles.disabledButton : null} onPress={isSubmitButtonDisabled ? null : onSubmit} disabled={isSubmitButtonDisabled}>
            <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
              <Ionicons name="md-checkmark" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Step4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  disabledButton: {
    opacity: 0.5,
  }
});
