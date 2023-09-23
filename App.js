import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GenerateRecipeScreen from "./components/screens/GenerateRecipeScreen.js";
import ChooseIngredientScreen from "./components/screens/AddIngredientScreen.js";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
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
          component={ChooseIngredientScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
