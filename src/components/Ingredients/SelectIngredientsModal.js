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
        <ScrollView style={styles.modalContent}>
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
            />
          </View>
        </ScrollView>
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
