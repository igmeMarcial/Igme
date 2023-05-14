import { extendTheme } from "@chakra-ui/react";
import "@fontsource/open-sans/700.css";
import "@fontsource/raleway/400.css";
import { Button } from "./button";
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#fff",
    },
  },
  fonts: {
    body: `'Open Sans', sans-serif`,
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  styles: {
    global: () => ({
      "html, body": {
        bg: "gray.200",
      },
    }),
  },
  components: {
    Button,
  },
});
