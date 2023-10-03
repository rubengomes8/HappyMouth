import React, { useState } from "react";
import { View, Modal, TouchableOpacity, StyleSheet } from "react-native";
import Step1 from "../CreateRecipeSteps/Step1.js";
import Step2 from "../CreateRecipeSteps/Step2.js";
import Step3 from "../CreateRecipeSteps/Step3.js";

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
      stepComponent = <Step1 onNext={handleNext} onClose={onClose} />;
      break;
    case 2:
      stepComponent = (
        <Step2
          onPrevious={handlePrevious}
          onNext={handleNext}
          onClose={onClose}
        />
      );
      break;
    case 3:
      stepComponent = (
        <Step3
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
          onClose={onClose}
        />
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
        <View style={styles.modalContent}>{stepComponent}</View>
      </View>
    </Modal>
  );
};

export default NewRecipeModal;

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
