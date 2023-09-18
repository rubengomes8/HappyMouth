import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View } from "react-native";

// import "./Search.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState(searchValue); // hook

  const changeTextHandler = (searchValue) => {
    setSearchValue(searchValue);
    console.log(searchValue);
  };

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={changeTextHandler}
        value={searchValue}
      />
    </View>
  );
};

export default Search;
