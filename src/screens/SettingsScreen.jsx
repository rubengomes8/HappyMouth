import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';

const SettingsScreen = () => {
  // State to manage the state of the notification switch
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  // Function to toggle notification settings
  const toggleNotifications = () => {
    setNotificationsEnabled((prevValue) => !prevValue);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text>Enable Notifications:</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>
    </View>
  );
};

export default SettingsScreen;
