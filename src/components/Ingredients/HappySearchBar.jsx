import * as React from "react";
import { SearchBar } from "@rneui/base";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from "../../styles/dark.js";
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from "../../styles/colors.js";

const HappySearchBar = ({ searchValue, onChangeText }) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <SearchBar
      value={searchValue}
      platform="default"
      placeholder={"Search ingredient..."}
      placeholderTextColor={isDarkMode ? darkStyles.onSurface : lightStyles.onSurface}
      inputStyle={isDarkMode ? darkStyles.onSurface : lightStyles.onSurface}
      inputContainerStyle={{ 
        backgroundColor: isDarkMode ? darkThemeColors.surface : lightThemeColors.surface,
        borderBottomColor: isDarkMode ? darkThemeColors.surface : lightThemeColors.surface
       }}
      containerStyle={{
        backgroundColor: isDarkMode ? darkThemeColors.background : lightThemeColors.background,
        borderBottomColor: isDarkMode ? darkThemeColors.background : lightThemeColors .background
      }}
      round
      clearIcon
      {...(isDarkMode ? { } : { lightTheme: true })}
      onChangeText={onChangeText} />
  );
};

export default HappySearchBar;
