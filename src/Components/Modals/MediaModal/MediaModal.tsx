import { Modal, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { useCameraPermissions } from "expo-camera";

import { IVoidFunc } from "@/src/GlobalTypes/Types";
import { useAppSelector } from "@/src/Redux/Hooks/Config";
import GrantedPermissionView from "./Components/GrantedPermissionView";
import DeniedPermissionView from "./Components/DeniedPermissionView";

type Props = {
  handleCancel: IVoidFunc;
  isModalVisible: boolean;
  type: "profile-Photo" | "property-PhotoOrVideo";
  setImage?: React.Dispatch<React.SetStateAction<string>>;
  setImageBase64?: React.Dispatch<React.SetStateAction<string>>;
};

const MediaModal: React.FC<Props> = ({
  handleCancel,
  isModalVisible,
  type,
  setImage,
  setImageBase64
}) => {
  const [permission, requestPermission] = useCameraPermissions();
  const theme = useAppSelector((state) => state.theme.value);

  useEffect(() => {
    requestPermission();
  }, []);

  const openGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        type === "profile-Photo"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });
    if (!result.canceled && setImage && setImageBase64) {
      setImage(result.assets[0].uri);
      setImageBase64(result.assets[0].base64 as string)
    }
  };

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled && setImage) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <Modal
      visible={isModalVisible}
      onRequestClose={handleCancel}
      transparent
      animationType="slide"
    >
      <View
        onTouchEnd={handleCancel}
        style={[
          styles.container,
          {
            backgroundColor: theme === "light" ? "#000000b3" : "#1b1b1cb3",
          },
        ]}
      >
        {permission?.status === ImagePicker.PermissionStatus.GRANTED ? (
          <GrantedPermissionView
            openCamera={openCamera}
            openGallery={openGallery}
            type={type}
          />
        ) : (
          <DeniedPermissionView handleCancel={handleCancel} />
        )}
      </View>
    </Modal>
  );
};

export default MediaModal;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
