import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import HappySearchBar from "./HappySearchBar.jsx";
import SelectableIngredient from "./SelectableIngredient.jsx";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from "../../styles/dark.js";
import lightStyles from '../../styles/light';

const SelectIngredientsModal = ({
  ingredients,
  isVisible,
  onAddIngredient,
  onClose,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();  

  const [searchValue, setSearchValue] = React.useState("");

  changeSearchValueHandler = (newValue) => {
    setSearchValue(newValue);
  };

  const renderItem = ({ item }) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase()) ? (
      <SelectableIngredient
        item={item}
        onToggleItemAdded={() => onAddIngredient(item.id)}
      />
    ) : null;

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={ isDarkMode ? darkStyles.selectIngredientsModalContent : lightStyles.selectIngredientsModalContent }>
          <TouchableOpacity onPress={onClose} style={styles.touchableDone}>
            <Text style={styles.onCloseText}>Done</Text>
          </TouchableOpacity>
          <HappySearchBar
            searchValue={searchValue}
            onChangeText={(newValue) => changeSearchValueHandler(newValue)}
            style={styles.positionSearchBar}
          ></HappySearchBar>
          <View style={{ flex: 1 }}>
            <FlatList
              data={ingredients}
              keyExtractor={(ingredient) => ingredient.id}
              renderItem={renderItem}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    marginVertical: "10%",
  },
  onCloseText: {
    color: "blue",
    fontSize: 16,
  },
  positionSearchBar: {
    marginTop: 10,
  },
  touchableDone: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  }
});

export default SelectIngredientsModal;
