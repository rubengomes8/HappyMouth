import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import RecipeDetails from "./RecipeDetails.jsx";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';

const RecipeDetailsModal = ({ recipe, isVisible, onClose }) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={isDarkMode ? darkStyles.newRecipeModalContent : lightStyles.newRecipeModalContent}>
          <RecipeDetails recipe={recipe} onClose={onClose}></RecipeDetails>
        </View>
      </View>
    </Modal>
  );
};

export default RecipeDetailsModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
