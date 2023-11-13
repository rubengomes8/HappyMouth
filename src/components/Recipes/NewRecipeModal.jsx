import React, { useState, useEffect } from "react";
import { View, Modal, StyleSheet } from "react-native";
import Step1 from "../CreateRecipeSteps/Step1.jsx";
import Step2 from "../CreateRecipeSteps/Step2.jsx";
import Step3 from "../CreateRecipeSteps/Step3.jsx";
import { getIngredientsSortedByName } from "../../api/ingredientsApi.js";
import { postGenerateRecipe } from "../../api/recipegeneratorApi.js";

const NewRecipeModal = ({ isVisible, onClose, onCloseAndFetchRecipes }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchDatabaseIngredients() {
      const databaseIngredients = await getIngredientsSortedByName(
        true /* sortByName */
      );
      setIngredients(databaseIngredients.map((item) => ({ ...item, isIncluded: false, isExcluded: false })));
    }
    fetchDatabaseIngredients();
  }, []);


  const onToggleIngredientIsIncluded = (ingredientID) => {
    let updatedIngredients;
    if (ingredients != undefined) {
      updatedIngredients = ingredients.map((item) => {
        if (item.id === ingredientID) {
          if (!item.isIncluded) {
            const numSelectedIngredients = ingredients.filter(i => i.isIncluded).length;
            if (numSelectedIngredients >= 10) {
              alert("Maximum number of ingredients is 10.");
              return item;
            }
          } 
          return { ...item, isIncluded: !item.isIncluded };
        }
        return item;
      });
    } else {
      updatedIngredients = [];
    }
    setIngredients(updatedIngredients);
  };


  const onToggleIngredientIsExcluded = (ingredientID) => {
    let updatedIngredients;
    if (ingredients != undefined) {
      updatedIngredients = ingredients.map((item) => {
        if (item.id === ingredientID) {
          if (!item.selected) {
            const numSelectedIngredients = ingredients.filter(i => i.isExcluded).length;
            if (numSelectedIngredients >= 10) {
              alert("Maximum number of ingredients is 10.");
              return item;
            }
          }
          return { ...item, isExcluded: !item.isExcluded };

        }
        return item;
      });
    } else {
      updatedIngredients = [];
    }
    setIngredients(updatedIngredients);
  };

  React.useEffect(() => {
    if (isVisible) {
      setCurrentStep(1);
    }
  }, [isVisible]);

  const handleNext = () => {
    if (ingredients.filter((i) => i.isIncluded).length == 0) {
      alert("You must include at least one ingredient.");
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  async function handleCreateRecipe() {
    console.log("handleCreateRecipe");
    setIsLoading(true);
    try {
      const includedIngredientNames = ingredients
        .filter((item) => item.isIncluded)
        .map((item) => item.name);
      const excludedIngredientNames = ingredients
        .filter((item) => item.isExcluded)
        .map((item) => item.name);
      response = await postGenerateRecipe(
        includedIngredientNames,
        excludedIngredientNames
      );
      if (response.status == 200) {
        onCloseAndFetchRecipes();
      }
    } catch (error) {
      alert("Create new recipe failed");
      console.error("Create new recipe failed:", error);
    }
    setIsLoading(false);
  }

  let stepComponent;
  switch (currentStep) {
    case 1:
      stepComponent = (
        <Step1
          ingredients={ingredients}
          onToggleIngredientIsIncluded={onToggleIngredientIsIncluded}
          onNext={handleNext}
          onClose={onClose}
        />
      );
      break;
    case 2:
      stepComponent = (
        <Step2
          ingredients={ingredients}
          onToggleIngredientIsExcluded={onToggleIngredientIsExcluded}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onClose={onClose}
        />
      );
      break;
    case 3:
      stepComponent = (
        <Step3
          ingredients={ingredients}
          onPrevious={handlePrevious}
          onSubmit={handleCreateRecipe}
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
    minHeight: "95%",
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
