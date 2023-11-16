import React from "react";
import { StyleSheet } from "react-native";
import { darkThemeColors } from "./colors";

const darkStyles = StyleSheet.create({
  screenView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    backgroundColor: darkThemeColors.background,
  },
  backgroundMediumText: {
    fontSize: 20,
    color: darkThemeColors.onBackground,
  },
  rowCenterAligned: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
});

export default darkStyles;
