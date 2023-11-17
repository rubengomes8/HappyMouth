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

  // text
  backgroundMediumText: {
    fontSize: 20,
    color: lightThemeColors.onBackground,
  },

  // rows
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },

  // buttons
  roundButton: {
    backgroundColor: lightThemeColors.secondary,
    color: lightThemeColors.onSecondary,
    borderRadius: 40,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default lightStyles;
