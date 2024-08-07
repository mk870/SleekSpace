import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useMutation } from "@tanstack/react-query";
import * as Facebook from "expo-auth-session/providers/facebook";
import * as authSession from "expo-auth-session";

import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
} from "../../Utils/Funcs";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import InputField from "@/src/Components/InputField/InputField";
import MessageModal from "@/src/Components/Modals/MessageModal";
import { styles } from "./Styles";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { dark, light, red } from "@/src/Theme/Colors";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import AuthDivider from "@/src/Components/AuthButtonsDivider/AuthDivider";
import FacebookButton from "@/src/Components/Buttons/SocialMediaAuth/FacebookButton";
import GoogleButton from "@/src/Components/Buttons/SocialMediaAuth/GoogleButton";
import { nativeRegisterHttpFunc } from "@/src/HttpServices/Mutations/AuthHttpFunctions";
import { IUserRegistrationData } from "./Types";
import { faceBookAuthClientId } from "@/src/Utils/Constants";
import { useAppSelector } from "@/src/Redux/Hooks/Config";

const Register = () => {
  const [signUpData, setSignUpData] = useState<IUserRegistrationData>({
    givenName: "",
    familyName: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] =
    useState<boolean>(false);
  const [registrationError, setRegistrationError] = useState<string>("");
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState<boolean>(false);
  const [isEmailValidationError, setIsEmailValidationError] =
    useState<boolean>(false);
  const [isGivenNameValidationError, setIsGivenNameValidationError] =
    useState<boolean>(false);
  const [isFamilyNameValidationError, setIsFamilyNameValidationError] =
    useState<boolean>(false);
  const handleOnChangeFirstName = (value: string | undefined) => {
    setSignUpData({
      ...signUpData,
      givenName: value,
    });
  };
  const theme = useAppSelector((state) => state.theme.value);
  const [__, ___, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: "496126113091123",
    redirectUri: authSession.makeRedirectUri({ scheme: "SleekSpace" }),
  });
  const handleOnChangeLastName = (value: string | undefined) => {
    setSignUpData({
      ...signUpData,
      familyName: value,
    });
  };
  const handleOnChangePassword = (value: string | undefined) => {
    setSignUpData({
      ...signUpData,
      password: value,
    });
  };
  const handleOnChangeEmail = (value: string | undefined) => {
    setSignUpData({
      ...signUpData,
      email: value,
    });
  };

  const faceBookRegistrationMutation = useMutation({
    mutationFn: async () => {
      await fbPromptAsync();
    },
    onSuccess(data) {
      console.log("data", data);
    },
  });

  const nativeRegistrationMutation = useMutation({
    mutationFn: nativeRegisterHttpFunc,
    onSuccess(data) {
      setUserId(data.data.userId);
      setIsRegistrationSuccessful(true);
    },
    onError(error: any) {
      if (error.response?.data?.error !== "") {
        setRegistrationError(error.response?.data?.error);
      } else setRegistrationError("Something went wrong");
    },
    onSettled: () => {
      setSignUpData({
        ...signUpData,
        email: "",
        password: "",
        givenName: "",
        familyName: "",
      });
      setIsLoading(false);
    },
  });

  const handleSignUp = () => {
    if (
      !isEmailValidationError &&
      !isPasswordValidationError &&
      !isGivenNameValidationError &&
      !isFamilyNameValidationError
    ) {
      setIsLoading(true);
      if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName !== ""
      ) {
        nativeRegistrationMutation.mutate(signUpData);
      } else if (
        signUpData.email === "" &&
        signUpData.password !== "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName !== ""
      ) {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password === "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName !== ""
      ) {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.givenName === "" &&
        signUpData.familyName !== ""
      ) {
        setIsGivenNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.givenName !== "" &&
        signUpData.familyName === ""
      ) {
        setIsFamilyNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" &&
        signUpData.password === "" &&
        signUpData.givenName === "" &&
        signUpData.familyName === ""
      ) {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsFamilyNameValidationError(true);
        setIsGivenNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" ||
        signUpData.password === "" ||
        signUpData.givenName === "" ||
        signUpData.familyName === ""
      ) {
        if (signUpData.email === "") setIsEmailValidationError(true);
        if (signUpData.password === "") setIsPasswordValidationError(true);
        if (signUpData.givenName === "") setIsGivenNameValidationError(true);
        if (signUpData.familyName === "") setIsFamilyNameValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (signUpData.password !== "") {
      passwordValidator(setIsPasswordValidationError, signUpData.password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [signUpData.password]);
  useEffect(() => {
    if (signUpData.email !== "") {
      emailValidator(setIsEmailValidationError, signUpData.email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [signUpData.email]);
  useEffect(() => {
    if (signUpData.givenName !== "" || !signUpData.givenName) {
      if (signUpData.givenName && signUpData.givenName.length < 4) {
        setIsGivenNameValidationError(true);
      } else {
        setIsGivenNameValidationError(false);
      }
    } else {
      setIsGivenNameValidationError(false);
    }
  }, [signUpData.givenName]);
  useEffect(() => {
    if (signUpData.familyName !== "") {
      if (signUpData.familyName && signUpData.familyName.length < 4) {
        setIsFamilyNameValidationError(true);
      } else {
        setIsFamilyNameValidationError(false);
      }
    } else {
      setIsFamilyNameValidationError(false);
    }
  }, [signUpData.familyName]);

  const handleCloseSuccesModal = () => {
    setIsRegistrationSuccessful(false);
    router.push({
      pathname: `/verification/${userId}`,
      params: {
        isNewUser: "yes",
      },
    });
  };

  const {
    container,
    inputWrapper,
    btnWrapper,
    errorContainer,
    errorText,
    guidelineHeaderText,
    registerContainer,
    registerLink,
  } = styles;
  const { width } = useWindowDimensions();
  return (
    <Screen>
      <ScrollView
        style={container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View style={[inputWrapper, { width: width > 700 ? 600 : "95%" }]}>
          <ThemedText type="header">Registration</ThemedText>
          <InputField
            textValue={signUpData.givenName}
            placeHolder="given name"
            width={"100%"}
            handleOnChangeText={handleOnChangeFirstName}
            height={50}
            contentType="givenName"
            type="givenName"
            label="Given Name"
            borderColor={isGivenNameValidationError ? red : undefined}
          />
          {isGivenNameValidationError && (
            <View style={errorContainer}>
              <Text style={errorText}>please enter atleast 4 characters</Text>
            </View>
          )}
          <InputField
            textValue={signUpData.familyName}
            placeHolder="family name"
            width={"100%"}
            handleOnChangeText={handleOnChangeLastName}
            height={50}
            contentType="familyName"
            type="familyName"
            label="Family Name"
            borderColor={isFamilyNameValidationError ? red : undefined}
          />
          {isFamilyNameValidationError && (
            <View style={errorContainer}>
              <Text style={errorText}>please enter atleast 4 characters</Text>
            </View>
          )}
          <InputField
            textValue={signUpData.email}
            placeHolder="email"
            width={"100%"}
            handleOnChangeText={handleOnChangeEmail}
            height={50}
            contentType="emailAddress"
            type="emailAddress"
            label="Email"
            borderColor={isEmailValidationError ? red : undefined}
          />
          {isEmailValidationError && (
            <View style={errorContainer}>
              <Text style={errorText}>please enter valid a email address</Text>
            </View>
          )}
          <InputField
            textValue={signUpData.password}
            placeHolder="password"
            width={"100%"}
            handleOnChangeText={handleOnChangePassword}
            height={50}
            contentType="password"
            type="password"
            label="Password"
            borderColor={isPasswordValidationError ? red : undefined}
          />
          {isPasswordValidationError && (
            <View style={errorContainer}>
              <Text style={guidelineHeaderText}>Password Guideines:</Text>
              {passwordGuideLines.map((guideline: string) => (
                <Text key={guideline} style={errorText}>
                  {guideline}
                </Text>
              ))}
            </View>
          )}
          <View style={btnWrapper}>
            <View style={registerContainer}>
              <ThemedText type="regular">
                you already have an account?{" "}
              </ThemedText>
              <TouchableOpacity
                onPress={() => router.push("/login")}
                style={[
                  styles.linkContainer,
                  {
                    backgroundColor:
                      theme === "light" ? light.darkGray : dark.darkGray,
                  },
                ]}
              >
                <Text style={registerLink}>Login</Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title={isLoading ? "loading" : "Register"}
              onPressFunc={handleSignUp}
              isDisabled={isLoading ? true : false}
            />
            <AuthDivider />
            <View style={styles.socialsWrapper}>
              <GoogleButton type="sign_up" disabled={isLoading} />
              <FacebookButton
                type="sign_up"
                disabled={isLoading}
                handleOnPressFunc={faceBookRegistrationMutation.mutate}
              />
            </View>
          </View>
        </View>
        <MessageModal
          message={registrationError}
          handleCancel={() => setRegistrationError("")}
          isModalVisible={registrationError ? true : false}
          header="Registration Failed"
          type="error"
        />
        <MessageModal
          message={
            "please check your email for the verification code and finish setting up your account."
          }
          handleCancel={handleCloseSuccesModal}
          isModalVisible={isRegistrationSuccessful}
          header="Email Sent!"
          type="success"
        />
      </ScrollView>
    </Screen>
  );
};

export default Register;
