import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import { family, medium, small } from "@/src/Theme/Font";
import { red } from "@/src/Theme/Colors";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import InputField from "@/src/Components/InputField/InputField";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { passwordGuideLines, passwordValidator } from "@/src/Utils/Funcs";

const ResetPassword = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [resetPassWordError, setResetPassWordError] = useState<string>("");
  const [passwords, setPasswords] = useState<{
    password: string | undefined;
    confirmPassword: string | undefined;
  }>({
    password: "",
    confirmPassword: "",
  });
  const [isPasswordConfirmationError, setIsPasswordConfirmationError] =
    useState<boolean>(false);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState<boolean>(false);
  useEffect(() => {
    if (passwords.password !== "") {
      passwordValidator(setIsPasswordValidationError, passwords.password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [passwords.password]);
  useEffect(() => {
    if (passwords.confirmPassword && passwords.password) {
      if (passwords.confirmPassword !== passwords.password)
        setIsPasswordConfirmationError(true);
      else setIsPasswordConfirmationError(false);
    } else setIsPasswordConfirmationError(false);
  }, [passwords.confirmPassword, passwords.password]);
  const { width } = useWindowDimensions();
  const router = useRouter()
  const handleReset = () => {
    router.replace("/login")
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
        <View
          style={[styles.subContainer, { width: width > 700 ? 600 : "100%" }]}
        >
          <ThemedText type="header" styles={{ textAlign: "center" }}>
            Reset Password
          </ThemedText>
          <ThemedText type="regular">Enter your new password</ThemedText>
          <InputField
            textValue={passwords.password}
            placeHolder="password"
            width={"100%"}
            handleOnChangeText={(e) =>
              setPasswords({ ...passwords, password: e })
            }
            height={50}
            contentType="password"
            type="password"
            label="Password"
          />
          <InputField
            textValue={passwords.confirmPassword}
            placeHolder="confirm password"
            width={"100%"}
            handleOnChangeText={(e) =>
              setPasswords({ ...passwords, confirmPassword: e })
            }
            height={50}
            contentType="password"
            type="password"
            label="Confirm Password"
          />
          {isPasswordConfirmationError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                passwords are not the same
              </Text>
            </View>
          )}
          {isPasswordValidationError && (
            <View style={styles.errorContainer}>
              <Text style={styles.guidelineHeaderText}>
                Password Guideines:
              </Text>
              {passwordGuideLines.map((guideline: string) => (
                <Text key={guideline} style={styles.errorText}>
                  {guideline}
                </Text>
              ))}
            </View>
          )}
          <View style={styles.btnWrapper}>
            <CustomButton
              title={isLoading ? "loading" : "Reset Password"}
              onPressFunc={handleReset}
              isDisabled={isLoading ? true : false}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  subContainer: {
    gap: 10,
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  errorContainer: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: -5,
  },
  errorText: {
    color: red,
    fontFamily: family,
    fontSize: small,
  },
  guidelineHeaderText: {
    color: red,
    fontFamily: family,
    fontSize: medium,
    marginBottom: 5,
  },
  btnWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
