import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipesScreen from "./RecipesScreen.js";
import ProfileScreen from "./ProfileScreen.js";
import SettingsScreen from "./SettingsScreen.js";

const Tab = createBottomTabNavigator();

const MainTabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Recipes"
      screenOptions={() => ({
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "lightgray",
      })}
    >
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabsScreen;
