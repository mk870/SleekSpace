import { View, useColorScheme, ActivityIndicator } from "react-native";
import React from "react";

import { dark, light } from "@/src/Theme/Colors";

const ButtonSpinner: React.FC<{ backGroundColor?: string }> = ({
  backGroundColor,
}) => {
  const theme = useColorScheme();
  return (
    <View style={{ width: "100%" }}>
      <ActivityIndicator
        size={"small"}
        color={
          backGroundColor
            ? backGroundColor
            : theme === "dark"
            ? dark.text
            : light.text
        }
      />
    </View>
  );
};

export default ButtonSpinner;
