import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from "../../styles/dark.js";
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from "../../styles/colors.js";

const RemovableIngredient = ({ name, onRemove }) => {

  const { isDarkMode, toggleTheme } = useTheme();

  removeHandler = () => {
    onRemove();
  };

  return (
    <TouchableOpacity style={isDarkMode ? darkStyles.removableIngredient : lightStyles.removableIngredient} activeOpacity={1}>
      <Text style={ isDarkMode ? darkStyles.boldOnBackgroundMediumText : lightStyles.boldOnBackgroundMediumText}>{name}</Text>
      <TouchableOpacity onPress={removeHandler}>
        <Icon name="times" size={25} color={ isDarkMode ? darkThemeColors.terciary : lightThemeColors.terciary} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RemovableIngredient;
