import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, useRouter } from "expo-router";

import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
} from "../../Utils/Funcs";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import InputField from "@/src/Components/InputField/InputField";
import { INumberOrNull } from "@/src/GlobalTypes/Types";
import ServerError from "@/src/HttpServices/ServerError/ServerError";
import { styles } from "./Styles";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { dark, light } from "@/src/Theme/Colors";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import AuthDivider from "@/src/Components/AuthButtonsDivider/AuthDivider";
import FacebookButton from "@/src/Components/Buttons/SocialMediaAuth/FacebookButton";
import GoogleButton from "@/src/Components/Buttons/SocialMediaAuth/GoogleButton";
const Register = () => {
  const [signUpData, setSignUpData] = useState<{
    firstName: string | undefined;
    lastName: string | undefined;
    email: string | undefined;
    password: string | undefined;
  }>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [registrationError, setRegistrationError] = useState<string>("");
  const [userId, setUserId] = useState<INumberOrNull>(null);
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState<boolean>(false);
  const [isEmailValidationError, setIsEmailValidationError] =
    useState<boolean>(false);
  const [isFirstNameValidationError, setIsFirstNameValidationError] =
    useState<boolean>(false);
  const [isLastNameValidationError, setIsLastNameValidationError] =
    useState<boolean>(false);
  const handleOnChangeFirstName = (value: string | undefined) => {
    setSignUpData({
      ...signUpData,
      firstName: value,
    });
  };
  const theme = useColorScheme();
  const handleOnChangeLastName = (value: string | undefined) => {
    setSignUpData({
      ...signUpData,
      lastName: value,
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
  const handleNavigate = (userId: number) => {
    router.push({
      pathname: "/verification",
      params: {
        userId,
      },
    });
  };
  const handleSignUp = () => {
    if (
      !isEmailValidationError &&
      !isPasswordValidationError &&
      !isFirstNameValidationError &&
      !isLastNameValidationError
    ) {
      setIsLoading(true);
      if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        const userData = {
          FirstName: signUpData.firstName,
          LastName: signUpData.lastName,
          Email: signUpData.email,
          Password: signUpData.password,
        };
        // registrationRequest(
        //   userData,
        //   setIsLoading,
        //   setRegistrationError,
        //   handleNavigate
        // );
        setSignUpData({
          ...signUpData,
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        });
      } else if (
        signUpData.email === "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password === "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName !== ""
      ) {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName === "" &&
        signUpData.lastName !== ""
      ) {
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email !== "" &&
        signUpData.password !== "" &&
        signUpData.firstName !== "" &&
        signUpData.lastName === ""
      ) {
        setIsLastNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" &&
        signUpData.password === "" &&
        signUpData.firstName === "" &&
        signUpData.lastName === ""
      ) {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLastNameValidationError(true);
        setIsFirstNameValidationError(true);
        setIsLoading(false);
      } else if (
        signUpData.email === "" ||
        signUpData.password === "" ||
        signUpData.firstName === "" ||
        signUpData.lastName === ""
      ) {
        if (signUpData.email === "") setIsEmailValidationError(true);
        if (signUpData.password === "") setIsPasswordValidationError(true);
        if (signUpData.firstName === "") setIsFirstNameValidationError(true);
        if (signUpData.lastName === "") setIsLastNameValidationError(true);
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
    if (signUpData.firstName !== "" || !signUpData.firstName) {
      if (signUpData.firstName && signUpData.firstName.length < 4) {
        setIsFirstNameValidationError(true);
      } else {
        setIsFirstNameValidationError(false);
      }
    } else {
      setIsFirstNameValidationError(false);
    }
  }, [signUpData.firstName]);
  useEffect(() => {
    if (signUpData.lastName !== "") {
      if (signUpData.lastName && signUpData.lastName.length < 4) {
        setIsLastNameValidationError(true);
      } else {
        setIsLastNameValidationError(false);
      }
    } else {
      setIsLastNameValidationError(false);
    }
  }, [signUpData.lastName]);
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
            textValue={signUpData.firstName}
            placeHolder="given name"
            width={"100%"}
            handleOnChangeText={handleOnChangeFirstName}
            height={50}
            contentType="givenName"
            type="givenName"
            label="Given Name"
          />
          {isFirstNameValidationError && (
            <View style={errorContainer}>
              <Text style={errorText}>please enter atleast 4 characters</Text>
            </View>
          )}
          <InputField
            textValue={signUpData.lastName}
            placeHolder="family name"
            width={"100%"}
            handleOnChangeText={handleOnChangeLastName}
            height={50}
            contentType="familyName"
            type="familyName"
            label="Family Name"
          />
          {isLastNameValidationError && (
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
          />
          {isEmailValidationError && (
            <View style={errorContainer}>
              <Text style={errorText}>please enter valid email address</Text>
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
                      theme === "dark" ? dark.darkGray : light.darkGray,
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
              <GoogleButton type="sign_up" />
              <FacebookButton type="sign_up" />
            </View>
          </View>
        </View>
        {registrationError && (
          <ServerError
            message={registrationError}
            handleCancel={() => setRegistrationError("")}
            isModalVisible={registrationError ? true : false}
          />
        )}
      </ScrollView>
    </Screen>
  );
};

export default Register;
