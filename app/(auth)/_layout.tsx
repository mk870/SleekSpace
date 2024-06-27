import { useColorScheme } from "react-native";
import React from "react";
import { useRouter, Stack } from "expo-router";

import { family } from "@/src/Theme/Font";
import HeaderIcon from "@/src/Components/Navigation/HeaderIcon/HeaderIcon";
import { stackAnimation } from "@/src/Components/Navigation/Utils/Constants";
import { dark, light } from "@/src/Theme/Colors";

const AuthStack = () => {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor:
            colorScheme === "dark" ? dark.background : light.background,
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
          headerLeft:undefined
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
        name="verification"
        options={{
          title: "Verification",
          animation: stackAnimation,
        }}
      />
    </Stack>
  );
};

export default AuthStack;
