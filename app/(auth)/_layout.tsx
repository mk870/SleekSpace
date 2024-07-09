import { useColorScheme } from "react-native";
import React from "react";
import { useRouter, Stack } from "expo-router";

import { family } from "@/src/Theme/Font";
import HeaderIcon from "@/src/Components/Navigation/HeaderIcon/HeaderIcon";
import { stackAnimation } from "@/src/Components/Navigation/Utils/Constants";
import { dark, light, pureWhite } from "@/src/Theme/Colors";
import StackWrapper from "@/src/HOCs/StackWrapper";

const AuthStack = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? "black" : pureWhite,
        },
        headerTitleStyle: {
          fontFamily: family,
          color: colorScheme === "dark" ? dark.text : light.text,
        },
        headerTitleAlign: "center",
        headerLeft: () => (
          <HeaderIcon
            iconSize={24}
            iconName="arrow-back"
            onPressFunc={() => router.back()}
          />
        ),
      }}
    >
      <Stack.Screen
        name="login"
        options={{
          title: "Login",
          animation: stackAnimation,
          headerLeft: undefined,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Register",
          animation: stackAnimation,
        }}
      />
      <Stack.Screen
        name="verification/[id]"
        options={{
          title: "",
          headerStyle: {
            backgroundColor:
              colorScheme === "dark" ? dark.background : light.background,
          },
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        options={{
          title: "",
          headerStyle: {
            backgroundColor:
              colorScheme === "dark" ? dark.background : light.background,
          },
        }}
      />
      <Stack.Screen
        name="resetPassword/[id]"
        options={{
          title: "",
          headerStyle: {
            backgroundColor:
              colorScheme === "dark" ? dark.background : light.background,
          },
        }}
      />
    </Stack>
  );
};

export default StackWrapper(AuthStack);
