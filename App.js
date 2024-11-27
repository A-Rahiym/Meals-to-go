import { StatusBar } from "react-native";
import React from "react";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import ResturantScreen from "./src/features/resturants/screen/ResturantScreen";

const App = () => {
  const [oswaldLoaded] = useOswald({ Oswald_400Regular, Oswald_700Bold });
  const [LatoLoaded] = useLato({ Lato_400Regular, Lato_700Bold });

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
