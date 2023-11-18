import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from "../../styles/dark.js";
import lightStyles from '../../styles/light';

const SelectableIngredient = ({ item, onToggleItemAdded }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  toggleHandler = () => {
    onToggleItemAdded();
  };

  return (
    <TouchableOpacity
      style={isDarkMode ? darkStyles.selectableIngredient : lightStyles.selectableIngredient}
      onPress={toggleHandler}>
      <Text style={isDarkMode ? darkStyles.surfaceMediumText : lightStyles.boldSurfaceMediumText}>{item.name}</Text>
      {
        item.isIncluded ?
          <View style={isDarkMode ? darkStyles.ingredientIncludedLabel : lightStyles.ingredientIncludedLabel}>
            <Text style={isDarkMode ? darkStyles.boldOnSurfaceSmallText : lightStyles.boldOnSurfaceSmallText}>Included</Text>
          </View> :
          item.isExcluded ?
            <View style={isDarkMode ? darkStyles.ingredientExcludedLabel : lightStyles.ingredientExcludedLabel}>
              <Text style={isDarkMode ? darkStyles.boldOnSurfaceSmallText : lightStyles.boldOnSurfaceSmallText}>Excluded</Text>
            </View> :
            null
      }
    </TouchableOpacity>
  );
};

export default SelectableIngredient;

const styles = StyleSheet.create({
  addIconTouchable: {
    justifyContent: "center",
  },
});
