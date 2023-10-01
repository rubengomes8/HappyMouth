import React, { useState, createContext } from "react";
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useData } from "../../DataContext";
import RemovableIngredient from "../ingredients/RemovableIngredient";

const DataContext = createContext();

const DisplayRecipeScreen = ({ navigation }) => {
  const { data, clearData } = useData();
  const [displayedRecipe, setDisplayedRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  handleCreateRecipe = async () => {
    setIsLoading(true);
    includeIngredients = data.map((obj) => obj.name);
    try {
      const response = await axios.post(`${HOST}/api/recipes`, {
        include_ingredients: includeIngredients,
        exclude_ingredients: ["Onion"],
      });

      if (response.status === 200) {
        clearData();
        setRecipe(response.data.recipe);
      } else {
        throw new Error("Something went wrong.");
      }
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  };

  const removeIngredient = (ingredientID) => {
    const updatedData = data.filter((ingredient) => ingredient.id !== ingredientID);
    console.log("setData(updatedData)");
  };


  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="lightgrey" />
        </View>
      ) : (
        <ScrollView style={styles.scrollView}>
          {data.length > 0 ? (
            <View>
              {data.map((ingredient) => (
                <RemovableIngredient
                  name={ingredient.name}
                  id={ingredient.id}
                  onRemove={removeIngredient}
                />
              ))}
            </View>
          ) : null}
          {recipe === undefined || recipe === "" ? null : (
            <View>
              <Text style={styles.ingredientsText}>{recipe}</Text>
            </View>
          )}
        </ScrollView>
      )}

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-end",
          marginBottom: 50,
        }}
      >
        <View style={styles.addIngredientBtn}>
          <Pressable
            onPress={() => {
              setRecipe("");
              navigation.navigate("Add Ingredient", {
                data: {
                  chosenIngredients: data,
                },
              });
            }}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>
              {data.length == 0 ? "Create Recipe" : "Add Ingredient"}
            </Text>
          </Pressable>
        </View>
        <View style={styles.genRecipeBtn}>
          {
            <Pressable
              onPress={handleCreateRecipe}
              disabled={isLoading || data.length == 0}
            >
              <Text style={styles.buttonText}>{"Generate Recipe"}</Text>
            </Pressable>
          }
        </View>
      </View>
    </View>
  );
};



export default DisplayRecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  loadingContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    height: "85%",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    paddingTop: 8,
    marginHorizontal: 10,
    marginBottom: "15%",
  },
});
