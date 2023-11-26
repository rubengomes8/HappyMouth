import React from "react";
import { useNavigation } from '@react-navigation/native';

import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '../contexts/ThemeContext';
import User from '../components/Profile/User'

// themes
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';
import { darkThemeColors, lightThemeColors } from '../styles/colors';

const ProfileScreen = ({ username }) => {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();

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
    <View style={isDarkMode ? darkStyles.screenView : lightStyles.screenView}>
      <User username={username}></User>
      <TouchableOpacity onPress={handleLogout}>
      <Text style={isDarkMode ? darkStyles.onBackgroundCenteredMediumText : lightStyles.onBackgroundCenteredMediumText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
