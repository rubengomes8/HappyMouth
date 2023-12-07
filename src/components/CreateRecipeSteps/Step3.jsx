import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RecipeTypeSquareGrid from "./RecipeTypeSquareGrid";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';

const Step3 = ({
  recipeTypes,
  onChooseRecipeType,
  onPrevious,
  onNext,
  onClose,
}) => {

  const { isDarkMode, toggleTheme } = useTheme();

  const handleSelect = (recipeTypeID) => {
    onChooseRecipeType(recipeTypeID);
  };

  return (
    <View style={styles.container}>
      <View
        style={isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin}
      >
        <TouchableOpacity onPress={onClose}>
          <Text style={isDarkMode ? darkStyles.boldPrimaryMediumText : lightStyles.boldPrimaryMediumText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredMediumText : lightStyles.boldOnBackgroundCenteredMediumText}>Choose recipe type</Text>
      <RecipeTypeSquareGrid data={recipeTypes} onSelectSquare={handleSelect}></RecipeTypeSquareGrid>
      <View
        style={isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin}
      >
        <View>
          <TouchableOpacity onPress={onPrevious}>
            <Text style={isDarkMode ? darkStyles.boldPrimaryExtraBigText : lightStyles.boldPrimaryExtraBigText}>&#8592;</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onNext}>
            <Text style={isDarkMode ? darkStyles.boldPrimaryExtraBigText : lightStyles.boldPrimaryExtraBigText}>&#8594;</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  radioBoxContainer: {
    flex: 1,
    flexDirection: "row",
  },
  trashIconContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
