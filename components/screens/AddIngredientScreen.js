import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import { useData } from "../../DataContext";

const AddIngredientScreen = ({ navigation, route }) => {
  const { addItem } = useData();
  const [newIngredientID, setNewIngredientID] = useState("");
  const [newIngredientName, setNewIngredientName] = useState("");

  const [searchValue, setSearchValue] = useState(searchValue);
  const [selectedIngredientID, setSelectedIngredientID] =
    useState(selectedIngredientID);

  const chosenIngredients = route.params?.data.chosenIngredients || [];
  console.log(route.params.data.chosenIngredients)

  const [allIngredients, setAllIngredients] = useState([
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Cherry" },
    { id: "4", name: "Tomato" },
  ]);

  const filteredData =
    searchValue == ("" || undefined)
      ? []
      : allIngredients
          .filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .filter((item) => 
            {return !chosenIngredients.some((obj) => obj.name === item.name);}
          );

  const addToData = (newIngredientID, newIngredientName) => {
    setNewIngredientID(newIngredientID);
    setNewIngredientName(newIngredientName);
    addItem({ id: newIngredientID, name: newIngredientName });
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.resultItem,
        {
          backgroundColor:
            item.id === selectedIngredientID ? "lightgrey" : "white",
        },
      ]}
      onPress={() => {
        setSelectedIngredientID(item.id);
        addToData(item.id, item.name);
      }}
    >
      <Text style={styles.resultItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {
        <View style={styles.searchBar}>
          <View>
            <SearchBar
              placeholder="Type Here..."
              onChangeText={setSearchValue}
              value={searchValue}
              // onSubmitEditing={() =>
              //   console.log(`SearchBar: User typed ${searchValue}`)
              // }
            />
            <FlatList
              data={filteredData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
      }
    </View>
  );
};

export default AddIngredientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  searchBar: {
    backgroundColor: "#fff",
    alignContent: "center",
  },
  addIngredientBtn: {
    width: "50%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 35,
  },
  genRecipeBtn: {
    width: "50%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  resultItem: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});
