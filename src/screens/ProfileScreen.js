import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import LoginModal from "../components/User/LoginModal.js";
import RegisterModal from "../components/User/RegisterModal.js";
import { useToken } from '../components/TokenContext.js';


const ProfileScreen = ({ navigation }) => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setRegisterModalVisible] = useState(false);
  const { token, removeToken } = useToken();


  // Simulated user profile data
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Developer",
  };

  // REGISTER MODAL
  const openRegisterModal = () => {
    console.log("openRegisterModal");
    setRegisterModalVisible(true);
  };

  const closeRegisterModal = () => {
    setRegisterModalVisible(false);
  };

  // LOGIN MODAL
  const openLoginModal = () => {
    console.log("openLoginModal");
    setLoginModalVisible(true);
  };

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  // LOGOUT
  const Logout = () => {
    removeToken();
    console.log("Logout");
  };

  return (
    <View style={{ flex: 1 }}>
      <LoginModal isVisible={isLoginModalVisible} onClose={closeLoginModal} />
      <RegisterModal isVisible={isRegisterModalVisible} onClose={closeRegisterModal} />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button title="Register" onPress={openRegisterModal} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button title="Login" onPress={openLoginModal} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button title="Logout" onPress={openLoginModal} />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Profile Screen</Text>
        <Text>Name: {userProfile.name}</Text>
        <Text>Email: {userProfile.email}</Text>
        <Text>Bio: {userProfile.bio}</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;
