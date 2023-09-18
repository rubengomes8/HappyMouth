import { SafeAreaView, View } from "react-native";
import Search from "./components/search/Search.js";
import IngredientsList from "./components/ingredients/IngredientsList.js";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        {<Search />}
        {<IngredientsList />}
      </View>
    </SafeAreaView>
  );
}
