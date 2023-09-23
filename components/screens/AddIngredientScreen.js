import Search from "../search/Search.js";
import {
  View,
  StyleSheet,
  Text,
} from "react-native";

const ChooseIngredientScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      {<View style={styles.searchBar}>{<Search />}</View>}
      {<Text>This is {route.params.name}'s choose ingredient</Text>}
    </View>
  );
};

export default ChooseIngredientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
  searchBar: {
    backgroundColor: "#fff",
    alignContent: "center",
  },
  addIngredientBtn: {
    width: "50%",
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginTop: 35,
  },
  genRecipeBtn: {
    width: "50%",
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
