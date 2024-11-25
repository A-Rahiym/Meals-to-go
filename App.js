import { StatusBar } from "react-native";
import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantScreen from "./src/features/resturants/screen/ResturantScreen";
const App = () => {
  return (
    <>
      <ResturantScreen />
      <StatusBar barStyle="auto" />
    </>
  );
};
export default App;
