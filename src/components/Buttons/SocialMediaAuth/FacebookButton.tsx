import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

import { family, small } from "@/src/Theme/Font";
import { white } from "@/src/Theme/Colors";
import FaceBookLogoSVG from "./Logos/FaceBookLogoSVG";

type Props = {
  type: "sign_in" | "sign_up";
  disabled: boolean;
};

const FacebookButton: React.FC<Props> = ({ type, disabled }) => {
  return (
    <TouchableOpacity style={styles.container} disabled={disabled}>
      <FaceBookLogoSVG />
      <Text style={styles.text}>
        {type === "sign_in" ? "Login with Facebook" : "Register with Facebook"}
      </Text>
    </TouchableOpacity>
  );
};

export default FacebookButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    height: 50,
    borderRadius: 7,
    backgroundColor: "#3B5998",
  },
  text: {
    fontFamily: family,
    fontSize: small,
    color: white,
  },
});
