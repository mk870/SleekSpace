import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  icon?: React.ReactNode;
};

const CustomButton: React.FC<Props> = ({
  onPressFunc,
  title,
  width,
  color,
  isDisabled,
  height,
  borderRadius,
  icon,
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
        <View style={styles.innerContainer}>
          {icon}
          <Text style={textStyles}>{title}</Text>
        </View>
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
  innerContainer: {
    flexDirection: "row",
    gap: 5,
  },
  textStyles: {
    color: white,
    fontFamily: family,
    fontSize: medium,
  },
});
