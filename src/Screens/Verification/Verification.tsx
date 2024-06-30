import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import Screen from "@/src/Components/ScreenWrapper/Screen";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import InputField from "@/src/Components/InputField/InputField";
import { IStringOrNull } from "@/src/GlobalTypes/Types";
import ServerError from "@/src/HttpServices/ServerError/ServerError";
import { family, small } from "@/src/Theme/Font";
import { red, dark, light } from "@/src/Theme/Colors";
import ButtonSpinner from "@/src/Components/Spinners/ButtonSpinner";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { router } from "expo-router";

type Props = {};

const Verification = (props: Props) => {
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [isVerificationLoading, setIsVerificationLoading] =
    useState<boolean>(false);
  const [isResendLoading, setIsResendLoading] = useState<boolean>(false);
  const [typingError, setTypingError] = useState<IStringOrNull>(null);
  const [verificationError, setVerificationError] = useState<string>("");
  const theme = useColorScheme();
  const {width} = useWindowDimensions()
  useEffect(() => {
    if (verificationCode && verificationCode.length < 6)
      setTypingError("verification code should be 6 digits");
    else setTypingError(null);
  }, [verificationCode]);
  const handleVerification = () => {};
  const handleAlertCancel = () => {};
  const handleResendCode = () => {
   router.push("/resetPassword")
  };
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View style={[styles.container,{ width: width > 700 ? 600 : "100%" }]}>
        <ThemedText type="header" styles={{textAlign:"center"}}>
            Code Verification
          </ThemedText>
          <ThemedText type="regular">
            Please enter your verification code
          </ThemedText>
          <InputField
            width={"100%"}
            height={40}
            handleOnChangeText={(e) => setVerificationCode(e)}
            textValue={verificationCode}
            label="Code"
            type="number"
            handleOnEnter={handleVerification}
            contentType="none"
            placeHolder=""
          />
          {typingError && <Text style={styles.errorText}>{typingError}</Text>}
          <TouchableOpacity
            onPress={handleResendCode}
            style={[
              styles.linkContainer,
              {
                backgroundColor:
                  theme === "dark" ? dark.darkGray : light.darkGray,
              },
            ]}
          >
            {isResendLoading ? (
              <ButtonSpinner />
            ) : (
              <ThemedText type="regular">Resend Code</ThemedText>
            )}
          </TouchableOpacity>
          <View style={styles.btnWrapper}>
            <CustomButton
              title={isVerificationLoading ? "loading" : "Verify"}
              onPressFunc={handleVerification}
              isDisabled={isVerificationLoading ? true : false}
            />
          </View>
        </View>
        {verificationError && (
          <ServerError
            handleCancel={handleAlertCancel}
            message={verificationError}
            isModalVisible={verificationError ? true : false}
          />
        )}
      </ScrollView>
    </Screen>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    paddingHorizontal: 15,
    paddingBottom:15,
    gap: 10,
  },
  errorText: {
    color: red,
    fontFamily: family,
    fontSize: small,
    marginTop: -5,
  },
  linkContainer: {
    paddingVertical: 8,
    width: 120,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop:5
  },
  btnWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
