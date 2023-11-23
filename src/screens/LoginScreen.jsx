import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PasswordInput from "../components/PasswordInput.jsx";
import { loginUser } from "../api/authApi.js";

// themes
import { useTheme } from '../contexts/ThemeContext';
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';
import { darkThemeColors, lightThemeColors } from "../styles/colors.js";

const LoginScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // NAVIGATION
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: isDarkMode ? darkThemeColors.surface : lightThemeColors.surface },
      headerTintColor: isDarkMode ? darkThemeColors.onSurface : lightThemeColors.onSurface,
    });
  }, [isDarkMode]);

  const handleSignUpPress = () => {
    navigation.navigate("Register");
  };

  async function handleLogin() {
    try {
      const loginResponse = await loginUser(username, password);
      if (loginResponse.status == 200) {
        AsyncStorage.setItem("AccessToken", loginResponse.data.token);
        navigation.navigate("MainTabsScreen");
      }
      setUsername("");
      setPassword("");
      navigation.navigate("MainTabsScreen");
    } catch (error) {
      alert("Login failed");
    }
  }

  return (
    <View style={ isDarkMode ? darkStyles.registerScreenView : lightStyles.registerScreenView}>
      <Text style={isDarkMode ? darkStyles.onBackgroundMediumText : lightStyles.onBackgroundMediumText}>Username</Text>
      <TextInput
        style={isDarkMode ? darkStyles.input : lightStyles.input}
        placeholder="Username"
        placeholderTextColor={isDarkMode ? darkThemeColors.onSurface : lightThemeColors.onSurface}
        color={isDarkMode ? darkThemeColors.onSurface : lightThemeColors.onSurface}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <PasswordInput
        placeholder="Password"
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        setPasswordVisible={setPasswordVisible}
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button title="Sign Up" onPress={handleSignUpPress} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
});
