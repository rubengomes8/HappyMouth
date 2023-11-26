import React from "react";
import { StyleSheet } from "react-native";
import { lightThemeColors, darkThemeColors } from "./colors";

const commonStyles = StyleSheet.create({
  includedIngredientsSummaryView: {
    padding: 3,
    marginHorizontal: 5,
    backgroundColor: darkThemeColors.lightSecondary,
    borderColor: darkThemeColors.secondary,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  excludedIngredientsSummaryView: {
    padding: 3,
    marginHorizontal: 5,
    backgroundColor: darkThemeColors.lightTerciary,
    borderColor: darkThemeColors.terciary,
    borderRadius: 5,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default commonStyles;
