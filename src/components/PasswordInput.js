import React from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const PasswordInput = ({
  placeholder,
  password,
  setPassword,
  isPasswordVisible,
  setPasswordVisible,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{placeholder}</Text>
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
              color="black"
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
  },
  eyeIcon: {
    alignItems: "center",
    padding: 10,
  },
});

export default PasswordInput;
