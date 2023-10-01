import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const RemovableIngredient = (props) => {
  const { name, id, onRemove } = props;

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
      }}
    >
      <Text>{name}</Text>
      <TouchableOpacity onPress={handleRemove}>
        <Text style={{ color: "red", fontWeight: "bold" }}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RemovableIngredient;
