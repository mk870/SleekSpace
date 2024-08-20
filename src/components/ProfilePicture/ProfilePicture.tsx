import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { useAppSelector } from "@/src/Redux/Hooks/Config";
import { primary, pureWhite } from "@/src/Theme/Colors";
import MediaModal from "@/src/Components/Modals/MediaModal/MediaModal";

const ProfilePicture: React.FC<{
  uri: string;
  setImage?: React.Dispatch<React.SetStateAction<string>>;
  hideCameraOptions?: boolean;
  size?: "large" | "small";
}> = ({ uri, setImage, hideCameraOptions, size }) => {
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const theme = useAppSelector((state) => state.theme.value);
  return (
    <View style={styles.container}>
      <Image
        source={uri ? { uri: uri } : require("./Images/emptyProfile.jpg")}
        style={[
          styles.image,
          {
            height: size === "large" ? 200 : 140,
            width: size === "large" ? 200 : 140,
            borderRadius: size === "large" ? 100 : 70,
          },
        ]}
      />
      {!hideCameraOptions && (
        <TouchableOpacity
          style={[
            styles.cameraIcon,
            {
              backgroundColor: primary,
              bottom: size === "large" ? 10 : 0,
            },
          ]}
          onPress={() => setOpenEditModal(true)}
        >
          <Feather name="camera" size={24} color={pureWhite} />
        </TouchableOpacity>
      )}
      {!hideCameraOptions && <MediaModal
        isModalVisible={openEditModal}
        handleCancel={() => setOpenEditModal(false)}
        type="profile-Photo"
        setImage={setImage}
      />}
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
