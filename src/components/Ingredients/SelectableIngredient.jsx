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
        item.isIncluded ?
          <View style={styles.includedLabel}>
            <Text style={styles.includedLabelText}>Included</Text>
          </View> :
          item.isExcluded ?
            <View style={styles.excludedLabel}>
              <Text style={styles.excludedLabelText}>Excluded</Text>
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
  includedLabel: {
    backgroundColor: "lightgreen",
    padding: 5,
    borderRadius: 5,
  },
  includedLabelText: {
    color: "white",
    fontWeight: "bold"
  },
  excludedLabel: {
    backgroundColor: "lightblue",
    padding: 5,
    borderRadius: 5,
  },
  excludedLabelText: {
    color: "white",
    fontWeight: "bold"
  },
});
