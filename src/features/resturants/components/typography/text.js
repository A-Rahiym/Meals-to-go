import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
font-family: ${theme.fonts.body};
font-weight: ${theme.fontsWeights.regular};
color: ${theme.colors.text.primary};
flex-wrap: wrap;
margin-top:0px;
margin-bottom: 0px;
`;

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)};
  ${({varients,theme})=> varients[variant](theme)}
`;
