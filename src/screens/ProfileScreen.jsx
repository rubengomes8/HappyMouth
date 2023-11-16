import React from "react";
import { View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProfileScreen = ({ navigation }) => {
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Developer",
  };

  // LOGOUT
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("AccessToken");
      navigation.navigate("Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1 }}>
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
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

export default ProfileScreen;
