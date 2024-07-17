/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const black = "black";

const Colors = {
  red: "#FF2700",
  primary: "#4D09CD",
  white:"aliceblue",
  pureWhite:"#fff",
  lightPrimary: "rgba(77, 9, 205,0.5)",
  gray:"gray",
  light: {
    text: black,
    background: "#eaeaea",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    darkGray: "#c6c7c7"
  },
  dark: {
    darkGray: "#1B1B1C",
    text: "aliceblue",
    background: black,
    lightBackGround: "#1B1B1C",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const { dark, light, primary, lightPrimary, red, white, pureWhite,gray } = Colors;
