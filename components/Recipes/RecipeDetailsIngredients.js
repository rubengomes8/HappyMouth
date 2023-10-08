import { View, Text, StyleSheet } from "react-native";

const RecipeDetailsIngredients = ({ ingredients }) => {
  return ingredients != undefined ? (
    <View  style = {{marginTop: 10}}>
    <Text style={styles.ingredientsTitle}>Ingredients</Text>
      {ingredients.map((ingredient, index) => (
        <View  style={styles.ingredientView}>
          <Text key={index}>{`${index}:  ${ingredient}`}</Text>
        </View>
      ))}
    </View>
  ) : null;
};

export default RecipeDetailsIngredients;

const styles = StyleSheet.create({
    ingredientsTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    ingredientView: {
      margin: 5,
      fontSize: 16,
    },
  });
