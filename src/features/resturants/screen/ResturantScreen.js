import { StatusBar } from "react-native";
import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfo from "../components/ResturantInfo";

const ResturantScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.search}>
          <Searchbar placeholder="search" />
        </View>
        <ResturantInfo />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "white",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "grey",
    marginTop: StatusBar,
    padding: "auto",
  },
  search: {
    padding: 16,
    backgroundColor: "",
    marginTop: StatusBar.currentHeight,
  },
});

export default ResturantScreen;
