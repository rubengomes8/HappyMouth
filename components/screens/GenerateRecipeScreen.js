import { Pressable, View, StyleSheet, Text, Alert } from "react-native";

const GenerateRecipeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, flexDirection:"row", alignItems:"flex-end", marginBottom: 20}}>
        <View style={styles.addIngredientBtn}>
          <Pressable
            onPress={() =>
              navigation.navigate("Add Ingredient", { name: "Tomato" })
            }
          >
            <Text style={styles.text}>{"Add Ingredient"}</Text>
          </Pressable>
        </View>
        <View style={styles.genRecipeBtn}>
          {
            <Pressable onPress={() => Alert.alert("Integrate with backend")}>
              <Text style={styles.text}>{"Generate Recipe"}</Text>
            </Pressable>
          }
        </View>
      </View>
    </View>
  );
};

export default GenerateRecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  addIngredientBtn: {
    flex: 1,
    width: "40%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 35,
  },
  genRecipeBtn: {
    flex: 1,
    width: "40%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
