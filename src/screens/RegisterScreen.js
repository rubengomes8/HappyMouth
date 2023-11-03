import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import PasswordInput from "../components/PasswordInput.js";
import { registerUser } from "../api/authApi.js";

const checkIsEmailValid = (email) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordConfirmationVisible, setPasswordConfirmationVisible] =
    useState(false);

  // EMAIL
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const handleEmailChange = (text) => {
    setEmail(text);
    setIsEmailValid(checkIsEmailValid(text));
  };

  async function handleRegister() {
    try {
      await registerUser(username, password, email);
    } catch (error) {
      alert("Registration failed");
      console.error("Registration failed:", error);
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
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="gray"
        onChangeText={handleEmailChange}
        autoCapitalize="none"
      />
      {isEmailValid ? null : (
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
      <View style={styles.registerButtonView}>
        <Button title="Register" onPress={handleRegister} />
      </View>
    </View>
  );
};

export default RegisterScreen;

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
  errorText: {
    color: "red",
  },
  registerButtonView: {
    marginTop: 10,
  }
});
