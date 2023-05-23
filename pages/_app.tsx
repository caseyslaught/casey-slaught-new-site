import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ChakraProvider,
  defineStyle,
  defineStyleConfig,
  extendTheme,
} from "@chakra-ui/react";

import "@fontsource/roboto-mono/400.css";
import "@fontsource/roboto-mono/700.css";

export default function App({ Component, pageProps }: AppProps) {
  const buttonAccentStyle = defineStyle({
    color: "accent.300",
    border: "1px solid",
    borderColor: "accent.300",
  });

  const theme = extendTheme({
    breakpoints: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    fonts: {
      heading: "Roboto Mono",
      body: "Roboto Mono",
    },
    colors: {
      accent: {
        100: "#ECAA0011",
        500: "#ECAA00",
      },
      primary: {
        100: "#CBE0EA",
        600: "#495A74",
        700: "#314159",
        800: "#222f42",
      },
    },
    components: {
      Button: {
        variants: {
          outline: ({ colorScheme }: any) => ({
            bg: "transparent",
            border: "1px solid",
            borderColor: `${colorScheme}.500`,
            color: `${colorScheme}.500`,
            fontWeight: "normal",
            transition: "all 0.2s",
            _hover: {
              bg: `${colorScheme}.100`,
            },
          }),
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
