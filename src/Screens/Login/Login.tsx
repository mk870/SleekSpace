import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { family, xlarge } from "@/src/Theme/Font";
import { useRouter } from "expo-router";

type Props = {};

const Login = (props: Props) => {
  const router = useRouter();
  return (
    <View>
      <Text style={{ fontSize: xlarge, fontFamily: family }}>Login</Text>
      <TouchableOpacity onPress={() => router.push("/home")}>
        <Text>go home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
