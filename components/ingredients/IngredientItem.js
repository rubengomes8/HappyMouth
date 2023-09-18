import React from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
  container: {
    paddingTop: 1,
  },
  item: {
    paddingLeft: 10,
    fontSize: 18,
    height: 50,
  },
});

const IngredientItem = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.item}>{props.name}</Text>
    </View> 
  );
};

export default IngredientItem;
