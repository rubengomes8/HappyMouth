import React from "react";
import { StyleSheet } from "react-native";
import { lightThemeColors, darkThemeColors } from "./colors";

const commonStyles = StyleSheet.create({
  includedIngredientsSummaryView: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: darkThemeColors.lightSecondary,
    borderColor: darkThemeColors.secondary,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
},
excludedIngredientsSummaryView: {
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: darkThemeColors.lightTerciary,
    borderColor:  darkThemeColors.terciary,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default commonStyles;
