import React from "react";
import { StyleSheet } from "react-native";
import { darkThemeColors } from "./colors";

const SMALL_TEXT_FONT_SIZE = 15;
const MEDIUM_TEXT_FONT_SIZE = 17;
const BIG_TEXT_FONT_SIZE = 20;

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
    backgroundColor: darkThemeColors.background,
  },
  zIndexMinusOneCenter: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1,
  },
  registerScreenView: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: darkThemeColors.background,
  },
  loginScreenView: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: darkThemeColors.background,
  },

  // rows
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  rowsSpaceBetweenWithBottomMargin: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
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
  onBackgroundSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    color: darkThemeColors.onBackground,
  },
  boldOnBackgroundCenteredSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
    textAlign: "center",
  },
  boldOnSurfaceSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onSurface,
  },
  onSurfaceSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    color: darkThemeColors.onSurface,
  },
  boldOnSurfaceSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onSurface,
  },
  boldPrimarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.primary,
  },
  boldSecondarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.secondary,
  },
  onLightSecondarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    color: darkThemeColors.onLightSecondary,
  },
  boldOnLightSecondarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onLightSecondary,
  },

  // medium text
  onBackgroundMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    color: darkThemeColors.onBackground,
  },
  onBackgroundCenteredMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    color: darkThemeColors.onBackground,
    textAlign: "center",
  },
  boldOnBackgroundMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
  },
  boldOnBackgroundCenteredMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
    textAlign: "center",
  },
  onSurfaceMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    color: darkThemeColors.onSurface,
  },
  boldOnSurfaceMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onSurface,
  },
  boldPrimaryMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.primary,
  },

  // big text
  onBackgroundBigText: {
    fontSize: BIG_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
  },
  onBackgroundBoldBigText: {
    fontSize: BIG_TEXT_FONT_SIZE,
    color: darkThemeColors.onBackground,
    fontWeight: "bold",
  },
  onBackgroundBigCenteredText: {
    fontSize: BIG_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
    textAlign: "center",
  },

  // buttons / touchables
  roundButton: {
    backgroundColor: darkThemeColors.secondary,
    color: darkThemeColors.onSecondary,
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
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
    marginTop: 10,
    marginHorizontal: 20,
  },
  userCard: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    backgroundColor: darkThemeColors.surface,
    padding: 10,
    marginBottom: 10,
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

  // inputs
  input: {
    width: "80%",
    height: 40,
    borderColor: darkThemeColors.onBackground,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default darkStyles;
