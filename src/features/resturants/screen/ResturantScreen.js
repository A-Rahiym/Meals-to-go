import { StatusBar } from "react-native";
import React from "react";
import styled from "styled-components";
import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import ResturantInfoCard from "../components/ResturantInfoCard";

const ScreenContainer = styled(View)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const ScreenSearchBar = styled(View)`
  padding: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
  margintop: StatusBar.currentHeight;
`;

const ResturantListContainer = styled(View)`
  flex: 1;
  padding: 5px;
  background-color: ${(props) => props.theme.colors.bg.tertiary};
`;

const ResturantScreen = () => {
  return (
    <>
      <ScreenContainer>
        <ScreenSearchBar>
          <Searchbar placeholder="search" />
        </ScreenSearchBar>
        <ResturantListContainer>
          <ResturantInfoCard />
        </ResturantListContainer>
      </ScreenContainer>
    </>
  );
};

export default ResturantScreen;
