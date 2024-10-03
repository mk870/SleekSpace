import {
  DimensionValue,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { primary } from "@/src/Theme/Colors";
import { family, medium } from "@/src/Theme/Font";

type Props = {
  title: string;
  onPressFunc: IVoidFunc;
  width?: DimensionValue;
  isDisabled?: boolean;
  iconPosition?: "left" | "right";
  icon?: React.ReactNode;
};

const OutlinedButton: React.FC<Props> = ({
  title,
  onPressFunc,
  width,
  isDisabled,
  iconPosition,
  icon,
}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      style={[styles.container, { width: width ? width : "100%" }]}
      disabled={isDisabled ? isDisabled : false}
    >
      <View style={styles.innerContainer}>
        {iconPosition === "left" && icon}
        <Text style={[styles.text, { marginTop: icon ? 3 : 0 }]}>{title}</Text>
        {iconPosition === "right" && icon}
      </View>
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
  innerContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: family,
    color: primary,
    fontSize: medium,
  },
});
