import React, { useState } from "react";
import { View, Text, TouchableOpacity, RadioButton, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";

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

  const handleSelect = (recipeType) => {
    onChooseRecipeType(recipeType.id);
  };

  return (
    <View style={styles.container}>
      <View
        style={isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin}
      >
        <View>
          <TouchableOpacity onPress={onPrevious}>
            <Text style={isDarkMode ? darkStyles.boldPrimaryMediumText : lightStyles.boldPrimaryMediumText}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onNext}>
            <Text style={isDarkMode ? darkStyles.boldPrimaryMediumText : lightStyles.boldPrimaryMediumText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Step 3 content</Text>
      {recipeTypes.map((recipeType) => (
        <View key={recipeType.id}>
          <RadioButton
            value={recipeType.type}
            status={recipeType.chosen ? 'checked' : 'unchecked'}
            onPress={() => handleSelect(recipeType)}
          />
          <Text>{recipeType.type}</Text>
        </View>
      ))}
      <View style={styles.trashIconContainer}>
        <TrashIcon onClose={onClose} />
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  trashIconContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
