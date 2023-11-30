import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

// themes
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';
import { darkThemeColors, lightThemeColors } from '../styles/colors';


const SettingsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();


  const toggleNotifications = () => {
    setNotificationsEnabled((prevValue) => !prevValue);
  };

  const toggleDarkMode = async () => {
    toggleTheme();
  };


  return (
    <View style={isDarkMode ? darkStyles.screenViewCenter : lightStyles.screenViewCenter}>
      <View style={isDarkMode ? darkStyles.rowCenterAligned : lightStyles.rowCenterAligned}>
        <Text style={isDarkMode ? darkStyles.onBackgroundMediumText : lightStyles.onBackgroundMediumText}>Dark mode:</Text>
        <Switch
          trackColor={{ false: darkThemeColors.onSurface, true: darkThemeColors.primary }}
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
