import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import TrashIcon from "../TrashIcon";

const Step3 = ({ onPrevious, onSubmit, onClose }) => {
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
            <TouchableOpacity onPress={onSubmit}>
              <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.stepTitleText}>Summary</Text>
        {/* Add input fields and Previous/Submit buttons */}
        <View style={styles.trashIconContainer}>
          <TrashIcon onClose={onClose} />
        </View>
      </View>
    );
  };


  export default Step3;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    stepTitleText: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 10,
    },
    prevStepText: {
      color: "blue",
      fontSize: 16,
    },
    submitText: {
      color: "blue",
      fontWeight: "bold",
      fontSize: 16,
    },
    trashIconContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-end",
      paddingBottom: 20,
    },
  });