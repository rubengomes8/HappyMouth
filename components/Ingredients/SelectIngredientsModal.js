import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import HappySearchBar from "./HappySearchBar.js";
import SelectableIngredient from "./SelectableIngredient.js";

const SelectIngredientsModal = ({ isVisible, onClose }) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedIngredients, setSelectedIngredients] = React.useState([]);
  const [allIngredients, setAllIngredients] = React.useState([
    { id: 1, name: "tomato", selected: true },
    { id: 2, name: "mushroom", selected: false },
    { id: 3, name: "potato", selected: true },
  ]);

  changeSearchValueHandler = (newValue) => {
    console.log(newValue);
    setSearchValue(newValue);
  };

  onToggleItemSelect = (itemID) => {
    console.log("toggleItemSelect");
    console.log("itemID " + itemID)
    console.log("before " + JSON.stringify(allIngredients));
    updatedIngredients = allIngredients.map((item) => {
      if (item.id === itemID) {
        return { ...item, selected: !item.selected };
      }
      return item;
    });
    setAllIngredients(updatedIngredients);
    console.log("after " + JSON.stringify(allIngredients));
  };

  const renderItem = ({ item }) => (
    <SelectableIngredient item={item} onToggleItemAdded={() => onToggleItemSelect(item.id)} />
  );

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.onCloseText}>Close</Text>
          </TouchableOpacity>
          <HappySearchBar
            searchValue={searchValue}
            onChangeText={(newValue) => changeSearchValueHandler(newValue)}
          ></HappySearchBar>
          <FlatList
            data={allIngredients}
            keyExtractor={(ingredient) => ingredient.id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: "90%",
    padding: 20,
  },
  onCloseText: {
    color: "blue",
    fontSize: 16,
  },
});

export default SelectIngredientsModal;
