import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";

const Step3 = ({
  includedIngredients,
  excludedIngredients,
  onPrevious,
  onSubmit,
  onClose,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <TouchableOpacity onPress={onPrevious}>
            <Text style={styles.prevStepText}>Previous</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={onSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.stepTitleText}>Summary</Text>
      <View>
        <Text style={styles.ingredientsTitleText}>Included ingredients</Text>
        <View>
          {includedIngredients != undefined
            ? includedIngredients.map((ingredient) =>
                ingredient.selected ? (
                  <Text key={ingredient.id}>{ingredient.name}</Text>
                ) : null
              )
            : null}
        </View>
      </View>
      <View>
        <Text style={styles.ingredientsTitleText}>Excluded ingredients</Text>
        <View>
          {excludedIngredients != undefined
            ? excludedIngredients.map((ingredient) =>
                ingredient.selected ? (
                  <Text key={ingredient.id}>{ingredient.name}</Text>
                ) : null
              )
            : null}
        </View>
      </View>
      <View style={styles.trashIconContainer}>
        <TrashIcon onClose={onClose} />
      </View>
    </View>
  );
};

export default Step3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepTitleText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  ingredientsTitleText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  prevStepText: {
    color: "blue",
    fontSize: 16,
  },
  submitText: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 16,
  },
  trashIconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
