import { StyleSheet, View } from "react-native";
import React from "react";

import { dark, light } from "@/src/Theme/Colors";
import { useAppSelector } from "@/src/Redux/Hooks/Config";

type Props = {
  children: React.ReactNode;
  showBackArrow?: boolean
};

const Screen: React.FC<Props> = ({ children,showBackArrow }) => {
  const theme = useAppSelector((state)=>state.theme.value)
  return (
    <View
      style={[
        styles.screen,
        {
          backgroundColor:
            theme === "light" ? light.background : dark.background,
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
