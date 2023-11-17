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

  // text
  backgroundMediumText: {
    fontSize: 20,
    color: darkThemeColors.onBackground,
  },
  boldBackgroundMediumText: {
    fontSize: 20,
    fontWeight: "bold",
    color: darkThemeColors.onBackground,
  },
  boldSurfaceSmallText: {
    fontSize: 15,
    fontWeight: "bold",
    color: darkThemeColors.onSurface,
  },
  boldBackgroundCenteredSmallText: {
    fontSize: 15,
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
});

export default darkStyles;
