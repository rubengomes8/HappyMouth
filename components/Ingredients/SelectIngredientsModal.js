import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";

const SelectIngredientsModal = ({ isVisible, onClose }) => {
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
          <Text>Modal Content</Text>
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
