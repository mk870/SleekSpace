import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";

import GoogleLogoSVG from "./Logos/GoogleLogoSVG";
import ThemedText from "../../ThemedText/ThemedText";
import { dark, light } from "@/src/Theme/Colors";

type Props = {
  type: "sign_in" | "sign_up";
  disabled: boolean;
};

const GoogleButton: React.FC<Props> = ({ type, disabled }) => {
  const theme = useColorScheme();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? dark.darkGray : light.darkGray },
      ]}
    >
      <GoogleLogoSVG />
      <View style={styles.textContainer}>
        <ThemedText type="regular">
          {type === "sign_in" ? "Login with Google" : "Register with Google"}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

export default GoogleButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    borderRadius: 7,
    paddingLeft: 10,
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: -30,
    flex: 1,
  },
});
