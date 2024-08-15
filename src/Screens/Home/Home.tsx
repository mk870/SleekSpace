import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { StatusBar } from "expo-status-bar";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import ServerError from "@/src/Components/Modals/MessageModal";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";
import { firebaseApp } from "@/src/Firebase/config";
import { locationIQToken } from "@/src/Utils/Constants";

type Props = {};

const Home = (props: Props) => {
  const theme = useAppSelector((state) => state.theme.value);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  return (
    <Screen>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ThemedText type="regular" >Home</ThemedText>
      <CustomButton title="show modal" onPressFunc={()=>setIsModalVisible(true)}/>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
