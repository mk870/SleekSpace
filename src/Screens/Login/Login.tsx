import {
  ScrollView,
  Text,
  TouchableOpacity,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";

import InputField from "../../Components/InputField/InputField";
import CustomButton from "../../Components/Buttons/Custom/CustomButton";
import {
  emailValidator,
  passwordGuideLines,
  passwordValidator,
  saveSecureValue,
} from "../../Utils/Funcs";
import { styles } from "./Styles";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import ServerError from "@/src/HttpServices/ServerError/ServerError";
import { IUserLogin, IVoidFunc } from "@/src/GlobalTypes/Types";
import { useAppDispatch } from "@/src/Redux/Hooks/Config";
import { updateAccessToken } from "@/src/Redux/Slices/AccessTokenSlice/AccessToken";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import { dark, light, red } from "@/src/Theme/Colors";
import GoogleButton from "@/src/Components/Buttons/SocialMediaAuth/GoogleButton";
import FacebookButton from "@/src/Components/Buttons/SocialMediaAuth/FacebookButton";
import AuthDivider from "@/src/Components/AuthButtonsDivider/AuthDivider";
import { loginHttpFunc } from "@/src/HttpServices/Mutations/AuthHttpFunctions";
import {
  addEmailAddress,
  addFamilyName,
  addGivenName,
  addUserId,
} from "@/src/Redux/Slices/UserSlice/User";
import { expoSecureValueKeyNames } from "@/src/Utils/Constants";

const Login = () => {
  const { width } = useWindowDimensions();
  const [loginUserData, setLoginUserData] = useState<IUserLogin>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>("");
  const [isPasswordValidationError, setIsPasswordValidationError] =
    useState<boolean>(false);
  const [isEmailValidationError, setIsEmailValidationError] =
    useState<boolean>(false);
  const router = useRouter();
  const theme = useColorScheme();
  const dispatch = useAppDispatch();
  const {
    container,
    inputWrapper,
    btnWrapper,
    errorContainer,
    errorText,
    guidelineHeaderText,
    registerContainer,
    linkText,
    forgotPasswordWrapper,
    forgotPasswordText,
  } = styles;

  const loginMutation = useMutation({
    mutationFn: loginHttpFunc,
    onSuccess: (data) => {
      saveSecureValue(
        expoSecureValueKeyNames.accessToken,
        JSON.stringify(data.data.accessToken)
      )
        .then((_data) => {
          dispatch(updateAccessToken(data.data.accessToken));
          dispatch(addEmailAddress(data.data.email));
          dispatch(addFamilyName(data.data.familyName));
          dispatch(addGivenName(data.data.givenName));
          dispatch(addUserId(data.data.id));
          router.dismissAll();
          router.replace("/home");
        })
        .catch((e) => {
          console.log("accessToken error ", e);
        })
        .finally(() => setIsLoading(false));
    },
    onError(error: any) {
      if (error.response?.data?.error !== "") {
        setLoginError(error.response?.data?.error);
      } else setLoginError("Something went wrong");
    },
    onSettled: () => {
      setIsLoading(false);
      setLoginUserData({ ...loginUserData, email: "", password: "" });
    },
  });
  const handlePost: IVoidFunc = () => {
    if (!isEmailValidationError && !isPasswordValidationError) {
      setIsLoading(true);
      if (loginUserData.email !== "" && loginUserData.password !== "") {
        loginMutation.mutate(loginUserData);
      } else if (loginUserData.email === "" && loginUserData.password !== "") {
        setIsEmailValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email !== "" && loginUserData.password === "") {
        setIsPasswordValidationError(true);
        setIsLoading(false);
      } else if (loginUserData.email === "" && loginUserData.password === "") {
        setIsEmailValidationError(true);
        setIsPasswordValidationError(true);
        setIsLoading(false);
      }
    }
  };
  useEffect(() => {
    if (loginUserData.password !== "") {
      passwordValidator(setIsPasswordValidationError, loginUserData.password);
    } else {
      setIsPasswordValidationError(false);
    }
  }, [loginUserData.password]);
  useEffect(() => {
    if (loginUserData.email !== "") {
      emailValidator(setIsEmailValidationError, loginUserData.email);
    } else {
      setIsEmailValidationError(false);
    }
  }, [loginUserData.email]);
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
          <ThemedText type="header" styles={{ marginBottom: 10 }}>
            Welcome back!
          </ThemedText>
          <InputField
            textValue={loginUserData.email}
            placeHolder="email"
            width={"100%"}
            handleOnChangeText={(e) =>
              setLoginUserData({ ...loginUserData, email: e })
            }
            height={50}
            contentType="emailAddress"
            type="emailAddress"
            label="Email"
            borderColor={isEmailValidationError ? red : undefined}
          />
          {isEmailValidationError && (
            <View style={errorContainer}>
              <Text style={errorText}>please enter valid email address</Text>
            </View>
          )}
          <InputField
            textValue={loginUserData.password}
            placeHolder="password"
            width={"100%"}
            handleOnChangeText={(e) =>
              setLoginUserData({ ...loginUserData, password: e })
            }
            height={50}
            contentType="password"
            type="password"
            label="Password"
            borderColor={isPasswordValidationError ? red : undefined}
          />
          <View style={forgotPasswordWrapper}>
            <TouchableOpacity onPress={() => router.push("/forgotPassword")}>
              <Text style={forgotPasswordText}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
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
                you don't have an account?{" "}
              </ThemedText>
              <TouchableOpacity
                onPress={() => router.push("/register")}
                disabled={isLoading}
                style={[
                  styles.linkContainer,
                  {
                    backgroundColor:
                      theme === "dark" ? dark.darkGray : light.darkGray,
                  },
                ]}
              >
                <Text style={linkText}>Register</Text>
              </TouchableOpacity>
            </View>
            <CustomButton
              title={isLoading ? "loading" : "Login"}
              onPressFunc={handlePost}
              isDisabled={isLoading}
            />
            <AuthDivider />
            <View style={styles.socialsWrapper}>
              <GoogleButton type="sign_in" disabled={isLoading} />
              <FacebookButton
                type="sign_in"
                disabled={isLoading}
                handleOnPressFunc={() => console.log("fb")}
              />
            </View>
          </View>
        </View>
        {loginError && (
          <ServerError
            handleCancel={() => setLoginError("")}
            message={loginError}
            isModalVisible={loginError ? true : false}
          />
        )}
      </ScrollView>
    </Screen>
  );
};

export default Login;
