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

  /*************  Included ingredients *************/
  const [includedIngredients, setIncludedIngredients] = useState([
    { id: 1, name: "tomato", selected: true },
    { id: 2, name: "mushroom", selected: false },
    { id: 3, name: "potato", selected: true },
  ]);

  const onToggleIncludedIngredientAdded = (ingredientID) => {
    let updatedIngredients =
      includedIngredients != undefined
        ? includedIngredients.map((item) => {
            if (item.id === ingredientID) {
              return { ...item, selected: !item.selected };
            }
            return item;
          })
        : [];
    setIncludedIngredients(updatedIngredients);
  };

  /*************  Excluded ingredients *************/
  const [excludedIngredients, setExcludedIngredients] = useState([
    { id: 4, name: "onion", selected: true },
    { id: 5, name: "garlic", selected: false },
  ]);

  const onToggleExcludedIngredientAdded = (ingredientID) => {
    let updatedIngredients =
      excludedIngredients != undefined
        ? excludedIngredients.map((item) => {
            if (item.id === ingredientID) {
              return { ...item, selected: !item.selected };
            }
            return item;
          })
        : [];
    setExcludedIngredients(updatedIngredients);
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
          ingredients={includedIngredients}
          onToggleIngredientAdded={onToggleIncludedIngredientAdded}
          onNext={handleNext}
          onClose={onClose}
        />
      );
      break;
    case 2:
      stepComponent = (
        <Step2
          ingredients={excludedIngredients}
          onToggleIngredientAdded={onToggleExcludedIngredientAdded}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onClose={onClose}
        />
      );
      break;
    case 3:
      stepComponent = (
        <Step3
          includedIngredients={includedIngredients}
          excludedIngredients={excludedIngredients}
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
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
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
