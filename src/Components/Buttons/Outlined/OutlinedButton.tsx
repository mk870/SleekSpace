import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { primary } from "@/src/Theme/Colors";
import { family, medium } from "@/src/Theme/Font";

type Props = {
  title: string;
  onPressFunc: IVoidFunc;
  width?: DimensionValue;
};

const OutlinedButton: React.FC<Props> = ({ title, onPressFunc, width }) => {
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={[styles.container, { width: width ? width : "100%" }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 7,
  },
  text: {
    fontFamily: family,
    color: primary,
    fontSize: medium,
  },
});
