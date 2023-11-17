import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";
import RemovableIngredient from "../Ingredients/RemovableIngredient";
import SelectIngredientsModal from "../Ingredients/SelectIngredientsModal";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';

const Step1 = ({ ingredients, onToggleIngredientIsIncluded, onNext, onClose }) => {

  const { isDarkMode, toggleTheme } = useTheme();

  const [isSelectIngredientsModalVisible, setIsSelectIngredientsModalVisible] =
    useState(false);

  const openSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(true);
  };

  const closeSelectIngredientsModal = () => {
    setIsSelectIngredientsModalVisible(false);
  };

  includeIngredientsHandler = () => {
    openSelectIngredientsModal();
  };

  return (
    <View style={styles.container}>
      <SelectIngredientsModal
        ingredients={ingredients.filter(i => !i.isExcluded)}
        isVisible={isSelectIngredientsModalVisible}
        onAddIngredient={onToggleIngredientIsIncluded}
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
      <Text style={ isDarkMode ? darkStyles.boldBackgroundCenteredSmallText : lightStyles.boldBackgroundCenteredSmallText}>Step 1: Ingredients to include</Text>
      <TouchableOpacity
        style={ isDarkMode ? darkStyles.addIngredientTouchable : lightStyles.addIngredientTouchable}
        onPress={includeIngredientsHandler}
      >
        <View style={styles.overlayItems}>
          <View style={styles.ingredientsContainer}>
            {ingredients != undefined
              ? ingredients.map((ingredient) =>
                  ingredient.isIncluded ? (
                    <RemovableIngredient
                      key={ingredient.id}
                      name={ingredient.name}
                      onRemove={() => onToggleIngredientIsIncluded(ingredient.id)}
                    />
                  ) : null
                )
              : null}
          </View>
        </View>
        <View style={ isDarkMode ? darkStyles.zIndexMinusOneCenter : lightStyles.zIndexMinusOneCenter}>
          <Text style={ isDarkMode ? darkStyles.boldSurfaceSmallText : lightStyles.boldSurfaceSmallText}>+ Include ingredient</Text>
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
