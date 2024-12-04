import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star.js";
import open from "../../../../assets/open.js";
import { Spacer } from "./Spacer.js";

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.ui.secondary};
  font-size: ${(props) => props.theme.fontSizes.title};
`;
const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const Section = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const ResturantCardCover = styled(Card)`
  padding: 2px;
  backgroundcolor: ${(props) => props.theme.colors.bg.quaternary};
  // backgroundcolor: "white;
`;

const Rating = styled.View`
  flex-direction: row;
  // deconstruction is possible
  padding-top: ${({theme}) => theme.space[2]};
  padding-bottom: ${(prop) => prop.theme.space[2]};
`;

const ResturantCard = styled(Card)`
  // backgroundcolor: ${(props) => props.theme.colors.bg.quaternary};
  backgroundcolor: "white;
`;

// Resturant card component
const ResturantInfoCard = ({ resturant = {} }) => {
  const {
    name = "Some Resturant",
    icon,
    photos = [
      require("../../../../assets/food1.jpg"),
      require("../../../../assets/food2.jpg"),
    ],
    address = "Long avenue,top side",
    isOPenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = resturant;

  const ratingArray = Array.from(new Array(Math.floor(4)));
  console.log(ratingArray);
  return (
    <>
      <ResturantCard>
        <Card elevation={8}>
          <ResturantCardCover>
            <Card.Cover key={name} source={photos[1]} />
          </ResturantCardCover>
          <Info>
            <Spacer postion="bottom" size="small">
            <Title>{name}</Title>
            </Spacer>
            <Section>
              <Spacer position="left" size="medium">
                <Rating>
                  {ratingArray.map((id) => (
                    <SvgXml xml={star} width={20} height={20} key={id} />
                  ))}
                </Rating>
              </Spacer>
              <SectionEnd>
                <Spacer postion="top" size="large">
                  {!isClosedTemporarily && (
                    <Text
                      varient="label"
                      style={{
                        color: "red",
                        fontFamily: `${(prop) => prop.theme.fonts.body}`,
                        paddingRight: 10,
                      }}
                    >
                      IS CLOSED TEMPRARILY
                    </Text>
                  )}
                </Spacer>
                <Spacer postion="left" size="large">
                  {isOPenNow && <SvgXml xml={open} width={20} height={20} />}
                </Spacer>
              </SectionEnd>
            </Section>
            <Address>{address}</Address>
          </Info>
        </Card>
      </ResturantCard>
    </>
  );
};
export default ResturantInfoCard;
