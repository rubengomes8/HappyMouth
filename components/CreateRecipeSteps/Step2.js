import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";

const Step2 = ({ onPrevious, onNext, onClose }) => {
    return (
      <View style={styles.container}>
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
        <Text style={styles.stepTitleText}>Step 2: Enter ingredients</Text>
        {/* Add input fields and Previous/Next buttons */}
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
    prevStepText: {
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