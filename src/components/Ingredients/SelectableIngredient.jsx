import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const SelectableIngredient = ({ item, onToggleItemAdded }) => {
  toggleHandler = () => {
    onToggleItemAdded();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleHandler}>
      <Text style={styles.ingredientText}>{item.name}</Text>
      {
        item.selected ?
        <View style={styles.label}>
          <Text style={styles.labelText}>Added</Text>
        </View> :
        null
      }
    </TouchableOpacity>
  );
};

export default SelectableIngredient;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 5,
    padding: 5,
  },
  ingredientText: {
    fontSize: 18,
    marginBottom: 3,
    marginTop: 2,
    marginLeft: 15,
  },
  addIconTouchable: {
    justifyContent: "center",
  },
  label: {
    backgroundColor: "grey",
    padding: 5,
    borderRadius: 5,
  },
  labelText: {
    color: "white",
    fontWeight: "bold"
  },
});
