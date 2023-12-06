import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";

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
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <TouchableOpacity onPress={onPrevious}>
            <Text style={isDarkMode ? darkStyles.boldPrimaryMediumText : lightStyles.boldPrimaryMediumText}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={isSubmitButtonDisabled ? styles.disabledButton : null} onPress={isSubmitButtonDisabled ? null : onSubmit} disabled={isSubmitButtonDisabled} >
            <Text style={isDarkMode ? darkStyles.boldPrimaryMediumText : lightStyles.boldPrimaryMediumText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredMediumText : lightStyles.boldOnBackgroundCenteredMediumText}>Summary</Text>
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
      <View style={styles.trashIconContainer}>
        <TrashIcon onClose={onClose} />
      </View>
    </View>
  );
};

export default Step4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trashIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  disabledButton: {
    opacity: 0.5,
  }
});