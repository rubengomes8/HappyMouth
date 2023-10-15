import React from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import HappySearchBar from "./HappySearchBar.js";
import SelectableIngredient from "./SelectableIngredient.js";

const SelectIngredientsModal = ({
  ingredients,
  isVisible,
  onAddIngredient,
  onClose,
}) => {
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
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.onCloseText}>Close</Text>
          </TouchableOpacity>
          <HappySearchBar
            searchValue={searchValue}
            onChangeText={(newValue) => changeSearchValueHandler(newValue)}
          ></HappySearchBar>
          <View>
            <FlatList
              data={ingredients}
              keyExtractor={(ingredient) => ingredient.id}
              renderItem={renderItem}
              style={{ maxHeight: "90%" }}
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
    marginVertical: 20,
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
