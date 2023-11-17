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

  // text
  backgroundMediumText: {
    fontSize: 20,
    color: lightThemeColors.onBackground,
  },
  boldBackgroundMediumText: {
    fontSize: 20,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
  },
  boldSurfaceSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: lightThemeColors.onSurface,
  },
  boldBackgroundCenteredSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: lightThemeColors.onBackground,
    textAlign: "center",
  },

  // rows
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
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
});

export default lightStyles;
