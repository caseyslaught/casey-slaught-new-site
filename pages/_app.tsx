import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, defineStyle, extendTheme } from "@chakra-ui/react";

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
      md: "860px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
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
      secondary: {
        200: "#D9D9D9",
        600: "#454545",
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
    styles: {
      global: {
        body: {
          bg: "primary.800",
        },
        "html, #jobs-list": {
          "::-webkit-scrollbar": {
            width: "10px",
          },
          "::-webkit-scrollbar-thumb": {
            backgroundColor: "secondary.600",
            border: "2px solid primary.600",
            borderRadius: "8px",
          },

          "::-webkit-scrollbar-track": {
            backgroundColor: "primary.800",
          },
        },
        "#jobs-list": {
          "::-webkit-scrollbar": {
            width: "12px",
          },
        },
        ".project-image": {
          transition: "all 0.2s",
        },
        "@media (min-width: 860px)": {
          ".project-image": {
            opacity: 0.6,
            _hover: {
              opacity: 1,
              filter: "blur(0px) !important",
            },
          },
        },
        "@media (max-width: 860px)": {
          ".project-image": {
            opacity: 0.4,
          },
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
