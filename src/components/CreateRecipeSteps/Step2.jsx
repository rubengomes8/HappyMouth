import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";
import RemovableIngredient from "../Ingredients/RemovableIngredient";
import SelectIngredientsModal from "../Ingredients/SelectIngredientsModal";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';

const Step2 = ({
  ingredients,
  onToggleIngredientIsExcluded,
  onPrevious,
  onNext,
  onClose,
}) => {

  const { isDarkMode, toggleTheme } = useTheme();

  const [isSelectIngredientsModalVisible, setIsSelectIngredientsModalVisible] =
    useState(false);

  const openSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(true);
  };

  const closeSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(false);
  };

  excludeIngredientHandler = () => {
    openSelectIngredientsModal();
  };

  pressExcludeIngredientHandler = ({ }) => {
  };

  return (
    <View style={styles.container}>
      <SelectIngredientsModal
        ingredients={ingredients.filter((i) => !i.isIncluded)}
        isVisible={isSelectIngredientsModalVisible}
        onAddIngredient={onToggleIngredientIsExcluded}
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
      <Text style={isDarkMode ? darkStyles.boldBackgroundCenteredSmallText : lightStyles.boldBackgroundCenteredSmallText}>Step 2: Ingredients to exclude</Text>
      <TouchableOpacity
        style={isDarkMode ? darkStyles.addIngredientTouchable : lightStyles.addIngredientTouchable}
        onPress={excludeIngredientHandler}
      >
        <View style={styles.overlayItems}>
          <View style={styles.ingredientsContainer}>
            {ingredients != undefined
              ? ingredients.map((ingredient) =>
                ingredient.isExcluded ? (
                  <RemovableIngredient
                    key={ingredient.id}
                    name={ingredient.name}
                    onRemove={() => onToggleIngredientIsExcluded(ingredient.id)}
                  />
                ) : null
              )
              : null}
          </View>
        </View>
        <View style={isDarkMode ? darkStyles.zIndexMinusOneCenter : lightStyles.zIndexMinusOneCenter}>
          <Text style={isDarkMode ? darkStyles.boldSurfaceSmallText : lightStyles.boldSurfaceSmallText}>+ Exclude ingredient</Text>
        </View>
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
