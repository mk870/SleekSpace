import {
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import Screen from "@/src/Components/ScreenWrapper/Screen";
import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import InputField from "@/src/Components/InputField/InputField";
import { emailValidator } from "@/src/Utils/Funcs";
import { red } from "@/src/Theme/Colors";
import { family, small } from "@/src/Theme/Font";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";

const ForgotPassword: INoPropsReactComponent = () => {
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [httpError, setHttpError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEmailValidationError, setIsEmailValidationError] =
    useState<boolean>(false);
  useEffect(() => {
    if (email !== "") {
      emailValidator(setIsEmailValidationError, email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [email]);
  const { width } = useWindowDimensions();
  const handlePost = () => {
    router.push("/verification");
  };
  const router = useRouter();
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
          <ThemedText type="header" styles={styles.header}>
            Forgot your password?
          </ThemedText>
          <ThemedText type="regular">
            Enter your email address, and we'll send you a verification code to
            change your password.
          </ThemedText>
          <InputField
            textValue={email}
            placeHolder="email"
            width={"100%"}
            handleOnChangeText={(e) => setEmail(e)}
            height={50}
            contentType="emailAddress"
            type="emailAddress"
            label="Email"
          />
          {isEmailValidationError && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                please enter valid email address
              </Text>
            </View>
          )}
          <View style={styles.btnWrapper}>
            <CustomButton
              title={isLoading ? "loading" : "Verify"}
              onPressFunc={handlePost}
              isDisabled={isLoading ? true : false}
            />
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ForgotPassword;

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
  btnWrapper: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
});
