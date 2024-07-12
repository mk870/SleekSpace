import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

import { INoPropsReactComponent } from "@/src/GlobalTypes/Types";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { dark, light, primary } from "@/src/Theme/Colors";
import MediaModal from "@/src/Components/Modals/MediaModal";

const Avatar: INoPropsReactComponent = () => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const theme = useAppSelector((state) => state.theme.value);
  const { avatar } = useAppSelector((state) => state.user.value);
  return (
    <View style={styles.container}>
      <Image
        source={avatar ? { uri: avatar } : require("./Images/emptyProfile.jpg")}
        style={styles.image}
      />
      <TouchableOpacity
        style={[styles.cameraIcon,{backgroundColor:theme==="light"?light.darkGray:dark.darkGray}]}
        onPress={() => setOpenEditModal(true)}
      >
        <Feather name="camera" size={24} color={primary} />
      </TouchableOpacity>
      <MediaModal isModalVisible={openEditModal} handleCancel={()=>setOpenEditModal(false)} type="profile-Photo"/>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    height: 140,
    width: 140,
    borderRadius: 70,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
  },
  cameraIcon: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    width:40,
    height:40,
    borderRadius:20
  },
});
