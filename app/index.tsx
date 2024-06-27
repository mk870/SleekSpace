import { StyleSheet, Text, useColorScheme, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect } from "expo-router";

type Props = {};

const index = (props: Props) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
      <Redirect href={"/login"} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
