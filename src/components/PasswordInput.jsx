import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// themes
import { useTheme } from '../contexts/ThemeContext';
import darkStyles from '../styles/dark';
import lightStyles from '../styles/light';
import { darkThemeColors, lightThemeColors } from "../styles/colors.js";

const PasswordInput = ({
  placeholder,
  password,
  setPassword,
  isPasswordVisible,
  setPasswordVisible,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? {...darkStyles.onBackgroundMediumText, textAlign: "center"} : {...lightStyles.onBackgroundMediumText, textAlign: "center"}}>{placeholder}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={isDarkMode ? darkStyles.input : lightStyles.input}
          placeholder={placeholder}
          placeholderTextColor={isDarkMode ? darkThemeColors.onSurface : lightThemeColors.onSurface}
          color={isDarkMode ? darkThemeColors.onSurface : lightThemeColors.onSurface}
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
          autoCapitalize="none"
          value={password}
        />
        <TouchableOpacity
          onPress={() => {
            setPasswordVisible(!isPasswordVisible);
          }}
          style={styles.eyeIcon}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Icon
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={24}
              color={isDarkMode ? darkThemeColors.onBackground : lightThemeColors.onBackground}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: "center"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    marginLeft: 30,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 10
  },
  eyeIcon: {
    alignItems: "center",
    padding: 10,
  },
});

export default PasswordInput;
