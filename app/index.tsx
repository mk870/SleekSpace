import { useColorScheme } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { jwtDecode, JwtPayload } from "jwt-decode";

import { getSecureValue } from "@/src/Utils/Funcs";
import { expoSecureValueKeyNames } from "@/src/Utils/Constants";
import { useAppDispatch } from "@/src/Redux/Hooks/Config";
import { updateAccessToken } from "@/src/Redux/Slices/AccessTokenSlice/AccessToken";
import ScreenSpinner from "@/src/Components/Spinners/ScreenSpinner";
import Screen from "@/src/Components/ScreenWrapper/Screen";

const index = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const dispatch = useAppDispatch();
  useEffect(() => {
    getSecureValue(expoSecureValueKeyNames.accessToken)
      .then((value: string | null) => {
        if (value) {
          const decoded: JwtPayload = jwtDecode(value);
          const currentDate = new Date();
          if (decoded.exp) {
            if (decoded.exp * 1000 > currentDate.getTime()) {
              dispatch(updateAccessToken(value));
              router.replace("/home");
            } else router.replace("/login");
          } else {
            dispatch(updateAccessToken(value));
            router.replace("/home");
          }
        } else {
          router.replace("/home");
        }
      })
      .catch((e) => {
        console.log("error", e);
      });
  }, []);
  return (
    <Screen>
      <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
      <ScreenSpinner />
    </Screen>
  );
};

export default index;
