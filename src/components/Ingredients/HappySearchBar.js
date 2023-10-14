import * as React from "react";
import { SearchBar } from "@rneui/base";

const HappySearchBar = ({ searchValue, onChangeText }) => {
  return (
    <SearchBar
    value={searchValue}
    platform="default"
    placeholder={"Search ingredient..."}
    placeholderTextColor={"#888"}
    lightTheme
    round
    clearIcon
    onChangeText={onChangeText}/>
  );
};

export default HappySearchBar;
