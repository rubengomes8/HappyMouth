import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const RemovableIngredient = ({ name, onRemove }) => {
  removeHandler = () => {
    console.log("press remove handler 1");
    onRemove();
  };

  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}>
      <View style={styles.leftContent}>
        <Text style={styles.ingredientText}>{name}</Text>
      </View>
      <TouchableOpacity style={styles.rightContent} onPress={removeHandler}>
        <Icon name="times" size={30} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default RemovableIngredient;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 2,
    height: 40,
    backgroundColor: "white",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "black",
    margin: 5,
    zIndex: -1,
  },
  leftContent: {
    marginLeft: 10,
  },
  rightContent: {
    marginRight: 10,
  },
  ingredientText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});
