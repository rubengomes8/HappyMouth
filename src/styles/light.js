import React from "react";
import { StyleSheet } from "react-native";
import { lightThemeColors } from "./colors";

const lightStyles = StyleSheet.create({
  // views
  screenView: {
    flex: 1,
    backgroundColor: lightThemeColors.background,
  },
  screenViewCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightThemeColors.background,
  },
  scrollView: {
    flex: 1,
    backgroundColor: lightThemeColors.background
  },
  zIndexMinusOneCenter: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },

  // small text
  backgroundSmallText: {
    fontSize: 15,
    color: lightThemeColors.onBackground,
  },
  boldBackgroundCenteredSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
    textAlign: "center",
  },
  boldSurfaceSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: lightThemeColors.onSurface,
  },
  surfaceSmallText: {
    fontSize: 15,
    color: lightThemeColors.onSurface,
  },
  boldSurfaceSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: lightThemeColors.onSurface,
  },

  // medium text
  backgroundMediumText: {
    fontSize: 17,
    color: lightThemeColors.onBackground,
  },
  boldBackgroundMediumText: {
    fontSize: 17,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
  },
  surfaceMediumText: {
    fontSize: 17,
    color: lightThemeColors.onSurface,
  },
  boldSurfaceMediumText: {
    fontSize: 17,
    fontWeight: "bold",
    color: lightThemeColors.onSurface,
  },

  // big text

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
    backgroundColor: lightThemeColors.background,
    borderColor: "black",
    margin: 1,
    zIndex: -1,
  },

  // buttons / touchables
  roundButton: {
    backgroundColor: lightThemeColors.secondary,
    color: lightThemeColors.onSecondary,
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
    backgroundColor: lightThemeColors.surface,
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
    backgroundColor: lightThemeColors.surface,
    borderWidth: 1,
    borderColor: lightThemeColors.background,
    borderRadius: 5,
    padding: 5,
  },

  // cards
  recipeCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightThemeColors.surface,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 20,
  },

  // modals
  newRecipeModalContent: {
    backgroundColor: lightThemeColors.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: "95%",
    padding: 20,
  },
  selectIngredientsModalContent: {
    backgroundColor: lightThemeColors.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: "95%",
    padding: 20,
  },


  // labels
  ingredientIncludedLabel: {
    backgroundColor: lightThemeColors.secondary,
    padding: 5,
    borderRadius: 5,
  },
  ingredientExcludedLabel: {
    backgroundColor: lightThemeColors.terciary,
    padding: 5,
    borderRadius: 5,
  },
});

export default lightStyles;
