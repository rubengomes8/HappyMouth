import { View, Text, StyleSheet } from "react-native";

// themes
import { useTheme } from '../../contexts/ThemeContext';
import darkStyles from '../../styles/dark';
import lightStyles from '../../styles/light';

const RecipeDetailsInstructions = ({ instructions }) => {

  const { isDarkMode, toggleTheme } = useTheme();

  return instructions != undefined ? (
    <View style={{ marginTop: 10 }}>
      <Text style={isDarkMode ? darkStyles.boldOnBackgroundMediumText : lightStyles.boldOnBackgroundMediumText}>Instructions</Text>
      {instructions.map((instruction, index) => (
        <View key={index} style={styles.instructionView}>
          <Text style={isDarkMode ? darkStyles.onBackgroundSmallText : lightStyles.onBackgroundSmallText}>{instruction}</Text>
        </View>
      ))}
    </View>
  ) : null;
};

export default RecipeDetailsInstructions;

const styles = StyleSheet.create({
  instructionsTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  instructionView: {
    margin: 5,
    fontSize: 16,
  },
});
