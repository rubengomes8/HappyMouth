import { useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipesScreen from "./RecipesScreen.jsx";
import ProfileScreen from "./ProfileScreen.jsx";
import SettingsScreen from "./SettingsScreen.jsx";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// themes
import { useTheme } from '../contexts/ThemeContext';
import { darkThemeColors, lightThemeColors } from '../styles/colors';

const Tab = createBottomTabNavigator();

const MainTabsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const route = useRoute();
  const username = route.params?.username || "defaultUsername"; // TODO


  return (
    <Tab.Navigator
      initialRouteName="Recipes"
      screenOptions={() => ({
        backgroundColor: isDarkMode ? darkThemeColors.background : lightThemeColors.background,
        headerStyle: { backgroundColor: isDarkMode ? darkThemeColors.surface : lightThemeColors.surface },
        headerTintColor: isDarkMode ? darkThemeColors.onSurface : lightThemeColors.onSurface,
        tabBarActiveTintColor: isDarkMode ? darkThemeColors.primary : lightThemeColors.primary,
        tabBarInactiveTintColor: isDarkMode ? darkThemeColors.onBackground : lightThemeColors.onBackground,
        tabBarStyle: { backgroundColor: isDarkMode ? darkThemeColors.surface : lightThemeColors.surface },
        containerStyle: { backgroundColor: isDarkMode ? darkThemeColors.background : lightThemeColors.background },
      })}
    >
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
        }}
      >
        {() => <ProfileScreen username={username} />}
      </Tab.Screen>

      <Tab.Screen
        name="Recipes"
        component={RecipesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" size={size} color={color} />
            ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gear" size={size} color={color} />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabsScreen;
