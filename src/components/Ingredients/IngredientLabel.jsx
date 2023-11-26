import React from "react";
import { View, Text } from "react-native";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import commonStyles from '../../styles/common';

const IngredientLabel = ({ type, ingredientName }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <View style={
            type == "included" ?
                commonStyles.includedIngredientsSummaryView
                : (type == "excluded" ?
                    commonStyles.excludedIngredientsSummaryView :
                    null)}>
            <Text style={isDarkMode ? darkStyles.boldOnLightSecondarySmallText : lightStyles.boldOnLightSecondarySmallText}>{ingredientName}</Text>
        </View>
    )
};

export default IngredientLabel;
