import React, { useState, createContext } from "react";
import { Pressable, View, StyleSheet, Text, Alert, ScrollView } from "react-native";
import { useData } from "../../DataContext"; // Import the useData hook

const DataContext = createContext();

const GenerateRecipeScreen = ({ navigation }) => {
  const { data, addItem } = useData();

  // data1 = [
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  //   { name: "Banana"},
  // ]

  return (
    <View style={styles.container}>
      {console.log(data)}
      {data === undefined || data.length == 0 ? null : (
        <ScrollView style={styles.scrollView}>
          <View>
            {data.map((ingredient, index) => (
              <Text key={index} style={styles.ingredientsText}>
                {ingredient.name}
              </Text>
            ))}
          </View>
        </ScrollView>
      )}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "flex-end",
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <View style={styles.addIngredientBtn}>
          <Pressable onPress={() => navigation.navigate("Add Ingredient")}>
            <Text style={styles.buttonText}>{"Add Ingredient"}</Text>
          </Pressable>
        </View>
        <View style={styles.genRecipeBtn}>
          {
            <Pressable onPress={() => Alert.alert("Integrate with backend")}>
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
  addIngredientBtn: {
    flex: 1,
    width: "40%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 35,
  },
  genRecipeBtn: {
    flex: 1,
    width: "40%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 20,
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
