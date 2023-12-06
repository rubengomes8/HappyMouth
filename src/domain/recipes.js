export const getRecipeKey = (
  recipeType,
  includedIngredientNames,
  excludedIngredientNames
) => {
  const includedString = includedIngredientNames.join(",");
  const excludedString = excludedIngredientNames.join(",");
  return `${recipeType}|${includedString}|${excludedString}`;
};
