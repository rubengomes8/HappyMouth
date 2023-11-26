import React from "react";
import { StyleSheet, FlatList } from "react-native";

import IngredientLabel from "../Ingredients/IngredientLabel";


const RecipeIngredientsSummary = ({ ingredients, type }) => {
    const renderIngredientLabel = () => {
        return (
            ingredients.map((ingredient) => (
                <IngredientLabel
                    key={ingredient.name}
                    style={styles.ingredientLabelsContainer}
                    type={type}
                    ingredientName={ingredient.name.toUpperCase()}>
                </IngredientLabel>
            ))
        )
    }

    return (
        ingredients.length > 0 ?
            <FlatList
                data={[ingredients]}
                keyExtractor={(ingredient) => ingredient.id}
                renderItem={renderIngredientLabel}
            /> : null
    );

}

const styles = StyleSheet.create({
    ingredientLabelsContainer: {
        flexDirection: "column",
        justifyContent: "center",
      },

});

export default RecipeIngredientsSummary;