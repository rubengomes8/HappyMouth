import React from "react";
import { StyleSheet } from "react-native";
import { lightThemeColors } from "./colors";

const lightStyles = StyleSheet.create({
  screenView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: lightThemeColors.background,
  },
  backgroundMediumText: {
    fontSize: 20,
    color: lightThemeColors.onBackground,
  },
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
});

export default lightStyles;
