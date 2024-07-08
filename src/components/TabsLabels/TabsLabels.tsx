import { Text, useColorScheme } from "react-native";
import React from "react";

import { family } from "@/src/Theme/Font";
import { dark, primary, white } from "@/src/Theme/Colors";

type Props = {
  focused: boolean;
  textItem: string;
};

const TabsLabels: React.FC<Props> = ({ focused, textItem }) => {
  const theme = useColorScheme();
  return (
    <Text
      style={{
        fontFamily: family,
        fontSize: 12,
        color:
          theme === "dark"
            ? focused
              ? primary
              : white
            : focused
            ? primary
            : dark.background,
      }}
    >
      {textItem}
    </Text>
  );
};

export default TabsLabels;

