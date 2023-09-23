import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from "react-native";

const IngredientsSearch = () => {
  const [searchValue, setSearchValue] = useState(searchValue);
  const [selectedItemID, setSelectedItemID] = useState(selectedItemID);

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
    console.log(searchValue);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.resultItem,
        { backgroundColor: item.id === selectedItemID ? "lightgrey" : "white" },
      ]}
      onPress={() => {
        console.log(item.id)
        setSelectedItemID(item.id)
      }}
    >
      <Text style={styles.resultItem}>{item.name}</Text>
    </TouchableOpacity>
  );

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
        onPress={() => setSelectedItemID(item.id)}
      />
      <Text>Selected Item: {selectedItemID || "None"}</Text>
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
