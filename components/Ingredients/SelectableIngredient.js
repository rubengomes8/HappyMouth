import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SelectableIngredient = ({ item, onToggleItemSelection }) => {

  toggleHandler = () => {
    console.log("press toggle handler 1");
    onToggleItemSelection();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addIconTouchable}
        onPress={toggleHandler}
      >
        <Icon
          name={item.selected ? "check" : "plus"}
          size="18"
          color="black"
          style={styles.addIcon}
        />
      </TouchableOpacity>
      <Text style={styles.ingredientText}>{item.name}</Text>
    </View>
  );
};

export default SelectableIngredient;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
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
});
