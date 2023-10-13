import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";
import RemovableIngredient from "../Ingredients/RemovableIngredient";
import SelectIngredientsModal from "../Ingredients/SelectIngredientsModal";

const Step2 = ({ onPrevious, onNext, onClose }) => {
  const [isSelectIngredientsModalVisible, setIsSelectIngredientsModalVisible] =
    useState(false);

  const openSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(true);
  };

  const closeSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(false);
  };

  // INGREDIENTS
  const [ingredients, setIngredients] = useState([
    { id: 4, name: "onion", selected: true },
    { id: 5, name: "garlic", selected: false },
  ]);

  const onToggleIngredientAdded = (ingredientID) => {
    updatedIngredients =
      ingredients != undefined
        ? ingredients.map((item) => {
            if (item.id === ingredientID) {
              return { ...item, selected: !item.selected };
            }
            return item;
          })
        : [];
    setIngredients(updatedIngredients);
  };

  excludeIngredientHandler = () => {
    openSelectIngredientsModal();
    console.log("addIngredientHandler");
  };

  pressExcludeIngredientHandler = ({}) => {
    console.log("enter ingredient handler pressed " + Math.random());
  };

  return (
    <View style={styles.container}>
      <SelectIngredientsModal
        ingredients={ingredients}
        isVisible={isSelectIngredientsModalVisible}
        onAddIngredient={onToggleIngredientAdded}
        onClose={closeSelectIngredientsModal}
      />
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
          <TouchableOpacity onPress={onNext}>
            <Text style={styles.nextStepText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.stepTitleText}>Step 2: Ingredients to exclude</Text>
      <TouchableOpacity
        style={styles.addIngredientContainer}
        onPress={excludeIngredientHandler}
      >
        <View style={styles.overlayItems}>
          <View style={styles.ingredientsContainer}>
            {ingredients != undefined
              ? ingredients.map((ingredient) =>
                  ingredient.selected ? (
                    <RemovableIngredient
                      key={ingredient.id}
                      name={ingredient.name}
                      onRemove={() => onToggleIngredientAdded(ingredient.id)}
                    />
                  ) : null
                )
              : null}
          </View>
        </View>
        <Text style={styles.centeredText}>+ Exclude ingredient</Text>
      </TouchableOpacity>
      <View style={styles.trashIconContainer}>
        <TrashIcon onClose={onClose} />
      </View>
    </View>
  );
};

export default Step2;

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
  },
  centeredText: {
    alignItems: "center",
    justifyContent: "center",
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
  prevStepText: {
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
