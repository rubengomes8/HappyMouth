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


const DataContext = createContext();
const HOST = "http://192.168.1.227:8080"; // TODO: should use .env

const GenerateRecipeScreen = ({ navigation }) => {
  const { data, clearData } = useData();
  const [recipe, setRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  handleGenerateRecipe = async () => {
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
              {data.map((ingredient, index) => (
                <Text key={index} style={styles.ingredientsText}>
                  {ingredient.name}
                </Text>
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
              onPress={handleGenerateRecipe}
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

export default GenerateRecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  loadingContainer: {
    position: "absolute",
    backgroundColor: "#fff",
    width: '100%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIngredientBtn: {
    flex: 1,
    width: "40%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginRight: 10,
    marginLeft: 20,
  },
  genRecipeBtn: {
    flex: 1,
    width: "40%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginRight: 20,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  ingredientsText: {
    fontSize: 18,
    marginBottom: 0,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
  },
  scrollView: {
    marginHorizontal: 10,
    marginBottom: "15%",
  },
});
