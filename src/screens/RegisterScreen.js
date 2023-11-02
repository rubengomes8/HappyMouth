import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { registerUser } from "../api/authApi.js";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

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
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        onChangeText={setPassword}
        autoCapitalize="none"
      />
      <Text style={styles.label}>Confirm password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm password"
        placeholderTextColor="gray"
        secureTextEntry={true}
        onChangeText={setPasswordConfirmation}
        autoCapitalize="none"
      />
      <Button title="Register" onPress={handleRegister} />
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
});
