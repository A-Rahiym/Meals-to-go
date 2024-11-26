import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
  padding: 16px;
  display: flex;
  flex-direction: row
  justify-content: center;

`;

const ResturantCardCover = styled(Card)`
  padding: 1px;
  backgroundcolor: "green";
`;

const ResturantCard = styled(Card)`
  backgroundcolor: "White";
`;

const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "some Resturant",
    icon,
    photos = [
      require("../../../../assets/food1.jpg"),
      require("../../../../assets/food1.jpg"),
    ],
    address = "long avenue, top side",
    isOPenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = resturant;

  return (
    <>
      <ResturantCard>
        <Card elevation={8}>
          <ResturantCardCover>
            <Card.Cover key={name} source={photos[1]} />
          </ResturantCardCover>
          <Title>{name}</Title>
        </Card>
      </ResturantCard>
    </>
  );
};

export default ResturantInfoCard;
