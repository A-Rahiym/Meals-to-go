import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

const sizes = {
  small: 1,
  medium: 2,
  large: 3,
};

const postionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom"
};

const getVarient = (position, size, theme) => {
  const sizeIndex = sizes[size];
  const positionIndex = postionVariant[position];
  const value = theme.space[sizeIndex];
  return `${positionIndex}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ postion, size, children }) => {
  const theme = useTheme();
  const variant = getVarient(postion, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
