import React, { useState, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import PasswordInput from "../components/PasswordInput.jsx";
import { registerUser } from "../api/authApi.js";

// themes
import { useTheme } from '../contexts/ThemeContext';
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';
import { darkThemeColors, lightThemeColors } from "../styles/colors.js";

const checkIsEmailValid = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};

const RegisterScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordConfirmationVisible, setPasswordConfirmationVisible] =
    useState(false);

  // EMAIL
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const handleEmailChange = (text) => {
    setEmail(text);
    setIsEmailValid(checkIsEmailValid(text));
  };

  // NAVIGATION
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: isDarkMode ? darkThemeColors.surface : lightThemeColors.surface },
      headerTintColor: isDarkMode ? darkThemeColors.onSurface : lightThemeColors.onSurface,
    });
  }, [isDarkMode]);

  async function handleRegister() {
    try {
      registerResponse = await registerUser(username, password, email);
      if (registerResponse.status == 204) {
        navigation.navigate("Login");
      }
    } catch (error) {
      if (error.data.error === "auth.error.username_already_exists") {
        alert("Username already exists.");
      } else {
        alert("Registration failed");
      }
    }
  }

  const passwordsMatch = () => {
    return password == passwordConfirmation;
  };

  const isPasswordsLargeEnough = () => {
    return password.length >= 8;
  };

  const isFormValid = () => {
    return isEmailValid && passwordsMatch() && isPasswordsLargeEnough();
  };

  return (
    <View style={isDarkMode ? darkStyles.registerScreenView : lightStyles.registerScreenView}>
      <View style={{ margin: 20, marginHorizontal: 35 }}>
        <Text style={isDarkMode ? darkStyles.onBackgroundMediumText : lightStyles.onBackgroundMediumText}>For security purposes the passwords need to have at least 8 characters.</Text>
      </View>
      <Text style={isDarkMode ? darkStyles.onBackgroundMediumText : lightStyles.onBackgroundMediumText}>Username</Text>
      <TextInput
        style={isDarkMode ? darkStyles.input : lightStyles.input}
        placeholder="Username"
        placeholderTextColor={isDarkMode ? darkThemeColors.onBackground : lightThemeColors.onBackground}
        color={isDarkMode ? darkThemeColors.onBackground : lightThemeColors.onBackground}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <Text style={isDarkMode ? darkStyles.onBackgroundMediumText : lightStyles.onBackgroundMediumText}>Email</Text>
      <TextInput
        style={isDarkMode ? darkStyles.input : lightStyles.input}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? darkThemeColors.onBackground : lightThemeColors.onBackground}
        color={isDarkMode ? darkThemeColors.onBackground : lightThemeColors.onBackground}
        onChangeText={handleEmailChange}
        autoCapitalize="none"
      />
      {isEmailValid || email == "" ? null : (
        <Text style={styles.errorText}>Invalid email</Text>
      )}

      <PasswordInput
        placeholder="Password"
        password={password}
        setPassword={setPassword}
        isPasswordVisible={isPasswordVisible}
        setPasswordVisible={setPasswordVisible}
      />
      <PasswordInput
        placeholder="Confirm password"
        password={passwordConfirmation}
        setPassword={setPasswordConfirmation}
        isPasswordVisible={isPasswordConfirmationVisible}
        setPasswordVisible={setPasswordConfirmationVisible}
      />
      {passwordConfirmation != "" & !passwordsMatch() ?
        (<Text style={styles.errorText}>Passwords do not match</Text>) :
        null}
      <View style={styles.registerButtonView}>
        <Button
          title="Register"
          onPress={handleRegister}
          disabled={!isFormValid()}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
  },
  registerButtonView: {
    marginTop: 10,
  },
});
