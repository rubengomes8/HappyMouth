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

  // buttons
  roundButton: {
    backgroundColor: darkThemeColors.secondary,
    color: darkThemeColors.onSecondary,
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
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
});

export default darkStyles;
