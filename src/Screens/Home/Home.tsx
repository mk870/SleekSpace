import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "@/src/Components/ScreenWrapper/Screen";
import ThemedText from "@/src/Components/ThemedText/ThemedText";
import { StatusBar } from "expo-status-bar";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import ServerError from "@/src/Components/Modals/MessageModal";
import CustomButton from "@/src/Components/Buttons/Custom/CustomButton";

type Props = {};

const Home = (props: Props) => {
  const theme = useAppSelector((state) => state.theme.value);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(true);
  return (
    <Screen>
      <StatusBar style={theme === "light" ? "dark" : "light"} />
      <ThemedText type="regular" >Home</ThemedText>
      <CustomButton title="show modal" onPressFunc={()=>setIsModalVisible(true)}/>
      <ServerError
        isModalVisible={isModalVisible}
        handleCancel={() => {
          setIsModalVisible(false);
        }}
        header="Account Created"
        type="success"
        message="something went wrong hejh4jh24hnl4k2k4  4hkgh4hg4uhuhgu 34hjh4jb4jhjjjjjjjjjjj uh2uh4uh44yug4ygy4jhfbhb4hbh4bhb4hbg4hbgh4bg"
      />
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({});
