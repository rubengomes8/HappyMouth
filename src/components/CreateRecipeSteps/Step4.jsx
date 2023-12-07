import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { darkColors, lightColors } from "@rneui/base";


// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
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
      <View
        style={isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin}
      >
        <TouchableOpacity onPress={onClose}>
          <Text style={isDarkMode ? darkStyles.boldPrimaryMediumText : lightStyles.boldPrimaryMediumText}>Cancel</Text>
        </TouchableOpacity>
      </View>
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
          <View>
            <TouchableOpacity onPress={onPrevious}>
              <Text style={isDarkMode ? darkStyles.boldPrimaryExtraBigText : lightStyles.boldPrimaryExtraBigText}>&#8592;</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={isSubmitButtonDisabled ? styles.disabledButton : null} onPress={isSubmitButtonDisabled ? null : onSubmit} disabled={isSubmitButtonDisabled} >
              <MaterialIcons name="send" size={24} color={isDarkMode ? darkColors.primary : lightColors.primary} />
            </TouchableOpacity>
          </View>
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
