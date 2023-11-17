import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, useTheme } from './src/contexts/ThemeContext';


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

// Screens imports
import MainTabsScreen from "./src/screens/MainTabsScreen.jsx";
import LoginScreen from "./src/screens/LoginScreen.jsx";
import RegisterScreen from "./src/screens/RegisterScreen.jsx";
import { darkThemeColors, lightThemeColors } from "./src/styles/colors.js";


const Stack = createStackNavigator();

const AppWrapper = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};

const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={isDarkMode ? darkThemeColors.surface : lightThemeColors.surface} />
      <Stack.Navigator
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="MainTabsScreen"
          component={MainTabsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  statusBar: {
    backgroundColor: "blue",
    barStyle: "light-content",
  },
  darkStatusBar: {
    backgroundColor: "black",
  },
});

export default AppWrapper;
