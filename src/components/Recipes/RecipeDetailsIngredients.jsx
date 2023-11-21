import { View, Text, StyleSheet } from "react-native";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';


const RecipeDetailsIngredients = ({ ingredients }) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return ingredients != undefined ? (
    <View style={{ marginTop: 10 }}>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundMediumText : lightStyles.boldOnBackgroundMediumText}>Ingredients</Text>
      {ingredients.map((ingredient, index) => (
        <View style={styles.ingredientView} key={index}>
          <Text style={isDarkMode ? darkStyles.onBackgroundSmallText : lightStyles.onBackgroundSmallText}>• {ingredient}</Text>
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
