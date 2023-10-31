import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import LoginModal from "../components/User/LoginModal.js";
import RegisterModal from "../components/User/RegisterModal.js";
import { getToken, setToken, clearToken } from "../components/TokenService.js";

const ProfileScreen = ({ navigation }) => {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);
  const [isRegisterModalVisible, setRegisterModalVisible] = useState(false);
  const [pageToken, setPageToken] = useState('');

  // Simulated user profile data
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Developer",
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const userToken = await getToken();
        if (userToken) {
          setToken(userToken);
          setPageToken(userToken);
          console.log("new user token " + userToken);
        }
      } catch (error) {
        console.error("Error getting token:", error);
      }
    };
    fetchToken();
  }, []);

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
  const logoutHandler = async () => {
    clearToken();
    setPageToken('');
    console.log("Logout");
    const userToken = await getToken();
    console.log(userToken);
    console.log(pageToken);

  };

  return (
    <View style={{ flex: 1 }}>
      <LoginModal isVisible={isLoginModalVisible} onClose={closeLoginModal} />
      <RegisterModal
        isVisible={isRegisterModalVisible}
        onClose={closeRegisterModal}
      />
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
      {pageToken ? (
        <View>
          <Button title="Logout 2" onPress={logoutHandler} />
        </View>
      ) : (
        <Text>Please log in to access this feature.</Text>
      )}
    </View>
  );
};

export default ProfileScreen;
