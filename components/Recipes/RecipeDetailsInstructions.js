import { View, Text, StyleSheet } from "react-native";

const RecipeDetailsInstructions = ({ instructions }) => {
  return instructions != undefined ? (
    <View style={{ marginTop: 10 }}>
      <Text style={styles.instructionsTitle}>Instructions</Text>
      {instructions.map((instruction, index) => (
        <View style={styles.instructionView}>
          <Text key={index}>{instruction}</Text>
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
