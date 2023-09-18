import React, { useState } from "react";
import { StatusBar, SafeAreaView, View } from "react-native";
import Search from "./components/search/Search.js";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        {<Search />}
      </View>
    </SafeAreaView>
  );
}
