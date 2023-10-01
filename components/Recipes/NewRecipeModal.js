import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

// Step 1 component
const Step1 = ({ onNext }) => {
  return (
    <View>
      <Text>Step 1: Enter recipe name</Text>
      {/* Add input fields and Next button */}
      <TouchableOpacity onPress={onNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

// Step 2 component
const Step2 = ({ onPrevious, onNext }) => {
  return (
    <View>
      <Text>Step 2: Enter ingredients</Text>
      {/* Add input fields and Previous/Next buttons */}
      <TouchableOpacity onPress={onPrevious}>
        <Text>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

// Step 3 component
const Step3 = ({ onPrevious, onSubmit }) => {
  return (
    <View>
      <Text>Step 3: Enter instructions</Text>
      {/* Add input fields and Previous/Submit buttons */}
      <TouchableOpacity onPress={onPrevious}>
        <Text>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
      </TouchableOpacity>
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
    // Perform form submission logic
    // This is where you would send the data to your server or perform any other necessary actions.
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
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
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
});
