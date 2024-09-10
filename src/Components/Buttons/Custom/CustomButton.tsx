import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import ButtonSpinner from "../../Spinners/ButtonSpinner";
import { primary, white } from "@/src/Theme/Colors";
import { family, medium } from "@/src/Theme/Font";

type Props = {
  onPressFunc: () => void;
  title: string;
  width?: number;
  height?: number;
  color?: string;
  borderRadius?: number;
  isDisabled?: boolean;
};

const CustomButton: React.FC<Props> = ({
  onPressFunc,
  title,
  width,
  color,
  isDisabled,
  height,
  borderRadius,
}) => {
  const { container, textStyles } = styles;
  return (
    <TouchableOpacity
      onPress={onPressFunc}
      disabled={isDisabled ? isDisabled : false}
      style={[
        container,
        {
          width: width ? width : "100%",
          height: height ? height : 50,
          backgroundColor: color ? color : primary,
          borderRadius: borderRadius ? borderRadius : 7,
        },
      ]}
    >
      {title === "loading" ? (
        <ButtonSpinner backGroundColor={white} />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  textStyles: {
    color: white,
    fontFamily: family,
    fontSize: medium,
  },
});
