import React, { useState, useEffect } from "react";
import { View, Modal, StyleSheet } from "react-native";
import Step1 from "../CreateRecipeSteps/Step1.jsx";
import Step2 from "../CreateRecipeSteps/Step2.jsx";
import Step3 from "../CreateRecipeSteps/Step3.jsx";
import { getIngredientsSortedByName } from "../../api/ingredientsApi.js";
import { postGenerateRecipe } from "../../api/recipesApi.js";
import { getRecipeKey } from "../../domain/recipes.js";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from "../../styles/dark.js";
import lightStyles from '../../styles/light';

const NewRecipeModal = ({ isVisible, onClose, onCloseAndUpdateRecipes, userRecipes }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();


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

  useEffect(() => {
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

  async function handleCreateRecipe(onCloseAndUpdateRecipes) {

    setIsSubmitButtonDisabled(true);
    setIsLoading(true);

    let recipeAlreadyExists;
    try {

      const includedIngredientNames = ingredients
        .filter((item) => item.isIncluded)
        .map((item) => item.name);

      const excludedIngredientNames = ingredients
        .filter((item) => item.isExcluded)
        .map((item) => item.name);

      const newRecipeKey = getRecipeKey(includedIngredientNames, excludedIngredientNames);
      recipeAlreadyExists = userRecipes.some((item) => item.id === newRecipeKey);
      if (recipeAlreadyExists) {
        alert("You already have this recipe.")
      } else {
        const response = await postGenerateRecipe(
          includedIngredientNames,
          excludedIngredientNames
        );

        if (response.status === 200) {
          onCloseAndUpdateRecipes(response.data);
        }
      }

    } catch (error) {
      alert("Create new recipe failed");
      console.error("Create new recipe failed:", error);
      console.error('Stack Trace:', error.stack);
    } finally {
      console.log("finally")
      setIsLoading(false);
      setIsSubmitButtonDisabled(false);
      if (!recipeAlreadyExists) {
        setIngredients(ingredients.map(item => ({ ...item, isIncluded: false, isExcluded: false })));
      }
    }
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
          onSubmit={() => handleCreateRecipe(onCloseAndUpdateRecipes)}
          onClose={onClose}
          isSubmitButtonDisabled={isSubmitButtonDisabled}
        />
      );
      break;
    default:
      stepComponent = <Step1 onNext={handleNext} />;
  }

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={isDarkMode ? darkStyles.newRecipeModalContent : lightStyles.newRecipeModalContent}>{stepComponent}</View>
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
});
