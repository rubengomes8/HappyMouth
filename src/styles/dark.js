import React from "react";
import { StyleSheet } from "react-native";
import { darkThemeColors } from "./colors";

const darkStyles = StyleSheet.create({

  // views
  screenView: {
    flex: 1,
    backgroundColor: darkThemeColors.background,
  },
  screenViewCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkThemeColors.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: darkThemeColors.background
  },
  zIndexMinusOneCenter: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },

  // rows
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  removableIngredient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: darkThemeColors.background,
    borderColor: "black",
    margin: 1,
    zIndex: -1,
  },

  // small text
  backgroundSmallText: {
    fontSize: 15,
    color: darkThemeColors.onBackground,
  },
  boldBackgroundCenteredSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
    textAlign: "center",
  },
  boldSurfaceSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: darkThemeColors.onSurface,
  },
  surfaceSmallText: {
    fontSize: 15,
    color: darkThemeColors.onSurface,
  },
  boldSurfaceMediumText: {
    fontSize: 15,
    fontWeight: "bold",
    color: darkThemeColors.onSurface,
  },


  // medium text
  backgroundMediumText: {
    fontSize: 17,
    color: darkThemeColors.onBackground,
  },
  boldBackgroundMediumText: {
    fontSize: 17,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
  },
  surfaceMediumText: {
    fontSize: 17,
    color: darkThemeColors.onSurface,
  },
  boldSurfaceMediumText: {
    fontSize: 17,
    fontWeight: "bold",
    color: darkThemeColors.onSurface,
  },

  // big text
  

  // buttons / touchables
  roundButton: {
    backgroundColor: darkThemeColors.secondary,
    color: darkThemeColors.onSecondary,
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIngredientTouchable: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
    opacity: 0.5,
    backgroundColor: darkThemeColors.surface,
    borderRadius: 10,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    zIndex: -2,
  },
  selectableIngredient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: darkThemeColors.surface,
    borderWidth: 1,
    borderColor: darkThemeColors.background,
    borderRadius: 5,
    padding: 5,
  },

  // cards
  recipeCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: darkThemeColors.surface,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  // modals
  newRecipeModalContent: {
    backgroundColor: darkThemeColors.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: "95%",
    padding: 20,
  },
  selectIngredientsModalContent: {
    backgroundColor: darkThemeColors.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: "95%",
    padding: 20,
  },

  // labels
  ingredientIncludedLabel: {
    backgroundColor: darkThemeColors.secondary,
    padding: 5,
    borderRadius: 5,
  },
  ingredientExcludedLabel: {
    backgroundColor: darkThemeColors.terciary,
    padding: 5,
    borderRadius: 5,
  },
});

export default darkStyles;
