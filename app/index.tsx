import { useColorScheme } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { jwtDecode, JwtPayload } from "jwt-decode";

import { getSecureValue } from "@/src/Utils/Funcs";
import { expoSecureValueKeyNames } from "@/src/Utils/Constants";
import { useAppDispatch, useAppSelector } from "@/src/Redux/Hooks/Config";
import { updateAccessToken } from "@/src/Redux/Slices/AccessTokenSlice/AccessToken";
import ScreenSpinner from "@/src/Components/Spinners/ScreenSpinner";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import { switchTheme } from "@/src/Redux/Slices/Theme/Theme";

const index = () => {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state)=>state.theme.value)
  useLayoutEffect(() => {
    getSecureValue(expoSecureValueKeyNames.theme)
    .then((value: string | null) => {
      if(value){
        dispatch(switchTheme(value))
      }else{
        dispatch(switchTheme(colorScheme))
      }
    })
    .catch((e)=>{
      console.log("theme",e)
    })
  }, [])
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
      <StatusBar style={theme === "light"?"light" : "dark"} />
      <ScreenSpinner />
    </Screen>
  );
};

export default index;
