import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();


  const toggleNotifications = () => {
    setNotificationsEnabled((prevValue) => !prevValue);
  };

  const toggleDarkMode = async () => {
    toggleTheme();
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <Text>Enable notifications:</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10}}>
        <Text style={isDarkMode ? styles.dark : styles.light}>Dark mode:</Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  light: {
    color: "black",
  },
  dark: {
    color: "blue",
  },
});

export default SettingsScreen;
