import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    primaryLocal: "#FA3523",
    secondaryLocal: "#FB7A6E",
    grayLocal: "#ADA4A5",
    whiteLocal: "#F3F4F6",
  },
  fontConfig: {
    Roboto: {
      400: {
        normal: "Roboto_400Regular",
        italic: "Roboto_400Regular_Italic",
      },
      500: {
        normal: "Roboto_500Medium",
      },
      700: {
        normal: "Roboto_700Bold",
      },
    },
  },
  fonts: {
    heading: "Roboto_700Bold",
    body: "Roboto_400Regular",
    mono: "Roboto",
  },
});
