import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";
import RemovableIngredient from "../Ingredients/RemovableIngredient";
import SelectIngredientsModal from "../Ingredients/SelectIngredientsModal";

const Step1 = ({ onNext, onClose }) => {
  const [isSelectIngredientsModalVisible, setIsSelectIngredientsModalVisible] =
    useState(false);
  // NEW RECIPE MODAL
  const openSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(true);
  };

  const closeSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(false);
  };

  // INCLUDED INGREDIENTS
  const [includedIngredients, setIncludedIngredients] = useState([
    { id: 1, name: "tomato" },
    { id: 2, name: "mushroom" },
  ]);

  const onRemoveIncludedIngredient = (ingredientID) => {
    setIncludedIngredients(
      includedIngredients.filter((ingredient) => ingredient.id !== ingredientID)
    );
  };

  const onAddIncludedIngredient = (ingredient) => {
    setIncludedIngredients(includedIngredients.push(ingredient));
  };

  addIngredientHandler = () => {
    openSelectIngredientsModal();
    console.log("addIngredientHandler");
  };

  return (
    <View style={styles.container}>
      <SelectIngredientsModal
        isVisible={isSelectIngredientsModalVisible}
        onClose={closeSelectIngredientsModal}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity onPress={onNext}>
          <Text style={styles.nextStepText}>Next</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.stepTitleText}>Step 1: Ingredients to include</Text>
      <TouchableOpacity
        style={styles.addIngredientContainer}
        onPress={addIngredientHandler}
      >
        <View style={styles.overlayItems}>
          <View style={styles.ingredientsContainer}>
            {includedIngredients != undefined
              ? includedIngredients.map((ingredient) => (
                  <RemovableIngredient
                    key={ingredient.id}
                    name={ingredient.name}
                    onRemove={() => onRemoveIncludedIngredient(ingredient.id)}
                  />
                ))
              : null}
          </View>
        </View>
        <View style={styles.centeredText}>
          <Text>+ Include ingredient</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.trashIconContainer}>
        <TrashIcon onClose={onClose} />
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ingredientsContainer: {
    flex: 1,
    margin: 10,
  },
  overlayItems: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  centeredText: {
    alignItems: "center",
    justifyContent: "center",
  },
  addIngredientContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    opacity: 0.5,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    zIndex: -2,
  },
  stepTitleText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  nextStepText: {
    color: "blue",
    fontSize: 16,
  },
  trashIconContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
