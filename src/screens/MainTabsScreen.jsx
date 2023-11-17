import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecipesScreen from "./RecipesScreen.jsx";
import ProfileScreen from "./ProfileScreen.jsx";
import SettingsScreen from "./SettingsScreen.jsx";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// themes
import { useTheme } from '../contexts/ThemeContext';
import { darkThemeColors, lightThemeColors } from '../styles/colors';

const Tab = createBottomTabNavigator();

const MainTabsScreen = () => {
  const { isDarkMode, toggleTheme } = useTheme();

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
            <FontAwesome name="book" size={size} color={color}/>
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
