import { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "4px",
    display: "flex",
    alingCenter: "center",
    fontsize: "16px",
    lineHeight: "22px",
    fontWeight: "700",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      fontSize: "md",
      px: 2, // <-- these values are tokens from the design system
      py: 1, // <-- these values are tokens from the design system
    },
  },
};
