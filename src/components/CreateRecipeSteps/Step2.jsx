import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import RemovableIngredient from "../Ingredients/RemovableIngredient";
import SelectIngredientsModal from "../Ingredients/SelectIngredientsModal";
import { AntDesign, Ionicons } from '@expo/vector-icons';

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import { darkThemeColors, lightThemeColors } from "../../styles/colors";

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
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
          <AntDesign style={{ marginTop: 4 }} name="down" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
        </View>
      </TouchableOpacity>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundCenteredMediumText : lightStyles.boldOnBackgroundCenteredMediumText}>Choose ingredients to exclude</Text>
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
          <Text style={isDarkMode ? darkStyles.boldOnSurfaceSmallText : lightStyles.boldOnSurfaceSmallText}>+ Exclude ingredient</Text>
        </View>
      </TouchableOpacity>
      <View
        style={isDarkMode ? darkStyles.rowsSpaceBetweenWithBottomMargin : lightStyles.rowsSpaceBetweenWithBottomMargin}
      >
        <TouchableOpacity onPress={onPrevious}>
          <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
            <Ionicons name="md-arrow-back" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNext}>
          <View style={isDarkMode ? darkStyles.closeModalCircle : lightStyles.closeModalCircle}>
            <Ionicons name="md-arrow-forward" size={24} color={isDarkMode ? darkThemeColors.primary : lightThemeColors.primary} />
          </View>
        </TouchableOpacity>
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
  trashIconContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
});
