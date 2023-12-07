import React from "react";
import { StyleSheet } from "react-native";
import { lightThemeColors } from "./colors";

const SMALL_TEXT_FONT_SIZE = 15;
const MEDIUM_TEXT_FONT_SIZE = 17;
const BIG_TEXT_FONT_SIZE = 20;
const EXTRA_BIG_TEXT_FONT_SIZE = 30;

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
    backgroundColor: lightThemeColors.background,
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
    backgroundColor: lightThemeColors.background,
  },
  changePasswordScreenView: {
    paddingTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: lightThemeColors.background,
  },
  ingredientsSummaryView: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: lightThemeColors.lightSecondary,
    borderColor: lightThemeColors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  // small text
  onBackgroundSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    color: lightThemeColors.onBackground,
  },
  boldOnBackgroundCenteredSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
    textAlign: "center",
  },
  boldOnSurfaceSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onSurface,
  },
  onSurfaceSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    color: lightThemeColors.onSurface,
  },
  boldOnSurfaceSmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onSurface,
  },
  boldPrimarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.primary,
  },
  boldSecondarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.secondary,
  },
  onSecondarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    color: lightThemeColors.onSecondary,
  },
  boldOnLightSecondarySmallText: {
    fontSize: SMALL_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onLightSecondary,
  },

  // medium text
  onBackgroundMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    color: lightThemeColors.onBackground,
  },
  onBackgroundCenteredMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    color: lightThemeColors.onBackground,
    textAlign: "center",
  },
  boldOnBackgroundMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
  },
  boldOnBackgroundCenteredMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
    textAlign: "center",
  },
  boldOnBackgroundLeftMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
    textAlign: "left",
  },
  onSurfaceMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    color: lightThemeColors.onSurface,
  },
  boldOnSurfaceMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.onSurface,
  },
  boldPrimaryMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.primary,
  },
  boldSecondaryMediumText: {
    fontSize: MEDIUM_TEXT_FONT_SIZE,
    fontWeight: "bold",
    color: lightThemeColors.secondary,
  },

  // big text
  onBackgroundBigText: {
    fontSize: BIG_TEXT_FONT_SIZE,
    color: lightThemeColors.onBackground,
  },
  onBackgroundBoldBigText: {
    fontSize: BIG_TEXT_FONT_SIZE,
    color: lightThemeColors.onBackground,
    fontWeight: "bold",
  },
  onBackgroundBigCenteredText: {
    fontSize: BIG_TEXT_FONT_SIZE,
    color: lightThemeColors.onBackground,
    textAlign: "center",
  },

  // extra big text
  boldPrimaryExtraBigText: {
    fontSize: EXTRA_BIG_TEXT_FONT_SIZE,
    color: lightThemeColors.primary,
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
  rowsFlexEndWithBottomMargin: {
    flexDirection: "row",
    justifyContent: "flex-end",
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
    alignItems: "center",
    justifyContent: "center",
  },
  addIngredientTouchable: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
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
  recipeTypeTouchableSquare: {
    width: 130,
    height: 100,
    color: lightThemeColors.surface,
    borderColor: lightThemeColors.terciary,
    borderWidth: 4,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeModalCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: lightThemeColors.surface,
    backgroundColor: lightThemeColors.surface,
  },

  // cards
  recipeCard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: lightThemeColors.surface,
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    marginHorizontal: 20,
  },
  userCard: {
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    backgroundColor: lightThemeColors.surface,
    padding: 10,
    marginBottom: 10,
  },

  // modals
  newRecipeModalContent: {
    backgroundColor: lightThemeColors.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: "95%",
    padding: 15,
  },
  selectIngredientsModalContent: {
    backgroundColor: lightThemeColors.background,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    minHeight: "95%",
    padding: 15,
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

  // inputs
  input: {
    width: "80%",
    height: 40,
    borderColor: lightThemeColors.surface,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default lightStyles;
