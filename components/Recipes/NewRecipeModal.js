import React, { useState } from "react";
import { View, Modal, StyleSheet } from "react-native";
import axios from "axios";
import Step1 from "../CreateRecipeSteps/Step1.js";
import Step2 from "../CreateRecipeSteps/Step2.js";
import Step3 from "../CreateRecipeSteps/Step3.js";

const HOST = "http://192.168.1.92:8080";

const NewRecipeModal = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // EXCLUDED INGREDIENTS
  const [excludedIngredients, setExcludedIngredients] = useState([]);

  const onRemoveExcludedIngredient = (ingredientID) => {
    setExcludedIngredients(
      excludedIngredients.filter((ingredient) => ingredient.id !== ingredientID)
    );
  };

  const onAddExcludedIngredient = (ingredient) => {
    setExcludedIngredients(excludedIngredients.push(ingredient));
  };

  // INCLUDED INGREDIENTS
  const [includedIngredients, setIncludedIngredients] = useState([{id: 1, name: "tomato"}, {id: 2, name: "mushroom"}]);


  const onRemoveIncludedIngredient = (ingredientID) => {
    setIncludedIngredients(
      includedIngredients.filter((ingredient) => ingredient.id !== ingredientID)
    );
  };

  const onAddIncludedIngredient = (ingredient) => {
    setIncludedIngredients(includedIngredients.push(ingredient));
  };

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
    handleCreateRecipe();
  };

  handleCreateRecipe = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${HOST}/api/recipes`, {
        include_ingredients: ["Tomato"],
        exclude_ingredients: ["Onion"],
      });

      if (response.status === 200) {
        console.log(response);
      } else {
        throw new Error("Something went wrong. " + response);
      }
    } catch (error) {
      alert(error);
    }

    setIsLoading(false);
  };

  let stepComponent;
  switch (currentStep) {
    case 1:
      stepComponent = (
        <Step1
          onNext={handleNext}
          onClose={onClose}
          onAddIncludedIngredient={onAddIncludedIngredient}
          onRemoveIncludedIngredient={onRemoveIncludedIngredient}
          includedIngredients={includedIngredients}
        />
      );
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
