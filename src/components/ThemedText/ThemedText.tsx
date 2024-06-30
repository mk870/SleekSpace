import {
  Text,
  TextStyle,
  useColorScheme,
} from "react-native";
import React from "react";

import { family, large, medium, small } from "@/src/Theme/Font";
import { dark, light } from "@/src/Theme/Colors";

type Props = {
  styles?: TextStyle;
  type: "regular" | "subHeader" | "header";
  children: React.ReactNode;
};

const ThemedText: React.FC<Props> = ({ styles, type, children }) => {
  const theme = useColorScheme();
  return (
    <Text
      style={[
        styles,
        {
          fontFamily: family,
          fontSize:
            type === "header" ? large : type === "subHeader" ? medium : small,
          fontWeight:
            type === "header" ? "bold" : type === "subHeader" ? "800" : "400",
          color: theme === "dark" ? dark.text : light.text,
        },
      ]}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
