import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const sizes = {
    small: 1,
    medium: 2,
    large: 3,
};

const postionVariant = {
    top: "marginTop",
    left: "marginLeft",
    right: "marginRight",
};

const getVarient = (position, size) => `${position}:${size}`;

export const Spacer = styled.View`${({ position, size }) => getVarient(position, size)}`

Spacer.defaultProps = {
    position='top',
    size='small'
}
