import { StyleSheet, useColorScheme, View } from "react-native";
import React from "react";

import { dark, light } from "@/src/Theme/Colors";

type Props = {
  children: React.ReactNode;
  showBackArrow?: boolean
};

const Screen: React.FC<Props> = ({ children,showBackArrow }) => {
  const theme = useColorScheme();
  return (
    <View
      style={[
        styles.screen,
        {
          backgroundColor:
            theme === "dark" ? dark.background : light.background,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
