import { StatusBar } from "react-native";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { ThemeProvider } from "react-native-paper";
import { theme } from "./src/infrastructure/theme";
import ResturantScreen from "./src/features/resturants/screen/ResturantScreen";
const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ResturantScreen />
        <StatusBar barStyle="auto" />
      </ThemeProvider>
    </>
  );
};
export default App;
