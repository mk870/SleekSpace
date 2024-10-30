import { StyleSheet, TouchableHighlight } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { dark, gray } from "@/src/Theme/Colors";
import { activeOpacityOfTouchableOpacity } from "@/src/Utils/Constants";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";

const ThreeDots: INoPropsReactComponent = () => {
  const theme = useAppSelector((state) => state.theme.value);
  const underLayColor = theme === "light" ? "#DDDBDE" : dark.darkGray;
  return (
    <TouchableHighlight
      onPress={() => {}}
      underlayColor={underLayColor}
      style={styles.container}
      activeOpacity={activeOpacityOfTouchableOpacity}
    >
      <MaterialCommunityIcons name="dots-vertical" size={24} color={gray} />
    </TouchableHighlight>
  );
};

export default ThreeDots;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight: 5,
  },
});
