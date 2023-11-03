import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PasswordInput = ( { placeholder, password, setPassword, isPasswordVisible, setPasswordVisible }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="gray"
        secureTextEntry={!isPasswordVisible}
        onChangeText={setPassword}
        autoCapitalize="none"
        value={password}
      />
      <TouchableOpacity
        onPress={() => {setPasswordVisible(!isPasswordVisible)}}
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
            color="black"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    margin: 10,
  },
  input: {
    width: "70%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
  },
  eyeIcon: {
    alignItems: "center",
    padding: 10,
  },
});

export default PasswordInput;
