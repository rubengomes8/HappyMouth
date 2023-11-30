import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from '../contexts/ThemeContext';
import User from '../components/Profile/User'

// themes
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';

const ProfileScreen = ({ username }) => {
  const navigation = useNavigation();
  const { isDarkMode, toggleTheme } = useTheme();

  const [currentUsername, setCurrentUsername] = useState(username);
  useEffect(() => {
    setCurrentUsername(username);
  }, [username]);



  // LOGOUT
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("AccessToken");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  // CHANGE PASSWORD
  const handleChangePassword = async () => {
    console.log("handleChangePassword here " + currentUsername);
    navigation.navigate("ChangePassword", {username: currentUsername});
  };

  return (
    <View style={isDarkMode ? darkStyles.screenView : lightStyles.screenView}>
      <User username={username}></User>
      <TouchableOpacity style={{marginTop: 10}} onPress={handleChangePassword}>
        <Text style={isDarkMode ? darkStyles.onBackgroundCenteredMediumText : lightStyles.onBackgroundCenteredMediumText}>Change Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: 10}} onPress={handleLogout}>
        <Text style={isDarkMode ? darkStyles.onBackgroundCenteredMediumText : lightStyles.onBackgroundCenteredMediumText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
