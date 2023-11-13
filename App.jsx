import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';

// Screens imports
import MainTabsScreen from "./src/screens/MainTabsScreen.jsx";
import LoginScreen from "./src/screens/LoginScreen.jsx";
import RegisterScreen from "./src/screens/RegisterScreen.jsx";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style={styles.statusBar} />
      <Stack.Navigator 
        initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="MainTabsScreen"
          component={MainTabsScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  statusBar: {
    backgroundColor: "blue",
    barStyle: "light-content",
  },
});

export default App;
