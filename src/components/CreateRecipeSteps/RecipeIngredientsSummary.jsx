import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';
import commonStyles from '../../styles/common';

const RecipeIngredientsSummary = ({ ingredients, type }) => {
    const { isDarkMode, toggleTheme } = useTheme();


    const renderIngredientRow = () => {
        return (
            <View style={
                type == "included" ? commonStyles.includedIngredientsSummaryView
                    : (type == "excluded" ? commonStyles.excludedIngredientsSummaryView : null)}>
                {ingredients.map((ingredient) => (
                    <View key={ingredient.id} style={styles.rowContainer}>
                        <Text style={isDarkMode ? darkStyles.boldOnLightSecondarySmallText : lightStyles.boldOnLightSecondarySmallText}>- {ingredient.name.toUpperCase()}</Text>
                    </View>
                ))}
            </View>
        )
    }

    return (
        ingredients.length > 0 ?
            <FlatList
                data={[ingredients]}
                keyExtractor={(ingredient) => ingredient.id}
                renderItem={renderIngredientRow}
            /> : null
    );

}

export default RecipeIngredientsSummary;


const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
    },
});