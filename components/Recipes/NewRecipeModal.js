import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// Step 1 component
const Step1 = ({ onNext }) => {
  return (
    <View>
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
      <Text style={styles.stepTitleText}>Step 1: Enter recipe name</Text>
      {/* Add input fields and Next button */}
    </View>
  );
};

// Step 2 component
const Step2 = ({ onPrevious, onNext }) => {
  return (
    <View>
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
    </View>
  );
};

// Step 3 component
const Step3 = ({ onPrevious, onSubmit }) => {
  return (
    <View>
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
      </View>
      <Text style={styles.stepTitleText}>Step 3: Enter instructions</Text>
      {/* Add input fields and Previous/Submit buttons */}
    </View>
  );
};

const NewRecipeModal = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);

  React.useEffect(() => {
    if (isVisible) {
      setCurrentStep(1);
    }
  }, [isVisible]);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    onClose();
  };

  let stepComponent;
  switch (currentStep) {
    case 1:
      stepComponent = <Step1 onNext={handleNext} />;
      break;
    case 2:
      stepComponent = <Step2 onPrevious={handlePrevious} onNext={handleNext} />;
      break;
    case 3:
      stepComponent = (
        <Step3 onPrevious={handlePrevious} onSubmit={handleSubmit} />
      );
      break;
    default:
      stepComponent = <Step1 onNext={handleNext} />;
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          {stepComponent}
          <View style={{
          flexDirection: "column",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}>
            <TouchableOpacity onPress={onClose}>
              <Icon name="trash" size={30} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default NewRecipeModal;

const styles = StyleSheet.create({
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
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 10,
    alignItems: "flex-end",
  },
  closeButtonText: {
    color: "blue",
    fontSize: 16,
  },
  stepTitleText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  nextStepText: {
    color: "blue",
    fontSize: 16,
  },
  prevStepText: {
    color: "blue",
    fontSize: 16,
  },
});
