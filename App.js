import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DataProvider } from "./DataContext";
import GenerateRecipeScreen from "./components/screens/GenerateRecipeScreen.js";
import AddIngredientScreen from "./components/screens/AddIngredientScreen.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <DataProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen
            name="Generate Recipe"
            component={GenerateRecipeScreen}
            options={{ title: "Generate Recipe" }}
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
