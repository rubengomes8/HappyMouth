import React, { useState } from "react";
import {
  View,
  Modal,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { loginUser } from "../../api/authApi.js";
import { setToken } from '../TokenService.js';


const LoginModal = ({ isVisible, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const loginResponse = await loginUser(username, password);
      console.log(loginResponse);
      const newToken = loginResponse.token;
      setToken(newToken);
    } catch (error) {
      console.log(error)
      alert("Login failed")
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="gray"
              onChangeText={setUsername}
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
            <Button title="Login" onPress={handleLogin} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LoginModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: "95%",
    padding: 20,
  },
  closeText: {
    color: "blue",
    fontSize: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  registerContainer: {
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
