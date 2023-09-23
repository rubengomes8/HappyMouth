import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";
import { useData } from '../../DataContext';

const IngredientsSearch = ({ navigation }) => {
  const [searchValue, setSearchValue] = useState(searchValue);
  const [selectedIngredientID, setSelectedIngredientID] = useState(selectedIngredientID);

  const [data, setData] = useState([
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Cherry" },
    { id: "4", name: "Tomato" },
  ]);

  const filteredData =
    searchValue == ("" || undefined)
      ? []
      : data.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );

  const changeTextHandler = (searchValue) => {
    setSearchValue(searchValue);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.resultItem,
        { backgroundColor: item.id === selectedIngredientID ? "lightgrey" : "white" },
      ]}
      onPress={() => {
        setSelectedIngredientID(item.id)
        addToData()
      }}
    >
      <Text style={styles.resultItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  const { addItem } = useData();

  const [newIngredientName, setNewIngredientName] = useState('');
  const [newIngredientID, setNewIngredientID] = useState('');


  const addToData = () => {
    addItem({ id: newIngredientID, name: newIngredientName});
    navigation.goBack();
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={changeTextHandler}
        value={searchValue}
        onSubmitEditing={() => console.log(`User typed ${searchValue}`)}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        onPress={() => {
          setSelectedIngredientID(item.id)
        }}
      />
    </View>
  );
};

export default IngredientsSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
