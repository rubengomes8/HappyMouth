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
        <Icon name="times" size={25} color="red" />
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
    paddingHorizontal: 5,
    height: 30,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "black",
    margin: 1,
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
