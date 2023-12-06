import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";
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
      <View style={{marginVertical:10}}>
        <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredBigText : lightStyles.boldOnBackgroundCenteredBigText}>Step 3: Recipe type</Text>
      </View>

      <RecipeTypeSquareGrid data={recipeTypes} onSelectSquare={handleSelect}></RecipeTypeSquareGrid>

      <View
        style={isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin}
      >
        <View>
          <TouchableOpacity onPress={onPrevious}>
            <Text style={isDarkMode ? darkStyles.boldPrimaryExtraBigText : lightStyles.boldPrimaryExtraBigText}>&#8592;</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.trashIconContainer}>
          <TrashIcon onClose={onClose} />
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
