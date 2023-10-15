import React, { useState, useEffect } from "react";
import { View, Modal, StyleSheet } from "react-native";
import axios from "axios";
import Step1 from "../CreateRecipeSteps/Step1.js";
import Step2 from "../CreateRecipeSteps/Step2.js";
import Step3 from "../CreateRecipeSteps/Step3.js";
import { getIngredientsSortedByName } from "../../api/ingredientsApi.js";

const NewRecipeModal = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchDatabaseIngredients() {
      const databaseIngredients = await getIngredientsSortedByName(
        true /* sortByName */
      );
      setIncludedIngredients(databaseIngredients);
      setExcludedIngredients(databaseIngredients);
    }
    fetchDatabaseIngredients();
  }, []);

  /*************  Included ingredients *************/
  const [includedIngredients, setIncludedIngredients] = useState([]);

  const onToggleIncludedIngredientAdded = (ingredientID) => {
    let updatedIngredients;
    if (includedIngredients != undefined) {
      updatedIngredients = includedIngredients.map((item) => {
        if (item.id === ingredientID) {
          if (!item.selected) {
            const selectedCount = includedIngredients.reduce((count, item) => {
              return item.selected ? count + 1 : count;
            }, 0);
            if (selectedCount >= 10) {
              alert("Maximum number of ingredients is 10.");
              return item;
            }
          }

          return { ...item, selected: !item.selected };
        }
        return item;
      });
    } else {
      updatedIngredients = [];
    }

    setIncludedIngredients(updatedIngredients);
  };

  /*************  Excluded ingredients *************/
  const [excludedIngredients, setExcludedIngredients] = useState([]);

  const onToggleExcludedIngredientAdded = (ingredientID) => {
    let updatedIngredients;
    if (excludedIngredients != undefined) {
      updatedIngredients = excludedIngredients.map((item) => {
        if (item.id === ingredientID) {
          if (!item.selected) {
            const selectedCount = excludedIngredients.reduce((count, item) => {
              return item.selected ? count + 1 : count;
            }, 0);
            if (selectedCount >= 10) {
              alert("Maximum number of ingredients is 10.");
              return item;
            }
          }

          return { ...item, selected: !item.selected };
        }
        return item;
      });
    } else {
      updatedIngredients = [];
    }

    setExcludedIngredients(updatedIngredients);
  };

  React.useEffect(() => {
    if (isVisible) {
      setCurrentStep(1);
    }
  }, [isVisible]);

  const handleNext = () => {
    if(includedIngredients.filter((i) => i.selected).length == 0) {
      alert("You must include at least one ingredient.")
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    onClose();
    handleCreateRecipe();
  };

  handleCreateRecipe = () => {
    setIsLoading(true);
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
