import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen = ({ navigation }) => {

  // Simulated user profile data
  const userProfile = {
    name: "John Doe",
    email: "john@example.com",
    bio: "Software Developer",
  };

  // LOGOUT
  const logoutHandler = async () => {
    console.log("TODO: Logout");
  };

  return (
    <View style={{ flex: 1 }}>
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
