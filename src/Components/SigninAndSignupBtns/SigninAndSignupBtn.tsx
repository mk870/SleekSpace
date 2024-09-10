import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import { router } from "expo-router";

import profile from "@/src/Components/Lotties/user-account.json";
import ThemedText from "../ThemedText/ThemedText";
import RegularText from "../RegularText/RegularText";
import CustomButton from "../Buttons/Custom/CustomButton";
import { primary } from "@/src/Theme/Colors";
import { family, medium } from "@/src/Theme/Font";
import {
  BUTTON_MAX_WIDTH,
  BUTTON_SIZE_SCREEN_BREAK_POINT,
} from "@/src/Utils/Constants";

type Props = {
  screenType: "profile" | "favorites" | "chats" | "property";
};

const SigninAndSignupBtn: React.FC<Props> = ({ screenType }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "center" }}>
        <LottieView
          source={profile}
          autoPlay
          loop
          style={{
            height: 200,
            width: 200,
          }}
        />
      </View>
      <ThemedText type="header">There is no profile to show</ThemedText>
      <RegularText>
        Please login or create an account to view and update your profile.
      </RegularText>
      <View
        style={[
          {
            width:
              width > BUTTON_SIZE_SCREEN_BREAK_POINT
                ? BUTTON_MAX_WIDTH
                : "100%",
          },
          styles.btnContainer,
        ]}
      >
        <CustomButton title="login" onPressFunc={() => router.push("/login")} />
        <TouchableOpacity
          style={styles.createAccountBtn}
          onPress={() => router.push("/register")}
        >
          <Text style={styles.createAccountText}>create account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninAndSignupBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    gap: 20,
    paddingBottom: 20,
  },
  createAccountBtn: {
    borderWidth: 2,
    borderColor: primary,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 7,
  },
  createAccountText: {
    fontFamily: family,
    color: primary,
    fontSize: medium,
  },
  btnContainer: {
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
