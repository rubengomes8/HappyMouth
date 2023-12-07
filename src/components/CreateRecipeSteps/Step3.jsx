import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RecipeTypeSquareGrid from "./RecipeTypeSquareGrid";
import { AntDesign, Ionicons } from '@expo/vector-icons';

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from "../../styles/colors";

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
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
          <AntDesign style={{ marginTop: 4 }} name="down" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
        </View>
      </TouchableOpacity>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredMediumText : lightStyles.boldOnBackgroundCenteredMediumText}>Choose recipe type</Text>
      <RecipeTypeSquareGrid data={recipeTypes} onSelectSquare={handleSelect}></RecipeTypeSquareGrid>
      <View
        style={isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin}
      >
        <TouchableOpacity onPress={onPrevious}>
          <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
            <Ionicons name="md-arrow-back" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
            <Ionicons name="md-arrow-forward" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
          </View>
        </TouchableOpacity>
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
