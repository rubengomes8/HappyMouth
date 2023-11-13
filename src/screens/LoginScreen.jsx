import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import PasswordInput from "../components/PasswordInput.jsx";
import { loginUser } from "../api/authApi.js";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  // NAVIGATION
  const navigation = useNavigation();

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
      //   console.log(loginResponse.status);
      //   console.log(loginResponse.data.token);
      navigation.navigate("MainTabsScreen");
    } catch (error) {
      //   console.log(error);
      alert("Login failed");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="gray"
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
