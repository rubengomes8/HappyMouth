import { StyleSheet, View } from "react-native";
import IngredientItem from "./IngredientItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
  }
});

const IngredientsList = () => {
  ingredients = [{ id: 1, name: "Tomato" }, { id: 2, name: "Pasta" }, , { id: 3, name: "Basil" }];

  ingredientsContent = ingredients.map((item) => (
      <IngredientItem 
      key={item.id}
      name={item.name} 
      />
  ));

  return <View style={styles.container}>{ingredientsContent}</View>;
};

export default IngredientsList;
