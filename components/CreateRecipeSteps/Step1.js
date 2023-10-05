import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";

const Step1 = ({ onNext, onClose }) => {
    return (
      <View style={styles.container}>
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
        <Text style={styles.stepTitleText}>Step 1: Ingredients to include</Text>
        {/* Add input fields and Next button */}
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
    closeButton: {
      marginTop: 10,
      alignItems: "flex-end",
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
    trashIconContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      paddingBottom: 20,
    },
  });