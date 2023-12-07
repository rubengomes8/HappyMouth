export const getRecipeKey = (
  includedIngredientNames,
  excludedIngredientNames
) => {
  const includedString = includedIngredientNames.join(",");
  const excludedString = excludedIngredientNames.join(",");
  return `${includedString}|${excludedString}`;
};
