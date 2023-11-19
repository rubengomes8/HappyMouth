import React from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '../contexts/ThemeContext';

// themes
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';
import { darkThemeColors, lightThemeColors } from '../styles/colors';

const ProfileScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Developer",
  };

  // LOGOUT
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("AccessToken");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={isDarkMode ? darkStyles.screenViewCenter : lightStyles.screenViewCenter}>
      <TouchableOpacity onPress={handleLogout}>
      <Text style={isDarkMode ? darkStyles.onBackgroundBigText : lightStyles.onBackgroundBigText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
