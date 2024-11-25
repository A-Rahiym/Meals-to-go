import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Card } from "react-native-paper";
const ResturantInfo = ({ resturant = {} }) => {
  const {
    name  = "some Resturant",
    icon,
    photos = [" "],
    address = 'long avenue, top side',
    isOPenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = resturant;
  return (
    <>
      <View style={styles.list}>
        <Card>
         <Card.Title title={name} />
        </Card>
        <Text>Resturant Info</Text>
        <Text>{name}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "grey",
    marginTop: StatusBar,
    alignItems: "center",
  },
});

export default ResturantInfo;
