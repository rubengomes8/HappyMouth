import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DataProvider } from "./DataContext";
import CreateRecipeScreen from "./components/screens/CreateRecipeScreen.js";
import AddIngredientScreen from "./components/screens/AddIngredientScreen.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Create Recipe"
            component={CreateRecipeScreen}
            options={{ title: "Create Recipe" }}
          />
          <Stack.Screen
            name="Add Ingredient"
            component={AddIngredientScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
};

export default App;
